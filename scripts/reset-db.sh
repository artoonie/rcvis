#!/bin/bash
# Reset the SQLite database and re-run all migrations.
# Use after switching branches with incompatible migration history.
set -e

source venv/bin/activate
source .env

rm -f db.sqlite3
python manage.py migrate

# Create API-enabled admin user (matches docker-entrypoint.sh)
python manage.py shell -c "
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='skaphan').exists():
    user = User.objects.create_superuser('skaphan', 'sjk@kaphan.org', 'rcvisacc0unt')
    user.userprofile.canUseApi = True
    user.userprofile.save()
    print('Created API user skaphan with API access')
else:
    print('API user skaphan already exists')
"

echo "Database reset complete."
