"""
Gunicorn configuration. Gunicorn auto-loads this file from the repo root, so
the Procfile stays a plain `web: gunicorn rcvis.wsgi`.

Memory background (election night, Nov 2026): the web dyno ratchets up to its
1GB quota because long-lived Python processes keep their high-water-mark RSS,
and every web upload spawns persistent title-image pool workers (see
visualizer/executor.py) plus a transient headless Chrome. Fewer, recycled
workers keep the dyno under quota without manual restarts.
"""

import os

# Heroku's buildpack would default this to 4 on a Standard-2X via
# WEB_CONCURRENCY, which leaves no headroom for the title-image pool workers
# and Chrome. 3 workers fit comfortably; override without a deploy via
# `heroku config:set GUNICORN_WORKERS=...`.
workers = int(os.environ.get('GUNICORN_WORKERS', '3'))

# Recycle each worker after ~500 requests (jittered so they don't all restart
# at once). This resets the worker's memory high-water mark and shuts down its
# title-image pool processes, so memory saws instead of ratcheting all day.
max_requests = 500
max_requests_jitter = 50
