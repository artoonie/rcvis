"""
Tests related to the sidecar file
Because the ballotpedia page is looked at less frequently, but its
standardization is highly important, this should be tested more thoroughly.
"""

import tempfile
import json

from django.core.files import File
from django.test import TestCase
from django.urls import reverse

from common.testUtils import TestHelpers
from common.viewUtils import get_data_for_view
from visualizer.models import JsonConfig
from visualizer.sidecar.reader import BadSidecarError, SidecarReader
from visualizer.tests import filenames
from visualizer.validators import try_to_load_json

TestHelpers.silence_logging_spam()


class SidecarTests(TestCase):
    """ Simple tests that do not require a live browser """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    @classmethod
    def _get_data_for_view(cls, sidecarFileObj):
        """ Opens the given file and creates a graph with it """
        jsonFilename = filenames.THREE_ROUND
        with open(jsonFilename, 'r+') as jsonFileObj:
            graph = try_to_load_json(File(jsonFileObj))
        reader = SidecarReader(sidecarFileObj)
        reader.assert_valid(graph)

    @classmethod
    def _change_sidecar_with(cls, modifierFunc):
        """
        Given a modifierFunc which modifies the data in the sidecarFile,
        updates the sidecar file and returns a Tempfile holding the new data
        """
        # Update the sidecar data
        with open(filenames.THREE_ROUND_SIDECAR, 'r+') as sidecarFile:
            data = json.load(sidecarFile)
            modifierFunc(data)

        # Write it to a tempfile
        tf = tempfile.NamedTemporaryFile()
        with open(tf.name, 'w') as tfObj:
            json.dump(data, tfObj)
        return tf

    def test_data_loads(self):
        """ Test the happy path: correct data loads """
        with open(filenames.THREE_ROUND_SIDECAR, 'r+') as sidecarFileObj:
            self._get_data_for_view(sidecarFileObj)

    def test_error_on_version(self):
        """ Ensure the version number is checked """
        tf = self._change_sidecar_with(lambda d:
                                       d.update({'version': '0.0'})
                                       )
        with self.assertRaisesRegex(BadSidecarError, 'Version must be 1.0'):
            self._get_data_for_view(tf)

    def test_error_on_candidate_order(self):
        """ All candidates must be in the order, and not more """
        tf = self._change_sidecar_with(lambda d:
                                       d['order'].remove('Banana')
                                       )
        with self.assertRaisesRegex(BadSidecarError, 'order must include all'):
            self._get_data_for_view(tf)

        tf = self._change_sidecar_with(lambda d:
                                       d['order'].append('Cherry')
                                       )
        with self.assertRaisesRegex(BadSidecarError, 'order must include all'):
            self._get_data_for_view(tf)

    def test_infos_must_be_actual_candidates(self):
        """ Make sure Info dosen't include any extra candidates """
        tf = self._change_sidecar_with(lambda d:
                                       d['info'].update({'Cherry': d['info']['Banana']})
                                       )
        with self.assertRaisesRegex(BadSidecarError, 'Cherry is missing from the actual'):
            self._get_data_for_view(tf)

    def test_ballotpedia_text(self):
        """ Test that the ballotpedia visualization has the required bp-specific text """
        with open(filenames.THREE_ROUND) as jsonFile:
            redirectResponse = self.client.post('/upload.html', {
                'jsonFile': jsonFile
            })
        slug = JsonConfig.objects.latest('-id').slug
        vbUrl = reverse('visualizeBallotpedia', args=(slug,))
        assert slug in vbUrl

        visResponse = self.client.get('/' + redirectResponse.url)
        assert b'Banana' in visResponse.content
        assert b'The results are certified' not in visResponse.content
