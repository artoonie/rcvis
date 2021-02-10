""" Various classes for creating tables """

from visualizer.common import intify, percentify


def makePrimarySecondaryLabels(numVotes, allVotes, item):
    if item.isActive:
        primaryLabel = percentify(numVotes / allVotes)
        secondaryLabel = votify(numVotes)
    else:
        primaryLabel = intify(numVotes)
        secondaryLabel = "ballots"
    return (primaryLabel, secondaryLabel)


class TabulateByRoundInteractive:
    tabulation: list  # A thin wrapper around graph.Summary

    def __init__(self, graph):
        summary = graph.summarize()
        self.rounds = []
        lastRoundEliminated = []  # eliminated only show one round later
        alreadyWonInRound = {}  # Contains winners in previous rounds, 1-indexed
        for i, r in enumerate(summary.rounds):
            for winnerName in r.winnerNames:
                alreadyWonInRound[winnerName] = (i + 1)
            rnd = []
            for item, cinfo in summary.candidates.items():
                d = {}
                isEliminatedThisRound = cinfo.name in r.eliminatedNames
                isElectedThisRound = cinfo.name in r.winnerNames
                isElectedPrevRound = cinfo.name in alreadyWonInRound
                if isEliminatedThisRound:
                    d['change'] = "Eliminated: " + changify(-cinfo.totalVotesPerRound[-1])
                    d['primaryLabel'] = ""
                    d['secondaryLabel'] = ""
                elif i >= len(cinfo.votesAddedPerRound):
                    continue
                else:
                    votesAddedThisRound = cinfo.votesAddedPerRound[i]

                    if i == 0:
                        num = intify(votesAddedThisRound)
                        d['change'] = f"{num} votes in the first round"
                    elif isElectedThisRound:
                        d['change'] = "Elected: " + changify(votesAddedThisRound)
                    elif isElectedPrevRound:
                        d['change'] = f"No change (elected in Round {alreadyWonInRound[cinfo.name]})"
                    else:
                        d['change'] = changify(votesAddedThisRound)

                    myNumVotes = cinfo.totalVotesPerRound[i]
                    allVotes = r.totalActiveVotes
                    d['primaryLabel'], d['secondaryLabel'] = makePrimarySecondaryLabels(
                        myNumVotes, allVotes, item)
                d['name'] = cinfo.name
                d['wonThisRound'] = cinfo.name in r.winnerNames
                d['eliminatedThisRound'] = isEliminatedThisRound
                d['isWinner'] = isElectedPrevRound
                d['isEliminated'] = cinfo.name in lastRoundEliminated or \
                    d['eliminatedThisRound']
                rnd.append(d)
            lastRoundEliminated = r.eliminatedNames
            self.rounds.append(rnd)


class TabulateByRound:
    tabulation: list  # A thin wrapper around graph.Summary

    def __init__(self, graph):
        summary = graph.summarize()
        rounds = []
        for r in summary.rounds:
            rounds.append({'round_i': r.round_i + 1,
                           'eliminated': '<br/>'.join(r.eliminatedNames),
                           'winners': '<br/>'.join(r.winnerNames)})
        self.tabulation = rounds


class SingleTableSummary:
    tabulation: list  # A list of CandidateTabulation
    rounds: int

    def __init__(self, graph):
        summary = graph.summarize()
        self.rounds = range(len(summary.rounds))
        self.tabulation = []

        candidates = summary.candidates
        for item in candidates:
            self.tabulation.append(CandidateTabulationByRound(graph, item))


""" A summary of one candidate, prepared for tabulation, with every round """


class CandidateTabulationByRound:
    name: str
    eachRound: list

    def __init__(self, graph, item):
        self.name = item.name
        summary = graph.summarize()
        numRounds = len(summary.rounds)
        candidateInfo = summary.candidates[item]
        self.eachRound = []
        self.rounds = range(numRounds)
        for i, myNumVotes in enumerate(candidateInfo.totalVotesPerRound):
            thisRoundSummary = summary.rounds[i]
            self.eachRound.append(
                OneCandidateOneRound(
                    thisRoundSummary,
                    myNumVotes,
                    item))

        # We want all rounds filled out - pad the remaining rounds
        numRoundsThisCandidate = len(candidateInfo.totalVotesPerRound)
        padding = [None] * (numRounds - numRoundsThisCandidate)
        self.eachRound.extend(padding)


class OneCandidateOneRound:
    primaryLabel: str
    secondaryLabel: str
    isWinner: bool
    isEliminated: bool

    numVotes: str
    pctVotes: str

    def __init__(self, thisRoundSummary, myNumVotes, item):
        allVotes = thisRoundSummary.totalActiveVotes

        self.primaryLabel, self.secondaryLabel = makePrimarySecondaryLabels(
            myNumVotes, allVotes, item)

        self.numVotes = intify(myNumVotes)
        self.pctVotes = percentify(myNumVotes / allVotes)

        self.isWinner = item.name in thisRoundSummary.winnerNames
        self.isEliminated = item.name in thisRoundSummary.eliminatedNames


class TabulateByCandidate:
    tabulation: list  # A list of CandidateTabulation
    rounds: int

    def __init__(self, graph, onlyShowWinners):
        summary = graph.summarize()
        self.tabulation = []
        candidates = summary.candidates
        if onlyShowWinners:
            candidates = [c for c in candidates if c in graph.winnersSoFar]
        for item in candidates:
            self.tabulation.append(CandidateTabulation(graph, item))
        self.rounds = range(len(summary.rounds))


""" A summary of one candidate, prepared for tabulation """


class CandidateTabulation:
    name: str
    rounds: list

    def __init__(self, graph, item):
        self.name = item.name
        summary = graph.summarize()
        candidateInfo = summary.candidates[item]
        self.rounds = []
        for i in range(len(candidateInfo.votesAddedPerRound)):
            node = graph.nodesPerRound[i][item]

            if node in summary.linksByTargetNode:
                linksForThisNode = summary.linksByTargetNode[node]
                for l in linksForThisNode:
                    l.value = intify(l.value)
            else:
                # No incoming nodes this round (always true on first round)
                linksForThisNode = []

            totalActiveVotes = intify(node.count)
            self.rounds.append(
                RoundTabulation(
                    totalActiveVotes,
                    i,
                    item,
                    summary.rounds[i],
                    linksForThisNode))


""" A summary of each round for one candidate """


class RoundTabulation:
    # summary:str
    # primaryLabel:str
    # secondaryLabel:str
    # round_i:int

    def __init__(
            self,
            totalActiveVotes,
            round_i,
            item,
            thisRoundInfo,
            linksForThisNode):
        self.round_i = round_i + 1

        allVotes = thisRoundInfo.totalActiveVotes
        myNumVotes = float(totalActiveVotes)
        self.primaryLabel, self.secondaryLabel = makePrimarySecondaryLabels(
            myNumVotes, allVotes, item)

        if round_i == 0:
            self.summary = f"{totalActiveVotes} first-round votes"
            return

        transfers = []
        for link in linksForThisNode:
            if link.source.item.name == link.target.item.name:
                # Don't account for links to self
                continue
            voteTxt = pluralize('vote', link.value)
            transfers.append(
                f"{link.value} {voteTxt} from {link.source.item.name}")

        transferText = andify("Gained ", transfers, "")

        # Only show info relevant to this candidate
        winnerText = "Elected " if item.name in thisRoundInfo.winnerNames else ""
        eliminatedText = "Eliminated " if item.name in thisRoundInfo.eliminatedNames else ""
        self.summary = winnerText + eliminatedText + transferText


""" Make into a comma-separated list, with the oxford comma, prefixed/suffixed if non-empty """


def andify(prefix, l, suffix):
    if not l:
        return ""

    anded = ', '.join(l[:-1])
    if len(l) == 1:
        anded = l[-1]
    else:
        anded += " and " + l[-1]
    return prefix + anded + suffix


def pluralize(txt, num):
    """ Add an "s" as needed """
    if num == 1:
        return txt
    else:
        return txt + "s"


def changify(num):
    if num == 0:
        return ""

    if num > 0:
        num = intify(num)
        return f"Gained {num:s} votes"
    else:
        num = intify(-num)
        return f"{num} votes redistributed to remaining candidates"


def votify(num):
    if not isinstance(num, str):
        # c/o https://stackoverflow.com/a/10507593
        # Only show decimal place if needed
        num = "{0}".format(str(round(num, 1) if num % 1 else int(num)))
    return num + " votes"
