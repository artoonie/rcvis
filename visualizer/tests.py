import os
from django.test import TestCase

# For selenium live tests
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.remote.remote_connection import RemoteConnection


from .models import JsonConfig
from .views import _getDataForView
from visualizer.graphCreator.graphCreator import makeGraphWithFile, BadJSONError


FILENAME_MULTIWINNER = 'testData/macomb-multiwinner-surplus.json'
FILENAME_OPAVOTE = 'testData/opavote-fairvote.json'
FILENAME_BAD_DATA = 'testData/test-baddata.json'
FILENAME_ONE_ROUND = 'testData/oneRound.json'
FILENAME_THREE_ROUND = 'testData/medium-rcvis.json'

class SimpleTests(TestCase):
    def _get_data_for_view(self, fn):
        with open(fn, 'r+') as f:
            config = JsonConfig(jsonFile=f)
            return _getDataForView(config)

    def _get_multiwinner_upload_response(self):
        with open(FILENAME_MULTIWINNER) as f:
            response = self.client.post('/upload.html', {'jsonFile': f})
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
                _getDataForView(config)

    def test_home_page(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_upload_file(self):
        response = self._get_multiwinner_upload_response()
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'],
                         "visualize=macomb-multiwinner-surplusjson")

    def test_upload_file_failure(self):
        with open(FILENAME_BAD_DATA) as f:
          response = self.client.post('/upload.html', {'jsonFile': f})
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

    def _verify_error_free(self):
        log = self.browser.get_log('browser')
        if (len(log) != 0):
            print("Log information: ", log)
        assert(len(log) == 0)

    def open(self, url, prepend_server=True):
        if prepend_server:
            url = "%s%s" % (self.live_server_url, url)
        self.browser.get(url)
        self._verify_error_free()

    def _upload(self, fn):
        self.open('/upload.html')
        fileUpload = self.browser.find_element_by_id("jsonFile")
        fileUpload.send_keys(os.path.join(os.getcwd(), fn))
        uploadButton = self.browser.find_element_by_id("uploadButton")
        uploadButton.click()
        self._verify_error_free()

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
            # TODO - maybe it's okay that it becomes too small
            # self.browser.set_window_size(200,600)
            # assert self._getWidth(elementId) > 200 # don't make too small

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
        testSaneResizingOf("sankey-body", 1200)

        self._upload(FILENAME_THREE_ROUND)
        self.browser.find_elements_by_id("sankey-tab")[0].click()
        testSaneResizingOf("sankey-body", 900)

    def test_oneround(self):
        # Regression test
        self.browser.set_window_size(800,800)
        self._upload(FILENAME_ONE_ROUND)
        assert self._getHeight("bargraph-interactive-body") < 800

    def test_settingsTab(self):
        # Upload with non-default setting: hiding sankey tab.
        self.open('/upload.html')
        fileUpload = self.browser.find_element_by_id("jsonFile")
        fileUpload.send_keys(os.path.join(os.getcwd(), FILENAME_ONE_ROUND))
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        self.browser.find_elements_by_name("hideSankey")[0].click()   # Check the box
        self.browser.find_element_by_id("uploadButton").click()       # Hit upload
        assert self._getWidth("sankey-tab") == 0

        # Go to the settings tab
        self.browser.find_elements_by_id("settings-tab")[0].click()

        # Then, toggle on the sankey tab from the settings page
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        self.browser.find_elements_by_name("hideSankey")[0].click()   # Check the box
        self.browser.find_elements_by_id("updateSettings")[0].click() # Hit submit
        assert self._getWidth("sankey-tab") > 0

        # Finally, toggle it back off
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        self.browser.find_elements_by_name("hideSankey")[0].click()   # Check the box
        self.browser.find_elements_by_id("updateSettings")[0].click() # Hit submit
        assert self._getWidth("sankey-tab") == 0

        self._verify_error_free()

    def test_oembed(self):
        # Just so this test can be run out-of-order, but note that this is probably
        # the third time this file is uploaded so the actual slug for this instance would be
        # oneRoundjson-3
        self._upload(FILENAME_MULTIWINNER)

        # Sanity check that a json exists
        uploaded_url = "/" + self.browser.current_url.split('/')[-1]
        oembed_json_url = self.browser.find_element_by_id("oembed").get_attribute('href')
        embedded_url = uploaded_url.replace('visualize=', 'visualizeEmbedded?rcvresult=')

        # Sanity check
        self.open(uploaded_url)

        # Verify discoverability. Don't verify error free - the response is a JSON, and there is
        # an error about missing favicons.
        self.browser.get(oembed_json_url)
        log = self.browser.get_log('browser') # clear out the errors for the next check
        assert(len(log) == 1) # favicon not provided here

        # Verify base URL for embedded visualization does not have errors
        self.open(embedded_url)

        valid_vistypes = ["sankey",
                          "barchart-fixed",
                          "barchart-interactive",
                          "tabular-by-candidate",
                          "tabular-by-round",
                          "tabular-by-round-interactive",
                          "tabular-candidate-by-round"]

        # None of the valid vistypes have errors
        for vistype in valid_vistypes:
            embedded_url_with_vistype = embedded_url + "&vistype=" + vistype
            self.open(embedded_url_with_vistype)
            # Try to avoid looking for elements that don't exist
            # assert len(self.browser.find_elements_by_id("no-such-vistype-message")) == 0
            self.browser.find_element_by_id("embedded_body") # Will throw exception if does not exist

        # And even an invalid URL does not have errors - but it does show the error message
        error_url = embedded_url + "&vistype=no_such_vistype"
        self.open(error_url)
        self.browser.find_element_by_id("no-such-vistype-message") # Will throw exception if does not exist

        try:
            # Final sanity check - does getElementById do what we want? It should throw an exception here.
            self.browser.find_element_by_id("sankey")
            assert False
        except NoSuchElementException:
            pass
