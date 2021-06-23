"""
This file shows an example of how to use the REST API.
It is tested to ensure that the example code works.
"""

import requests

from django.contrib.auth import get_user_model
from django.contrib.staticfiles.testing import StaticLiveServerTestCase

from common.testUtils import TestHelpers
from visualizer.tests import filenames

TestHelpers.silence_logging_spam()


class RestAPIExampleCode(StaticLiveServerTestCase):
    """ Tests for the Ballotpedia REST API """

    def setUp(self):
        user = get_user_model().objects.create_user('demouser', 'notadmin@example.com', 'password')
        user.is_staff = False
        user.save()

        # Note: while you may create an account yourself, you must ask team@rcvis.com to give you
        # access to use the API.
        user.userprofile.canUseApi = True
        user.userprofile.save()

        TestHelpers.setup_host_mocks(self)

    def get_api_key(self):
        """
        Example code:
        How to obtain an API key.

        This is the first step, and needs to only be done once.
        Do not call this each time you use the API - even though that is what this test is doing.
        If your API key is exposed or needs to be cycled, you may hit this endpoint again.
        """

        # In our tests, we are not hitting the real server.
        # Your code will use https://www.rcvis.com as the live_server_url.
        url = self.live_server_url + "/api/auth/get-token"

        # Provide your username and password
        data = {
            "username": "demouser",
            "password": "password"
        }

        # Make a POST request to the endpoint
        response = requests.post(url, json=data)

        # Read the response as a JSON
        responseJson = response.json()

        # The API key is in the 'token' field of the JSON
        apiKey = responseJson['token']

        # It is a 40-character key
        self.assertEqual(len(apiKey), 40)

        # Save this and keep it secure
        return apiKey

    def test_create_visualization_basic(self):
        """
        Example code:
        Basic example, how to create a visualization.
        """

        # In our tests, we are not hitting the real server.
        # Your code will use https://www.rcvis.com as the live_server_url.
        url = self.live_server_url + "/api/visualizations/"

        # API key should only be created as needed, and reused and kept secure
        apiKey = self.get_api_key()

        # The headers use the API key
        headers = {
            "Authorization": f"Token {apiKey}"
        }

        # Create the data by opening the results summary JSON file.
        with open(filenames.THREE_ROUND, 'rb') as jsonFile:
            files = {'jsonFile': jsonFile}

            # POST the data to create a visualization
            response = requests.post(url, files=files, headers=headers)

        # Read the response as a JSON
        responseJson = response.json()

        # The response has information needed to embed it.
        # Use the slug to construct embeddable URLs.
        self.assertEqual(responseJson['slug'], 'medium-rcvis')

        # You can also grab a direct link to RCVis
        assert responseJson['visualizeUrl'].endswith('/v/medium-rcvis')

        # Or build an embeddable URL:
        # https://www.rcvis.com/v/{slug} for the basic embed
        # https://www.rcvis.com/vb/{slug} for a ballotpedia embed

    def test_create_visualization_ballotpedia(self):
        """
        Example code:
        Ballotpedia example, how to create a visualization with additional options
        """

        # In our tests, we are not hitting the real server.
        # Your code will use https://www.rcvis.com as the live_server_url.
        # Note: this endpoint is different than the one above.
        url = self.live_server_url + "/api/bp/"

        # API key should only be created as needed, and reused and kept secure
        apiKey = self.get_api_key()

        # The headers use the API key
        headers = {
            "Authorization": f"Token {apiKey}"
        }

        # This endpoint accepts non-file options.
        # While they are optional, we recommend you always supply them.
        data = {'dataSourceURL': 'https://www.example.com/data-source',
                'areResultsCertified': False,
                'isPrimary': False}

        # Create the data by opening the results summary JSON file.
        with open(filenames.THREE_ROUND, 'rb') as summaryFile:
            with open(filenames.THREE_ROUND_SIDECAR, 'rb') as sidecarFile:
                files = {'resultsSummaryFile': summaryFile,
                         'candidateSidecarFile': sidecarFile}

                # POST the data to create a visualization
                response = requests.post(url, files=files, data=data, headers=headers)

        # Read the response as a JSON
        responseJson = response.json()

        # The response has information needed to embed it.
        # Use the slug to construct embeddable URLs.
        self.assertEqual(responseJson['slug'], 'medium-rcvis')

        # You can also grab a direct link to RCVis
        assert responseJson['visualizeUrl'].endswith('/v/medium-rcvis')

        # Or build an embeddable URL:
        # https://www.rcvis.com/v/{slug} for the basic embed
        # https://www.rcvis.com/vb/{slug} for a ballotpedia embed

        # The ID can be used to modify the data, too
        self.assertGreaterEqual(responseJson['id'], 0)
        return responseJson['id']

    def test_update_visualization(self):
        """
        Example code:
        Use a PATCH to update the data. You can update data or files.
        """

        # Call the function above to create a visualization
        visId = self.test_create_visualization_ballotpedia()

        # In our tests, we are not hitting the real server.
        # Your code will use https://www.rcvis.com as the live_server_url.
        # To modify existing data, supply the visId
        url = self.live_server_url + "/api/bp/" + str(visId)

        # API key should only be created as needed, and reused and kept secure
        apiKey = self.get_api_key()

        # The headers use the API key
        headers = {
            "Authorization": f"Token {apiKey}"
        }

        # Modify the data with a PATCH.
        # PUT is also supported, but not shown here.
        data = {'dataSourceURL': 'https://www.example.com/a/different/url'}

        # POST the data to create a visualization
        response = requests.post(url, data=data, headers=headers)

        # The response is the same as when you created the data, sans any changes you just made
        self.assertEqual(response.json()['slug'], 'medium-rcvis')
        self.assertEqual(response.json()['id'], visId)
