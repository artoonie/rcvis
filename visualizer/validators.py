""" Data validation - to be used across REST and HTTP access """

from visualizer.graphCreator.graphCreator import make_graph_with_file
from .sankey.graphToD3 import D3Sankey


def try_to_load_json(jsonFile):
    """ Will raise a BadJSONError, or perhaps another Exception, if the JSON
        is not valid. Use with a try/except. """
    graph = make_graph_with_file(jsonFile, False)
    graph.summarize()
    D3Sankey(graph)  # sanity check the graph can be created
