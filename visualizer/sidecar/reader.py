"""
Sidecar JSON reader.
The sidecar file provides additional metadata about each candidate,
and is used by Ballotpedia to generate Ballotpedia-style visualizations.
"""

import json


class BadSidecarError(Exception):
    """
    Sidecar does not match the graph data. Reasons should be provided in the exceptoin description.
    """


# pylint: disable=too-few-public-methods
class SidecarReader:
    """
    Reads the sidecar file and asserts its validity.
    """

    def __init__(self, fileObject):
        self.data = json.load(fileObject)

    def assert_valid(self, graph):
        """
        Ensures the file is valid, or raises a BadSidecarError if not
        """
        try:
            self._assert_valid(graph)
        except AssertionError as exception:
            raise BadSidecarError(exception)

    def _assert_valid(self, graph):
        self._expect_in(self.data, 'top-level data', 'version')
        self._expect_in(self.data, 'top-level data', 'info')
        self._expect_in(self.data, 'top-level data', 'order')

        # Must be versioned. Eventually, handle migrations.
        if self.data['version'] != '1.0':
            raise BadSidecarError("Version must be 1.0")

        # All candidates must be listed in order. (Do we need to deal with inactive?)
        expectedNames = [e.name for e in graph.summarize().candidates]
        actualNames = self.data['order']
        if len(actualNames) != len(expectedNames):
            raise BadSidecarError("The candidate order must include all candidates. " +
                                  f"Expected: {expectedNames}, received: {actualNames}")
        for candidate in self.data['order']:
            self._expect_in(expectedNames, "the actual candidates", candidate)

        # Not all candidates must have info, but all infos must be candidates
        for candidate, info in self.data['info'].items():
            self._expect_in(expectedNames, "the actual candidates", candidate)
            self._expect_in(info, "the candidate info", 'incumbent')

            assert isinstance(info['incumbent'], bool)
            assert isinstance(info['photo_url'], str)
            assert isinstance(info['moreinfo_url'], str)
            assert isinstance(info['party'], str)

    @classmethod
    def _expect_in(cls, data, dataDescriptor, field):
        if field not in data:
            raise BadSidecarError(f"{field} is missing from {dataDescriptor}")
