"""
Helper functions for unit and integration tests
"""

import logging
import json
from mock import patch
import tempfile

from selenium import webdriver
from visualizer.models import JsonConfig

FILENAME_MULTIWINNER = 'testData/macomb-multiwinner-surplus.json'

class TestHelpers():
    """ Helper function for various test classes below """
    @classmethod
    def generate_random_valid_json_of_size(cls, numBytes):
        """ Generates a valid but strange JSON of size num_bytes and returns the filename """
        filename = '/tmp/randomfile.json'
        data = {
            "config": {
                "contest": "Nothing",
                "date": "2020-07-12",
                "threshold": "1"
            },
            "results": [{
                "round": 1,
                "tally": {
                    "Hero": "2"  # More candidates will go here
                },
                "tallyResults": [{
                    "elected": "Hero"
                }]
            }]
        }

        # Generate a ton of empty data to create a valid JSON
        tally = data['results'][0]['tally']
        approximateBytesPerPerson = 30
        for i in range(0, round(numBytes / approximateBytesPerPerson)):
            tally['candidate_%08d' % i] = "0"

        with open(filename, 'w') as f:
            json.dump(data, f)

        return filename

    @classmethod
    def get_multiwinner_upload_response(cls, client):
        """ Uploads the multiwinner json file and returns a response """
        with open(FILENAME_MULTIWINNER) as f:
            response = client.post('/upload.html', {'jsonFile': f})
        return response

    @classmethod
    def get_latest_json_config(cls):
        """ Return the JsonConfig of the last-uploaded file """
        return JsonConfig.objects.latest('-id')

    @classmethod
    def get_headless_browser(cls):
        """ Returns a headless browser """
        chromeOptions = webdriver.chrome.options.Options()
        chromeOptions.add_argument("--headless")
        return webdriver.Chrome(options=chromeOptions)

        # Or, Firefox
        # firefoxOptions = webdriver.FirefoxOptions()
        # firefoxOptions.set_headless()
        # self.browser = webdriver.Firefox(firefox_options=firefoxOptions)

    @classmethod
    def setup_host_mocks(cls, testClass):
        """ Mock out get_host (since tests don't set it but visualizer depends on it """
        patcherGetHost = patch('visualizer.common.get_host', autospec=True)
        testClass.addCleanup(patcherGetHost.stop)

        testClass.mockGetHost = patcherGetHost.start()

        testClass.mockGetHost.return_value = "https://fakeurl.com"

    @classmethod
    def copy_with_new_name(cls, jsonFileToCopy, newName):
        """ Copies the file to a tempfile, but changes the name. Returns the tempfile """
        tf = tempfile.NamedTemporaryFile(suffix='json')

        with open(jsonFileToCopy, 'r') as f:
            data = json.loads(f.read())

        data['config']['contest'] = newName
        with open(tf.name, 'w') as f:
            json.dump(data, f)

        return tf

    @classmethod
    def silence_logging_spam(cls):
        """ Clean up output of misc libraries """
        loggers = [logging.getLogger(name) for name in logging.root.manager.loggerDict]
        for logger in loggers:
            logger.setLevel(logging.CRITICAL)
        logging.getLogger('boto').setLevel(logging.CRITICAL)
        logging.getLogger('boto3').setLevel(logging.CRITICAL)
        logging.getLogger('botocore').setLevel(logging.CRITICAL)
        logging.getLogger('matplotlib').setLevel(logging.CRITICAL)
        logging.getLogger('matplotlib.pyplot').setLevel(logging.CRITICAL)
        logging.getLogger('PIL').setLevel(logging.CRITICAL)
        logging.getLogger('s3transfer').setLevel(logging.CRITICAL)
        logging.getLogger('selenium').setLevel(logging.CRITICAL)
        logging.getLogger('urllib3').setLevel(logging.CRITICAL)
