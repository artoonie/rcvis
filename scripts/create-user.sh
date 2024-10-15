#!/bin/bash
# Create or update a local server user using credentials from .env file

# Source the .env file to get the environment variables
source .env

# Activate the virtual environment
source venv/bin/activate

# Run the Django shell to create or update the user
python manage.py shell <<EOF
from django.contrib.auth.models import User

# Get the username and password from environment variables
username = '$OFFLINE_USERNAME'
password = '$OFFLINE_PASSWORD'

# Check if the user already exists
user, created = User.objects.get_or_create(username=username)
if created:
    user.set_password(password)
    user.email = username
    user.save()
    print(f"User {username} created successfully.")
else:
    user.set_password(password)
    user.save()
    print(f"User {username} password updated successfully.")
EOF