""" Various classes for creating tables """

from visualizer.common import intify, percentify, INACTIVE_TEXT
from visualizer.descriptors import textForWinnerUtils as TextForWinner


def makePrimarySecondaryLabels(numVotes, denominator, item):
    if item.isActive:
        primaryLabel = percentify(numVotes, denominator)
        secondaryLabel = votify(numVotes)
    else:
        primaryLabel = intify(numVotes)
        secondaryLabel = "ballots"
    return (primaryLabel, secondaryLabel)


class TabulateByRoundInteractive:
    tabulation: list  # A thin wrapper around graph.Summary

    def __init__(self, graph, config):
        summary = graph.summarize()
        self.rounds = []
        lastRoundEliminated = []  # eliminated only show one round later
        alreadyWonInRound = {}  # Contains winners in previous rounds, 1-indexed
        for roundNum, roundData in enumerate(summary.rounds):
            for winnerName in roundData.winnerNames:
                alreadyWonInRound[winnerName] = (roundNum + 1)
            rnd = []
            for item, cinfo in summary.candidates.items():
                d = {}
                isEliminatedThisRound = cinfo.name in roundData.eliminatedNames
                isElectedThisRound = cinfo.name in roundData.winnerNames
                isElectedPrevRound = cinfo.name in alreadyWonInRound
                if isEliminatedThisRound:
                    d['change'] = "Eliminated: " + changify(-cinfo.totalVotesPerRound[-1])
                    d['primaryLabel'] = ""
                    d['secondaryLabel'] = ""
                elif roundNum >= len(cinfo.votesAddedPerRound):
                    continue
                elif cinfo.name == INACTIVE_TEXT:
                    if roundNum == 0:
                        d['change'] = "All ballots are active in the first round"
                    else:
                        votesAddedThisRound = intify(cinfo.votesAddedPerRound[roundNum])
                        d['change'] = f"{votesAddedThisRound} ballots became inactive"
                else:
                    votesAddedThisRound = cinfo.votesAddedPerRound[roundNum]

                    if roundNum == 0:
                        num = intify(votesAddedThisRound)
                        d['change'] = f"{num} votes in the first round"
                    elif isElectedThisRound:
                        caption = TextForWinner.as_caption(config) + ": "
                        d['change'] = caption + changify(votesAddedThisRound)
                    elif isElectedPrevRound:
                        caption = TextForWinner.as_caption(config)
                        roundWon = alreadyWonInRound[cinfo.name]
                        d['change'] = f"No change ({caption} in Round {roundWon})"
                    else:
                        d['change'] = changify(votesAddedThisRound)

                    myNumVotes = cinfo.totalVotesPerRound[roundNum]
                    percentDenominator = summary.percent_denominator(roundNum)
                    d['primaryLabel'], d['secondaryLabel'] = makePrimarySecondaryLabels(
                        myNumVotes, percentDenominator, item)
                d['name'] = cinfo.name
                d['wonThisRound'] = cinfo.name in roundData.winnerNames
                d['eliminatedThisRound'] = isEliminatedThisRound
                d['isWinner'] = isElectedPrevRound
                d['isEliminated'] = cinfo.name in lastRoundEliminated or \
                    d['eliminatedThisRound']
                rnd.append(d)
            lastRoundEliminated = roundData.eliminatedNames
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
            percentDenominator = summary.percent_denominator(i)
            self.eachRound.append(OneCandidateOneRound(
                thisRoundSummary, myNumVotes, percentDenominator, item))

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

    def __init__(self, thisRoundSummary, myNumVotes, percentDenominator, item):
        self.primaryLabel, self.secondaryLabel = makePrimarySecondaryLabels(
            myNumVotes, percentDenominator, item)

        self.numVotes = intify(myNumVotes)
        self.pctVotes = percentify(myNumVotes, percentDenominator)

        self.isWinner = item.name in thisRoundSummary.winnerNames
        self.isEliminated = item.name in thisRoundSummary.eliminatedNames


class TabulateByCandidate:
    tabulation: list  # A list of CandidateTabulation
    rounds: int

    def __init__(self, graph, config):
        summary = graph.summarize()
        self.tabulation = []
        candidates = summary.candidates
        for item in candidates:
            self.tabulation.append(CandidateTabulation(graph, config, item))
        self.rounds = range(len(summary.rounds))


class CandidateTabulation:
    """ A summary of one candidate, prepared for tabulation """
    name: str
    rounds: list
    isWinner: bool

    def __init__(self, graph, config, item):
        summary = graph.summarize()
        candidateInfo = summary.candidates[item]

        self.name = item.name
        self.isWinner = item.name in summary.winnerNames

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

            self.rounds.append(
                RoundTabulation(config, node.count, i,
                                item, summary, linksForThisNode))


class RoundTabulation:
    """ A summary of each round for one candidate """
    # summary:str
    # primaryLabel:str
    # secondaryLabel:str
    # round_i:int, 1-indexed

    def __init__(self, config, totalActiveVotes, round_i, item, summary, linksForThisNode):
        self.round_i = round_i + 1

        myNumVotes = float(totalActiveVotes)
        percentDenominator = summary.percent_denominator(round_i)
        self.primaryLabel, self.secondaryLabel = makePrimarySecondaryLabels(
            myNumVotes, percentDenominator, item)

        roundInfos = summary.rounds
        thisRoundWinners = roundInfos[round_i].winnerNames
        if round_i < len(roundInfos) - 1:
            thisRoundEliminations = roundInfos[round_i + 1].eliminatedNames
        else:
            thisRoundEliminations = []
        eliminatedText = "Eliminated. " if item.name in thisRoundEliminations else ""

        if round_i == 0:
            self.summary = f"{totalActiveVotes} first-round votes. " + eliminatedText
            return

        transfers = []
        for link in linksForThisNode:
            if link.source.item.name == link.target.item.name:
                # Don't account for links to self
                continue
            voteTxt = pluralize('vote', link.value)
            transfers.append(
                f"{link.value} {voteTxt} from {link.source.item.name}. ")

        transferText = andify("Gained ", transfers, "")

        # Only show info relevant to this candidate
        winCaption = TextForWinner.as_caption(config) + ". "
        winnerText = winCaption if item.name in thisRoundWinners else ""
        self.summary = winnerText + transferText + eliminatedText


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
        return f"{num} votes redistributed to remaining candidates or became inactive"


def votify(num):
    if not isinstance(num, str):
        num = intify(num)
    return num + " votes"
