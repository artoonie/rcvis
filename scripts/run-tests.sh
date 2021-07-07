#!/bin/bash
set -e

python3 manage.py compress

if [ -z "$CI_NODE_TOTAL" ]; then
  # If running locally, just specify --parallel

  # Code quality first - fail fast
  ./scripts/test-code-quality.sh

  python3 manage.py test --parallel 4
elif [ "$CI_NODE_TOTAL" -eq 3 ]; then
  # If running on heroku, assign each node a portion of the test

  if [ "$CI_NODE_INDEX" -eq 0 ]; then
    # Start tunnel, make sure its killed on exit (success or failure)
    READY_FILENAME=saucelabs-is-now-ready.tmp.file
    ./sc -u $SAUCE_USERNAME \
         -k $SAUCE_ACCESS_KEY \
         -i sc-proxy-tunnel-$HEROKU_TEST_RUN_ID \
         -f $READY_FILENAME &
    SC_PID=$!
    trap "kill $SC_PID" EXIT

    # Wait for $READY_FILENAME to exist
    while [ ! -f $READY_FILENAME ]; do sleep 1; done
    echo "Readyfile found."

    # Run tests once saucelabs proxy is ready
    python3 manage.py test visualizer/tests/testLiveBrowserWithHead.py
  elif [ "$CI_NODE_INDEX" -eq 1 ]; then
    python3 manage.py test movie \
                           visualizer/tests/testLiveBrowserHeadless.py
  elif [ "$CI_NODE_INDEX" -eq 2 ]; then
    ./scripts/test-code-quality.sh

    echo "Starting tests"
    python3 manage.py test visualizer/tests/testBallotpediaRestApi.py\
                           visualizer/tests/testFaq.py\
                           visualizer/tests/testModelDeletion.py\
                           visualizer/tests/testRestApi.py\
                           visualizer/tests/testRestApiExampleCode.py\
                           visualizer/tests/testSidecar.py\
                           visualizer/tests/testSimple.py
  else
    # Should never happen
    exit -1
  fi
else
  echo "Test runner only supports 3 nodes. You have provided $CI_NODE_TOTAL."
  exit -1
fi

bash <(curl -s https://codecov.io/bash) >/dev/null
