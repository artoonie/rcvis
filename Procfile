release: python3 manage.py migrate
web: gunicorn rcvis.wsgi
movie: supervisord -c /etc/supervisor/supervisord.conf
