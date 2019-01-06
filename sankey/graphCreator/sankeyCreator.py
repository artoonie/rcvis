# import graphToPlotly
from .readJSON import JSONReader
from . import graphToD3

def makeGraphWithFile(fn):
    jsonReader = JSONReader(fn)
    sankeyGraph = jsonReader.getGraph()
    steps = jsonReader.getSteps()
    eliminationOrder = jsonReader.getEliminationOrder()

    for step in steps:
        sankeyGraph.step(step)

    sankeyGraph.nodes = sorted(sankeyGraph.nodes,
                               key=lambda x:-eliminationOrder.index(x.item))

    # PlotlySankey(sankeyGraph).draw()
    d3Sankey = graphToD3.D3Sankey(sankeyGraph)
    return d3Sankey

if __name__ == "__main__":
    #fn = '2017_minneapolis_mayor.json'
    fn = '2013_minneapolis_park.json'
    d3Sankey = makeGraphWithFile(fn)
    d3Sankey.printJavascript()
