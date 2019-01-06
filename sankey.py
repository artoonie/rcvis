# import graphToPlotly
from readJSON import JSONReader
import graphToD3

#fn = '2017_minneapolis_mayor.json'
fn = '2013_minneapolis_park.json'

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
d3Sankey.printJavascript()
