import plotly.offline as py
# Use this instead to render to the web
# import plotly.plotly as py

class PlotlySankey:
    def __init__(self, graph):
        data_trace = dict(
            type='sankey',
            domain = dict(
              x =  [0,1],
              y =  [0,1]
            ),
            orientation = "v",
            valueformat = ".0f",
            node = dict(
              pad = 10,
              thickness = 30,
              line = dict(
                width = 0
              ),
              label = [n.label for n in graph.nodes],
              color = [n.color for n in graph.nodes]
            ),
            link = dict(
              source = [graph.nodes.index(l.source) for l in graph.links],
              target = [graph.nodes.index(l.target) for l in graph.links],
              value = [l.value for l in graph.links],
              color = [l.color for l in graph.links]
          )
        )

        layout =  dict(
            title = graph.title,
            height = 772,
            font = dict(
              size = 10
            ),    
        )

        self.figure = dict(data=[data_trace], layout=layout)

    def draw(self):
        py.plot(self.figure, validate=True)
