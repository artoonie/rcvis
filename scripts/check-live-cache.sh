#!/bin/bash
# Checks that a visualization is served from cache on the live site, so that
# a burst of viewers never reaches the database. Run it after a deploy, or
# any time caching is in doubt.
#
# Usage:
#   scripts/check-live-cache.sh <slug> [origin-base-url]
#
#   <slug>            Slug of a public visualization, e.g. city-of-eastpointe-macomb-county-mi
#   [origin-base-url] Optional. The Heroku app URL, e.g. https://<app>.herokuapp.com,
#                     to check Django's own page cache behind Cloudflare.
#
# What is checked:
#   Edge:   a second request through Cloudflare must be cf-cache-status: HIT,
#           so the origin is not contacted at all.
#   Origin: the response must be storable by a shared cache (max-age, no
#           no-cache/no-store/private, no Vary: Cookie, no Set-Cookie), and a
#           second request must be served from Django's page cache. A page
#           cache hit returns the stored copy, so its Expires header is the
#           same as the first response; a miss would compute a new one.
#           Django 5.1+ also adds an Age header on page cache hits.
#
# The same guarantees are enforced in CI by
# visualizer/tests/testSimple.py::test_second_viewer_never_touches_the_database.

set -euo pipefail

slug="${1:?usage: $0 <slug> [origin-base-url]}"
origin="${2:-}"
edge="https://www.rcvis.com"
paths=("/v/$slug" "/ve/$slug" "/vb/$slug")

failures=0

header() {  # header <headers-file> <name>  -> value, lowercase, or empty
    grep -i "^$2:" "$1" | head -1 | cut -d: -f2- | tr -d '\r' | sed 's/^ *//' | tr '[:upper:]' '[:lower:]'
}

fail() { echo "  FAIL: $*"; failures=$((failures + 1)); }
pass() { echo "  ok:   $*"; }

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

echo "== Edge (Cloudflare): $edge"
for path in "${paths[@]}"; do
    echo "$path"
    curl -sS -o /dev/null -D "$tmp/h1" "$edge$path"
    curl -sS -o /dev/null -D "$tmp/h2" "$edge$path"
    status="$(head -1 "$tmp/h2" | awk '{print $2}')"
    cf="$(header "$tmp/h2" cf-cache-status)"
    if [ "$status" != "200" ]; then
        fail "status $status"
    elif [ "$cf" = "hit" ]; then
        pass "cf-cache-status HIT (browser max-age: $(header "$tmp/h2" cache-control))"
    else
        fail "second request was cf-cache-status '$cf', expected HIT"
    fi
done

if [ -n "$origin" ]; then
    echo "== Origin (Django page cache): $origin"
    for path in "${paths[@]}"; do
        echo "$path"
        curl -sS -o /dev/null -D "$tmp/h1" "$origin$path"
        sleep 2   # a cache miss would produce a later Expires than the first response
        curl -sS -o /dev/null -D "$tmp/h2" "$origin$path"

        status="$(head -1 "$tmp/h2" | awk '{print $2}')"
        [ "$status" = "200" ] && pass "status 200" || fail "status $status"

        cc="$(header "$tmp/h1" cache-control)"
        case "$cc" in
            *no-cache*|*no-store*|*private*) fail "Cache-Control '$cc' is not cacheable" ;;
            *max-age=*) pass "Cache-Control '$cc'" ;;
            *) fail "Cache-Control '$cc' has no max-age" ;;
        esac

        vary="$(header "$tmp/h1" vary)"
        case "$vary" in
            *cookie*) fail "Vary '$vary' splits the cache per viewer" ;;
            *) pass "Vary '${vary:-<none>}'" ;;
        esac

        if [ -n "$(header "$tmp/h1" set-cookie)" ]; then
            fail "response sets a cookie, Django will not cache it"
        else
            pass "no Set-Cookie"
        fi

        e1="$(header "$tmp/h1" expires)"; e2="$(header "$tmp/h2" expires)"
        age="$(header "$tmp/h2" age)"
        if [ -n "$e1" ] && [ "$e1" = "$e2" ]; then
            pass "second request served from page cache (Expires unchanged${age:+, Age $age})"
        else
            fail "second request recomputed the page (Expires '$e1' -> '$e2')"
        fi
    done
else
    echo "== Origin check skipped (pass the Heroku app URL as the second argument to run it)"
fi

echo
if [ "$failures" -eq 0 ]; then
    echo "All cache checks passed."
else
    echo "$failures cache check(s) failed."
    exit 1
fi
