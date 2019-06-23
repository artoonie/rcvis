import string

class D3Sankey:
    def __init__(self, graph):
        longestLabelApxWidth = max([approxLength(n.label) for n in graph.nodesPerRound[0].values()])
        js = ''
        js += 'numRounds = %d;\n' % graph.numRounds
        js += 'numCandidates = %d;\n' % len(graph.nodesPerRound[0])
        js += 'longestLabelApxWidth = %f;\n' % longestLabelApxWidth
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

# c/o https://stackoverflow.com/a/16008023/1057105
def approxLength(st):
    size = 0 # in milinches
    for s in st:
        if s in 'lij|\' ': size += 37
        elif s in '![]fI.,:;/\\t': size += 50
        elif s in '`-(){}r"': size += 60
        elif s in '*^zcsJkvxy': size += 85
        elif s in 'aebdhnopqug#$L+<>=?_~FZT' + string.digits: size += 95
        elif s in 'BSPEAKVXY&UwNRCHD': size += 112
        elif s in 'QGOMm%W@': size += 135
        else: size += 50
    return size * 6 / 1000.0 # Convert to picas
