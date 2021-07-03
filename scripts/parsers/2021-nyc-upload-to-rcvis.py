"""
After running 2021-nyc-parse.py, run this file to upload and/or modify the data as needed
"""
import json
import os
import requests

def getUploadsData():
    if not os.path.exists('uploads.json'):
        return {}

    with open('uploads.json', 'r') as f:
        data = json.loads(f.read())
    return data

def has_uploaded_id(filepath):
    data = getUploadsData()
    return filepath in data

def set_uploaded_id(filepath, uploadedId):
    data = getUploadsData()
    assert filepath not in data
    data[filepath] = uploadedId
    if not os.path.exists('uploads.json'):
        print("creating cache file to prevent duplicate uploads")

    with open('uploads.json', 'w') as f:
        json.dump(data, f)

apiKey = os.environ['RCVIS_API_KEY']

headers = {
    "Authorization": f"Token {apiKey}"
}

def postAll():
    url = 'https://rcvis.com/api/visualizations/'
    for filename in os.listdir('outdir'):
        if '024306' in filename:
            # Skip the mayor - it's already up
            continue
        filepath = f'outdir/{filename}'
        print(f"Looking at {filepath}")

        with open(filepath, 'rb') as jsonFile:
            data = json.loads(jsonFile.read())
        if len(data['results']) == 1:
            print(f"Ignoring single-round file {filepath}")
            continue

        with open(filepath, 'rb') as jsonFile:
            if has_uploaded_id(filepath):
                print(f"Ignoring already-uploaded file {filepath}. Did you want to patch?")
                continue

            files = {'jsonFile': jsonFile}

            response = requests.post(url, files=files, headers=headers)
            assert response.status_code == 201
            responseJson = response.json()
            uploadedId = responseJson['id']
            set_uploaded_id(filepath, uploadedId)

def patchAll():
    data = getUploadsData()
    for filepath, uploadedId in data.items():
        filename = filepath[len('outdir/'):-len('.json')]
        source = f'https://web.enrboenyc.us/rcv/{filename}_1.html'
        url = f'https://rcvis.com/api/bp/{uploadedId}/'
        response = requests.patch(url, headers=headers, data={'dataSourceURL': source})
        print(url, response.json())
        assert response.status_code == 200
        print(filename, uploadedId)

# Uncomment to upload all files to RCVis
# postAll()

# Uncomment to patch files with whatever custom patch you wanna create
# patchAll()
