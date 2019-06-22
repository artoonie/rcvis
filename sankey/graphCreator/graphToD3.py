class D3Sankey:
    def __init__(self, graph):
        longestLabelChars = max([len(n.label) for n in graph.nodesPerRound[0].values()])
        js = ''
        js += 'numRounds = %d;\n' % graph.numRounds
        js += 'numCandidates = %d;\n' % len(graph.nodesPerRound[0])
        js += 'longestLabelChars = %d;\n' % longestLabelChars
        js += 'graph = {"nodes" : [], "links" : []};\n'

        nodeIndices = {}
        for i, node in enumerate(graph.nodes):
            nodeIndices[node] = i
            js += 'graph.nodes.push({ "name": "%s",\n' % node.label
            js += '                   "round": %d,\n' % node.stepNum
            js += '                   "isWinner": %d,\n' % node.isWinner
            js += '                   "isEliminated": %d,\n' % node.isEliminated
            js += '                   "color": "%s"});\n' % node.color
        for link in graph.links:
            sourceIndex = nodeIndices[link.source]
            targetIndex = nodeIndices[link.target]
            js += 'graph.links.push({ "source": %d,\n'       % sourceIndex
            js += '                   "target": %d,\n'       % targetIndex
            js += '                   "color": "%s",\n'      % link.color
            js += '                   "value":  %0.3f });\n' % link.value
        self.js = js

    def printJavascript(self):
        print(self.js)
