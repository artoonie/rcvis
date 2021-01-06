#!/bin/bash
set +e  # want to ensure we get to the line which kills saucelabs, so do not quit early

# Start tunnel
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -i sc-proxy-tunnel-$HEROKU_TEST_RUN_ID &

# First test code quality - giving time for saucelabs to establish tunnel
./scripts/test_code_quality.sh

# Run tests
python3 manage.py compress
python3 manage.py test
bash <(curl -s https://codecov.io/bash)

# Kill saucelabs
kill %
