"""
Tests for the election pages:
    The general info page exists
        pIndex.html
    You can view election pages
        ps/
        p/
    You can create scrapable election pages
        pCreate/
    You can populate the data in scrapable election pages
        pPopulate/
    You can scrape all elections in an election page
        pScrapeAll

These are more complicated, so we use a live browser to test
so we can play with the javascript and ensure no JS errors,
as well as actually populate data.
"""

from django.test import TestCase

from common.testUtils import TestHelpers

TestHelpers.silence_logging_spam()


class ScraperTests(TestCase):
    """ Tests for the electionpage app - using a live browser """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    def test_index(self):
        """ The index page is publicly-viewable """

    def test_election_pages(self):
        """ The election pages are error-free for non-scrapable election pages.  """

    def test_scrapable_election_pages(self):
        """ The election pages are error-free for scrapable election pages.  """

    def test_create_scrapable_page_forbidden(self):
        """ Trying to create a scrapable election page without permissions """

    def test_create_scrapable_page_allowed(self):
        """ Trying to create a scrapable election page with permissions """

    def test_populate_forbidden(self):
        """ Trying to Populate, not allowed """

    def test_populate_allowed(self):
        """ Trying to Populate, allowed """

    def test_populate_scrape_forbidden(self):
        """ Trying to ScrapeAll, not allowed """

    def test_populate_scrape_allowed(self):
        """ Trying to ScrapeAll, allowed """
