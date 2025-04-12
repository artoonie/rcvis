#!/bin/bash
set -e

RUN="coverage run --append ./manage.py"

$RUN compress

if [ -z "$CI_NODE_TOTAL" ]; then
  # If running locally, just specify --parallel

  # Code quality first - fail fast
  ./scripts/test-code-quality.sh

  $RUN test --parallel 4
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
    $RUN test visualizer.tests.testLiveBrowserWithHead
  elif [ "$CI_NODE_INDEX" -eq 1 ]; then
    $RUN test movie \
              accounts \
              scraper \
              electionpage \
              visualizer.tests.testLiveBrowserHeadless
  elif [ "$CI_NODE_INDEX" -eq 2 ]; then
    ./scripts/test-code-quality.sh

    echo "Starting tests"
    $RUN test visualizer.tests.testBallotpediaRestApi\
              visualizer.tests.testDataTables\
              visualizer.tests.testDataTablesRCTabFormat\
              visualizer.tests.testDataTablesHeadlessBrowser\
              visualizer.tests.testFaq\
              visualizer.tests.testModelDeletion\
              visualizer.tests.testRawData\
              visualizer.tests.testRestApi\
              visualizer.tests.testRestApiExampleCode\
              visualizer.tests.testSidecar\
              visualizer.tests.testSimple
  else
    # Should never happen
    exit -1
  fi
else
  echo "Test runner only supports 3 nodes. You have provided $CI_NODE_TOTAL."
  exit -1
fi

bash <(curl -s https://codecov.io/bash) >/dev/null
