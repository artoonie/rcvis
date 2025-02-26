#!/bin/bash
# runserver, along with everything that goes along with it
set -e

# Source the .env file to get the environment variables
source .env

# Activate the virtual environment
source venv/bin/activate

# Check if the admin user with the email specified in .env exists
admin_exists=$(python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); print(User.objects.filter(email='$OFFLINE_ADMIN', is_superuser=True).exists())")

# Prompt the user to create the admin if not
if [[ "$admin_exists" = "False" && "$OFFLINE_MODE" = "True" ]]; then
    echo "Admin user with email $OFFLINE_ADMIN does not exist. Please create one."
    python manage.py createsuperuser --email $OFFLINE_ADMIN
else
    echo "Admin user with email $OFFLINE_ADMIN already exists."
fi

# Clear cache, compress and run the server
python3 manage.py clearCache
python3 manage.py compress
python3 manage.py runserver
