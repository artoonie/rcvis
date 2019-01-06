class D3Sankey:
    def __init__(self, graph):
        js = ''
        js += 'numRounds = %d;\n' % graph.numRounds
        js += 'graph = {"nodes" : [], "links" : []};\n'

        nodeIndices = {}
        for i, node in enumerate(graph.nodes):
            nodeIndices[node] = i
            js += 'graph.nodes.push({ "name": "%s",\n' % node.label
            js += '                   "color": "%s"});\n' % node.color
        for link in graph.links:
            sourceIndex = nodeIndices[link.source]
            targetIndex = nodeIndices[link.target]
            js += 'graph.links.push({ "source": %d,\n'    % sourceIndex
            js += '                   "target": %d,\n'    % targetIndex
            js += '                   "color": "%s",\n'   % link.color
            js += '                   "value":  %d });\n' % link.value
        self.js = js

    def printJavascript(self):
        print(self.js)
