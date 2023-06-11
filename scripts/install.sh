#!/bin/bash

# Install python deps in a virtualenv
virtualenv venv
source venv/bin/activate
pip3 install -r requirements.txt

# Install npm deps
npm i

# Run migrations to set up db
source .env
python3 manage.py migrate
