#!/bin/bash

# Install python deps in a virtualenv
virtualenv venv
source venv/bin/activate
pip3 install -r requirements.txt

# Install npm deps
npm i

# initialize .env
if [ -f .env ]; then
    echo ""
    echo ".env file already exists."
    echo ""
else
    # Copy the template to .env
    cp infra/.env.template .env
    echo ""
    echo ".env file has been initialized from the template."
    echo "Please modify the .env file to include the necessary values."
    echo ""
fi

# Run migrations to set up db
source .env
python3 manage.py migrate
