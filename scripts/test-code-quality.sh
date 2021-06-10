#!/bin/bash
# Runs pylint

myExitCode=0

modules="accounts accounts/tests common movie rcvis visualizer visualizer/descriptors visualizer/tests"

# Require 100% lint-free code
echo "Checking for pylint issues"
export DJANGO_SETTINGS_MODULE="rcvis.settings" # needed by pylint_django
pylint $modules --load-plugins pylint_django --ignore visualizer/migrations,movie/migrations
errorCode=$?
if [ $errorCode != 0 ]; then
    echo "These files must be perfectly linted"
    myExitCode=$((myExitCode+1))
fi

echo "Checking for autopep8 differences"
autopep8 --diff --exit-code --aggressive --aggressive -r --max-line-length 100 $modules
errorCode=$?
if [ $errorCode != 0 ]; then
    echo "You need to run autopep8:"
    echo "$> autopep8 --in-place --aggressive --aggressive -r --max-line-length 100 $modules"
    myExitCode=$((myExitCode+1))
fi

exit $myExitCode
