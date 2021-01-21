""" Data validation - to be used across REST and HTTP access """

import rest_framework.serializers as serializers

from visualizer.graph.graphCreator import make_graph_with_file
from .sankey.graphToD3 import D3Sankey


def ensure_file_is_under_2_mb(jsonFile):
    """ Limit file size to 2mb"""
    maxFileSize = 1024 * 1024 * 2  # 2MB
    if jsonFile.size > maxFileSize:
        raise serializers.ValidationError('Max file size is {} and your file size is {}'.
                                          format(maxFileSize, jsonFile.size))


def ensure_title_is_under_256_chars(graph):
    """ Limit title length 256 chars"""
    maxTitleSize = 256
    if len(graph.title) > maxTitleSize:
        raise serializers.ValidationError('Max title length is {} and your title length is {}'.
                                          format(maxTitleSize, len(graph.title)))


def try_to_load_json(jsonFile):
    """ Checks that the JSON can be loaded and is under 2mb.
        Raises:
         - BadJSONError: JSON cannot be loaded
         - ValidationError: 2mb limit is reached
         - Anything else: unknown error
        Returns:
         - Loaded graph
    """
    # Check filesize before opening a massive file
    ensure_file_is_under_2_mb(jsonFile)

    graph = make_graph_with_file(jsonFile, False)
    graph.summarize()
    D3Sankey(graph)  # sanity check the graph can be created

    # Check title length
    ensure_title_is_under_256_chars(graph)

    return graph
