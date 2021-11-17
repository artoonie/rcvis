#!/bin/bash
# runserver, along with everything that goes along with it
set -e

source .env
source venv/bin/activate

memcached -m 30 || echo "Memcache already running" &

python3 manage.py compress
python3 manage.py runserver
