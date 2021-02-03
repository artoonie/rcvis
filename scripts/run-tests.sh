#!/bin/bash
set -e

# Start tunnel, make sure its killed on exit (success or failure)
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -i sc-proxy-tunnel-$HEROKU_TEST_RUN_ID &
SC_PID=$!
trap "kill $SC_PID" EXIT

# Run tests
python3 manage.py compress
python3 manage.py test
bash <(curl -s https://codecov.io/bash) >/dev/null

# Management script
python3 manage.py migrate
python3 manage.py testAllUploadsWork 1

# Code quality
./scripts/test-code-quality.sh
