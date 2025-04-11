"""
DataTables tests with a headless browser.

This testing requires heavy javascript interaction, so we do it
with a more-expensive selenium testing.
"""
from enum import Enum

from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.ui import WebDriverWait

from visualizer.tests import liveServerTestBaseClass


class element_is_enabled(object):
    """An expectation for checking that an element is enabled.

    locator - used to find the element
    returns the WebElement once it is disabled.
    """

    def __init__(self, locator, reverse=False):
        self.locator = locator
        self.reverse = reverse

    def __call__(self, driver):
        enabled = driver.find_element(*self.locator).is_enabled()
        if self.reverse:
            return not enabled
        else:
            return enabled


class DataTablesTests(liveServerTestBaseClass.LiveServerTestBaseClass):
    """ Tests for the DataTables library """
    class Button(Enum):
        """ Enumerator for the four buttons on DataTables """
        ADD_CANDIDATE = 0
        DELETE_CANDIDATE = 1
        ADD_ROUND = 2
        DELETE_ROUND = 3

    def _init_data_tables(self):
        self.open('/upload.html')
        self.browser.find_element(By.ID, 'swapDataTables').click()

    def _get_button(self, buttonEnum):
        buttons = self.browser.find_elements(By.CSS_SELECTOR, '.upload-tableoptions button')
        self.assertEqual(len(buttons), 4)
        return buttons[buttonEnum.value]

    def _fill_in_config(self):
        """ Fills in the top three inputs for the config """
        self.browser.find_element(By.ID, 'configElectionTitle').send_keys('electiontitle')
        self.browser.find_element(By.ID, 'configElectionDate').send_keys('12/05/2021')
        self.browser.find_element(By.ID, 'configThreshold').send_keys('10')

    def _click_button_n_times(self, buttonEnum, numTimes):
        button = self._get_button(buttonEnum)
        for _ in range(numTimes):
            button.click()

    def _make_table_of_size(self, rounds, candidates):
        """ Constructs a rounds-by-candidates sized table using the add/delete buttons """
        currRounds = self.browser.execute_script(
            'return upload.getUploadByDataTableTable().table.getColumnDefinitions().length - 1')
        roundsDiff = rounds - currRounds
        if roundsDiff < 0:
            self._click_button_n_times(self.Button.DELETE_ROUND, -roundsDiff)
        elif roundsDiff > 0:
            self._click_button_n_times(self.Button.ADD_ROUND, roundsDiff)

        currCandidates = self.browser.execute_script(
            'return upload.getUploadByDataTableTable().table.getRows().length')
        candidatesDiff = candidates - currCandidates
        if candidatesDiff < 0:
            self._click_button_n_times(self.Button.DELETE_CANDIDATE, -candidatesDiff)
        elif candidatesDiff > 0:
            self._click_button_n_times(self.Button.ADD_CANDIDATE, candidatesDiff)

    def _assert_ajax_response(self, message):
        self.browser.find_element(By.ID, 'validateButton').click()
        self._ensure_eventually_asserts(
            lambda: self.assertEqual(
                self.browser.find_element(By.ID, 'dataEntryValidationMessage').text,
                message))

    def _create_valid_1x1_table(self):
        self._fill_in_config()
        self._make_table_of_size(1, 1)
        nameScript = """
        const val = upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[0].getValue();
        val.candidateName = "Name";
        upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[0].setValue(val);
        """
        votesScript = 'return upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[1].setValue('
        self.browser.execute_script(nameScript)
        self.browser.execute_script(votesScript + '2)')

    def test_one_round_one_candidate(self):
        """
        The most basic test: remove two cols, two rows to get a 1x1 grid,
        and fill out valid data. Does it work?
        """
        self._init_data_tables()

        # Create, validate, then upload
        self._create_valid_1x1_table()
        self._assert_ajax_response('Data is valid!')
        self.browser.find_element(By.ID, 'uploadButton').click()

        # Go to the latest upload, make sure it worked
        wait = WebDriverWait(self.browser, 2)
        wait.until(expected_conditions.title_contains("electiontitle"))

        self.assertEqual(self.browser.find_elements(By.TAG_NAME, 'textarea')[0].text, "")

    def test_validation_controls_submit_button(self):
        """ Test that the submit button is only enabled after validation """
        cellId = 'dataTableWrapper_row_1_and_col_1_and_field_0_'
        with self.settings(RATE_LIMIT_AJAX=False):
            self._init_data_tables()

            # The upload button is disabled
            self._create_valid_1x1_table()
            self.assertFalse(self.browser.find_element(By.ID, 'uploadButton').is_enabled())

            # Validate, and then it's enabled
            self._assert_ajax_response('Data is valid!')
            self.assertTrue(self.browser.find_element(By.ID, 'uploadButton').is_enabled())

            # Any change disables the button
            votesScript = 'return upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[1].setValue('
            self.browser.execute_script(votesScript + '10)')
            self.assertFalse(self.browser.find_element(By.ID, 'uploadButton').is_enabled())

            # Invalid data keeps button disabled
            self.browser.execute_script(votesScript + '-1)')
            errorMessage = 'Error #10: Data is not valid: All vote counts must be positive'
            self._assert_ajax_response(errorMessage)
            self.assertFalse(self.browser.find_element(By.ID, 'uploadButton').is_enabled())

            # And we're back
            self.browser.execute_script(votesScript + '1)')
            self._assert_ajax_response('Data is valid!')
            self.assertTrue(self.browser.find_element(By.ID, 'uploadButton').is_enabled())

    def test_vote_counts_must_increase(self):
        """
        Tests the JS-based error message: vote counts shouldn't decrease
        """
        self._init_data_tables()
        setVotes1 = 'return upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[1].setValue(2)'
        setVotes2 = 'return upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[3].setValue(1)'
        setVotes2Update = 'return upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[3].setValue(10)'
        errCellClass = 'tabulator-alert-msg'

        # Create a 1x2 table with decreasing votes
        self._create_valid_1x1_table()
        self._make_table_of_size(2, 1)

        self.browser.execute_script(setVotes1)
        self.browser.execute_script(setVotes2)

        errorMessage = self._get_attr_from_class(errCellClass, 'innerText')
        self.assertTrue(errorMessage.startswith('Vote count decreased'))

        self.browser.find_element(By.CLASS_NAME, 'close-alert').click()

        # And make the error message clear
        self.browser.execute_script(setVotes2Update)
        self.assertTrue(
            len(self.browser.find_elements(By.CLASS_NAME, errCellClass)) == 0)

    def test_vote_counts_can_decrease_for_surplus(self):
        """
        Tests the JS-based error message: vote counts shouldn't decrease
        """
        self._init_data_tables()

        dropdown1 = 'return upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[2].setValue("Elected")'
        setVotes1 = 'return upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[1].setValue(2)'
        setVotes2 = 'return upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[3].setValue(1)'
        errCellClass = 'tabulator-alert-msg'

        # Create a 1x2 table with decreasing votes
        self._create_valid_1x1_table()
        self._make_table_of_size(2, 1)
        self.browser.execute_script(setVotes1)
        self.browser.execute_script(setVotes2)

        self.browser.find_element(By.CLASS_NAME, 'close-alert').click()
        # Set candidate to elected
        self.browser.execute_script(dropdown1)

        # Which makes this valid
        self.assertTrue(
            len(self.browser.find_elements(By.CLASS_NAME, errCellClass)) == 0)

        self._assert_ajax_response('Data is valid!')

    def test_dropdowns_disable_after_nonactive(self):
        """
        When the dropdown changes to elected or eliminated, can't change that anymore
        """
        self._init_data_tables()
        self._make_table_of_size(3, 1)
        self.browser.get_screenshot_as_file('screenshot.png')

        script = 'return upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[2].setValue('

        # 1 = eliminated
        # 2 = elected
        for i in range(1, 3):
            val = 'Elected'
            if i == 1:
                val = 'Eliminated'
            self.browser.execute_script(script + '"' + val + '")')
            dropdownId1Value = self.browser.execute_script(
                'return upload.getUploadByDataTableTable().table.getRow(1).getCells()[2].getValue()')
            dropdownId2Value = self.browser.execute_script(
                'return upload.getUploadByDataTableTable().table.getRow(1).getCells()[4].getValue()')
            dropdownId3Value = self.browser.execute_script(
                'return upload.getUploadByDataTableTable().table.getRow(1).getCells()[6].getValue()')
            self.assertEqual(dropdownId1Value, val)
            self.assertIsNone(dropdownId2Value)
            self.assertIsNone(dropdownId3Value)

    def test_electing_disables_rest_of_row_except_next(self):
        """
        When the dropdown changes to eliminated, the rest of the vote counts are disabled
        Similar for elected, except the very next cell is enabled
        """
        self._init_data_tables()
        self._make_table_of_size(3, 1)
        script = 'return upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[2].setValue('

        # 1 = eliminated
        # 2 = elected
        for i in range(1, 3):
            val = 'Elected'
            if i == 1:
                val = 'Eliminated'
            self.browser.execute_script(script + '"' + val + '")')
            votesId1Value = self.browser.execute_script(
                'return upload.getUploadByDataTableTable().table.getRow(1).getCells()[1].getValue()')
            votesId2Value = self.browser.execute_script(
                'return upload.getUploadByDataTableTable().table.getRow(1).getCells()[3].getValue()')
            votesId3Value = self.browser.execute_script(
                'return upload.getUploadByDataTableTable().table.getRow(1).getCells()[5].getValue()')
            self.assertEqual(0, votesId1Value)
            if i == 1:
                self.assertIsNone(votesId2Value)
            else:
                self.assertEqual(0, votesId2Value)
            self.assertIsNone(votesId3Value)

        """
        Check that unsafe names are correctly stripped
        """
        self._init_data_tables()
        self._create_valid_1x1_table()

        nameScript = """
        const val1 = upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[0].getValue();
        val1.candidateName = "&><'\\"";
        upload.getUploadByDataTableTable().table.getRow(1)._row.getCells()[0].setValue(val1);
        """

        self.browser.execute_script(nameScript)

        self._assert_ajax_response('Data is valid!')
        self.browser.find_element(By.ID, 'uploadButton').click()

        # Go to the latest upload, make sure it worked and has no errors
        wait = WebDriverWait(self.browser, 2)
        wait.until(expected_conditions.title_contains("electiontitle"))
