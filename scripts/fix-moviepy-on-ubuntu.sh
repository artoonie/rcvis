#!/bin/bash

searchterm='<policy domain=\"path\" rights=\"none\" pattern=\"\@\*\"[ ]*\/>'
replacewith="<!--Removed by fix-moviepy-on-ubuntu.sh: $searchterm-->"
sed -i "s/^[ ]*${searchterm}$/${replacewith}/g" /etc/ImageMagick-6/policy.xml
