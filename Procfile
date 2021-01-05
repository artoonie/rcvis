web: python3 manage.py makemigrations && \
     python3 manage.py migrate &&\
     python3 manage.py compress && \
     python3 manage.py runserver
movie: supervisord -c /etc/supervisor/supervisord.conf
