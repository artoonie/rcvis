"""
This file shows an example of how to use the REST API.
It is tested to ensure that the example code works.

If you are getting started using the API, we recommend you start by referencing this file
or the corresponding shell script, ./scripts/api-curl-demo.sh.
"""

import subprocess
import requests

from django.contrib.staticfiles.testing import StaticLiveServerTestCase

from common.testUtils import TestHelpers
from visualizer.tests import filenames

TestHelpers.silence_logging_spam()


class RestAPIExampleCode(StaticLiveServerTestCase):
    """ Example code for the REST API """

    def setUp(self):
        TestHelpers.create_non_admin_api_user()
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
            "username": "notadmin",
            "password": "password"
        }

        # Make a POST request to the endpoint
        response = requests.post(url, json=data, timeout=3)

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
            response = requests.post(url, files=files, headers=headers, timeout=3)

        # Read the response as a JSON
        responseJson = response.json()

        # The response has information needed to embed it.
        # Use the slug to construct embeddable URLs.
        self.assertEqual(responseJson['slug'], 'favorite-ice-cream-flavors')

        # You can also grab a direct link to RCVis
        assert responseJson['visualizeUrl'].endswith('/v/favorite-ice-cream-flavors')

        # If you want to embed it, you can grab several embedding URLs too
        assert responseJson['embedUrl'].endswith('/vo/favorite-ice-cream-flavors/bar')
        assert responseJson['embedSankeyUrl'].endswith('sankey')
        assert responseJson['embedTableUrl'].endswith('table')

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
        # Note: make sure content-type=application/json - this may not always be the default.
        # It is particularly required when using isPrimary, for reasons unbeknownst to most.
        data = {'dataSourceURL': 'https://www.example.com/data-source',
                'areResultsCertified': False,
                'isPrimary': False}

        # Create the data by opening the results summary JSON file.
        with open(filenames.THREE_ROUND, 'rb') as summaryFile:
            with open(filenames.THREE_ROUND_SIDECAR, 'rb') as sidecarFile:
                files = {'resultsSummaryFile': summaryFile,
                         'candidateSidecarFile': sidecarFile}

                # POST the data to create a visualization
                response = requests.post(url, files=files, data=data, headers=headers, timeout=3)

        # Read the response as a JSON
        responseJson = response.json()

        # The response has information needed to embed it.
        # Use the slug to construct embeddable URLs.
        self.assertEqual(responseJson['slug'], 'favorite-ice-cream-flavors')

        # You can also grab a direct link to RCVis
        assert responseJson['visualizeUrl'].endswith('/v/favorite-ice-cream-flavors')

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
        # Note: the trailing slash is mandatory. Without it, it will fail silently.
        url = self.live_server_url + "/api/bp/" + str(visId) + "/"

        # API key should only be created as needed, and reused and kept secure
        apiKey = self.get_api_key()

        # The headers use the API key
        headers = {
            "Authorization": f"Token {apiKey}"
        }

        # Modify the data with a PATCH.
        # PUT is also supported, but not shown here.
        differentUrl = 'https://www.example.com/a/different/url'
        data = {'dataSourceURL': differentUrl}

        # PATCH to update
        response = requests.patch(url, data=data, headers=headers, timeout=3)

        # Verify the change succeeded
        self.assertEqual(response.json()['slug'], 'favorite-ice-cream-flavors')
        self.assertEqual(response.json()['id'], visId)
        self.assertEqual(response.json()['dataSourceURL'], differentUrl)

    def test_with_curl(self):
        """
        Example code:
        Using curl instead of python. See the example shell script, which is tested here.
        """

        proc = subprocess.Popen([
            './scripts/api-curl-demo.sh',
            self.live_server_url,
            filenames.THREE_ROUND,
            "notadmin",
            "password"
        ],
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        output = proc.stdout.readlines()
        self.assertIn(b'Visualization created with slug: favorite-ice-cream-flavors\n', output)
