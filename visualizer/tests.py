from django.test import TestCase

from .models import JsonConfig
from .views import getDataForView
from visualizer.graphCreator.graphCreator import makeGraphWithFile, BadJSONError

# Create your tests here.
class MyTest(TestCase):
    def _test_loads(self, fn):
        with open(fn, 'r+') as f:
            config = JsonConfig(jsonFile=f)
            getDataForView(config)

    def test_opavote_loads(self):
        self._test_loads('testData/opavote-fairvote.json')

    def test_multiwinner_loads(self):
        self._test_loads('testData/macomb-multiwinner-surplus.json')

    def test_bad_json_fails(self):
        try:
            self._test_loads('testData/test-baddata.json')
        except BadJSONError:
            return
        assert False

    def test_various_configs(self):
        configBoolsToToggle = {'hideDecimals', 'rotateNames', 'onlyShowWinnersTabular',
                               'doHideOverflowAndEliminated', 'doUseHorizontalBarGraph',
                               'excludeFinalWinnerAndEliminatedCandidate'}
        fn = 'testData/macomb-multiwinner-surplus.json'
        for configBoolToToggle in configBoolsToToggle:
            with open(fn, 'r+') as f:
                config = JsonConfig(jsonFile=f)
                config.__dict__[configBoolToToggle] = not config.__dict__[configBoolToToggle]
                getDataForView(config)

    def test_home_page(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_upload_file(self):
        with open('testData/macomb-multiwinner-surplus.json') as f:
          response = self.client.post('/upload.html', {'rcvJson': f})
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'],
                         "/visualize=macomb-multiwinner-surplusjson")

    def test_upload_file_failure(self):
        with open('testData/test-baddata.json') as f:
          response = self.client.post('/upload.html', {'rcvJson': f})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.templates[0].name,
                         'visualizer/errorBadJson.html')
