""" Summarize the graph to provide helper functions to different visualizers """

from visualizer.graph import rcvResult


# pylint: disable=too-few-public-methods
class GraphSummary:
    """ A class which organizes a Graph into data that makes it easier to visualize """

    rounds: list  # List of RoundInfo
    candidates: dict  # Map: Graph.Candidate to CandidateInfo
    # Map: Graph.NodeData to list of graph.LinkData where link.target == node
    linksByTargetNode: dict
    winnerNames: list
    numWinners: int
    numEliminated: int

    def __init__(self, graph):
        numRounds = len(graph.nodesPerRound)

        rounds = [RoundInfo(i) for i in range(numRounds)]

        # Accumulate the votes gained by each candidate in each node (into candidates dict)
        # and what happened in each round (into rounds list)
        candidates = {}
        alreadyWonInPreviousRound = []
        for node in graph.nodes:
            candidate = node.candidate
            if candidate not in candidates:
                candidates[candidate] = CandidateInfo(candidate.name)

            currRound = len(candidates[candidate].votesAddedPerRound)
            candidates[candidate].add_votes(node.count)
            rounds[currRound].add_votes(candidate, node.count)

            if node.isWinner:
                # Only count winner the first time they win
                if candidate not in alreadyWonInPreviousRound:
                    rounds[currRound].add_winner(candidate)
                    alreadyWonInPreviousRound.append(candidate)
            if node.isEliminated:
                # Eliminate the next round: in the sankey representation,
                # eliminated candidates are shown on the previous round
                # so they don't ever show zero-vote bars. Account for that.
                rounds[currRound + 1].add_eliminated(candidate)

        # Create linksByNode
        linksByTargetNode = {}
        for link in graph.links:
            if link.target not in linksByTargetNode:
                linksByTargetNode[link.target] = []
            linksByTargetNode[link.target].append(link)

        self.rounds = rounds
        self.candidates = candidates
        self.linksByTargetNode = linksByTargetNode
        self.winnerNames = [i.name for i in alreadyWonInPreviousRound]
        self.numWinners = len(self.winnerNames)
        self.numEliminated = sum(len(r.eliminatedNames) for r in rounds)

    def percent_denominator(self, roundNum, forceFirstRoundDeterminesPercentages):
        """
        By default, percentDenominator is either the current round total in IRV,
        and the first round total in STV.
        forceFirstRoundDeterminesPercentages can override this.
        """
        if forceFirstRoundDeterminesPercentages:
            roundNum = 0
        elif self.numWinners > 1:
            roundNum = 0
        return self.rounds[roundNum].totalActiveVotes


class RoundInfo:
    """ Summarizes a single round, with functions to build the round """

    def __init__(self, round_i):
        self.round_i = round_i
        self.eliminatedCandidates = []
        self.winnerCandidates = []
        self.eliminatedNames = []
        self.winnerNames = []
        self.totalActiveVotes = 0  # The total number of active ballots this round

    def key(self):
        """ Returns the "key" for this round (just the round number) """
        return self.round_i

    def add_eliminated(self, candidate):
        """ Adds the name to the list of names eliminated this round """
        self.eliminatedCandidates.append(candidate)
        self.eliminatedNames.append(candidate.name)

    def add_winner(self, candidate):
        """ Adds the name to the list of names elected this round """
        self.winnerCandidates.append(candidate)
        self.winnerNames.append(candidate.name)

    def add_votes(self, candidate, numVotes):
        """ Notes that the given Candidate received numVotes votes - unless they're
            not an "active" candidate. """
        assert isinstance(candidate, rcvResult.Candidate)
        if not candidate.isActive:
            return

        self.totalActiveVotes += numVotes


class CandidateInfo:
    """ Summarizes a single candidate over each round """

    def __init__(self, name):
        self.name = name
        self.votesAddedPerRound = []
        self.totalVotesPerRound = []
        self.numRounds = 0

    def add_votes(self, amount):
        """ Adds the given votes to the current round """
        if len(self.totalVotesPerRound) == 0:
            lastRoundTotalVotes = 0
        else:
            lastRoundTotalVotes = self.totalVotesPerRound[-1]
        lastRoundAddedVotes = amount - lastRoundTotalVotes
        self.totalVotesPerRound.append(amount)
        self.votesAddedPerRound.append(lastRoundAddedVotes)
        self.numRounds += 1
