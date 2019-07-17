from visualizer.models import JsonConfig
import visualizer.graphCreator.readRCVRCJSON as rcvrcJson
import visualizer.graphCreator.readOpaVoteJSON as opavoteJson

def getCorrectReaderFor(config):
    # Try to use the rcvrc json reader. If it doesn't work, try the OPAVote reader.
    try:
        jsonReader = rcvrcJson.JSONReader(config.jsonFile, config)
    except Exception:
        try:
            config.jsonFile.seek(0) # reset file position
            jsonReader = opavoteJson.JSONReader(config.jsonFile, config)
        except Exception:
            jsonReader = None
    return jsonReader

def makeGraphWithFile(config):
    assert isinstance(config, JsonConfig)

    jsonReader = getCorrectReaderFor(config)
    if not jsonReader:
        return None # TODO need proper error handling

    graph = jsonReader.getGraph()
    steps = jsonReader.getSteps()
    eliminationOrder = jsonReader.getEliminationOrder()

    for step in steps[:-1]:
        graph.step(step, False)
    graph.step(steps[-1], True)

    graph.nodes = sorted(graph.nodes, key=lambda x:-eliminationOrder.index(x.item))

    return graph
