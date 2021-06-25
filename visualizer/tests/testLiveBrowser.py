"""
Integration tests with a live browser running the site
"""

import json
import os
import platform
import time
import uuid
from datetime import datetime
from urllib.parse import urlparse

from django.contrib.auth import get_user_model
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.core import mail as test_mailbox
from django.urls import reverse
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException, WebDriverException
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait

from common.testUtils import TestHelpers
from common.viewUtils import get_script_to_disable_animations
from visualizer.models import JsonConfig
from visualizer.tests import filenames

CONTROL_KEY = Keys.COMMAND if platform.system() == "Darwin" else Keys.CONTROL

TestHelpers.silence_logging_spam()


# pylint: disable=too-many-public-methods
class LiveBrowserTests(StaticLiveServerTestCase):
    """ Tests that launch a selenium browser """

    def setUp(self):
        """ Creates the selenium browser. If on CI, connects to SauceLabs """
        super().setUp()
        self.isUsingSauceLabs = "HEROKU_TEST_RUN_BRANCH" in os.environ
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

        TestHelpers.login(self.client)
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

        if len(log) != num:
            print("Log information: ", log)

        assert len(log) == num

    def _num_log_errors_for_missing_favicon(self):
        if isinstance(self.browser, webdriver.Chrome):
            return 0
        if isinstance(self.browser, webdriver.Firefox):
            return 0
        if isinstance(self.browser, webdriver.Remote):
            return 1
        raise Exception("Unknown browser type")

    def _make_url(self, url):
        """ Creates an absolute url using the current server URL """
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

    def open(self, url, prependServer=True):
        """ Opens the given file. If prepend_server is true, turns it into an absolute URL """
        if prependServer:
            url = self._make_url(url)
        self.browser.get(url)
        self._assert_log_len(0)

    def _upload(self, jsonFilename, sidecarFilename=None):
        """ Uploads the given local files. The sidecar file is optional. """
        self.open('/upload.html')
        fileUpload = self.browser.find_element_by_id("jsonFile")
        fileUpload.send_keys(os.path.join(os.getcwd(), jsonFilename))
        if sidecarFilename is not None:
            fileUpload = self.browser.find_element_by_id("candidateSidecarFile")
            fileUpload.send_keys(os.path.join(os.getcwd(), sidecarFilename))
        uploadButton = self.browser.find_element_by_id("uploadButton")
        uploadButton.click()
        self._assert_log_len(0)

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

    def _is_visible(self, elementId):
        """ Is the element ID visible? """
        elem = self.browser.find_elements_by_id(elementId)[0]
        return self._is_elem_visible(elem)

    @classmethod
    def _is_elem_visible(cls, elem):
        """ Is the element visible? """
        # Note: Previously, we needed the following code to handle fullpage.js slides,
        # where everything returns is_displayed but some things are way over to the right.
        # It is left here for posterity, since I suspect we will need it again someday.
        # if not elem.is_displayed():
        #     return False
        # elemX = elem.location['x']
        # pageWidth = self.browser.execute_script('return $(window).width();')
        # return 0 <= elemX < pageWidth
        return elem.is_displayed()

    def _get_each_bargraph_tag(self):
        """ Returns a list of candidate's tags in the interactive bargraph """
        bargraph = self.browser.find_element_by_id('bargraph-interactive-body')
        return bargraph.find_elements_by_tag_name('tspan')

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

    def test_render(self):
        """ Tests the resizing of the window and verifies that things fit """
        def fits_inside(elementWidth, pageWidth):
            # Checks that the element takes up at least 75% of the page
            roomForMarginsPct = 0.25

            minWidth = pageWidth * (1 - roomForMarginsPct)
            return minWidth < elementWidth <= pageWidth

        def test_sane_resizing_of(elementId, tightlyFitWidths, widthsWithExtraRoom):
            """
                NOTE: the sizes used here may have a different devicePixelRatio than your machine.
                tightlyFitWidths is a list of widths to test which must fill the window
                widthsWithExtraRoom is a size that's too large and will leave whitespace
            """
            self._disable_all_animations()
            height = 600
            tooSmallWidth = 250
            self.browser.set_window_size(tooSmallWidth, height)

            # With the smallest width, ensure it doesn't get too small
            self._ensure_eventually_asserts(
                lambda: self.assertGreater(self._get_width(elementId), tooSmallWidth))

            # With the rest, ensure it fills the width until maxSize
            for width in tightlyFitWidths:
                self.browser.set_window_size(width, height)
                self._ensure_eventually_asserts(
                    lambda w=width: self.assertTrue(fits_inside(self._get_width(elementId), w)))

            self.browser.set_window_size(widthsWithExtraRoom, height)
            self._ensure_eventually_asserts(
                lambda: self.assertLessEqual(self._get_width(elementId), widthsWithExtraRoom))

        def change_barchart_orientation():
            self._go_to_tab("settings-tab")
            self.browser.find_elements_by_id("bargraphOptions")[0].click()  # Open the dropdown
            # Check the box (the second one, which isn't hidden)
            self.browser.find_elements_by_name("doUseHorizontalBarGraph")[1].click()
            self.browser.find_elements_by_id("updateSettings")[0].click()  # Hit submit
            self._go_to_tab("barchart-tab")

        # Test the smallest supported width we can
        minimumResizeableWidth = 400 if self.isUsingSauceLabs else 300

        # Multiwinner maxes out at 500px
        self._upload(filenames.MULTIWINNER)
        test_sane_resizing_of("bargraph-interactive-body", [minimumResizeableWidth, 450], 550)

        self._ensure_eventually_asserts(
            lambda: self.assertFalse(self._is_visible("sankey-body")))
        self._go_to_tab("sankey-tab")
        self.assertTrue(self._is_visible("sankey-svg"))
        test_sane_resizing_of("sankey-svg", [minimumResizeableWidth, 600], 1000)

        # Opavote is originally tall but not too wide
        self._upload(filenames.OPAVOTE)
        test_sane_resizing_of("bargraph-interactive-body", [minimumResizeableWidth, 600], 800)
        # Sankey no longer gets huge - it caps out at 960px wide
        self._go_to_tab("sankey-tab")
        test_sane_resizing_of("sankey-svg", [minimumResizeableWidth, 800], 1200)
        # Make the barchart vertical
        change_barchart_orientation()
        # Should have the same max width here...:( (TODO: set the device pixel ratio
        # such that this can get bigger...?)
        test_sane_resizing_of("bargraph-interactive-body", [minimumResizeableWidth, 600], 800)

        # Now let's look at sankey and the tables
        self._upload(filenames.THREE_ROUND)
        self._go_to_tab("sankey-tab")
        test_sane_resizing_of("sankey-svg", [minimumResizeableWidth, 450], 900)

        # This one sidescrolls on mobile, it's a fixed size
        self._go_to_tab("single-table-summary-tab")
        test_sane_resizing_of("single-table-summary-table", [800], 1300)

    def test_oneround_zerovote(self):
        """ Tests we do something sane in a single-round zero-vote election """
        # Regression test: size of graph with one round, with votes
        self.browser.set_window_size(800, 800)
        self._upload(filenames.ONE_ROUND)
        assert self._get_height("bargraph-interactive-body") < 800

        # Regression test: one round, zero-votes (NaN-checking)
        self._upload(filenames.ZERO_VOTE_ELECTION)
        interactiveBargraph = self.browser.find_element_by_id("bargraph-interactive-body")
        elemsInOrder = interactiveBargraph.find_elements_by_class_name("dataLabel")

        # Be very sure there are no NaNs in the number of votes.
        # The specific text here isn't important, just that it doesn't say "0 (NaN%)"
        self.assertEqual(len(elemsInOrder), 4)
        self.assertEqual(elemsInOrder[0].get_attribute('innerHTML'), "0  ")
        self.assertEqual(elemsInOrder[1].get_attribute('innerHTML'), "0  ")
        self.assertEqual(elemsInOrder[2].get_attribute('innerHTML'), "Another body")
        self.assertEqual(elemsInOrder[3].get_attribute('innerHTML'), "Somebody")

    def test_no_threshold_draws_no_line(self):
        """ Tests that no threshold line is drawn if the threshold is not provided """
        xpathsOfLines = ['//*[@id="threshold#bargraph-interactive-body"]',
                         '//*[@id="threshold-hover#bargraph-interactive-body"]']

        # Make sure it does exist when there is a threshold
        self._upload(filenames.ONE_ROUND)
        for xpath in xpathsOfLines:
            self.assertEqual(len(self.browser.find_elements_by_xpath(xpath)), 1)

        # Make sure it does exist when there is a threshold
        self._upload(filenames.NO_THRESHOLD)
        for xpath in xpathsOfLines:
            self.assertEqual(len(self.browser.find_elements_by_xpath(xpath)), 0)

    def test_settings_tab(self):
        """ Tests the functionality of the settings tab """
        self._disable_all_animations()

        # Upload with non-default setting: hiding sankey tab.
        self.open('/upload.html')
        fileUpload = self.browser.find_element_by_id("jsonFile")
        fileUpload.send_keys(os.path.join(os.getcwd(), filenames.ONE_ROUND))
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("hideSankey")[1].click()
        self.browser.find_element_by_id("uploadButton").click()  # Hit upload
        assert not self._is_visible("sankey-body")

        # Go to the settings tab
        self._go_to_tab("settings-tab")

        # Then, toggle on the sankey tab from the settings page
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("hideSankey")[1].click()
        self.browser.find_elements_by_id("updateSettings")[0].click()  # Hit submit
        assert self._is_visible("sankey-tab")

        # Finally, toggle it back off
        self._go_to_tab("settings-tab")
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("hideSankey")[1].click()
        self.browser.find_elements_by_id("updateSettings")[0].click()  # Hit submit
        assert not self._is_visible("sankey-tab")

        self._assert_log_len(0)

    def test_setting_eliminated_colors(self):
        """ Ensure eliminated color setting can be changed """
        def _get_eliminated_color():
            # Move the slider to stop animation
            self.browser.execute_script("trs_moveSliderTo('bargraph-slider-container', 4)")

            # Get an eliminated bar by its text
            bargraph = self.browser.find_element_by_id('bargraph-interactive-body')
            cssSelector = "path[data-original-title=\"On Round 1, has 64 votes (16%)\"]"
            lastBarInLastRoundList = bargraph.find_elements_by_css_selector(cssSelector)
            self.assertEqual(len(lastBarInLastRoundList), 1)
            lastBarInLastRound = lastBarInLastRoundList[0]

            # Get its color
            return lastBarInLastRound.value_of_css_property("fill")

        self._upload(filenames.MULTIWINNER)

        gray = "rgb(204, 204, 204)"
        self._ensure_eventually_asserts(lambda: self.assertEqual(_get_eliminated_color(), gray))

        # Change option to show a dim version of the last-round color
        self._go_to_tab("settings-tab")
        self.browser.find_elements_by_id("bargraphOptions")[0].click()  # Open the dropdown
        options = Select(self.browser.find_element_by_id("eliminationBarColor"))
        options.select_by_index(2)
        self.browser.find_elements_by_id("updateSettings")[0].click()  # Hit submit

        notgray = "rgb(238, 237, 241)"
        self._ensure_eventually_asserts(lambda: self.assertEqual(_get_eliminated_color(), notgray))

    def test_surplus_hidden(self):
        """ Ensure residual surplus is hidden """
        # 5 candidates: residual surplus hidden, inactive ballots visible
        self._upload(filenames.MULTIWINNER)
        self.assertEqual(len(self._get_each_bargraph_tag()), 6)

    def test_oembed(self):
        """ Tests the functionality of the oembed feature"""
        self._upload_something_if_needed()

        # Sanity check that a json exists
        uploadedPath = urlparse(self.browser.current_url).path
        oembedJsonUrl = self.browser.find_element_by_id("oembed").get_attribute('href')
        embeddedUrl = uploadedPath.replace('v/', 've/')

        # Sanity check
        self.open(uploadedPath)

        # Verify discoverability.
        # The response is a JSON, which means on the first load without cache, there is
        # an error about missing favicons. Hard-refresh without cache to ensure we get
        # this error; without this, re-runs of the same TravisCI run will not have
        # this error.
        self.browser.get(oembedJsonUrl)
        self.browser.execute_script("location.reload(true);")
        time.sleep(0.2)  # some breathing room after the refresh
        self._assert_log_len(self._num_log_errors_for_missing_favicon())

        # Verify the JSON is sane and has all required fields
        responseText = self.browser.find_element_by_xpath("//pre").text

        responseData = json.loads(responseText)
        assert responseData['version'] == "1.0"
        assert responseData['type'] == "rich"
        assert responseData['width']
        assert responseData['height']

        # Note: ensure it ends with ?vistype not &vistype
        url = responseData['url']
        html = responseData['html']

        # Embedly requires the iframe URL is secure
        assert url.startswith('http')
        assert 'https' in html
        urlWithHttps = url.replace('http', 'https')
        assert html[html.find(urlWithHttps) + len(urlWithHttps)] == "?"

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
            self.browser.find_element_by_id("embedded-body")

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
            localBrowser = TestHelpers.get_headless_browser()

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
            loadWithoutCache = measure_load_time(f"{fn1}?hideSankey=on")
            loadWithCache = measure_load_time(f"{fn1}?hideSankey=on")
            # Verify that it's at least 2x faster with cache (closer to 5x on
            # selenium, 200x in real life)
            return loadWithoutCache > loadWithCache * 2

        # Upload a file, check cache
        self._upload(filenames.OPAVOTE)
        fn1 = "/v/opavote-fairvote"
        assert is_cache_much_faster()

        # Uploading should clear all cache
        self._upload(filenames.ONE_ROUND)
        assert is_cache_much_faster()

        # But just visiting the upload page and returning should not clear cache
        self.open("/upload.html")
        assert not is_cache_much_faster()

    def test_sharetab_copy_paste(self):
        """ Check that the share tab can be copy/paste wiki & html successfully. """
        self._upload_something_if_needed()
        self._go_to_tab("share-tab")

        # Check the wikicode
        textAreaValues = []
        for elementId in ("wikicode", "htmlembedexport"):
            self.browser.execute_script(f"document.getElementById('{elementId}').scrollIntoView();")

            # Grab the element and read its value
            textarea = self.browser.find_element_by_id(elementId)
            initialText = textarea.get_attribute('value')
            textAreaValues.append(initialText)

            # Ensure clicking copies to keyboard
            textarea.click()
            textarea.send_keys(Keys.BACKSPACE)
            textarea.send_keys("Different text")

            # Make sure it's different
            assert initialText != textarea.get_attribute('value')

            # Select all, delete, paste
            ActionChains(self.browser).key_down(CONTROL_KEY)\
                                      .key_down('a')\
                                      .key_up('a')\
                                      .key_up(CONTROL_KEY) \
                                      .perform()
            ActionChains(self.browser).key_down(Keys.BACKSPACE)\
                                      .key_up(Keys.BACKSPACE)\
                                      .perform()
            # Note: don't keyup or `v` or saucelabs may double-paste
            ActionChains(self.browser).key_down(CONTROL_KEY)\
                                      .key_down('v')\
                                      .perform()

            # Assert we have the original text back
            self._ensure_eventually_asserts(
                lambda text=initialText, textarea=textarea: self.assertEqual(
                    text, textarea.get_attribute('value')))

        # Verify the values are sane...somewhat
        wiki = textAreaValues[0]
        assert 'wikitable' in wiki
        assert 'Macomb' in wiki
        html = textAreaValues[1]
        assert html.startswith('<iframe')

    def test_sharetab_sane_links(self):
        """ Check that the share tab has sane links for all buttons """
        self._upload_something_if_needed()
        self._go_to_tab("share-tab")

        # Now sanity check that each of the buttons have URLs
        allLinks = self.browser.find_elements_by_css_selector('#sharecontainer a')
        allImages = self.browser.find_elements_by_css_selector('#sharecontainer img')
        self.assertEqual(len(allLinks), 6)

        # Make sure links are sane enough

        # Make sure all links are sane enough and align with images
        for link, image in zip(allLinks, allImages):
            # Read the filename from the image path, which magically corresponds to URLs
            imageSource = image.get_attribute('src')
            imageFilename = os.path.basename(urlparse(imageSource).path)
            imagePathWithoutSuffix = imageFilename[:-4]

            # Read the link href
            href = link.get_attribute('href')

            # Validate the hrefs
            if imagePathWithoutSuffix == 'email':
                assert href.startswith('mailto:?')
            else:
                assert href.startswith('https://')
                if imagePathWithoutSuffix != 'telegram':
                    assert imagePathWithoutSuffix in href
                else:
                    assert 't.me' in href

    def test_slider_animates_and_summary_shown(self):
        """ Check that the share tab has sane links for all buttons """
        # Upload something with few rounds so the animation doesn't take too long
        self._upload(filenames.THREE_ROUND)

        # Ensure the animation started
        WebDriverWait(self.browser, timeout=0.5, poll_frequency=0.1).until(
            lambda d: self.browser.execute_script("return hasAnimatedSlider;"))

        # Ensure description is inital summary
        desc = self.browser.find_element_by_id('bargraph-interactive-round-description')
        self._ensure_eventually_asserts(
            lambda: self.assertIn('what happened in each round', desc.text))

        # Now disable animations to speed them up
        self._disable_all_animations()
        self._disable_bargraph_slider_timer()

        # Wait for animation to complete
        WebDriverWait(self.browser, timeout=0.5, poll_frequency=0.1).until(
            lambda d: self.browser.execute_script("return !isBargraphAnimationInProgress;"))

        # Check that the text hasn't changed
        self._ensure_eventually_asserts(
            lambda: self.assertIn('what happened in each round', desc.text))

        # Now move the slider
        self.browser.execute_script("trs_moveSliderTo('bargraph-slider-container', 0)")

        # Check that the text updates now
        self._ensure_eventually_asserts(
            lambda: self.assertNotIn('what happened in each round', desc.text))

    def test_timeline_and_longform_desc(self):
        """ Ensures the timeline show correct data, and that it can be toggled to show
            the longform description instead """
        self._disable_all_animations()
        self._upload(filenames.MULTIWINNER)

        # The expand button is hidden
        expandButton = self.browser.find_element_by_class_name('expand-collapse-button')
        self.assertEqual(self._is_elem_visible(expandButton), False)

        # And longform description is visible
        desc = self.browser.find_element_by_id('bargraph-interactive-round-description')
        self._ensure_eventually_asserts(
            lambda: self.assertEqual(self._is_elem_visible(desc), True))

        # Cancel animation by clicking on first element
        # Note: trs_moveSliderTo does not cancel animation, only clicking does
        container = self.browser.find_element_by_id('bargraph-slider-container')
        firstTick = container.find_elements_by_class_name('slider-item')[0]
        # Note - need an action chain because the first tick isn't actually receiving the click,
        # the slider itself handles it, and selenium throws ElementClickInterceptedException
        ActionChains(self.browser).move_to_element(firstTick)\
            .click(firstTick)\
            .perform()

        # Move animation to end
        self.browser.execute_script("trs_moveSliderTo('bargraph-slider-container', 4)")

        # Give JS a second to catch up with the animation
        self._ensure_eventually_asserts(
            lambda: self.assertIn('Larry Edwards had more than enough', desc.text))
        self.assertNotIn('Larry Edwards reached the threshold of 134', desc.text)

        # Go to the settings tab
        self._go_to_tab("settings-tab")

        # Then, toggle on the sankey tab from the settings page
        self.browser.find_element_by_id("bargraphOptions").click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("doUseDescriptionInsteadOfTimeline")[1].click()
        self.browser.find_element_by_id("updateSettings").click()  # Hit submit

        # Go to the bargraph
        self._go_to_tab("barchart-tab")

        # Now the the expand/collapse button is visible
        expandButton = self.browser.find_element_by_class_name('expand-collapse-button')
        self.assertEqual(self._is_elem_visible(expandButton), True)
        expandButton.click()

        # And longform description is hidden
        desc = self.browser.find_element_by_id('bargraph-interactive-round-description')
        self.assertEqual(self._is_elem_visible(desc), False)

        # Ensure the timeline has all expected data
        elems = self.browser.find_elements_by_class_name('timeline-info-good')
        self.assertEqual(len(elems), 2 * 2)  # two elected, x2 graphs

        elems = self.browser.find_elements_by_class_name('timeline-info-bad')
        self.assertEqual(len(elems), 2 * 2)  # two eliminated, x2 graphs

        elems = self.browser.find_elements_by_class_name('timeline-info')
        # 2 * 9: win/loss from above + three infos: initial, redistributed x2, transfer x2
        self.assertEqual(len(elems), 2 * 9)

    def test_crazy_names(self):
        """ Ensure that crazy names are correctly handled, escaping quotes and ensuring
            too-long filenames are split at sane points """
        self._upload(filenames.CRAZY_NAMES)
        tags = self._get_each_bargraph_tag()
        expectedTags = [
            "Winner!",

            "3",

            "A malicious name with",
            "\"quotes\" and 'ticks'",

            "A malicious name",
            "<b>with html</b>",

            "Don't split me",

            "A name",
            "(but now with commas, and parenthesis, and a number: #1)",

            "A name",
            "(but now (with nested parenthesis))",

            "A name, however this time,",
            "with several commas",

            "Anamewithnospacesat-",
            "allbutidohaveabang!",

            "Anamewithnospacesata-",
            "llholymolyguacamole",

            "A name,",
            "however this time with a comma",

            "A longish name",
            "(and an additional parenthetical)",

            "A very long name with only spaces separating",
            "everything wow this name is so long"
        ]
        for i, tag in enumerate(tags):
            self.assertEqual(tag.text, expectedTags[i])

    def test_faq(self):
        """ Test the FAQ button works """
        self._upload(filenames.MULTIWINNER)

        # Move the slider and complete all other animations
        self._disable_all_animations()
        self._disable_bargraph_slider_timer()
        self.browser.execute_script("trs_moveSliderTo('bargraph-slider-container', 3);")
        self.browser.execute_script("showFaqButtonNow();")

        # Starts at 65px
        div = self.browser.find_element_by_id('round-description-wrapper')
        self._ensure_eventually_asserts(lambda: self.assertEqual(div.size['height'], 65))

        # Expands to fit the FAQs
        whyButton = self.browser.find_element_by_id('bargraph-interactive-why-button')
        self._ensure_eventually_asserts(lambda: self.assertTrue(self._is_elem_visible(whyButton)))
        whyButton.click()
        self._ensure_eventually_asserts(lambda: self.assertGreater(div.size['height'], 65))

        # Move the slider again
        self.browser.execute_script("trs_moveSliderTo('bargraph-slider-container', 1)")

        # Restores size on new round
        self._ensure_eventually_asserts(lambda: self.assertEqual(div.size['height'], 65))

    def test_sankey_hide_round_num(self):
        """ Test the setting "show sankey round number" """
        self._upload(filenames.MULTIWINNER)

        self._go_to_tab("sankey-tab")
        labels = self.browser.find_elements_by_class_name('roundLabels')
        self.assertEqual(len(labels), 5)

        # Go to the settings tab
        self._go_to_tab("settings-tab")

        # Then, toggle on the sankey tab from the settings page
        self.browser.find_element_by_id("sankeyOptions").click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("showRoundNumbersOnSankey")[1].click()
        self.browser.find_element_by_id("updateSettings").click()  # Hit submit

        # Go to the bargraph, now it should be zero
        self._go_to_tab("sankey-tab")
        labels = self.browser.find_elements_by_class_name('roundLabels')
        self.assertEqual(len(labels), 0)

    def test_sidecar_file_elimination_order(self):
        """ Tests the elimination order of the sidecar file """
        self._upload(filenames.THREE_ROUND, filenames.THREE_ROUND_SIDECAR)
        candidates = self.browser.find_element_by_id("candidateNamesWrapper")
        elemsInOrder = candidates.find_elements_by_class_name("dataLabel")

        self.assertEqual(len(elemsInOrder), 4)
        self.assertEqual(elemsInOrder[0].get_attribute('innerHTML'), "Banana")
        self.assertEqual(elemsInOrder[1].get_attribute('innerHTML'), "Blackberry")
        self.assertEqual(elemsInOrder[2].get_attribute('innerHTML'), "Vanilla")
        self.assertEqual(elemsInOrder[3].get_attribute('innerHTML'), "Strawberry")

    def test_auth_flow(self):
        """
        Auth flow: register, get activation link from email, login, upload.
        Additional tests in the auth/ app.
        This is a broad integration test.
        """
        username = 'livebrowseruser'
        password = str(uuid.uuid4())

        def register():
            self.open(reverse('django_registration_register'))
            self.browser.find_element_by_id("id_username").send_keys(username)
            self.browser.find_element_by_id("id_password1").send_keys(password)
            self.browser.find_element_by_id("id_password2").send_keys(password)
            self.browser.find_element_by_id("id_email").send_keys("test@example.com")
            self.browser.find_element_by_xpath("//input[@type='submit']").click()

        def login_via_upload_redirect():
            self.open(reverse('upload'))
            self.browser.find_element_by_id("id_username").send_keys(username)
            self.browser.find_element_by_id("id_password").send_keys(password)
            self.browser.find_element_by_xpath("//input[@type='submit']").click()

        def click_activation_link():
            emailBodyLines = test_mailbox.outbox[0].body.split('\n')
            emailBodyLink = [l for l in emailBodyLines if l.startswith('http')][0]
            emailBodyRelativeLink = urlparse(emailBodyLink).path
            self.open(emailBodyRelativeLink)

        # First logout
        TestHelpers.logout(self.client)

        # Upload should redirect to a page with id_username
        self.open(reverse('upload'))
        self.assertEqual(len(self.browser.find_elements_by_id("id_username")), 1)

        # Register - the user exists but is inactive
        register()
        self.assertEqual(len(get_user_model().objects.filter(username=username)), 1)
        self.assertFalse(get_user_model().objects.filter(username=username)[0].is_active)

        # Try to login before activation: fails, and the username field is still there
        login_via_upload_redirect()
        self.assertEqual(len(self.browser.find_elements_by_id("id_username")), 1)

        # Assert an email was sent
        self.assertEqual(len(test_mailbox.outbox), 1)
        self.assertEqual(test_mailbox.outbox[0].subject, 'RCVis account registration')

        # Now activate via email link
        click_activation_link()

        # Now login should succeed, and upload has no username field
        login_via_upload_redirect()
        self.assertEqual(len(self.browser.find_elements_by_id("id_username")), 0)

        # And for good measure, upload a file
        self._upload(filenames.ONE_ROUND)

    def test_embedded_scrollbars(self):
        """
        Ensure that on /vb/ and /ve/, there are no page scrollbars,
        only scrollbars in the main content. the header and footer are pinned.
        """
        def ensure_correct_sizes_of_body_and_content(width, height, heightOfHeaderAndFooter):
            # Resize. Note, we are resizing the broswer, not the viewport,
            # so on non-headless browsers (ie saucelabs) setting height to 800
            # will create a viewport / pageHeight / contentHeight of 712
            self.browser.set_window_size(width, height)

            # Get heights
            contentHeight = self.browser.execute_script('return document.body.scrollHeight')
            pageHeight = self.browser.execute_script('return document.body.clientHeight')

            # Ensure the page height fills the viewport
            self.assertEqual(contentHeight, pageHeight)

            # Ensure div is precisely the right size
            self.assertEqual(
                self._get_height('embedded-content'),
                pageHeight - heightOfHeaderAndFooter)

        self._upload_something_if_needed()

        headerHeight = 34
        footerHeight = 34

        # Check /vb/, which has a header and footer
        self.open(reverse('visualizeBallotpedia', args=(TestHelpers.get_latest_upload().slug,)))
        ensure_correct_sizes_of_body_and_content(600, 800, headerHeight + footerHeight)
        ensure_correct_sizes_of_body_and_content(600, 200, headerHeight + footerHeight)

        # Check /ve/, which only has a footer
        self.open(reverse('visualizeEmbedded', args=(TestHelpers.get_latest_upload().slug,)))
        ensure_correct_sizes_of_body_and_content(600, 800, footerHeight)
        ensure_correct_sizes_of_body_and_content(600, 200, footerHeight)
