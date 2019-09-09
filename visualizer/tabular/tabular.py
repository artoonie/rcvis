class TabulateByRoundInteractive:
    tabulation:list # A thin wrapper around graph.Summary

    def __init__(self, graph):
        summary = graph.summarize()
        self.rounds = []
        lastRoundEliminated = [] # eliminated only show one round later
        allPreviousWinners = [] # winners show for all future rounds
        for i, r in enumerate(summary.rounds):
            allPreviousWinners.extend(r.winnerNames)
            rnd = []
            for item, cinfo in summary.candidates.items():
                d = {}
                isEliminatedThisRound = cinfo.name in r.eliminatedNames
                if isEliminatedThisRound:
                    d['change'] = votify(-cinfo.totalVotesPerRound[-1])
                    d['total'] = 0
                elif i >= len(cinfo.votesAddedPerRound):
                    continue
                else:
                    d['change'] = votify(cinfo.votesAddedPerRound[i])
                    d['total'] = intify(cinfo.totalVotesPerRound[i])
                d['name'] = cinfo.name
                d['wonThisRound'] = cinfo.name in r.winnerNames
                d['eliminatedThisRound'] = isEliminatedThisRound
                d['isWinner'] = cinfo.name in allPreviousWinners
                d['isEliminated'] = cinfo.name in lastRoundEliminated or\
                                    d['eliminatedThisRound']
                rnd.append(d)
            lastRoundEliminated = r.eliminatedNames
            self.rounds.append(rnd)

class TabulateByRound:
    tabulation:list # A thin wrapper around graph.Summary

    def __init__(self, graph):
        summary = graph.summarize()
        rounds = []
        for r in summary.rounds:
            rounds.append({'round_i': r.round_i+1,
                           'eliminated': '<br/>'.join(r.eliminatedNames),
                           'winners': '<br/>'.join(r.winnerNames)})
        self.tabulation = rounds

class TabulateByCandidate:
    tabulation:list # A list of CandidateTabulation

    def __init__(self, graph, onlyShowWinners):
        summary = graph.summarize()
        self.tabulation = []
        candidates = summary.candidates
        if onlyShowWinners:
            candidates = [c for c in candidates if c in graph.winnersSoFar]
        for item in candidates:
            self.tabulation.append(CandidateTabulation(graph, item))

""" A summary of one candidate, prepared for tabulation """
class CandidateTabulation:
    name:str
    rounds:list

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

            totalVotes = intify(node.count)
            self.rounds.append(RoundTabulation(totalVotes, i, item, summary.rounds[i], linksForThisNode))

""" A summary of each round for one candidate """
class RoundTabulation:
    # summary:str
    # totalVotes:float
    # round_i:int

    def __init__(self, totalVotes, round_i, item, thisRoundInfo, linksForThisNode):
        self.totalVotes = totalVotes
        self.round_i = round_i + 1
        
        if round_i == 0:
            self.summary = f"{totalVotes} first-round votes"
            return 

        transfers = []
        for link in linksForThisNode:
            if link.source.item.name == link.target.item.name:
                # Don't account for links to self
                continue
            voteTxt = pluralize('vote', link.value)
            transfers.append(f"{link.value} {voteTxt} from {link.source.item.name}")

        transferText = andify("Gained ", transfers, "")
        ONLY_SHOW_TEXT_RELEVANT_TO_ME = True
        if ONLY_SHOW_TEXT_RELEVANT_TO_ME:
            # Only show info relevant to this candidate
            winnerText = "Elected! " if item.name in thisRoundInfo.winnerNames else ""
            eliminatedText = "Eliminated. " if item.name in thisRoundInfo.eliminatedNames else ""
            self.summary = winnerText + eliminatedText + transferText
        else:
            # Show info from everybody
            eliminatedText = andify("", thisRoundInfo.eliminatedNames, " eliminated")
            winnerText = andify("", thisRoundInfo.winnerNames, " elected")

            self.summary = "; ".join([t for t in (winnerText, eliminatedText, transferText) if t])

""" Make into a comma-separated list, with the oxford comma, prefixed/suffixed if non-empty """
def andify(prefix, l, suffix):
    if not l:
      return ""

    anded = ', '.join(l[:-1])
    if len(l) == 1:
      anded = l[-1]
    else:
      anded += " and " + l[-1]
    return prefix+anded+suffix

""" Turn into int if it's a round number """
def intify(v):
    if v % 1 == 0:
        return int(v)
    else:
        return "%0.2f" % v

""" Add an "s" as needed """
def pluralize(txt, num):
    if num == 1:
        return txt
    else:
        return txt+"s"

def changify(num):
    prefix = "+" if num >= 0 else ""
    return prefix + str(intify(num))

def votify(num):
    return changify(num) + " votes"
