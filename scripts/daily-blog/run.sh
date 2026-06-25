#!/usr/bin/env bash
#
# Daily blog job for raoul.studio.
#
#   1. Runs a headless Claude Code agent that researches AI/tech news and writes
#      one localized post JSON into src/content/blog/posts/.
#   2. Validates the produced file.
#   3. Commits + pushes from the dev checkout.
#   4. Pulls into the prod checkout so the post goes live (routes are
#      force-dynamic, so no rebuild/restart is needed for new post files).
#
# Designed to be run from cron. Logs to scripts/daily-blog/run.log.

set -uo pipefail

# --- environment (cron has a minimal PATH/HOME) ---------------------------
export HOME="/home/deploy"
export PATH="/home/deploy/.local/bin:/usr/local/bin:/usr/bin:/bin"
# If you prefer an API key over the stored login, export it here or in cron:
#   export ANTHROPIC_API_KEY="sk-ant-..."

DEV_DIR="/home/deploy/dev.raoul.studio"
PROD_DIR="/home/deploy/raoul.studio"
POSTS_REL="src/content/blog/posts"
MODEL="claude-sonnet-4-6"
SELF_DIR="$DEV_DIR/scripts/daily-blog"

DATE="$(date +%F)"
POSTS_DIR="$DEV_DIR/$POSTS_REL"

log() { echo "[$(date '+%F %T')] $*"; }

cd "$DEV_DIR" || { log "FATAL: cannot cd to $DEV_DIR"; exit 1; }

# Skip if today's post already exists (idempotent — safe to re-run).
if ls "$POSTS_DIR/$DATE-"*.json >/dev/null 2>&1; then
  log "Post for $DATE already exists — nothing to do."
  exit 0
fi

# --- build the prompt with today's date + target dir injected -------------
PROMPT="$(sed -e "s|{{DATE}}|$DATE|g" -e "s|{{POSTS_DIR}}|$POSTS_DIR|g" "$SELF_DIR/prompt.md")"

log "Running agent for $DATE…"
claude -p "$PROMPT" \
  --model "$MODEL" \
  --permission-mode bypassPermissions \
  --allowedTools "WebSearch,WebFetch,Read,Write" \
  > "$SELF_DIR/last-agent.log" 2>&1
log "Agent finished (exit $?). Transcript: $SELF_DIR/last-agent.log"

# --- locate + validate the produced file ----------------------------------
NEW_FILE="$(ls -1 "$POSTS_DIR/$DATE-"*.json 2>/dev/null | head -1)"
if [ -z "${NEW_FILE:-}" ]; then
  log "FAIL: agent produced no post for $DATE. Aborting (nothing committed)."
  exit 1
fi
if ! node -e "JSON.parse(require('fs').readFileSync(process.argv[1],'utf8'))" "$NEW_FILE" 2>/dev/null; then
  log "FAIL: $NEW_FILE is not valid JSON. Removing it and aborting."
  rm -f "$NEW_FILE"
  exit 1
fi
log "Validated $NEW_FILE"

# --- publish: commit + push from dev --------------------------------------
git add "$POSTS_REL" || true
if git diff --cached --quiet; then
  log "Nothing staged to commit. Aborting."
  exit 1
fi
git commit -m "blog: daily journal entry for $DATE" >/dev/null
if git push >/dev/null 2>&1; then
  log "Pushed to origin."
else
  log "WARN: git push failed (post is committed locally)."
fi

# --- deploy: pull into prod (force-dynamic routes -> no rebuild needed) ----
if [ -d "$PROD_DIR/.git" ]; then
  if git -C "$PROD_DIR" pull --ff-only >/dev/null 2>&1; then
    log "Prod updated ($PROD_DIR)."
  else
    log "WARN: prod pull failed — check $PROD_DIR manually."
  fi
else
  log "NOTE: $PROD_DIR is not a git checkout — skipped prod deploy."
fi

log "Done. Published $DATE."
