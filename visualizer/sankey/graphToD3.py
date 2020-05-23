from visualizer.jsUtils import approxLength


class D3Sankey:
    def __init__(self, graph):
        longestLabelApxWidth = max([approxLength(n.label)
                                    for n in graph.nodesPerRound[0].values()])
        totalVotesPerRound = [r.totalActiveVotes for r in graph.summary.rounds]
        js = ''
        js += 'numRounds = %d;\n' % graph.numRounds
        js += 'numCandidates = %d;\n' % len(graph.nodesPerRound[0])
        js += 'longestLabelApxWidth = %f;\n' % longestLabelApxWidth
        js += f'totalVotesPerRound = {totalVotesPerRound};\n'
        js += 'graph = {"nodes" : [], "links" : []};\n'

        nodeIndices = {}
        for i, node in enumerate(graph.nodes):
            # Skip inactive (exhausted) nodes
            if not node.item.isActive:
                continue

            nodeIndices[node] = i
            js += 'graph.nodes.push({ "name": "%s",\n' % node.label
            js += '                   "round": %d,\n' % node.roundNum
            js += '                   "value": %f,\n' % node.count
            js += '                   "isWinner": %d,\n' % node.isWinner
            js += '                   "isEliminated": %d,\n' % node.isEliminated
            js += '                   "color": "%s"});\n' % node.color
        for link in graph.links:
            # Skip inactive (exhausted) nodes
            if not link.source.item.isActive:
                continue
            if not link.target.item.isActive:
                continue

            sourceIndex = nodeIndices[link.source]
            targetIndex = nodeIndices[link.target]
            js += 'graph.links.push({ "source": %d,\n' % sourceIndex
            js += '                   "target": %d,\n' % targetIndex
            js += '                   "color": "%s",\n' % link.color
            js += '                   "value":  %0.3f });\n' % link.value
        self.js = js
