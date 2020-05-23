from visualizer.models import JsonConfig
import visualizer.graphCreator.readRCVRCJSON as rcvrcJson
import visualizer.graphCreator.readOpaVoteJSON as opavoteJson


class BadJSONError(Exception):
    pass


def getCorrectReaderFor(jsonFile):
    # Try to use the rcvrc json reader. If it doesn't work, try the OPAVote
    # reader.
    exceptions = {}
    try:
        jsonReader = rcvrcJson.JSONReader(jsonFile)
    except Exception as e0:
        try:
            exceptions["RCVRC JSON Errors"] = e0
            jsonFile.seek(0)  # reset file position
            jsonReader = opavoteJson.JSONReader(jsonFile)
        except Exception as e1:
            exceptions["Opavote JSON Errors"] = e1
            raise BadJSONError(exceptions)
    return jsonReader


def removeLastWinnerAndEliminated(graph, steps):
    haveRemovedWinner = False
    haveRemovedEliminated = False

    # Some tabulators don't mark the penultimate candidate as eliminated-
    # they just mark a winner. Figure out if that's happening, and don't
    # remove an extra candidate.
    if(len(steps[-1].transfers) == 0):
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


def makeGraphWithFile(jsonFile, excludeFinalWinnerAndEliminatedCandidate):
    try:
        jsonReader = getCorrectReaderFor(jsonFile)
    except RuntimeError as e:
        raise e

    graph = jsonReader.getGraph()
    steps = jsonReader.getSteps()
    eliminationOrder = jsonReader.getEliminationOrder()

    for step in steps[:-1]:
        graph.step(step, False)
    graph.step(steps[-1], True)

    graph.nodes = sorted(
        graph.nodes,
        key=lambda x: -
        eliminationOrder.index(
            x.item))

    if excludeFinalWinnerAndEliminatedCandidate:
        removeLastWinnerAndEliminated(graph, steps)

    return graph
