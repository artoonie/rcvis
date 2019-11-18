import os
from django.test import TestCase

# For selenium live tests
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.remote.remote_connection import RemoteConnection


from .models import JsonConfig
from .views import getDataForView
from visualizer.graphCreator.graphCreator import makeGraphWithFile, BadJSONError


FILENAME_MULTIWINNER = 'testData/macomb-multiwinner-surplus.json'
FILENAME_OPAVOTE = 'testData/opavote-fairvote.json'
FILENAME_BAD_DATA = 'testData/test-baddata.json'
FILENAME_ONE_ROUND = 'testData/oneRound.json'

class SimpleTests(TestCase):
    def _get_data_for_view(self, fn):
        with open(fn, 'r+') as f:
            config = JsonConfig(jsonFile=f)
            return getDataForView(config)

    def _get_multiwinner_upload_response(self):
        with open(FILENAME_MULTIWINNER) as f:
            response = self.client.post('/upload.html', {'rcvJson': f})
        return response

    def test_opavote_loads(self):
        self._get_data_for_view(FILENAME_OPAVOTE)

    def test_multiwinner_loads(self):
        self._get_data_for_view(FILENAME_MULTIWINNER)

    def test_bad_json_fails(self):
        try:
            self._get_data_for_view(FILENAME_BAD_DATA)
        except BadJSONError:
            return
        assert False

    def test_various_configs(self):
        configBoolsToToggle = {'hideDecimals', 'rotateNames', 'onlyShowWinnersTabular',
                               'doHideOverflowAndEliminated', 'doUseHorizontalBarGraph',
                               'excludeFinalWinnerAndEliminatedCandidate'}
        fn = FILENAME_MULTIWINNER
        for configBoolToToggle in configBoolsToToggle:
            with open(fn, 'r+') as f:
                config = JsonConfig(jsonFile=f)
                config.__dict__[configBoolToToggle] = not config.__dict__[configBoolToToggle]
                getDataForView(config)

    def test_home_page(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_upload_file(self):
        response = self._get_multiwinner_upload_response()
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'],
                         "/visualize=macomb-multiwinner-surplusjson")

    def test_upload_file_failure(self):
        with open(FILENAME_BAD_DATA) as f:
          response = self.client.post('/upload.html', {'rcvJson': f})
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'visualizer/errorBadJson.html')

class LiveBrowserTests(StaticLiveServerTestCase):
    def setUp(self):
        super(LiveBrowserTests, self).setUp()
        if "TRAVIS_BUILD_NUMBER" in os.environ:
            username = os.environ["SAUCE_USERNAME"]
            access_key = os.environ["SAUCE_ACCESS_KEY"]
            capabilities = {}
            capabilities["platform"] = "Windows 10"
            capabilities["browserName"] = "chrome"
            capabilities["version"] = "70.0"
            capabilities["tunnel-identifier"] = os.environ["TRAVIS_JOB_NUMBER"]
            capabilities["build"] = os.environ["TRAVIS_BUILD_NUMBER"]
            capabilities["tags"] = [os.environ["TRAVIS_PYTHON_VERSION"], "CI"]
            capabilities["commandTimeout"] = 100
            capabilities["maxDuration"] = 1200
            capabilities["sauceSeleniumAddress"] = "localhost:4445/wd/hub"
            capabilities["captureHtml"] = True
            capabilities["webdriverRemoteQuietExceptions"] = False
            hub_url = "%s:%s@localhost:4445" % (username, access_key)

            self.browser = webdriver.Remote(desired_capabilities=capabilities, command_executor="http://%s/wd/hub" % hub_url)
        else:
            self.browser = webdriver.Firefox()

        self.browser.implicitly_wait(10)

    def tearDown(self):
        self.browser.quit()
        super(LiveBrowserTests, self).tearDown()

    def open(self, url):
        self.browser.get("%s%s" % (self.live_server_url, url))

    def _upload(self, fn):
        self.open('/upload.html')
        fileUpload = self.browser.find_element_by_id("uploadFileInput")
        fileUpload.send_keys(os.path.join(os.getcwd(), fn))
        uploadButton = self.browser.find_element_by_id("uploadButton")
        uploadButton.click()

    def _getWidth(self, elementId):
        return self.browser.find_elements_by_id(elementId)[0].size['width']

    def _getHeight(self, elementId):
        return self.browser.find_elements_by_id(elementId)[0].size['height']


    def test_render(self):
        def fits_inside(element_width, page_width):
            # Checks that the element takes up most or all of the page, but not more
            PERCENT_ROOM_FOR_MARGINS = 0.1
            min_width = page_width * (1-PERCENT_ROOM_FOR_MARGINS)
            return element_width <= page_width and \
                   element_width > min_width

        def testSaneResizingOf(elementId, maxSize):
            self.browser.set_window_size(200,600)
            assert self._getWidth(elementId) > 200 # don't make too small

            self.browser.set_window_size(400,600)
            assert fits_inside(self._getWidth(elementId), 400)

            self.browser.set_window_size(600,600)
            assert fits_inside(self._getWidth(elementId), 600)

            self.browser.set_window_size(maxSize,600)
            assert self._getWidth(elementId) < maxSize # don't make too big

        self._upload(FILENAME_MULTIWINNER)
        testSaneResizingOf("bargraph-interactive-body", 1200)

        assert self._getWidth("sankey-body") == 0 # not yet visible
        self.browser.find_elements_by_id("sankey-tab")[0].click()
        testSaneResizingOf("sankey-body", 3000) # sankey doesn't currently have an upper limit, though it should. Unit-driven testing? Fix this.

    def test_oneround(self):
        # Regression test
        self.browser.set_window_size(800,800)
        self._upload(FILENAME_ONE_ROUND)
        assert self._getHeight("bargraph-interactive-body") < 800
