"""
DataTables tests with a headless browser.

This testing requires heavy javascript interaction, so we do it
with a more-expensive selenium testing.
"""

from enum import Enum

from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.ui import WebDriverWait

from visualizer.tests import liveServerTestBaseClass


class DataTablesTests(liveServerTestBaseClass.LiveServerTestBaseClass):
    """ Tests for the DataTables library """
    class Button(Enum):
        """ Enumerator for the four buttons on DataTables """
        ADD_ROUND = 0
        DELETE_ROUND = 1
        ADD_CANDIDATE = 2
        DELETE_CANDIDATE = 3

    def _get_button(self, buttonEnum):
        buttons = self.browser.find_elements_by_class_name('dt_left-panel-button')
        self.assertEqual(len(buttons), 4)
        return buttons[buttonEnum.value]

    def test_one_round_one_candidate(self):
        """
        The most basic test: remove two cols, two rows to get a 1x1 grid,
        and fill out valid data. Does it work?
        """
        # Go to data tables
        self.open('/upload.html')
        self.browser.find_element_by_id('swapDataTables').click()

        # Gather buttons
        deleteRoundButton = self._get_button(self.Button.DELETE_ROUND)
        deleteCandidateButton = self._get_button(self.Button.DELETE_CANDIDATE)

        # Delete two rounds
        deleteRoundButton.click()
        deleteRoundButton.click()

        # Delete two candidates
        deleteCandidateButton.click()
        deleteCandidateButton.click()

        # Fill in the remaining entry: candidate name and vote count
        self.browser.find_element_by_id(
            'dataTableWrapper_row_1_and_col_0_and_field_0_').send_keys('name')
        self.browser.find_element_by_id(
            'dataTableWrapper_row_1_and_col_1_and_field_0_').send_keys(2)

        self.browser.find_element_by_id('configElectionTitle').send_keys('t')
        self.browser.find_element_by_id('configElectionDate').send_keys('12/05/2021')
        self.browser.find_element_by_id('configThreshold').send_keys('1')

        self.browser.find_element_by_id('validateButton').click()
        validationText = self.browser.find_element_by_id('dataEntryValidationMessage').text
        self.assertEqual(validationText, 'Data is valid!')

        self.browser.find_element_by_id('uploadButton').click()

        # Go to the latest upload, make sure it worked
        wait = WebDriverWait(self.browser, 2)
        wait.until(expected_conditions.title_contains("Failed Upload"))

        self.assertEqual(self.browser.find_elements_by_tag_name('textarea')[0].text, "")
