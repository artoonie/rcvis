"""
Helper functions for unit and integration tests
"""

import logging
import json
import tempfile
import uuid
from urllib.parse import urlparse
from mock import patch

from django.contrib.auth import get_user_model
from django.contrib.auth.models import Permission

from selenium import webdriver
from scraper.models import MultiScraper, Scraper
from visualizer.models import JsonConfig
from visualizer.tests import filenames

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
            tally[f'candidate_{i:08d}'] = "0"

        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f)

        return filename

    @classmethod
    def get_multiwinner_upload_response(cls, client):
        """ Uploads the multiwinner json file and returns a response """
        with open(FILENAME_MULTIWINNER, 'r', encoding='utf-8') as f:
            response = client.post('/upload.html', {'jsonFile': f})
        return response

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
    def copy_with_new_name(cls, jsonFileToCopy, newName, newFilenamePrefix=None):
        """ Copies the file to a tempfile, but changes the name. Returns the tempfile """
        tf = tempfile.NamedTemporaryFile(prefix=newFilenamePrefix, suffix='.json')

        with open(jsonFileToCopy, 'r', encoding='utf_8') as f:
            data = json.loads(f)

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
        logging.getLogger('scraper.scrapeWorkerFailed').setLevel(logging.ERROR)

    @classmethod
    def modify_json_with(cls, jsonFilename, modifierFunc):
        """
        Given a modifierFunc which modifies the data in the given file,
        updates the json file and returns a Tempfile holding the new data
        """
        # Update the sidecar data
        with open(jsonFilename, 'r+') as sidecarFile:
            data = json.load(sidecarFile)
            modifierFunc(data)

        # Write it to a tempfile
        tf = tempfile.NamedTemporaryFile()
        with open(tf.name, 'w') as tfObj:
            json.dump(data, tfObj)
        return tf

    @classmethod
    def get_latest_upload(cls):
        """
        Returns the last-uploaded json config
        """
        return JsonConfig.objects.latest('id')

    @classmethod
    def does_fieldfile_equal_file(cls, fsFilePath, fieldFile):
        """ Does the FieldFile (django field) equal the file at fsFilePath?  """
        with open(fsFilePath, 'r', encoding='utf-8') as f:
            realFileData = f.read()
        fieldFileData = fieldFile.read()
        return realFileData == fieldFileData

    @classmethod
    def login(cls, client):
        """ Forces a login. Creates a user as needed, and returns that user """
        users = get_user_model().objects.filter(username='testuser')
        if not users.count():
            # Since we're not controlling how this function is used as closely,
            # let's be extra careful setting a password.
            user = get_user_model().objects.create_user(
                username='testuser',
                email='test@example.com',
                password=str(uuid.uuid4()))
        else:
            user = users[0]
        client.force_login(user)
        return user

    @classmethod
    def logout(cls, client):
        """ Logs out (if logged in) """
        client.logout()

    @classmethod
    def create_request_mock(cls, data, statusCode):
        """ Creates a mock function call for the requests library """

        def mocked_request(*args, **kwargs):  # pylint: disable=unused-argument
            """ The mocked function, which will return a MockResponse """

            # pylint: disable=too-few-public-methods
            class MockResponse():
                """ Mocks some of the functions of Response - add more as needed """

                def __init__(self):
                    self.data = data
                    self.status_code = statusCode  # pylint: disable=invalid-name

                def json(self):
                    """ Mocks the return """
                    return self.data

            return MockResponse()
        return mocked_request

    @classmethod
    def get_email_reg_link(cls, outbox):
        """ Gets the auth regisration link from the email outbox """
        emailBodyLines = outbox[0].body.split('\n')
        emailBodyLink = [l for l in emailBodyLines if l.startswith('http')][0]
        return urlparse(emailBodyLink).path

    @classmethod
    def give_auth(cls, user, auths):
        """ Gives auth or list of auths to the current user, then refetches user from the db """
        if isinstance(auths, str):
            auths = [auths]
        for auth in auths:
            user.user_permissions.add(Permission.objects.get(codename=auth))
        return get_user_model().objects.get(pk=user.pk)

    @classmethod
    def make_scraper(cls):
        """ Creates a scraper object. You must mock out requests.get if you plan to scrape. """
        return Scraper.objects.create(scrapableURL="mock://scrape", sourceURL="mock://source")

    @classmethod
    def make_multi_scraper(cls):
        """
        Creates a multi-scraper object.
        You must mock out requests.get if you plan to scrape.
        """
        return MultiScraper.objects.create(
            scrapableURL="mock://multiscrape", sourceURL="mock://source")

    @classmethod
    def mock_scraper_url_with_file(
            cls,
            requestMock,
            url='mock://scrape',
            filename=filenames.ONE_ROUND):
        """ Creates a valid response from the server """
        with open(filename, 'r', encoding='utf-8') as f:
            data = f.read()
        requestMock.get(url, text=data)

    @classmethod
    def login_with_scrape_permissions(cls, client):
        """ Logs in and creates permissions needed to run scraper """
        user = TestHelpers.login(client)
        return TestHelpers.give_auth(user, ['add_scraper', 'change_scraper'])


# Silence logging spam for any test that includes this
TestHelpers.silence_logging_spam()
