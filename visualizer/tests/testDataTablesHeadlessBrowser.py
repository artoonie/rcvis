"""
DataTables tests with a headless browser.

This testing requires heavy javascript interaction, so we do it
with a more-expensive selenium testing.
"""

from enum import Enum

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.ui import Select
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

    def _init_data_tables(self):
        self.open('/upload.html')
        self.browser.find_element_by_id('swapDataTables').click()

    def _get_button(self, buttonEnum):
        buttons = self.browser.find_elements_by_class_name('dt_left-panel-button')
        self.assertEqual(len(buttons), 4)
        return buttons[buttonEnum.value]

    def _fill_in_config(self):
        """ Fills in the top three inputs for the config """
        self.browser.find_element_by_id('configElectionTitle').send_keys('electiontitle')
        self.browser.find_element_by_id('configElectionDate').send_keys('12/05/2021')
        self.browser.find_element_by_id('configThreshold').send_keys('10')

    def _click_button_n_times(self, buttonEnum, numTimes):
        button = self._get_button(buttonEnum)
        for _ in range(numTimes):
            button.click()

    def _make_table_of_size(self, rounds, candidates):
        """ Constructs a rounds-by-candidates sized table using the add/delete buttons """
        currRounds = self.browser.execute_script('return dtGetNumRows("dataTableWrapper")')
        roundsDiff = rounds - currRounds
        if roundsDiff < 0:
            self._click_button_n_times(self.Button.DELETE_ROUND, -roundsDiff)
        elif roundsDiff > 0:
            self._click_button_n_times(self.Button.ADD_ROUND, roundsDiff)

        currCandidates = self.browser.execute_script('return dtGetNumRows("dataTableWrapper")')
        candidatesDiff = candidates - currCandidates
        if candidatesDiff < 0:
            self._click_button_n_times(self.Button.DELETE_CANDIDATE, -candidatesDiff)
        elif candidatesDiff > 0:
            self._click_button_n_times(self.Button.ADD_CANDIDATE, candidatesDiff)

    def _assert_ajax_response(self, message):
        self.browser.find_element_by_id('validateButton').click()
        self._ensure_eventually_asserts(lambda:
            self.assertEqual(
                self.browser.find_element_by_id('dataEntryValidationMessage').text,
                message
            )
        )

    def _create_valid_1x1_table(self):
        self._fill_in_config()
        self._make_table_of_size(1, 1)
        self.browser.find_element_by_id(
            'dataTableWrapper_row_1_and_col_0_and_field_0_').send_keys('name')
        self.browser.find_element_by_id(
            'dataTableWrapper_row_1_and_col_1_and_field_0_').send_keys(2)

    def test_one_round_one_candidate(self):
        """
        The most basic test: remove two cols, two rows to get a 1x1 grid,
        and fill out valid data. Does it work?
        """
        self._init_data_tables()

        # Create, validate, then upload
        self._create_valid_1x1_table()
        self._assert_ajax_response('Data is valid!')
        self.browser.find_element_by_id('uploadButton').click()

        # Go to the latest upload, make sure it worked
        wait = WebDriverWait(self.browser, 2)
        wait.until(expected_conditions.title_contains("electiontitle"))

        self.assertEqual(self.browser.find_elements_by_tag_name('textarea')[0].text, "")

    def test_validation_controls_submit_button(self):
        """ Test that the submit button is only enabled after validation """
        cellId = 'dataTableWrapper_row_1_and_col_1_and_field_0_'
        with self.settings(RATE_LIMIT_AJAX=False):
            self._init_data_tables()

            # The upload button is disabled
            self._create_valid_1x1_table()
            self.assertFalse(self.browser.find_element_by_id('uploadButton').is_enabled())

            # Validate, and then it's enabled
            self._assert_ajax_response('Data is valid!')
            self.assertTrue(self.browser.find_element_by_id('uploadButton').is_enabled())

            # Any change disables the button
            self._set_input_to(cellId, "1")
            self.browser.find_element_by_id(cellId).send_keys(Keys.TAB)
            self.assertFalse(self.browser.find_element_by_id('uploadButton').is_enabled())

            # Invalid data keeps button disabled
            self._set_input_to(cellId, "-1")
            errorMessage = 'Error #10: Data is not valid: All vote counts must be positive'
            self._assert_ajax_response(errorMessage)
            self.assertFalse(self.browser.find_element_by_id('uploadButton').is_enabled())

            # And we're back
            self._set_input_to(cellId, "1")
            self._assert_ajax_response('Data is valid!')
            self.assertTrue(self.browser.find_element_by_id('uploadButton').is_enabled())

    def test_vote_counts_must_increase(self):
        """
        Tests the JS-based error message: vote counts shouldn't decrease
        """
        self._init_data_tables()

        cellId1 = 'dataTableWrapper_row_1_and_col_1_and_field_0_'
        cellId2 = 'dataTableWrapper_row_1_and_col_2_and_field_0_'
        errCellId = 'dataTableWrapper_row_1_and_col_2_0_error_'

        # Create a 1x2 table with decreasing votes
        self._create_valid_1x1_table()
        self._make_table_of_size(2, 1)
        self._set_input_to(cellId1, "2")
        self._set_input_to(cellId2, "1")

        self.browser.find_element_by_id(cellId2).send_keys(Keys.TAB)
        errorMessage = self._get_attr_from_id(errCellId, 'innerHTML')
        assert errorMessage.startswith('Vote count cannot decrease')

    def test_dropdowns_disable_after_nonactive(self):
        """
        When the dropdown changes to elected or eliminated, can't change that anymore
        """
        self._init_data_tables()
        self._make_table_of_size(3, 1)

        dropdownId1 = 'dataTableWrapper_row_1_and_col_1_and_field_1_'
        dropdownId2 = 'dataTableWrapper_row_1_and_col_2_and_field_1_'
        dropdownId3 = 'dataTableWrapper_row_1_and_col_3_and_field_1_'

        # 1 = eliminated
        # 2 = elected
        for i in range(1, 3):
            options = Select(self.browser.find_element_by_id(dropdownId1))
            options.select_by_index(i)

            self.assertTrue(self.browser.find_element_by_id(dropdownId1).is_enabled())
            self.assertFalse(self.browser.find_element_by_id(dropdownId2).is_enabled())
            self.assertFalse(self.browser.find_element_by_id(dropdownId3).is_enabled())

    def test_electing_disables_rest_of_row_except_next(self):
        """
        When the dropdown changes to eliminated, the rest of the vote counts are disabled
        Similar for elected, except the very next cell is enabled
        """
        self._init_data_tables()
        self._make_table_of_size(3, 1)

        dropdownId1 = 'dataTableWrapper_row_1_and_col_1_and_field_1_'
        inputId1 = 'dataTableWrapper_row_1_and_col_1_and_field_0_'
        inputId2 = 'dataTableWrapper_row_1_and_col_2_and_field_0_'
        inputId3 = 'dataTableWrapper_row_1_and_col_3_and_field_0_'

        # 1 = eliminated
        # 2 = elected
        for i in range(1, 3):
            options = Select(self.browser.find_element_by_id(dropdownId1))
            options.select_by_index(i)

            self.assertTrue(self.browser.find_element_by_id(inputId1).is_enabled())
            if i == 1:
                self.assertFalse(self.browser.find_element_by_id(inputId2).is_enabled())
            else:
                self.assertTrue(self.browser.find_element_by_id(inputId2).is_enabled())
            self.assertFalse(self.browser.find_element_by_id(inputId3).is_enabled())
