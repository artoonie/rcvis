import os
from django.test import TestCase

# For selenium live tests
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium.webdriver import Firefox

from .models import JsonConfig
from .views import getDataForView
from visualizer.graphCreator.graphCreator import makeGraphWithFile, BadJSONError


FILENAME_MULTIWINNER = 'testData/macomb-multiwinner-surplus.json'
FILENAME_OPAVOTE = 'testData/opavote-fairvote.json'
FILENAME_BAD_DATA = 'testData/test-baddata.json'

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

import time
class LiveBrowserTests(StaticLiveServerTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.browser = Firefox(executable_path='/usr/local/bin/geckodriver')
        cls.browser.implicitly_wait(10)

    @classmethod
    def tearDownClass(cls):
        cls.browser.quit()
        super().tearDownClass()

    def open(self, url):
        self.browser.get("%s%s" % (self.live_server_url, url))

    def test_render(self):
        self.open('/upload.html')

        fileUpload = self.browser.find_element_by_id("uploadFileInput")
        fileUpload.send_keys(os.path.join(os.getcwd(), FILENAME_MULTIWINNER))
        uploadButton = self.browser.find_element_by_id("uploadButton")
        uploadButton.click()

        def getWidth(elementId):
            return self.browser.find_elements_by_id(elementId)[0].size['width']

        def assertWidth(elementId, width):
            assert getWidth(elementId) == width

        def testSaneResizingOf(elementId, maxSize):
            self.browser.set_window_size(200,600)
            assert getWidth(elementId) > 200 # don't make too small

            self.browser.set_window_size(400,600)
            assert getWidth(elementId) == 400 # should fit!

            self.browser.set_window_size(600,600)
            assert getWidth(elementId) == 600 # should fit!

            self.browser.set_window_size(maxSize,600)
            assert getWidth(elementId) < maxSize # don't make too big

        testSaneResizingOf("bargraph-interactive-body", 1200)

        assert getWidth("sankey-body") == 0 # not yet visible
        self.browser.find_elements_by_id("sankey-tab")[0].click()
        testSaneResizingOf("sankey-body", 3000) # sankey doesn't currently have an upper limit, though it should. Unit-driven testing? Fix this.
