#!/bin/bash
set -e

$SUDOCMD ./scripts/fix-moviepy-on-ubuntu-1604.sh
# required for pycurl to install
$SUDOCMD apt-get -y install libgnutls28-dev imagemagick ffmpeg
