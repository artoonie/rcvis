"""
Integration tests with a live browser running the site.
This is specifically for rendering functions which we want to test with a non-headless browser.
If on CI, connects to SauceLabs.

Place StaticLiveServerTestCase tests here when you want the debugging features provided by
saucelabs, or in any test related to rendering since we get more accurate renders on
saucelabs non-headless browsers.
"""

import os
import platform

from django.urls import reverse
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import WebDriverException

from common.testUtils import TestHelpers
from visualizer.tests import filenames
from visualizer.tests import liveServerTestBaseClass


class LiveBrowserWithHeadTests(liveServerTestBaseClass.LiveServerTestBaseClass):
    """ Tests that launch a selenium browser """

    def setUp(self):
        """ Creates the selenium browser. If on CI, connects to SauceLabs """
        self.isUsingSauceLabs = "HEROKU_TEST_RUN_BRANCH" in os.environ
        super().setUp()

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

    def test_timeline_and_longform_desc(self):
        """ Ensures the timeline show correct data, and that it can be toggled to show
            the longform description instead """
        self._upload(filenames.MULTIWINNER)
        self._disable_all_animations()

        # The expand button is hidden
        expandButton = self.browser.find_element_by_class_name('expand-collapse-button')
        self.assertEqual(self._is_elem_visible(expandButton), False)

        # And longform description is visible
        desc = self.browser.find_element_by_id('bargraph-interactive-round-description')
        self._ensure_eventually_asserts(
            lambda: self.assertEqual(self._is_elem_visible(desc), True))

        # Cancel animation
        self._go_to_round_by_clicking(0)

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
        hackyXpathForWhyButton = '//*[@id="bargraph-interactive-why-button"]/a[1]'
        whyButton = self.browser.find_element_by_xpath(hackyXpathForWhyButton)
        self._ensure_eventually_asserts(lambda: self.assertTrue(self._is_elem_visible(whyButton)))
        whyButton.click()
        self._ensure_eventually_asserts(lambda: self.assertGreater(div.size['height'], 65))

        # Move the slider again
        self.browser.execute_script("trs_moveSliderTo('bargraph-slider-container', 1)")

        # Restores size on new round
        self._ensure_eventually_asserts(lambda: self.assertEqual(div.size['height'], 65))

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

    def test_sharetab_copy_paste(self):
        """ Check that the share tab can be copy/paste wiki & html successfully. """
        self._upload_something_if_needed()
        self._go_to_tab("share-tab")

        ctrl = Keys.COMMAND if platform.system() == "Darwin" else Keys.CONTROL

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
            ActionChains(self.browser).key_down(ctrl)\
                                      .key_down('a')\
                                      .key_up('a')\
                                      .key_up(ctrl) \
                                      .perform()
            ActionChains(self.browser).key_down(Keys.BACKSPACE)\
                                      .key_up(Keys.BACKSPACE)\
                                      .perform()
            # Note: don't keyup or `v` or saucelabs may double-paste
            ActionChains(self.browser).key_down(ctrl)\
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
