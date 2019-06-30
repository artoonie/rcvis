from visualizer.models import JsonConfig
from visualizer.graphCreator.readJSON import JSONReader

def makeGraphWithFile(config):
    assert isinstance(config, JsonConfig)
    jsonReader = JSONReader(config.jsonFile, config)
    graph = jsonReader.getGraph()
    steps = jsonReader.getSteps()
    eliminationOrder = jsonReader.getEliminationOrder()

    for step in steps:
        graph.step(step)

    graph.nodes = sorted(graph.nodes, key=lambda x:-eliminationOrder.index(x.item))

    return graph
