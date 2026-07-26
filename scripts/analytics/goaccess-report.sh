#!/usr/bin/env bash
#
# Regenerate the raoul.studio server-log report with GoAccess.
# Reads the *dedicated* raoul.studio nginx log (set up by setup-goaccess.sh),
# so it only ever shows raoul.studio traffic — every request, including the
# non-JS bots that never reach the /api/track beacon.
#
# Run as root (nginx logs are root/adm):  sudo bash goaccess-report.sh
# It is also installed as a 15-minute cron by setup-goaccess.sh.
set -euo pipefail

BASE=/var/log/nginx/raoul.studio.access.log
OUT=/var/www/raoul-stats/index.html
OUTJSON=/var/www/raoul-stats/report.json  # machine-readable copy for the /admin dashboard
GEOIP=/var/lib/GeoIP/GeoLite2-City.mmdb   # optional; enables the country map
TMP="$(mktemp)"
trap 'rm -f "$TMP"' EXIT

# Concatenate rotations (oldest first) + the live log, so the report spans the
# full retained window. Only raoul.studio's own log files match this glob — the
# old shared access.log.*.gz have a different name and are correctly excluded.
{
  for g in $(ls -1tr "$BASE".*.gz 2>/dev/null || true); do zcat "$g"; done
  [ -f "$BASE.1" ] && cat "$BASE.1"
  [ -f "$BASE" ]   && cat "$BASE"
} > "$TMP" 2>/dev/null || true

mkdir -p "$(dirname "$OUT")"

if [ -s "$TMP" ]; then
  GEO_ARG=()
  [ -f "$GEOIP" ] && GEO_ARG=(--geoip-database "$GEOIP")
  # One pass emits both the human HTML report (/_stats/) and a JSON copy the
  # /admin dashboard reads to show the same accurate numbers in its own UI.
  # --no-query-string strips ?query from request URLs: it both tidies the pages
  # list and, importantly, keeps the /admin dashboard's ?key=<token> out of the
  # report (the URL is otherwise logged verbatim).
  goaccess "$TMP" -o "$OUT" -o "$OUTJSON" \
    --log-format=COMBINED \
    --html-report-title="raoul.studio — server log" \
    --tz=Europe/Amsterdam \
    --anonymize-ip \
    --no-query-string \
    "${GEO_ARG[@]}"
  chown www-data:www-data "$OUT" "$OUTJSON" 2>/dev/null || true
  chmod 644 "$OUT" "$OUTJSON" 2>/dev/null || true
else
  cat > "$OUT" <<'HTML'
<!doctype html><meta charset="utf-8">
<body style="font-family:system-ui,sans-serif;max-width:520px;margin:15vh auto;text-align:center;color:#333;line-height:1.6">
<h1>raoul.studio — server log</h1>
<p>No requests captured yet. This report fills in within ~15 minutes of the
first visit after setup (the dedicated access log starts empty).</p>
</body>
HTML
  printf '{"general":{"total_requests":0}}\n' > "$OUTJSON"
  chmod 644 "$OUTJSON" 2>/dev/null || true
fi
