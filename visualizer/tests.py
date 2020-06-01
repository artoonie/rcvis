"""
Unit and integration tests
"""

import json
import os
import time

# For selenium live tests
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test import TestCase
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import NoSuchElementException, WebDriverException
from selenium.webdriver.support.ui import WebDriverWait

from visualizer.graphCreator.graphCreator import BadJSONError
from .models import JsonConfig
from .views import _get_data_for_view
from .forms import JsonConfigForm

FILENAME_MULTIWINNER = 'testData/macomb-multiwinner-surplus.json'
FILENAME_OPAVOTE = 'testData/opavote-fairvote.json'
FILENAME_BAD_DATA = 'testData/test-baddata.json'
FILENAME_ONE_ROUND = 'testData/oneRound.json'
FILENAME_THREE_ROUND = 'testData/medium-rcvis.json'


class SimpleTests(TestCase):
    """ Simple tests that do not require a live browser """

    @classmethod
    def _get_data_for_view(cls, fn):
        """ Opens the given file and creates a graph with it """
        with open(fn, 'r+') as f:
            config = JsonConfig(jsonFile=f)
            return _get_data_for_view(config)

    def _get_multiwinner_upload_response(self):
        """ Uploads the multiwinner json file and returns a response """
        with open(FILENAME_MULTIWINNER) as f:
            response = self.client.post('/upload.html', {'jsonFile': f})
        return response

    def test_opavote_loads(self):
        """ Opens the opavote file """
        self._get_data_for_view(FILENAME_OPAVOTE)

    def test_multiwinner_loads(self):
        """ Opens the multiwinner file """
        self._get_data_for_view(FILENAME_MULTIWINNER)

    def test_bad_json_fails(self):
        """ Opens the invalid file and asserts thhat it fails """
        try:
            self._get_data_for_view(FILENAME_BAD_DATA)
        except BadJSONError:
            return
        assert False

    #pylint: disable=R0201
    def test_various_configs(self):
        """ Tests toggling on/off each config option """
        configBoolsToToggle = [t for t in JsonConfigForm.Meta.fields if t != 'jsonFile']
        fn = FILENAME_MULTIWINNER
        for configBoolToToggle in configBoolsToToggle:
            with open(fn, 'r+') as f:
                config = JsonConfig(jsonFile=f)
                config.__dict__[configBoolToToggle] = not config.__dict__[
                    configBoolToToggle]
                _get_data_for_view(config)

    def test_home_page(self):
        """ Tests that the home page loads """
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_upload_file(self):
        """ Tests uploading a random file """
        response = self._get_multiwinner_upload_response()
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'],
                         "visualize=macomb-multiwinner-surplusjson")

    def test_upload_file_failure(self):
        """ Tests that we get an error page if a file fails to upload """
        with open(FILENAME_BAD_DATA) as f:
            response = self.client.post('/upload.html', {'jsonFile': f})
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'visualizer/errorBadJson.html')


class LiveBrowserTests(StaticLiveServerTestCase):
    """ Tests that launch a selenium browser """

    def setUp(self):
        """ Creates the selenium browser. If on CI, connects to SauceLabs """
        super(LiveBrowserTests, self).setUp()
        if "TRAVIS_BUILD_NUMBER" in os.environ:
            username = os.environ["SAUCE_USERNAME"]
            accessKey = os.environ["SAUCE_ACCESS_KEY"]
            capabilities = {}
            capabilities["platform"] = "Windows 10"
            capabilities["browserName"] = "chrome"
            capabilities["version"] = "70.0"
            capabilities["tunnel-identifier"] = os.environ["TRAVIS_JOB_NUMBER"]
            capabilities["build"] = os.environ["TRAVIS_BUILD_NUMBER"]
            capabilities["tags"] = [os.environ["TRAVIS_PYTHON_VERSION"], "CI"]
            capabilities["commandTimeout"] = 100
            capabilities["maxDuration"] = 1200
            capabilities["sauceSeleniumAddress"] = "ondemand.saucelabs.com:443/wd/hub"
            capabilities["captureHtml"] = True
            capabilities["webdriverRemoteQuietExceptions"] = False
            seleniumEndpoint = "https://{}:{}@ondemand.saucelabs.com:443/wd/hub".format(
                username, accessKey)

            self.browser = webdriver.Remote(
                desired_capabilities=capabilities,
                command_executor=seleniumEndpoint)
        else:
            self.browser = webdriver.Firefox()

        self.browser.implicitly_wait(10)

    def tearDown(self):
        """ Destroys the selenium browser """
        self.browser.quit()
        super(LiveBrowserTests, self).tearDown()

    def _get_log(self):
        """ Returns and clears the console log """
        try:
            return self.browser.get_log('browser')
        except WebDriverException:
            print("Cannot read log - for somme reason, this only works on travis.")
            if not os.environ['RCVIS_HOST'] == 'localhost':
                raise
            return ""

    def _assert_log_len(self, num):
        """ Asserts the log contains num elements, or prints out what's in the log.
            Then Clears the log. """
        log = self._get_log()
        if len(log) != num:
            print("Log information: ", log)
        assert len(log) == num

    def _make_url(self, url):
        """ Creates an absolute url using the current server URL """
        return "%s%s" % (self.live_server_url, url)

    def open(self, url, prependServer=True):
        """ Opens the given file. If prepend_server is true, turns it into an absolute URL """
        if prependServer:
            url = self._make_url(url)
        self.browser.get(url)
        self._assert_log_len(0)

    def _upload(self, fn):
        """ Uploads the given local file """
        self.open('/upload.html')
        fileUpload = self.browser.find_element_by_id("jsonFile")
        fileUpload.send_keys(os.path.join(os.getcwd(), fn))
        uploadButton = self.browser.find_element_by_id("uploadButton")
        uploadButton.click()
        self._assert_log_len(0)

    def _get_width(self, elementId):
        """ Gets the width of the element """
        elem = self.browser.find_elements_by_id(elementId)[0]
        try:
            ActionChains(self.browser).move_to_element(elem).perform()
        except WebDriverException:
            return 0  # cannot be scrolled into view
        return elem.size['width']

    def _get_height(self, elementId):
        """ Gets the height of the element """
        return self.browser.find_elements_by_id(elementId)[0].size['height']

    def _go_to_tab(self, tabId):
        # Scroll to the top to make the menu visible
        self.browser.execute_script("document.documentElement.scrollTop = 0")

        # click
        self.browser.find_elements_by_id(tabId)[0].click()

        # Implicit wait doesn't work since the elements are loaded,
        # just not visible. Explicitly wait for things to load.
        # TODO replace this with an implicit wait
        time.sleep(0.5)

    def test_render(self):
        """ Tests the resizing of the window and verifies that things fit """
        def fits_inside(elementWidth, pageWidth):
            # Checks that the element takes up most or all of the page, but not more
            roomForMarginsPct = 0.1

            minWidth = pageWidth * (1 - roomForMarginsPct)
            return minWidth < elementWidth <= pageWidth

        def test_sane_resizing_of(elementId, maxSize):
            self.browser.set_window_size(200, 600)
            assert self._get_width(elementId) > 200  # don't make too small

            self.browser.set_window_size(400, 600)
            assert fits_inside(self._get_width(elementId), 400)

            self.browser.set_window_size(600, 600)
            assert fits_inside(self._get_width(elementId), 600)

            self.browser.set_window_size(maxSize, 600)
            assert self._get_width(elementId) <= maxSize  # don't make too big

        self._upload(FILENAME_MULTIWINNER)
        test_sane_resizing_of("bargraph-interactive-body", 1200)

        assert self._get_width("sankey-body") == 0
        self._go_to_tab("sankey-tab")
        assert self._get_width("sankey-body") > 0
        test_sane_resizing_of("sankey-body", 1200)

        self._upload(FILENAME_THREE_ROUND)
        self._go_to_tab("sankey-tab")
        test_sane_resizing_of("sankey-body", 900)

        self._go_to_tab("tabular-candidate-by-round-tab")
        test_sane_resizing_of("tabular-by-round-wrapper", 1200)

    def test_oneround(self):
        """ Tests we do something sane in a single-round election """
        # Regression test
        self.browser.set_window_size(800, 800)
        self._upload(FILENAME_ONE_ROUND)
        assert self._get_height("bargraph-interactive-body") < 800

    def test_settings_tab(self):
        """ Tests the functionality of the settings tab """
        # Upload with non-default setting: hiding sankey tab.
        self.open('/upload.html')
        fileUpload = self.browser.find_element_by_id("jsonFile")
        fileUpload.send_keys(os.path.join(os.getcwd(), FILENAME_ONE_ROUND))
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("hideSankey")[1].click()
        self.browser.find_element_by_id("uploadButton").click()  # Hit upload
        assert self._get_width("sankey-body") == 0

        # Go to the settings tab
        self._go_to_tab("settings-tab")

        # Then, toggle on the sankey tab from the settings page
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("hideSankey")[1].click()
        self.browser.find_elements_by_id("updateSettings")[0].click()  # Hit submit
        assert self._get_width("sankey-tab") > 0

        # Finally, toggle it back off
        self.browser.find_elements_by_id("sankeyOptions")[
            0].click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("hideSankey")[1].click()
        self.browser.find_elements_by_id("updateSettings")[0].click()  # Hit submit
        assert self._get_width("sankey-tab") == 0

        self._assert_log_len(0)

    def test_oembed(self):
        """ Tests the functionality of the oembed feature"""
        # Just so this test can be run out-of-order, but note that this is probably
        # the third time this file is uploaded so the actual slug for this instance would be
        # oneRoundjson-3
        self._upload(FILENAME_MULTIWINNER)

        # Sanity check that a json exists
        uploadedUrl = "/" + self.browser.current_url.split('/')[-1]
        oembedJsonUrl = self.browser.find_element_by_id("oembed").get_attribute('href')
        embeddedUrl = uploadedUrl.replace('visualize=', 'visualizeEmbedded=')

        # Sanity check
        self.open(uploadedUrl)

        # Verify discoverability.
        # The response is a JSON, which means on the first load without cache, there is
        # an error about missing favicons. Hard-refresh without cache to ensure we get
        # this error; without this, re-runs of the same TravisCI run will not have
        # this error.
        self.browser.get(oembedJsonUrl)
        self.browser.execute_script("location.reload(true);")
        time.sleep(0.2)  # some breathing room after the refresh
        self._assert_log_len(1)  # favicon not provided here

        # Verify the JSON is sane and has all required fields
        responseText = self.browser.find_element_by_xpath("//pre").text

        responseData = json.loads(responseText)
        assert responseData['version'] == "1.0"
        assert responseData['type'] == "rich"
        assert responseData['width']
        assert responseData['height']
        assert responseData['html']

        # Verify base URL for embedded visualization does not have errors
        self.open(embeddedUrl)

        validVistypes = ["sankey",
                         "barchart-fixed",
                         "barchart-interactive",
                         "tabular-by-candidate",
                         "tabular-by-round",
                         "tabular-by-round-interactive",
                         "tabular-candidate-by-round"]

        # None of the valid vistypes have errors
        for vistype in validVistypes:
            embeddedUrlWithVistype = embeddedUrl + "?vistype=" + vistype
            self.open(embeddedUrlWithVistype)
            # Try to avoid looking for elements that don't exist
            # assert len(self.browser.find_elements_by_id("no-such-vistype-message")) == 0
            # Will throw exception if does not exist
            self.browser.find_element_by_id("embedded_body")

        # And even an invalid URL does not have errors - but it does show the error message
        errorUrl = embeddedUrl + "?vistype=no_such_vistype"
        self.open(errorUrl)
        # Will throw exception if does not exist
        self.browser.find_element_by_id("no-such-vistype-message")

        try:
            # Final sanity check - does getElementById do what we want? It
            # should throw an exception here.
            self.browser.find_element_by_id("sankey")
            assert False
        except NoSuchElementException:
            pass

    def test_cache(self):
        """ Tests that caching works and that second loads are faster,
            even without browser cache """

        # Verify that the django.core.cache middleware works as expected
        def measure_load_time(url):
            # Use a fresh browser - we never want to hit the cache,
            # and there doesn't seem to be an easy way to skip the cache every time:
            # https://stackoverflow.com/a/9563341/1057105
            localBrowser = webdriver.Firefox()

            # First, navigate to a random URL to cache the static files
            localBrowser.get(self._make_url("/upload.html"))

            # Then, go to the URL we care about
            localBrowser.get(self._make_url(url))

            WebDriverWait(localBrowser, timeout=5, poll_frequency=0.05).until(
                lambda d: d.find_element_by_id("page-top"))

            tic = localBrowser.execute_script('return performance.timing.fetchStart')
            toc = localBrowser.execute_script('return performance.timing.domLoading')
            return toc - tic

        def is_cache_much_faster():
            loadWithoutCache = measure_load_time(f"{fn1}?doHideOverflowAndEliminated=on")
            loadWithCache = measure_load_time(f"{fn1}?doHideOverflowAndEliminated=on")
            # Verify that it's at least 2x faster with cache (closer to 5x on
            # selenium, 200x in real life)
            return loadWithoutCache > loadWithCache * 2

        # Upload a file, check cache
        self._upload(FILENAME_OPAVOTE)
        fn1 = "/visualize=opavote-fairvotejson"
        assert is_cache_much_faster()

        # Uploading should clear all cache
        self._upload(FILENAME_ONE_ROUND)
        assert is_cache_much_faster()

        # But just visiting the upload page and returning should not clear
        # cache
        self.open("/upload.html")
        assert not is_cache_much_faster()
