"""
Integration tests with a headless browser.
Place StaticLiveServerTestCase tests here when you want them to be faster on CI,
and likely will not need any of the rendering functionality provided by saucelabs.
"""

import json
import os
import time
import uuid
from urllib.parse import urlparse

from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.cache import cache
from django.core import mail as test_mailbox
from django.urls import reverse
from mock import patch
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait

from common.testUtils import TestHelpers
from common.viewUtils import get_data_for_view
from visualizer.models import TextForWinner
from visualizer.tests import filenames
from visualizer.tests import liveServerTestBaseClass

from . import executor_mock


# pylint: disable=too-many-public-methods
class LiveBrowserHeadlessTests(liveServerTestBaseClass.LiveServerTestBaseClass):
    """ Tests that launch a selenium browser """

    def _get_each_bargraph_tag(self):
        """ Returns a list of candidate's tags in the interactive bargraph """
        bargraph = self.browser.find_element(By.ID, 'bargraph-interactive-body')
        return bargraph.find_elements(By.TAG_NAME, 'tspan')

    def _go_to_without_cache(self, url):
        """
        To skip browser cache, use a fresh browser.
        and there doesn't seem to be an easy way to skip the cache every time:
        https://stackoverflow.com/a/9563341/1057105
        This also returns the local browser if you want to use it
        """
        localBrowser = TestHelpers.get_headless_browser()

        # First, navigate to a random URL to cache the static files
        localBrowser.get(self._make_url("/upload.html"))

        # Then, go to the URL we care about
        localBrowser.get(self._make_url(url))

        return localBrowser

    def _assert_cache_is_running(self):
        """
        Ensure bmemcached is running - always working with the current infra (filestyem-backed)
        but other types (memcached) need to be started before tests run
        """
        cache.set('key', 'value')
        if not cache.get('key') == 'value':
            print("You must start bmemcached before running these tests")
        self.assertEqual(cache.get('key'), 'value')

    def test_upload(self):
        """ Tests the upload page """
        self.open('/upload.html')

        fileUpload = self.browser.find_element(By.ID, "jsonFile")
        fileUpload.send_keys(os.path.join(os.getcwd(), filenames.THREE_ROUND))

        fileUpload = self.browser.find_element(By.ID, "candidateSidecarFile")
        fileUpload.send_keys(os.path.join(os.getcwd(), filenames.THREE_ROUND_SIDECAR))

        uploadButton = self.browser.find_element(By.ID, "uploadButton")
        uploadButton.click()

    def test_setting_eliminated_colors(self):
        """ Ensure eliminated color setting can be changed """
        def _get_eliminated_color():
            # Move the slider to stop animation
            self._go_to_round_by_clicking(3)

            # Get an eliminated bar by its text
            bargraph = self.browser.find_element(By.ID, 'bargraph-interactive-body')
            cssSelector = "path[data-original-title=\"On Round 1, has 64 votes (16%)\"]"
            WebDriverWait(self.browser, 5).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, cssSelector)))
            lastBarInLastRoundList = bargraph.find_elements(By.CSS_SELECTOR, cssSelector)
            self.assertEqual(len(lastBarInLastRoundList), 1)
            lastBarInLastRound = lastBarInLastRoundList[0]

            # Get its color
            return lastBarInLastRound.value_of_css_property("fill")

        self._upload(filenames.MULTIWINNER)

        gray = "rgb(204, 204, 204)"
        WebDriverWait(self.browser, 5).until(
            EC.visibility_of_element_located((By.ID, "barchart-tab")))
        self._ensure_eventually_asserts(lambda: self.assertEqual(_get_eliminated_color(), gray))

        # Change option to show a dim version of the last-round color
        self._go_to_tab("settings-tab")

        # Open the dropdown and wait for the animation to complete
        self.browser.find_elements(By.ID, "bargraphOptions")[0].click()

        # Select the element and submit
        options = Select(self.browser.find_element(By.ID, "eliminationBarColor"))
        options.select_by_index(2)
        WebDriverWait(self.browser, 5).until(
            EC.visibility_of_element_located((By.ID, "updateSettings")))
        self.browser.find_elements(By.ID, "updateSettings")[0].submit()

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
        oembedJsonUrl = self.browser.find_element(By.ID, "oembed").get_attribute('href')
        embeddedUrl = uploadedPath.replace('v/', 'vo/')

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
        self._assert_log_len(0)

        # Verify the JSON is sane and has all required fields
        responseText = self.browser.find_element(By.XPATH, "//pre").text

        responseData = json.loads(responseText)
        assert responseData['version'] == "1.0"
        assert responseData['type'] == "rich"
        assert responseData['width']
        assert responseData['height']

        # Note: ensure it ends with /barchart-interactive not ?vistype=barchart-interactive
        url = responseData['url']
        html = responseData['html']

        # Embedly requires the iframe URL is secure
        assert url.startswith('http')
        assert 'https' in html
        assert 'vistype' not in url
        assert 'barchart-interactive' in url
        assert '/vo/' in url

        # Verify base URL for embedded visualization does not have errors
        self.open(embeddedUrl)

        # Verify oembed URL is also valid
        self.open(url, prependServer=False)

    def test_legacy_embedded_urls(self):
        """ Test old /ve/ urls work """
        self._upload_something_if_needed()
        uploadedPath = urlparse(self.browser.current_url).path
        embeddedUrl = uploadedPath.replace('v/', 've/')
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
            # assert len(self.browser.find_elements(By.ID, "no-such-vistype-message")) == 0
            # Will throw exception if does not exist
            self.browser.find_element(By.ID, "embedded-body")

        # And even an invalid URL does not have errors - but it does show the error message
        errorUrl = embeddedUrl + "?vistype=no_such_vistype"
        self.open(errorUrl)
        # Will throw exception if does not exist
        self.browser.find_element(By.ID, "no-such-vistype-message")

        try:
            # Final sanity check - does getElementById do what we want? It
            # should throw an exception here.
            self.browser.find_element(By.ID, "sankey")
            assert False
        except NoSuchElementException:
            pass

    def test_cache_speed(self):
        """ Tests that caching works and that second loads are faster,
            even without browser cache """

        # Verify that the django.core.cache middleware works as expected
        def measure_load_time(localBrowser, url):
            localBrowser.get(self._make_url(url))

            WebDriverWait(localBrowser, timeout=5, poll_frequency=0.05).until(
                lambda d: d.find_element(By.ID, "page-top"))

            tic = localBrowser.execute_script('return performance.timing.fetchStart')
            toc = localBrowser.execute_script('return performance.timing.domLoading')
            return toc - tic

        def is_cache_much_faster(baseUrl, shouldItBe):
            urlsToLoad = [f"{baseUrl}?a={num}" for num in range(3)]
            urlToInitializeBrowserCache = baseUrl + "?just_to_init_browser_cache=1"

            # First, go to something that sets up the browser cache with static files
            localBrowser = self._go_to_without_cache(urlToInitializeBrowserCache)

            loadTimesWithoutCache = [measure_load_time(localBrowser, f) for f in urlsToLoad]
            loadTimesWithCache = [measure_load_time(localBrowser, f) for f in urlsToLoad]

            avgLoadTimeWithoutCache = sum(loadTimesWithoutCache) / len(loadTimesWithoutCache)
            avgLoadTimeWithCache = sum(loadTimesWithCache) / len(loadTimesWithCache)

            # Verify that it's at least 2x faster with cache (closer to 5x on
            # selenium, 200x in real life)
            print("For debugging this flaky test: Without cache", loadTimesWithoutCache)
            print("For debugging this flaky test: With cache", loadTimesWithCache)
            if shouldItBe:
                self.assertGreater(avgLoadTimeWithoutCache, avgLoadTimeWithCache * 2)
            else:
                self.assertLess(avgLoadTimeWithoutCache, avgLoadTimeWithCache * 2)

        self._assert_cache_is_running()

        # Upload a file
        self._upload_something_if_needed()
        baseUrl = reverse('visualize', args=(TestHelpers.get_latest_upload().slug,))

        # Force cache clearing
        TestHelpers.get_latest_upload().save()

        # Initial load should not be cached
        is_cache_much_faster(baseUrl, True)

        # Uploading should clear all cache
        self._upload(filenames.ONE_ROUND)
        is_cache_much_faster(baseUrl, True)

        # But just visiting the upload page and returning should not clear cache
        self.open("/upload.html")
        is_cache_much_faster(baseUrl, False)

    @patch('common.viewUtils.get_data_for_view', side_effect=get_data_for_view)
    def test_cache_works(self, dataForViewPatch):
        """ Tests that caching doesn't call the heavy graph-generation function more than once """
        def count_cache_misses_mocked(url):
            dataForViewPatch.reset_mock()
            self._go_to_without_cache(url)
            return dataForViewPatch.call_count

        self._assert_cache_is_running()

        self._upload_something_if_needed()
        url = reverse('visualize', args=(TestHelpers.get_latest_upload().slug,))

        # Updating should clear all cache
        TestHelpers.get_latest_upload().save()
        self.assertEqual(count_cache_misses_mocked(url), 1)

        # Going to the same URL should now be cached
        self.assertEqual(count_cache_misses_mocked(url), 0)

        # Uploading also clears cache, but this is accidental -
        # it just happens to save() multiple times
        self._upload(filenames.ONE_ROUND)
        self.assertEqual(count_cache_misses_mocked(url), 1)

    def test_sharetab_sane_links(self):
        """ Check that the share tab has sane links for all buttons """
        self._upload_something_if_needed()
        self._go_to_tab("share-tab")

        # Now sanity check that each of the buttons have URLs
        allLinks = self.browser.find_elements(By.CSS_SELECTOR, '#sharecontainer a')
        allImages = self.browser.find_elements(By.CSS_SELECTOR, '#sharecontainer img')
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

    def test_sharetab_can_switch_vistype(self):
        """ Check that the share tab has sane URLs for iframe and embedly codes """
        # Note: in this test, can't use .text on htmlTextarea, it shows the old, stale value?
        self._upload_something_if_needed()
        self._go_to_tab("share-tab")

        # On init, text area should have the initial URL
        htmlTextarea = self.browser.find_element(By.ID, 'htmlembedexport')
        self.assertIn('/bar', htmlTextarea.get_attribute("value"))

        # Change to the tabular selector
        selectElement = self.browser.find_element(By.ID, 'exportVistypeSelector')
        selector = Select(selectElement)
        selector.select_by_index(3)

        # Which should generate this url somewhere in the textarea
        expectedURL = reverse('visualizeEmbedly', args=(
            TestHelpers.get_latest_upload().slug, 'table'))

        # URL should be somewhere in the text area
        htmlTextarea = self.browser.find_element(By.ID, 'htmlembedexport')
        self.assertIn(expectedURL, htmlTextarea.get_attribute("value"))

        # Repeat for the plain URL
        selectElement = self.browser.find_element(By.ID, 'embedlyVistypeSelector')
        selector = Select(selectElement)
        selector.select_by_index(3)

        # But this time it should end with the URL, no extra code
        htmlTextarea = self.browser.find_element(By.ID, 'embedlyexport')
        assert htmlTextarea.get_attribute("value").endswith(expectedURL)

    def test_slider_animates_and_summary_shown(self):
        """ Check that the share tab has sane links for all buttons """
        # Upload something with few rounds so the animation doesn't take too long
        self._upload(filenames.THREE_ROUND)

        # Start the animation
        playbutton = self.browser.find_element(
            By.CSS_SELECTOR, '#bargraph-slider-container .round-player-play-btn')
        playbutton.click()

        # Ensure description is inital summary
        desc = self.browser.find_element(By.ID, 'bargraph-interactive-round-description')
        self._ensure_eventually_asserts(
            lambda: self.assertIn('Ranked Choice Voting election', desc.text))

        # Now disable animations to speed them up
        self._disable_all_animations()
        self._disable_bargraph_slider_timer()

        # Wait for animation to complete
        WebDriverWait(self.browser, timeout=10, poll_frequency=1).until(
            lambda d: self.browser.execute_script("return !barchartRoundPlayer.playing();"))

        # Check that the text hasn't changed
        self._ensure_eventually_asserts(
            lambda: self.assertIn('Ranked Choice Voting election', desc.text))

        # Now move the player
        self._go_to_round_by_clicking(0)

        # Check that the text updates now
        self._ensure_eventually_asserts(
            lambda: self.assertNotIn('Ranked Choice Voting election', desc.text))

    def test_crazy_names(self):
        """ Ensure that crazy names are correctly handled, escaping quotes and ensuring
            too-long filenames are split at sane points """
        self._upload(filenames.CRAZY_NAMES)
        tags = self._get_each_bargraph_tag()
        expectedTags = [
            "Winner!",

            "3",

            "A very long name (middle name)",
            "with parenthesis in the middle",

            "A malicious name with",
            "\"quotes\" and 'ticks'",

            "A malicious name <b>with html</b>",

            "Don't split me, I am only 40 characters",

            "A very long name",
            "(but now with commas, and parenthesis, and a number: #1)",

            "A very long name",
            "(but now (with nested parenthesis))",

            "A very long name, however this time,",
            "with several commas",

            "Averylongnamewithnospac-",
            "esatallbutidohaveabang!",

            "Averylongnamewithnospace-",
            "satallholymolyguacamole",

            "A very long name,",
            "however this time with a comma",

            "A longish name",
            "(and an additional parenthetical)",

            "A very long name with only spaces separating",
            "everything wow this name is so long"
        ]
        for i, tag in enumerate(tags):
            self.assertEqual(tag.text, expectedTags[i])

    def test_sankey_hide_round_num(self):
        """ Test the setting "show sankey round number" """
        self._upload(filenames.MULTIWINNER)

        self._go_to_tab("sankey-tab")
        labels = self.browser.find_elements(By.CLASS_NAME, 'roundLabels')
        self.assertEqual(len(labels), 5)

        # Go to the settings tab
        self._go_to_tab("settings-tab")

        # Then, toggle on the sankey tab from the settings page
        self.browser.find_element(By.ID, "sankeyOptions").click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements(By.NAME, "showRoundNumbersOnSankey")[1].click()
        self.browser.find_element(By.ID, "updateSettings").click()  # Hit submit
        WebDriverWait(self.browser, 5).until(
            EC.visibility_of_element_located((By.ID, "sankey-tab")))

        # Go to the bargraph, now it should be zero
        self._go_to_tab("sankey-tab")
        labels = self.browser.find_elements(By.CLASS_NAME, 'roundLabels')
        self.assertEqual(len(labels), 0)

    def test_sidecar_file_elimination_order(self):
        """ Tests the elimination order of the sidecar file """
        self._upload(filenames.THREE_ROUND, filenames.THREE_ROUND_SIDECAR)
        candidates = self.browser.find_element(By.ID, "candidateNamesWrapper")
        elemsInOrder = candidates.find_elements(By.CLASS_NAME, "dataLabel")

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
            submitButton = self.browser.find_element(By.XPATH, "//input[@type='submit']")
            self.browser.find_element(By.ID, "id_username").send_keys(username)
            self.browser.find_element(By.ID, "id_password1").send_keys(password)
            self.browser.find_element(By.ID, "id_password2").send_keys(password)
            self.browser.find_element(By.ID, "id_email").send_keys("test@example.com")
            submitButton.click()
            WebDriverWait(self.browser, 1).until(EC.staleness_of(submitButton))

        def login_via_upload_redirect():
            self.open(reverse('upload'))
            submitButton = self.browser.find_element(By.XPATH, "//input[@type='submit']")
            self.browser.find_element(By.ID, "id_username").send_keys(username)
            self.browser.find_element(By.ID, "id_password").send_keys(password)
            submitButton.click()
            WebDriverWait(self.browser, 1).until(EC.staleness_of(submitButton))

        def click_activation_link():
            emailBodyRelativeLink = TestHelpers.get_email_reg_link(test_mailbox.outbox)
            self.open(emailBodyRelativeLink)
            submitButton = self.browser.find_element(By.XPATH, "//button[@type='submit']")
            submitButton.click()
            WebDriverWait(self.browser, 1).until(EC.staleness_of(submitButton))

        # Make sure we won't sign up for mailchimp
        self.assertEqual(settings.MAILCHIMP_API_KEY, None)

        # First logout
        TestHelpers.logout(self.client)

        # Upload should redirect to a page with id_username
        self.open(reverse('upload'))
        self.assertEqual(len(self.browser.find_elements(By.ID, "id_username")), 1)

        # Register - the user exists but is inactive
        register()
        self.assertEqual(len(get_user_model().objects.filter(username=username)), 1)
        self.assertFalse(get_user_model().objects.filter(username=username)[0].is_active)

        # Try to login before activation: fails, and the username field is still there
        login_via_upload_redirect()
        usernameFields = self.browser.find_elements(By.ID, "id_username")
        self.assertEqual(len(usernameFields), 1)

        # Assert an email was sent
        self.assertEqual(len(test_mailbox.outbox), 1)
        self.assertEqual(test_mailbox.outbox[0].subject, 'RCVis account registration')

        # Now activate via email link
        click_activation_link()
        # Now login should succeed, and upload has no username field
        login_via_upload_redirect()
        self.assertEqual(len(self.browser.find_elements(By.ID, "id_username")), 0)

        # And for good measure, upload a file
        self._upload(filenames.ONE_ROUND)

    def test_embedded_animation_and_initial_text(self):
        """
        Ensure that on /vb/ and /ve/, initial text is the summary and there is no animation,
        but the "Play animation" button works.
        """
        self._upload_something_if_needed()
        self.open(reverse('visualizeBallotpedia', args=(TestHelpers.get_latest_upload().slug,)))

        # Look at the description, ensure it shows the summary
        span = self.browser.find_element(By.ID, 'bargraph-interactive-round-description')

        # Ensure animation has not begun
        self.assertFalse(self.browser.execute_script("return barchartRoundPlayer.playing();"))

        # Hit play button
        playbutton = self.browser.find_element(
            By.CSS_SELECTOR, '#bargraph-slider-container .round-player-play-btn')
        playbutton.click()

        # Ensure animation has begun
        WebDriverWait(self.browser, timeout=0.5, poll_frequency=0.1).until(
            lambda d: self.browser.execute_script("return barchartRoundPlayer.playing();"))

        # Ensure animation stops and new text appears, and that new text starts with
        # the round number. Click twice in case we were already on the first round.
        self._go_to_round_by_clicking(4)
        self._go_to_round_by_clicking(2)
        self._ensure_eventually_asserts(
            lambda: self.assertIn('Round 3', span.get_attribute('innerHTML')))

    def test_threshold_animates(self):
        """ Test that IRV shows no lines until the last round, and STV always shows """
        # Upload IRV results
        self._upload(filenames.THREE_ROUND)
        thresholdInteractive = self.browser.find_element(
            By.ID, 'thresholdbargraph-interactive-body')
        thresholdStatic = self.browser.find_element(By.ID, 'thresholdbargraph-fixed-body')

        self._disable_all_animations()
        self._disable_bargraph_slider_timer()

        # Round 1: Static is visible, interactive isn't
        self._go_to_round_by_clicking(0)
        self._ensure_eventually_asserts(
            lambda: self.assertEqual(thresholdInteractive.value_of_css_property("opacity"), "0"))
        self.assertEqual(thresholdStatic.value_of_css_property("opacity"), "1")

        # Round 3: Threshold now visible
        self._go_to_round_by_clicking(2)
        self._ensure_eventually_asserts(
            lambda: self.assertEqual(thresholdInteractive.value_of_css_property("opacity"), "1"))

        # STV has always-visible threshold
        self._upload(filenames.MULTIWINNER)
        threshold = self.browser.find_element(By.ID, 'thresholdbargraph-interactive-body')
        self._go_to_round_by_clicking(0)
        self.assertEqual(threshold.value_of_css_property("opacity"), "1")

    def test_no_threshold_draws_no_line(self):
        """ Tests that no threshold line is drawn if the threshold is not provided """
        xpathsOfLines = ['//*[@id="thresholdbargraph-interactive-body"]',
                         '//*[@id="threshold-hoverbargraph-interactive-body"]']

        # Make sure it does exist when there is a threshold
        self._upload(filenames.ONE_ROUND)
        for xpath in xpathsOfLines:
            self.assertEqual(len(self.browser.find_elements(By.XPATH, xpath)), 1)

        # Make sure it does exist when there is a threshold
        self._upload(filenames.NO_THRESHOLD)
        for xpath in xpathsOfLines:
            self.assertEqual(len(self.browser.find_elements(By.XPATH, xpath)), 0)

    def test_dominion_strips_quotes(self):
        """
        Dominion input might have JSON-safe names.
        This is a rRegression test to make sure we handle it right.
        """
        self._upload(filenames.DOMINION)

    def test_data_labels_elected(self):
        """
        Test that candidate labels show 'elected' only when a candidate has won.
        """
        def _assert_label_contains(roundIndex, candidateIndex, expectedText, expectedInLabel):
            # Click the first round and make sure no one is listed as elected.
            self._go_to_round_by_clicking(roundIndex)
            winnerLabels = self.browser.find_elements(
                By.CSS_SELECTOR, "#bargraph-interactive-body text.dataLabel:not([display])")
            winnerLabel = winnerLabels[candidateIndex].get_attribute("innerHTML")
            if expectedInLabel:
                self.assertIn(expectedText, winnerLabel)
            else:
                self.assertNotIn(expectedText, winnerLabel)

        self._upload(filenames.MULTIWINNER)
        _assert_label_contains(0, 0, "elected", False)
        _assert_label_contains(3, 0, "elected", True)

        self._upload(filenames.MULTIWINNER, additionalArgs={'textForWinner': TextForWinner.LEAD})
        _assert_label_contains(0, 0, "leading", False)
        _assert_label_contains(3, 0, "leading", True)

    def test_bolding_winners(self):
        """Test that no candidate names are bolded until the end of the round
        and that winners are bolded correctly in subsequent rounds."""
        # Upload file
        self._upload(filenames.MULTIWINNER)

        # Round 0: Move to round 0 and check boldness
        self._go_to_round_by_clicking(0)  # Click to go to round 1/page load
        candidateName = self.browser.find_elements(
            By.CSS_SELECTOR, '#bargraph-interactive-body #candidateNamesWrapper .dataLabel')
        self.assertEqual(
            candidateName[0].get_attribute("style"),
            "",
            "Candidates' names should NOT be bold.")

        # Round 3: Move to round 3 and check boldness
        self._go_to_round_by_clicking(3)  # Click to go to round 3
        candidateLabels = self.browser.find_elements(
            By.CSS_SELECTOR, '#bargraph-interactive-body #candidateNamesWrapper .dataLabel')
        self._ensure_eventually_asserts(lambda: self.assertEqual(
            candidateLabels[0].get_attribute("style"),
            "font-weight: bold;",
            "Winner name SHOULD BE bold."))

    def test_upload_starts_background_task(self):
        """Verify that background executor is triggered for uploads"""
        executorCallCount = executor_mock.submit.call_count
        self._upload(filenames.MULTIWINNER)
        self.assertEqual(executor_mock.submit.call_count, executorCallCount + 1)
