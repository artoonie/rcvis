class GraphSummary:
  rounds: list # List of RoundInfo
  candidates:dict # Map: Graph.Item to CandidateInfo
  linksByTargetNode:dict # Map: Graph.NodeData to list of graph.LinkData where link.target == node

  def __init__(self, graph):
    numCandidates = len(graph.nodesPerRound[0])
    numRounds = len(graph.nodesPerRound)

    rounds = [RoundInfo(i) for i in range(numRounds)]

    # Accumulate the votes gained by each candidate in each node (into candidates dict)
    # and what happened in each round (into rounds list)
    candidates = {}
    alreadyWonInPreviousRound = []
    for node in graph.nodes:
        item = node.item
        if item not in candidates:
            candidates[item] = CandidateInfo(item.name)

        currRound = len(candidates[item].votesAddedPerRound)
        candidates[item].addVotes(node.count)
        rounds[currRound].addVotes(node.count)

        if node.isWinner:
            # Only count winner the first time they win
            if item not in alreadyWonInPreviousRound:
                rounds[currRound].addWinner(item.name)
                alreadyWonInPreviousRound.append(item)
        if node.isEliminated:
            # Eliminate the next round: in the sankey representation,
            # eliminated candidates are shown on the previous round
            # so they don't ever show zero-vote bars. Account for that.
            rounds[currRound+1].addEliminated(item.name)

    # Create linksByNode
    linksByTargetNode = {}
    for link in graph.links:
        if link.target not in linksByTargetNode:
            linksByTargetNode[link.target] = []
        linksByTargetNode[link.target].append(link)

    self.rounds = rounds
    self.candidates = candidates
    self.linksByTargetNode = linksByTargetNode

class RoundInfo:
    def __init__(self, round_i):
        self.round_i = round_i
        self.eliminatedNames = []
        self.winnerNames = []
        self.totalVotes = 0 # The total number of active ballots this round

    def key(self):
        return self.round_i

    def addEliminated(self, name):
        self.eliminatedNames.append(name)

    def addWinner(self, name):
        self.winnerNames.append(name)

    def addVotes(self, numVotes):
        self.totalVotes += numVotes

class CandidateInfo:
    def __init__(self, name):
        self.name = name
        self.votesAddedPerRound = []
        self.totalVotesPerRound = []
        self.numRounds = 0

    def addVotes(self, amount):
        if len(self.totalVotesPerRound) == 0:
            lastRoundTotalVotes = 0
        else:
            lastRoundTotalVotes = self.totalVotesPerRound[-1]
        lastRoundAddedVotes = amount - lastRoundTotalVotes
        self.totalVotesPerRound.append(amount)
        self.votesAddedPerRound.append(lastRoundAddedVotes)
        self.numRounds += 1
