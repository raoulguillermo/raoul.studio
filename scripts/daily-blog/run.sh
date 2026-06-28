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
# nvm node first (used for JSON validation), then claude, then system bins.
export PATH="/home/deploy/.nvm/versions/node/v20.20.0/bin:/home/deploy/.local/bin:/usr/local/bin:/usr/bin:/bin"
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

# --- run the agent, validate, retry on bad/missing/invalid output ----------
# The agent occasionally emits non-parseable JSON (markdown fences, a stray char
# in a translation). Rather than delete-and-give-up, retry a few times and keep
# any invalid file in ./invalid/ for inspection.
QUARANTINE="$SELF_DIR/invalid"
MAX_TRIES=3
NEW_FILE=""
for try in $(seq 1 "$MAX_TRIES"); do
  log "Running agent for $DATE (attempt $try/$MAX_TRIES)…"
  claude -p "$PROMPT" \
    --model "$MODEL" \
    --permission-mode bypassPermissions \
    --allowedTools "WebSearch,WebFetch,Read,Write" \
    > "$SELF_DIR/last-agent.log" 2>&1
  log "Agent finished (exit $?). Transcript: $SELF_DIR/last-agent.log"

  CANDIDATE="$(ls -1 "$POSTS_DIR/$DATE-"*.json 2>/dev/null | head -1)"
  if [ -z "${CANDIDATE:-}" ]; then
    log "Attempt $try: agent produced no post for $DATE."
    continue
  fi

  PARSE_ERR="$(node -e "JSON.parse(require('fs').readFileSync(process.argv[1],'utf8'))" "$CANDIDATE" 2>&1)"
  if [ $? -eq 0 ]; then
    NEW_FILE="$CANDIDATE"
    log "Validated $NEW_FILE"
    break
  fi

  # Invalid JSON: quarantine (don't delete) so the exact failure can be inspected.
  mkdir -p "$QUARANTINE"
  mv "$CANDIDATE" "$QUARANTINE/$(basename "$CANDIDATE").attempt$try" 2>/dev/null || rm -f "$CANDIDATE"
  log "Attempt $try: invalid JSON — quarantined to $QUARANTINE. Parser: ${PARSE_ERR}"
done

if [ -z "${NEW_FILE:-}" ]; then
  log "FAIL: no valid post for $DATE after $MAX_TRIES attempt(s). Aborting (nothing committed)."
  exit 1
fi

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
