#!/usr/bin/env bash
#
# Weekly newsletter job for raoul.studio.
#
#   Compiles the last 7 days of blog posts into a branded HTML email, stores it
#   as a draft in MongoDB, and emails a preview (with an "Approve & send" link)
#   to the studio. Nothing is sent to subscribers until that link is clicked.
#
# Designed to run weekly from cron, e.g. (Mondays 08:00):
#   0 8 * * 1  /home/deploy/raoul.studio/scripts/weekly-newsletter/run.sh >> /home/deploy/raoul.studio/scripts/weekly-newsletter/run.log 2>&1

set -uo pipefail

export HOME="/home/deploy"
# nvm node first, then system bins (cron has a minimal PATH).
export PATH="/home/deploy/.nvm/versions/node/v20.20.0/bin:/usr/local/bin:/usr/bin:/bin"

PROD_DIR="/home/deploy/raoul.studio"

log() { echo "[$(date '+%F %T')] $*"; }

cd "$PROD_DIR" || { log "FATAL: cannot cd to $PROD_DIR"; exit 1; }

log "Building weekly newsletter…"
node scripts/weekly-newsletter/build-newsletter.mjs
log "Done (exit $?)."
