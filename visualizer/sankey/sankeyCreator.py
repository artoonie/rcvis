# import graphToPlotly
from visualizer.models import JsonConfig
from visualizer.graphCreator.readJSON import JSONReader
from . import graphToD3

def makeGraphWithFile(config):
    assert isinstance(config, JsonConfig)
    jsonReader = JSONReader(config.jsonFile, config)
    sankeyGraph = jsonReader.getGraph()
    steps = jsonReader.getSteps()
    eliminationOrder = jsonReader.getEliminationOrder()

    for step in steps:
        sankeyGraph.step(step)

    sankeyGraph.nodes = sorted(sankeyGraph.nodes,
                               key=lambda x:-eliminationOrder.index(x.item))

    return sankeyGraph

if __name__ == "__main__":
    #fn = '2017_minneapolis_mayor.json'
    fn = '2013_minneapolis_park.json'
    graph = makeGraphWithFile(fn)
    # PlotlySankey(graph).draw()
    d3Sankey = graphToD3.D3Sankey(graph)
    d3Sankey.printJavascript()
