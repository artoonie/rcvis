# import graphToPlotly
from .readJSON import JSONReader
from . import graphToD3

class SankeyConfig():
    hideTransferlessRounds = False
    hideDecimals = False
    rotateNames = False

def makeGraphWithFile(fn, config):
    assert isinstance(config, SankeyConfig)
    jsonReader = JSONReader(fn, config)
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
