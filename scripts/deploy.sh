#!/usr/bin/env bash
# Build into the build folder the live server is NOT using, then point the
# server at it and restart. The site keeps serving the old build throughout,
# so a deploy costs only the second the restart takes.
set -euo pipefail
cd "$(dirname "$0")/.."

current=$(cat .next-current 2>/dev/null || echo .next)
if [ "$current" = ".next-a" ]; then target=.next-b; else target=.next-a; fi

rm -rf "$target"
NEXT_DIST_DIR="$target" npm run build
echo "$target" > .next-current
pm2 restart raoul.studio >/dev/null

for _ in $(seq 1 30); do
  if curl -sf -o /dev/null http://localhost:3000/; then
    echo "Deployed $target (previous: $current)"
    exit 0
  fi
  sleep 1
done
echo "Server did not come back up on $target" >&2
exit 1
