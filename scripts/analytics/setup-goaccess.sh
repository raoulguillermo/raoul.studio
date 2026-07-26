#!/usr/bin/env bash
#
# One-time setup for GoAccess server-log analytics on raoul.studio (Layer 1).
#
#   sudo bash scripts/analytics/setup-goaccess.sh
#
# What it does (idempotent — safe to re-run):
#   1. Installs goaccess.
#   2. Adds a DEDICATED access log to the raoul.studio nginx vhost, so its
#      traffic is separated from all the other sites sharing access.log.
#   3. Serves the report at https://raoul.studio/_stats/ behind a login
#      (HTTP basic auth) you choose during setup.
#   4. Generates the first report and installs a 15-minute refresh cron.
#
# Every nginx change is preceded by a backup and validated with `nginx -t`;
# if validation fails the original config is restored automatically.
set -euo pipefail

VHOST=/etc/nginx/sites-available/raoul.studio
DEDICATED=/var/log/nginx/raoul.studio.access.log
WEBROOT=/var/www/raoul-stats
HTPASSWD=/etc/nginx/.raoul-stats.htpasswd
REPORT_SH="$(cd "$(dirname "$0")" && pwd)/goaccess-report.sh"

if [ "$(id -u)" -ne 0 ]; then
  echo "Please run with sudo:  sudo bash $0" >&2
  exit 1
fi

echo "==> 1/5  Installing goaccess…"
if ! command -v goaccess >/dev/null 2>&1; then
  apt-get update && apt-get install -y goaccess
fi
echo "    goaccess $(goaccess --version | head -1 | awk '{print $NF}')"

echo "==> 2/5  Dedicated access log on the raoul.studio vhost…"
if grep -q "raoul.studio.access.log" "$VHOST"; then
  echo "    already configured, skipping."
else
  BK="$VHOST.bak.$(date +%s)"
  cp "$VHOST" "$BK"
  TMP="$(mktemp)"
  # Insert the access_log + the protected /_stats/ location right after the
  # FIRST server_name line (that's the 443 server block).
  awk '
    !done && /server_name raoul.studio www.raoul.studio;/ {
      print
      print "    access_log /var/log/nginx/raoul.studio.access.log;"
      print "    location /_stats/ {"
      print "        alias /var/www/raoul-stats/;"
      print "        index index.html;"
      print "        auth_basic \"raoul.studio stats\";"
      print "        auth_basic_user_file /etc/nginx/.raoul-stats.htpasswd;"
      print "    }"
      done=1; next
    }
    { print }
  ' "$BK" > "$TMP"
  mv "$TMP" "$VHOST"
  if nginx -t 2>/dev/null; then
    systemctl reload nginx
    echo "    added + reloaded nginx."
  else
    echo "    !! nginx -t failed — restoring original config." >&2
    cp "$BK" "$VHOST"
    nginx -t
    exit 1
  fi
fi

echo "==> 3/5  Login for the stats page…"
mkdir -p "$WEBROOT"; chown www-data:www-data "$WEBROOT"
if [ -f "$HTPASSWD" ]; then
  echo "    login file already exists, keeping it."
else
  read -rp "    Choose a username for https://raoul.studio/_stats/ : " STATSUSER
  if command -v htpasswd >/dev/null 2>&1; then
    htpasswd -c "$HTPASSWD" "$STATSUSER"      # prompts for a password
  else
    # No apache2-utils installed — generate an APR1 (MD5) hash with openssl,
    # which nginx auth_basic accepts. The password is read without echo and
    # piped in, so it never shows up in the process list.
    read -rsp "    Choose a password: " STATSPASS; echo
    HASH="$(printf '%s' "$STATSPASS" | openssl passwd -apr1 -stdin)"
    printf '%s:%s\n' "$STATSUSER" "$HASH" > "$HTPASSWD"
    unset STATSPASS
  fi
  chown root:www-data "$HTPASSWD"; chmod 640 "$HTPASSWD"
fi

echo "==> 4/5  Generating the first report…"
bash "$REPORT_SH" || echo "    (no traffic captured yet — that's expected on first run)"

echo "==> 5/5  Installing the 15-minute refresh cron…"
cat > /etc/cron.d/raoul-goaccess <<CRON
# Regenerate the raoul.studio GoAccess report every 15 minutes.
*/15 * * * * root $REPORT_SH >/dev/null 2>&1
CRON
chmod 644 /etc/cron.d/raoul-goaccess

echo
echo "Done. Open  https://raoul.studio/_stats/  (log in with the account above)."
echo "It starts empty and fills in as raoul.studio gets traffic."
echo "Tip: for the country map, drop a GeoLite2-City.mmdb at /var/lib/GeoIP/ and re-run goaccess-report.sh."
