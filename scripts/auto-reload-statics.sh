 #!/bin/bash

# Source the .env file to get the environment variables
source .env

# Activate the virtual environment
source venv/bin/activate

watchfiles --ignore-paths="static/CACHE/" "sh -c 'python manage.py collectstatic --no-input' ; sh -c 'python manage.py clearCache' ; sh -c 'python manage.py compress'" static
