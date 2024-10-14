#!/bin/bash

# Install jq package (if needed)
brew install jq

# Source the .env file
source .env

# Activate the virtual environment
source venv/bin/activate

# Clear cache and compress static files
python3 manage.py clearCache
python3 manage.py compress

# Start the server in the background
python3 manage.py runserver &

# Get the API token
response=$(curl -X POST https://www.rcvis.com/api/auth/get-token -d username=$USERNAME -d password=$PASSWORD)
token=$(echo $response | jq -r '.token')

# Validate the token
if [[ -n "$token" && ${#token} -eq 40 ]]; then
    echo "API: $token"
    # Update the .env file with the API key
    sed -i '' "s|export API_KEY=.*|export API_KEY='$token'|" .env
else
    echo "Invalid token" >&2
    exit 1
fi


