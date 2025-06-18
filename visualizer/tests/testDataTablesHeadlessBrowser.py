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

        helperFunctions = """
        window.dtTestGetter = function(row, col) {
          return upload.getUploadByDataTableTable().table.getRow(row)._row.getCells()[col];
        }
        window.dtTestSetter = function(row, col, value) {
          // For some reason we have to call this twice. The first time, the formatter
          // runs before the validator, so it's formatting on stale data.
          dtTestGetter(row, col).setValue(value);
          return dtTestGetter(row, col).setValue(value);
        }
        """
        self.browser.execute_script(helperFunctions)

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
        const val = dtTestGetter(1, 0).getValue();
        val.candidateName = "Name";
        dtTestSetter(1, 0, val);
        """
        votesScript = "return dtTestSetter(1, 1, 2);"
        self.browser.execute_script(nameScript)
        self.browser.execute_script(votesScript)

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
        with self.settings(RATE_LIMIT_AJAX=False):
            self._init_data_tables()

            # The upload button is disabled
            self._create_valid_1x1_table()
            self.assertFalse(self.browser.find_element(By.ID, 'uploadButton').is_enabled())

            # Validate, and then it's enabled
            self._assert_ajax_response('Data is valid!')
            self.assertTrue(self.browser.find_element(By.ID, 'uploadButton').is_enabled())

            # Any change disables the button
            self.browser.execute_script("dtTestSetter(1, 1, 10);")
            self.assertFalse(self.browser.find_element(By.ID, 'uploadButton').is_enabled())

            # Invalid data keeps button disabled
            self.browser.execute_script("dtTestSetter(1, 1, -1);")
            errorMessage = 'Error #10: Data is not valid: All vote counts must be positive'
            self._assert_ajax_response(errorMessage)
            self.assertFalse(self.browser.find_element(By.ID, 'uploadButton').is_enabled())

            # And we're back
            self.browser.execute_script("dtTestSetter(1, 1, 1);")
            self._assert_ajax_response('Data is valid!')
            self.assertTrue(self.browser.find_element(By.ID, 'uploadButton').is_enabled())

    def test_vote_counts_must_increase(self):
        """
        Tests the JS-based error message: vote counts shouldn't decrease
        """
        self._init_data_tables()

        # Create a 1x2 table with decreasing votes
        self._create_valid_1x1_table()
        self._make_table_of_size(2, 1)

        self.browser.execute_script("return dtTestSetter(1, 1, 2);")
        self.browser.execute_script("return dtTestSetter(1, 3, 1);")

        self.assertEqual(len(self.browser.find_elements(By.CLASS_NAME, 'validation-error')), 1)
        self.assertIn('Error for Name on Round 3: Vote count cannot decrease',
                      self.browser.find_element(By.CLASS_NAME, 'validation-error').text)

        # And make the error message clear
        self.browser.execute_script("return dtTestSetter(1, 3, 10);")
        self.assertEqual(len(self.browser.find_elements(By.CLASS_NAME, 'validation-error')), 0)

    def test_vote_counts_can_decrease_for_surplus(self):
        """
        Tests the JS-based error message: vote counts shouldn't decrease
        """
        self._init_data_tables()

        # Create a 1x2 table with decreasing votes
        self._create_valid_1x1_table()
        self._make_table_of_size(2, 1)
        self.browser.execute_script("return dtTestSetter(1, 1, 2);")
        self.browser.execute_script("return dtTestSetter(1, 3, 1);")
        popups = self.browser.find_elements(By.CLASS_NAME, 'validation-error')
        self.assertEqual(len(popups), 1)
        self.browser.execute_script("return dtTestSetter(1, 2, \"Elected\");")

        self._assert_ajax_response('Data is valid!')
        self.assertEqual(len(self.browser.find_elements(By.CLASS_NAME, 'validation-error')), 0)

    def test_dropdowns_disable_after_nonactive(self):
        """
        When the dropdown changes to elected or eliminated, can't change that anymore
        """
        self._init_data_tables()
        self._make_table_of_size(3, 1)

        # 1 = eliminated
        # 2 = elected
        for i in range(1, 3):
            val = 'Elected' if i == 2 else 'Eliminated'
            self.browser.execute_script(f"dtTestSetter(1, 2, \"{val}\");")
            self.assertEqual(self.browser.execute_script(
                "return dtTestGetter(1, 2).getValue();"), val)
            self.assertIsNone(self.browser.execute_script("return dtTestGetter(1, 4).getValue();"))
            self.assertIsNone(self.browser.execute_script("return dtTestGetter(1, 6).getValue();"))

    def test_electing_disables_rest_of_row_except_next(self):
        """
        When the dropdown changes to eliminated, the rest of the vote counts are disabled
        Similar for elected, except the very next cell is enabled
        """
        self._init_data_tables()
        self._make_table_of_size(3, 1)

        # 1 = eliminated
        # 2 = elected
        for i in range(1, 3):
            val = 'Elected' if i == 2 else 'Eliminated'
            self.browser.execute_script(f"dtTestSetter(1, 2, \"{val}\");")
            votesId1Value = self.browser.execute_script("return dtTestGetter(1, 1).getValue()")
            votesId2Value = self.browser.execute_script("return dtTestGetter(1, 3).getValue()")
            votesId3Value = self.browser.execute_script("return dtTestGetter(1, 5).getValue()")
            self.assertEqual(0, votesId1Value)
            if i == 1:
                self.assertIsNone(votesId2Value)
            else:
                self.assertEqual(0, votesId2Value)
            self.assertIsNone(votesId3Value)

    def test_unsafe_names(self):
        """
        Check that unsafe names are correctly stripped
        """
        self._init_data_tables()
        self._create_valid_1x1_table()

        nameScript = """
        const val1 = dtTestGetter(1, 0).getValue();
        val1.candidateName = "&><'\\"";
        dtTestSetter(1, 0, val1);
        """

        self.browser.execute_script(nameScript)

        self._assert_ajax_response('Data is valid!')
        self.browser.find_element(By.ID, 'uploadButton').click()

        # Go to the latest upload, make sure it worked and has no errors
        wait = WebDriverWait(self.browser, 2)
        wait.until(expected_conditions.title_contains("electiontitle"))

    def test_can_edit_modal(self):
        """
        Check that the edit modal works correctly and no lingering state is left behind.
        """
        self._init_data_tables()
        self._make_table_of_size(3, 3)

        # Click Manage Candidate button
        self.browser.execute_script("dtTestGetter(1, 0).getElement().click();")
        manageCandidate = self.browser.find_elements(By.CLASS_NAME, 'manage-candidate')
        self.assertEqual(len(manageCandidate), 1)
        manageCandidate[0].click()
        modalText = self._get_attr_from_id('datatable-modal', 'innerText')
        self.assertTrue(modalText.startswith('Candidate 1\n'))
        inputWrappers = self.browser.find_elements(By.CLASS_NAME, 'candidate-input-wrapper')
        self.assertEqual(len(inputWrappers), 7)  # Four on the input, three in the background
        inputs = self.browser.find_elements(By.CLASS_NAME, 'candidate-input')
        self.assertEqual(len(inputs), 7)  # Four on the input, three in the background
        self.verify_modal_state(inputWrappers)

        # Edit fields in modal and verify they stay after close/reopen.
        inputs[3].click()
        inputs[4].send_keys("http://myphotourl.com")
        inputs[5].send_keys("http://mymoreinfourl.com")
        inputs[6].send_keys("Whig Party")
        self.browser.find_element(By.ID, 'datatable-modal-submit').click()

        self.browser.execute_script("dtTestGetter(1, 0).getElement().click();")
        manageCandidate = self.browser.find_elements(By.CLASS_NAME, 'manage-candidate')
        self.assertEqual(len(manageCandidate), 1)
        manageCandidate[0].click()
        modalText = self._get_attr_from_id('datatable-modal', 'innerText')
        self.assertTrue(modalText.startswith('Candidate 1\n'))
        inputs = self.browser.find_elements(By.CLASS_NAME, 'candidate-input')
        self.assertEqual(inputs[4].get_attribute('value'), 'http://myphotourl.com')
        self.assertEqual(inputs[5].get_attribute('value'), 'http://mymoreinfourl.com')
        self.assertEqual(inputs[6].get_attribute('value'), 'Whig Party')
        self.browser.find_element(By.ID, 'datatable-modal-submit').click()

        # assert that the other candidates modals open and don't contain any info about the
        # previous candidate (the modals are reused so this is a potential problem)
        for i in range(2, 4):
            self.browser.execute_script(f"dtTestGetter({i}, 0).getElement().click();")
            manageCandidate = self.browser.find_elements(By.CLASS_NAME, 'manage-candidate')
            self.assertEqual(len(manageCandidate), 1)
            manageCandidate[0].click()
            modalText = self._get_attr_from_id('datatable-modal', 'innerText')
            self.assertTrue(modalText.startswith('Candidate ' + str(i)))
            self.assertNotIn('Candidate 1', modalText)
            inputWrappers = self.browser.find_elements(By.CLASS_NAME, 'candidate-input-wrapper')
            self.assertEqual(len(inputWrappers), 7)  # Four on the input, three in the background
            inputs = self.browser.find_elements(By.CLASS_NAME, 'candidate-input')
            self.assertEqual(len(inputs), 7)  # Four on the input, three in the background
            self.verify_modal_state(inputWrappers)
            self.browser.find_element(By.ID, 'datatable-modal-submit').click()

    def verify_modal_state(self, inputWrappers):
        """
        Verify initial modal state.
        """
        self.assertEqual(inputWrappers[3].get_attribute('innerText'), 'Incumbent:')
        self.assertEqual(inputWrappers[4].get_attribute('innerText'), 'Photo URL:')
        self.assertEqual(inputWrappers[5].get_attribute('innerText'), 'More Info URL:')
        self.assertEqual(inputWrappers[6].get_attribute('innerText'), 'Party:')
