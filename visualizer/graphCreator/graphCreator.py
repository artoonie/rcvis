from visualizer.models import JsonConfig
from visualizer.graphCreator.readJSON import JSONReader

def makeGraphWithFile(config):
    assert isinstance(config, JsonConfig)
    jsonReader = JSONReader(config.jsonFile, config)
    graph = jsonReader.getGraph()
    steps = jsonReader.getSteps()
    eliminationOrder = jsonReader.getEliminationOrder()

    for step in steps[:-1]:
        graph.step(step, False)
    graph.step(steps[-1], True)

    graph.nodes = sorted(graph.nodes, key=lambda x:-eliminationOrder.index(x.item))

    return graph
