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
