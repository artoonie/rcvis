""" Helper functions to load a graph from a file """

import logging
import json

from rcvformats.conversions.automatic import AutomaticConverter

import visualizer.graph.readRCVRCJSON as rcvrcJson

logger = logging.getLogger(__name__)


class BadJSONError(Exception):
    """ An exception to be thrown if the JSON has errors """


def convert_to_standardized_format(fileObject):
    """ Loops through each of the three readers trying to find one that works on this file """
    try:
        return AutomaticConverter().convert_to_ut(fileObject)
    except Exception as exc:
        logger.info("Upload failed: %s", str(exc))
        raise BadJSONError("Upload failed") from exc


def remove_last_winner_and_eliminated(graph, rounds):
    """ Some tabulators don't mark the penultimate candidate as eliminated-
        they just mark a winner. Figure out if that's happening, and don't
        remove an extra candidate. """

    haveRemovedWinner = False
    haveRemovedEliminated = False

    if len(rounds[-1].transfers) == 0:
        haveRemovedEliminated = True

    for node in graph.nodes:
        if not haveRemovedWinner and node.isWinner:
            node.isWinner = False
            haveRemovedWinner = True
        if not haveRemovedEliminated and node.isEliminated:
            node.isEliminated = False
            haveRemovedEliminated = True
        if haveRemovedEliminated and haveRemovedWinner:
            break


def make_graph_with_file(fileObject, excludeFinalWinnerAndEliminatedCandidate):
    """ Load the given fileObject, create and return a graph """
    try:
        # First, try to load it directly, assuming it is a valid format
        # This circumvents jsonschema validation needlessly
        jsonData = json.load(fileObject)
        jsonReader = rcvrcJson.JSONReader(jsonData)
    except Exception:  # pylint: disable=broad-except
        # If the loading failed, then attempt to convert it
        fileObject.seek(0)

        # First, try to convert
        try:
            jsonData = convert_to_standardized_format(fileObject)
        except Exception as exc:
            raise BadJSONError("File format is not valid:") from exc

        # Then, try to load
        try:
            jsonReader = rcvrcJson.JSONReader(jsonData)
        except Exception as exc:
            raise BadJSONError("File schema was valid, but we could not interpret it") from exc

    graph = jsonReader.get_graph()
    rounds = jsonReader.get_rounds()
    eliminationOrder = jsonReader.get_elimination_order()

    for r in rounds[:-1]:
        graph.add_round(r, False)
    graph.add_round(rounds[-1], True)

    graph.eliminationOrder = eliminationOrder
    graph.nodes = sorted(graph.nodes, key=lambda x: -eliminationOrder.index(x.item))

    if excludeFinalWinnerAndEliminatedCandidate:
        remove_last_winner_and_eliminated(graph, rounds)

    return graph
