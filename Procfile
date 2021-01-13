release: python3 manage.py migrate
web: gunicorn rcvis.wsgi
moviescaling: celery -A rcvis -Q launch_big_dynos worker --loglevel info
