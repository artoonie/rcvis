from visualizer.models import JsonConfig
import visualizer.graphCreator.readRCVRCJSON as rcvrcJson
import visualizer.graphCreator.readOpaVoteJSON as opavoteJson

def getCorrectReaderFor(config):
    # Try to use the rcvrc json reader. If it doesn't work, try the OPAVote reader.
    exceptions = {}
    try:
        jsonReader = rcvrcJson.JSONReader(config.jsonFile, config)
    except Exception as e0:
        try:
            exceptions["RCVRC JSON Errors"] = e0
            config.jsonFile.seek(0) # reset file position
            jsonReader = opavoteJson.JSONReader(config.jsonFile, config)
        except Exception as e1:
            exceptions["Opavote JSON Errors"] = e1
            raise RuntimeError(exceptions)
    return jsonReader

def makeGraphWithFile(config):
    assert isinstance(config, JsonConfig)

    try:
      jsonReader = getCorrectReaderFor(config)
    except RuntimeError as e:
        raise e

    graph = jsonReader.getGraph()
    steps = jsonReader.getSteps()
    eliminationOrder = jsonReader.getEliminationOrder()

    for step in steps[:-1]:
        graph.step(step, False)
    graph.step(steps[-1], True)

    graph.nodes = sorted(graph.nodes, key=lambda x:-eliminationOrder.index(x.item))

    return graph
