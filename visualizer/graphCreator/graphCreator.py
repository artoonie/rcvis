""" Helper functions to load a graph from a file """

import visualizer.graphCreator.readElectionbuddyCSV as electionbuddyCSV
import visualizer.graphCreator.readOpaVoteJSON as opavoteJson
import visualizer.graphCreator.readRCVRCJSON as rcvrcJson


class BadJSONError(Exception):
    """ An exception to be thrown if the JSON has errors """


def get_correct_reader_for(fileObject):
    """ Loops through each of the three readers trying to find one that works on this file """
    reader_getters = (get_rcvrc_reader, get_opavote_reader, get_electionbuddy_reader)

    exceptions = {}
    for reader_getter in reader_getters:
        maybe_reader = reader_getter(fileObject, exceptions)
        if maybe_reader:
            return maybe_reader

    # None of the readers returned
    raise BadJSONError(exceptions)


def get_rcvrc_reader(fileObject, exceptions):
    """ Tries to return an RCVRC reader, or returns None and adds to exceptions """
    try:
        return rcvrcJson.JSONReader(fileObject)
    except Exception as rcvrcException:  # pylint: disable=broad-except
        exceptions["RCVRC JSON Errors"] = rcvrcException
        return None


def get_opavote_reader(fileObject, exceptions):
    """ Tries to return an OpaVote reader, or returns None and adds to exceptions """
    try:
        return opavoteJson.JSONReader(fileObject)
    except Exception as opavoteException:  # pylint: disable=broad-except
        exceptions["Opavote JSON Errors"] = opavoteException
        return None


def get_electionbuddy_reader(fileObject, exceptions):
    """ Tries to return an electionbuddy reader, or returns None and adds to exceptions """
    try:
        return electionbuddyCSV.CSVReader(fileObject)
    except Exception as electionBuddyExceptions:  # pylint: disable=broad-except
        exceptions["Election Buddy CSV Errors"] = electionBuddyExceptions
        return None


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
        jsonReader = get_correct_reader_for(fileObject)
    except RuntimeError as runtimeException:
        raise runtimeException

    graph = jsonReader.get_graph()
    rounds = jsonReader.get_rounds()
    eliminationOrder = jsonReader.get_elimination_order()

    for r in rounds[:-1]:
        graph.add_round(r, False)
    graph.add_round(rounds[-1], True)

    graph.nodes = sorted(graph.nodes, key=lambda x: -eliminationOrder.index(x.item))

    if excludeFinalWinnerAndEliminatedCandidate:
        remove_last_winner_and_eliminated(graph, rounds)

    return graph
