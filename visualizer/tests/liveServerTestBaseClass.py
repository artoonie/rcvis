"""
Integration tests with a live browser running the site
"""

import os
import time
from datetime import datetime

from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.db.models import BooleanField
from django.urls import reverse
from selenium import webdriver
from selenium.common.exceptions import WebDriverException
from selenium.webdriver.common.action_chains import ActionChains

from common.testUtils import TestHelpers
from common.viewUtils import get_script_to_disable_animations
from visualizer.models import JsonConfig
from visualizer.tests import filenames

TestHelpers.silence_logging_spam()


class LiveServerTestBaseClass(StaticLiveServerTestCase):
    """ Tests that launch a selenium browser """

    def __init__(self, *args, **kwargs):
        self.isUsingSauceLabs = False
        super().__init__(*args, **kwargs)

    def setUp(self):
        """ Creates the selenium browser. If on CI, connects to SauceLabs """
        super().setUp()
        if self.isUsingSauceLabs:
            username = os.environ["SAUCE_USERNAME"]
            accessKey = os.environ["SAUCE_ACCESS_KEY"]
            capabilities = {}
            capabilities["platform"] = "Windows 10"
            capabilities["browserName"] = "chrome"
            capabilities["version"] = "70.0"
            capabilities["build"] = os.environ["HEROKU_TEST_RUN_ID"]
            capabilities["tags"] = ["CI"]
            capabilities["tunnelIdentifier"] = "sc-proxy-tunnel-" + os.environ["HEROKU_TEST_RUN_ID"]
            capabilities["name"] = self._testMethodName + ":" + os.environ["HEROKU_TEST_RUN_BRANCH"]
            capabilities["commandTimeout"] = 100
            capabilities["maxDuration"] = 1200
            capabilities["screenResolution"] = "1280x1024"
            capabilities["sauceSeleniumAddress"] = "ondemand.saucelabs.com:443/wd/hub"
            capabilities["captureHtml"] = True
            capabilities["webdriverRemoteQuietExceptions"] = False
            seleniumEndpoint = "https://{}:{}@ondemand.saucelabs.com:443/wd/hub".format(
                username, accessKey)

            self.browser = webdriver.Remote(
                desired_capabilities=capabilities,
                command_executor=seleniumEndpoint)
        else:
            self.browser = TestHelpers.get_headless_browser()

        self.browser.implicitly_wait(10)
        self._screenshotCount = 0

        self.user = TestHelpers.login(self.client)
        self._add_login_cookie_to_browser()

    def tearDown(self):
        """ Destroys the selenium browser """
        # Must have no errors at end of test
        self._assert_log_len(0)

        if self.isUsingSauceLabs:
            sauceResult = "passed" if not self._has_test_failed() else "failed"
            self.browser.execute_script("sauce:job-result={}".format(sauceResult))

        TestHelpers.logout(self.client)

        self.browser.quit()
        super().tearDown()

    def _add_login_cookie_to_browser(self):
        """ After logging in, the browser must also get the cookie """
        cookie = self.client.cookies['sessionid']
        self.browser.get(self.live_server_url)
        self.browser.add_cookie(
            {'name': 'sessionid', 'value': cookie.value, 'secure': False, 'path': '/'})

    def _has_test_failed(self):
        """ helper for tearDown to check if the test has failed """
        for _, error in self._outcome.errors:
            if error:
                return True
        return False

    def _get_log(self):
        """ Returns and clears the console log """
        return self.browser.get_log('browser')

    def _assert_log_len(self, num):
        """ Asserts the log contains num elements, or prints out what's in the log.
            Then Clears the log. """
        try:
            log = self._get_log()
        except WebDriverException:
            print("Cannot read log - for somme reason, this only works on travis.")
            if not os.environ['RCVIS_HOST'] == 'localhost':
                raise

            # Always succeeds on localhost :(
            return

        # Remove the message created by _add_login_cookie_to_browser
        log = [l for l in log if 'Unrecognized feature: \'clipboard-write\'.' not in l['message']]

        # This happens sporadically, and seems to happen between tests and cause a random
        # test to fail. Doesn't happen on SauceLabs, only headless browsers.
        log = [l for l in log if '\'window.webkitStorageInfo\' is deprecated.' not in l['message']]

        # This happens on the chromedriver used on 2021-11-17
        log = [l for l in log if 'ch-ua-bitness' not in l['message']]

        # This happens on the chromedriver used on 2022-01-27
        log = [l for l in log if 'ch-ua-full-version-list' not in l['message']]

        # This happens on the chromedriver used on 2022-11-29
        log = [l for l in log if 'ch-ua-wow64' not in l['message']]

        # This happens on saucelabs
        log = [l for l in log if 'favicon.ico - Failed to load resource' not in l['message']]

        if len(log) != num:
            print("Log information: ", log)

        self.assertEqual(len(log), num)

    def _make_url(self, url):
        """ Creates an absolute url using the current server URL """
        if not url.startswith('/'):
            url = '/' + url
        return "%s%s" % (self.live_server_url, url)

    def _disable_all_animations(self):
        """ Disables transitions on the current page """
        self.browser.execute_script(get_script_to_disable_animations())

    def _disable_bargraph_slider_timer(self):
        """
        Changes the timeBetweenStepsMs to 1ms.
        Note that this does not change the barchart's time between each step,
        just the timeline. You still need to cancel the animation using trs_moveSliderTo.
        """
        key = "_sliderDiv_bargraph-slider-container"

        # Ensure we're touching the right thing: 1200ms
        oldTime = self.browser.execute_script(f"return sliders['{key}']['timeBetweenStepsMs'];")
        self.assertEqual(oldTime, 1200)  # note: 1200 is only true if <= 7 rounds

        # Change
        self.browser.execute_script(f"sliders['{key}']['timeBetweenStepsMs'] = 1;")

    @classmethod
    def _ensure_eventually_asserts(cls, assertion):
        """ Waits up to waitTimeSeconds for the assertion to be true """
        sleepInterval = 0.1
        maxWaitTimeSeconds = 2.0
        tic = datetime.now()
        while True:
            try:
                assertion()
                return True
            except AssertionError:
                toc = datetime.now()
                if (toc - tic).seconds > maxWaitTimeSeconds:
                    raise

                time.sleep(sleepInterval)
                sleepInterval *= 1.5

    def open(self, url, prependServer=True, expectedErrorCount=0):
        """ Opens the given file. If prepend_server is true, turns it into an absolute URL """
        if prependServer:
            url = self._make_url(url)
        self.browser.get(url)
        self._assert_log_len(expectedErrorCount)

    @classmethod
    def _get_json_config_default_bools(cls):
        """ Returns a dict of all the default bools of JsonConfig """
        allKeys = JsonConfig.get_all_non_auto_fields()
        values = {}
        for key in allKeys:
            field = JsonConfig._meta.get_field(key)
            if isinstance(field, BooleanField):
                values[key] = field.get_default()
        return values

    def _upload(self, jsonFilename, sidecarFilename=None):
        """
        Uploads the given local files. The sidecar file is optional.
        After upload, follows the redirect.
        """
        values = self._get_json_config_default_bools()

        with open(jsonFilename, 'rb') as jsonFileObject:
            values['jsonFile'] = jsonFileObject

            if sidecarFilename is None:
                response = self.client.post('/upload.html', values)
            else:
                with open(sidecarFilename, 'r') as sidecarFileObject:
                    values['candidateSidecarFile'] = sidecarFileObject
                    response = self.client.post('/upload.html', values)

        if response.status_code == 302:
            self.open(response['location'], prependServer=True)
        else:
            print(response.status_code, response.content)

    def _upload_something_if_needed(self):
        """
        If nothing is uploaded, uploads a file.
        Otherwise, just loads the visualization of the last-uploaded object.
        """
        try:
            objects = JsonConfig.objects.latest('-id')
        except JsonConfig.DoesNotExist:
            self._upload(filenames.MULTIWINNER)
            return

        self.open(reverse('visualize', args=(objects[0].slug,)))
        self._assert_log_len(0)

    def _go_to_tab(self, tabId):
        self.browser.find_elements_by_id(tabId)[0].click()

    def _debug_screenshot(self):
        """ Saves a screenshot in the current directory for debugging """
        # First, ensure we're not on Travis. This is only for local debugging.
        assert not self.isUsingSauceLabs

        # Save a screenshot
        filename = f'screenshot_{self._screenshotCount}.png'
        self.browser.save_screenshot(filename)
        self._screenshotCount += 1

    def _go_to_round_by_clicking(self, round_i):
        """
        trs_moveSliderTo does not cancel the animation, so this can be used if
        you need to trigger the cancel-animation behavior.
        """
        # Cancel animation by clicking on round_i'th element element
        container = self.browser.find_element_by_id('bargraph-slider-container')
        tick = container.find_elements_by_class_name('slider-item')[round_i]

        # Note - need an action chain because the first tick isn't actually receiving the click,
        # the slider itself handles it, and selenium throws ElementClickInterceptedException
        ActionChains(self.browser).move_to_element(tick)\
            .click(tick)\
            .perform()

    def _set_input_to(self, inputId, value):
        """
        Uses JS to set the input to the given value
        """
        self.browser.execute_script(f'document.getElementById("{inputId}").value = "{value}"')

    def _get_attr_from_id(self, inputId, attr):
        """
        Uses JS to get the attribute, use `value` for <input>s and `innerHTML` for divs
        """
        return self.browser.execute_script(f'return document.getElementById("{inputId}").{attr};')
