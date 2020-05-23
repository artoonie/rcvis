#!/bin/bash
# Runs pylint

myExitCode=0

# Require 100% lint-free code
pylint visualizer rcvis  --ignore visualizer/migrations
errorCode=$?
if [ $errorCode != 0 ]; then
    echo "These files must be perfectly linted"
    myExitCode=$((myExitCode+1))
fi

exit $myExitCode
