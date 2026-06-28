#!/usr/bin/env bash
#
# Daily lead-generation job for raoul.studio.
#
#   1. Runs a headless Claude Code agent that researches the web for good-fit
#      potential clients in the Netherlands (based on the portfolio) and drafts
#      one cold email per lead.
#   2. Drafts are written as markdown into scripts/daily-leads/drafts/<DATE>/
#      for Raoul to review and send BY HAND.
#   3. A ledger (leads-ledger.csv) records every company contacted so the agent
#      never pitches the same one twice.
#
# These drafts are PRIVATE. This job does NOT commit, push, or publish anything.
# Designed to be run from cron. Logs to scripts/daily-leads/run.log.

set -uo pipefail

# --- environment (cron has a minimal PATH/HOME) ---------------------------
export HOME="/home/deploy"
export PATH="/home/deploy/.nvm/versions/node/v20.20.0/bin:/home/deploy/.local/bin:/usr/local/bin:/usr/bin:/bin"
# Optional: export ANTHROPIC_API_KEY="sk-ant-..." instead of the stored login.

DEV_DIR="/home/deploy/dev.raoul.studio"
SELF_DIR="$DEV_DIR/scripts/daily-leads"
MODEL="claude-sonnet-4-6"
COUNT=3

DATE="$(date +%F)"
DRAFTS_DIR="$SELF_DIR/drafts/$DATE"
LEDGER="$SELF_DIR/leads-ledger.json"

log() { echo "[$(date '+%F %T')] $*"; }

cd "$DEV_DIR" || { log "FATAL: cannot cd to $DEV_DIR"; exit 1; }

# Idempotent: skip if today's drafts already exist (safe to re-run).
if ls "$DRAFTS_DIR/"*.md >/dev/null 2>&1; then
  log "Leads for $DATE already drafted ($DRAFTS_DIR) — nothing to do."
  exit 0
fi
mkdir -p "$DRAFTS_DIR"

# --- build the prompt with today's date + paths injected ------------------
PROMPT="$(sed \
  -e "s|{{DATE}}|$DATE|g" \
  -e "s|{{COUNT}}|$COUNT|g" \
  -e "s|{{DRAFTS_DIR}}|$DRAFTS_DIR|g" \
  -e "s|{{LEDGER}}|$LEDGER|g" \
  "$SELF_DIR/prompt.md")"

log "Running lead scout for $DATE (target $COUNT leads)…"
claude -p "$PROMPT" \
  --model "$MODEL" \
  --permission-mode bypassPermissions \
  --allowedTools "WebSearch,WebFetch,Read,Write" \
  > "$SELF_DIR/last-agent.log" 2>&1
log "Agent finished (exit $?). Transcript: $SELF_DIR/last-agent.log"

# --- report what was produced ---------------------------------------------
COUNT_MADE="$(ls -1 "$DRAFTS_DIR/"*.md 2>/dev/null | wc -l | tr -d ' ')"
if [ "$COUNT_MADE" = "0" ]; then
  log "WARN: agent produced no draft emails for $DATE. Check $SELF_DIR/last-agent.log."
  rmdir "$DRAFTS_DIR" 2>/dev/null || true
  exit 1
fi
log "Done. Drafted $COUNT_MADE lead email(s) in $DRAFTS_DIR (review and send by hand)."
