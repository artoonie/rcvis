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
    ./sc run --region us-west \
             --proxy-localhost allow \
             --username $SAUCE_USERNAME \
             --access-key $SAUCE_ACCESS_KEY \
             --api-address :8032 \
             --tunnel-name sc-proxy-tunnel-$HEROKU_TEST_RUN_ID &
    SC_PID=$!
    trap "kill $SC_PID" EXIT

    # Wait for saucelabs to be ready
    until [ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:8032/readyz)" == "200" ]
    do
        sleep 1
    done
    echo "Sauce Connect Proxy is ready"

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
