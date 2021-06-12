""" Data validation - to be used across REST and HTTP access """

import rest_framework.serializers as serializers

from common import viewUtils
from visualizer.graph.graphCreator import make_graph_with_file
from visualizer.sidecar.reader import SidecarReader


def ensure_file_is_under_2_mb(jsonFileObj):
    """ Limit file size to 2mb"""
    maxFileSize = 1024 * 1024 * 2  # 2MB
    if jsonFileObj.size > maxFileSize:
        raise serializers.ValidationError('Max file size is {} and your file size is {}'.
                                          format(maxFileSize, jsonFileObj.size))


def ensure_title_is_under_256_chars(graph):
    """ Limit title length 256 chars"""
    maxTitleSize = 256
    if len(graph.title) > maxTitleSize:
        raise serializers.ValidationError('Max title length is {} and your title length is {}'.
                                          format(maxTitleSize, len(graph.title)))


def try_to_load_jsons(jsonFileObj, sidecarJsonFileObj):
    """ Checks that the JSON can be loaded and is under 2mb.
        Raises:
         - BadJSONError: Summary JSON cannot be loaded
         - BadSidecarError: Sidecar JSON cannot be loaded
         - ValidationError: 2mb limit is reached
         - Anything else: unknown error
        Returns:
         - Loaded graph
    """
    # Check filesize before opening a massive file
    ensure_file_is_under_2_mb(jsonFileObj)
    if sidecarJsonFileObj is not None:
        ensure_file_is_under_2_mb(sidecarJsonFileObj)

    # Try to make the graph
    graph = make_graph_with_file(jsonFileObj, False)
    graph.summarize()

    # Sanity check that the entire pipeline works
    # (If not, this could be the source of 500 errors)
    viewUtils.get_data_for_graph(graph, onlyShowWinnersTabular=False)

    # Check title length
    ensure_title_is_under_256_chars(graph)

    # check sidecar file:
    if sidecarJsonFileObj is not None:
        reader = SidecarReader(sidecarJsonFileObj)
        reader.assert_valid(graph)

    return graph
