release: python3 manage.py migrate
web: gunicorn rcvis.wsgi
movie: celery -A rcvis worker --loglevel info
