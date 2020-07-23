#!/bin/bash
# Runs pylint

myExitCode=0

# Require 100% lint-free code
echo "Checking for pylint issues"
pylint movie visualizer rcvis  --ignore visualizer/migrations,movie/migrations
errorCode=$?
if [ $errorCode != 0 ]; then
    echo "These files must be perfectly linted"
    myExitCode=$((myExitCode+1))
fi

echo "Checking for autopep8 differences"
autopep8 --diff --exit-code --aggressive --aggressive -r --max-line-length 100 visualizer/ movie/
errorCode=$?
if [ $errorCode != 0 ]; then
    echo "You need to run autopep8:"
    echo "$> autopep8 --in-place --aggressive --aggressive -r --max-line-length 100 visualizer/ movie/"
    myExitCode=$((myExitCode+1))
fi

exit $myExitCode
