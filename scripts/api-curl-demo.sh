#!/bin/bash

# Get the base URL from CLI argument
if [ -z "$4" ]; then
    echo "Usage: $0 <BASE_URL> <JSON_FILE_PATH> <USERNAME> <PASSWORD>"
    exit 1
fi
BASE_URL="$1"
JSON_FILE_PATH="$2"
USERNAME="$3"
PASSWORD="$4"

# Function to obtain an API key
get_api_key() {
    echo "Obtaining API key..."
    
    # Make a POST request to get the API key
    RESPONSE=$(curl -s -X POST "$BASE_URL/api/auth/get-token" \
        -H "Content-Type: application/json" \
        -d "{\"username\": \"$USERNAME\", \"password\": \"$PASSWORD\"}")
    
    # Extract the token from the response
    API_KEY=$(echo "$RESPONSE" | jq -r '.token')
    
    if [ -z "$API_KEY" ] || [ "$API_KEY" == "null" ]; then
        echo "Failed to retrieve API key. Response: $RESPONSE"
        exit 1
    fi
    
    echo "API key obtained: $API_KEY"
}

# Function to create a visualization
create_visualization() {
    echo "Creating visualization..."
    
    RESPONSE=$(curl -s -X POST "$BASE_URL/api/visualizations/" \
        -H "Authorization: Token $API_KEY" \
        -F "jsonFile=@$JSON_FILE_PATH")
    
    SLUG=$(echo "$RESPONSE" | jq -r '.slug')
    VISUALIZE_URL=$(echo "$RESPONSE" | jq -r '.visualizeUrl')
    EMBED_URL=$(echo "$RESPONSE" | jq -r '.embedUrl')
    EMBED_SANKEY_URL=$(echo "$RESPONSE" | jq -r '.embedSankeyUrl')
    EMBED_TABLE_URL=$(echo "$RESPONSE" | jq -r '.embedTableUrl')
    
    if [ -z "$SLUG" ] || [ "$SLUG" == "null" ]; then
        echo "Failed to create visualization. Response: $RESPONSE"
        exit 1
    fi
    
    echo "Visualization created with slug: $SLUG"
    echo "View it here: $VISUALIZE_URL"
    echo "Embed options:"
    echo "  - Default: $EMBED_URL"
    echo "  - Sankey: $EMBED_SANKEY_URL"
    echo "  - Table: $EMBED_TABLE_URL"
}

# Run the functions
get_api_key
create_visualization
