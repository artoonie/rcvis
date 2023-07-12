""" Helper functions to load a graph from a file """

import logging
import json

from rcvformats.schemas.universaltabulator import SchemaV0
from rcvformats.conversions.automatic import AutomaticConverter
from rcvformats.conversions.base import CouldNotConvertException

import visualizer.graph.readRCVRCJSON as rcvrcJson

logger = logging.getLogger(__name__)


class BadJSONError(Exception):
    """ An exception to be thrown if the JSON has errors """


def convert_to_standardized_format(fileObject):
    """ Loops through each of the three readers trying to find one that works on this file """
    try:
        return AutomaticConverter().convert_to_ut(fileObject)
    except CouldNotConvertException as exc:
        logger.info("The file was not valid. Reason: %s", str(exc))
        raise BadJSONError(exc) from exc
    except Exception as exc:
        logger.info("Upload failed: %s", str(exc))
        raise BadJSONError(exc) from exc


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


def initialize_graph(jsonReader, excludeFinalWinnerAndEliminatedCandidate):
    """
    Uses the reader to create the graph, set its elimination order,
    and summarize it. If this function succeeds, the jsonReader is good
    and it's very very likely that the page will render correctly.
    """
    graph = jsonReader.get_graph()
    rounds = jsonReader.get_rounds()
    graph.set_elimination_order(jsonReader.get_elimination_order())

    if excludeFinalWinnerAndEliminatedCandidate:
        remove_last_winner_and_eliminated(graph, rounds)

    graph.summarize()

    return graph


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
        jsonData = convert_to_standardized_format(fileObject)

        # Then, try to load
        try:
            jsonReader = rcvrcJson.JSONReader(jsonData)
        except rcvrcJson.MigrationError as exc:
            raise BadJSONError("Invalid file: " + str(exc)) from exc
        except Exception as exc:  # pylint: disable=broad-except
            raise BadJSONError("File schema was valid, but we could not interpret it") from exc

    try:
        graph = initialize_graph(jsonReader, excludeFinalWinnerAndEliminatedCandidate)
    except Exception as exc:
        schema = SchemaV0()
        if not schema.is_data_valid(jsonData):
            # We have a nice error message to present
            raise BadJSONError(schema.last_error()) from exc

        # We don't know why the data was invalid
        raise exc

    return graph
