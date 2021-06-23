"""
Generates the dynamic, per-round Frequently-Asked-Questions
"""

import abc

from visualizer.common import INACTIVE_TEXT
from visualizer.descriptors import common
from visualizer.descriptors import textForWinnerUtils


class FAQBase():
    """
    Abstract base class to generate FAQs.
    Initialize it with a graph, then ask it each round whether it is currently relevant to show,
    and if it is relevant, what question/answer to show.
    """

    def __init__(self, graph, config):
        self.graph = graph
        self.config = config
        self.summary = graph.summarize()

    @abc.abstractmethod
    def is_active(self, roundNum):
        """ Should we display this FAQ? """

    @abc.abstractmethod
    def get_question(self, roundNum):
        """ If (and only if) is_active() is true, what question should we print? """

    @abc.abstractmethod
    def get_answer(self, roundNum):
        """ If (and only if) is_active() is true, what is the answer to that question? """


class WhatHappeningSingleWinner(FAQBase):
    """ Summary shown on all single-winner elections """

    def is_active(self, roundNum):
        return self.summary.numWinners <= 1 and self.summary.rounds[0].totalActiveVotes != 0

    def get_question(self, roundNum):
        return "What is happening?"

    def get_answer(self, roundNum):
        numEliminated = self.summary.numEliminated
        base = "This is a single-winner Ranked Choice Voting election. "\
            "Voters have ranked their candidates in order of preference. "\
            "Each voter still only had one vote, but if their top pick wasn't going to win, "\
            "their next choices were taken into account. "
        elim = f"The {numEliminated} lowest-performing candidates were eliminated in succession"
        if self.summary.numWinners == 0:
            win = "."
        else:
            winnerName = self.summary.winnerNames[0]
            win = f" until {winnerName} received more than 50% of the votes."
        return base + elim + win


class WhatHappeningMultiWinner(FAQBase):
    """ Summary shown on all multi-winner elections """

    def is_active(self, roundNum):
        return self.summary.numWinners > 1

    def get_question(self, roundNum):
        return "What is happening?"

    def get_answer(self, roundNum):
        numWinners = self.summary.numWinners
        presentPerfectAction = textForWinnerUtils.as_present_perfect_tense(self.config, numWinners)
        return "This is a proportional Ranked Choice Voting election "\
            "which elects multiple winners. "\
            f"There were {numWinners} seats to be filled. "\
            "Voters have ranked their candidates in order of preference. "\
            "Each voter still only had one vote. "\
            "The lowest-performing candidates were eliminated until "\
            f"{numWinners} candidates {presentPerfectAction}."


class WhyEliminated(FAQBase):
    """ Whenever someone is eliminated """

    def is_active(self, roundNum):
        return len(self.summary.rounds[roundNum].eliminatedNames) > 0

    def get_question(self, roundNum):
        elims = self.summary.rounds[roundNum].eliminatedNames
        if len(elims) == 1:
            return f"Why was {elims[0]} eliminated?"
        return common.text_to_describe_list_of_names(elims, "Why were {name} eliminated?")

    def get_answer(self, roundNum):
        return "Because they had the fewest votes and could not win the election, "\
               "they were eliminated. "\
               "To ensure people who voted for them still had their voices heard, "\
               "their votes were transferred to their next choice. "\
               "If you are familiar with the concept of runoff elections, "\
               "you can think of these eliminations as holding a runoff "\
               "without going back to the voting booth."


class WhyBatchEliminated(FAQBase):
    """ Whenever multiple people are eliminated """

    def is_active(self, roundNum):
        return len(self.summary.rounds[roundNum].eliminatedNames) > 1

    def get_question(self, roundNum):
        numElims = len(self.summary.rounds[roundNum].eliminatedNames)
        return f"Why were {numElims} candidates eliminated?"

    def get_answer(self, roundNum):
        # Note: this wording almost verbatim from CCD
        return "This is known as \"batch elimination.\" "\
               "Two or more candidates with the lowest number of votes can be eliminated "\
               "in a single round if their total number of votes is less than the votes "\
               "for the candidate immediately ahead of them. "\
               "This means that, if all next choices went to one of them, "\
               "they would still trail the next higher candidate, "\
               "and the outcome will be the same whether they are eliminated one by one, "\
               "or at the same time."


class WhySingleWinner(FAQBase):
    """ Whenever someone is elected in IRV """

    def is_active(self, roundNum):
        allWinners = self.summary.winnerNames
        thisRoundWinners = self.summary.rounds[roundNum].winnerNames
        return len(allWinners) == 1 and len(thisRoundWinners) == 1

    def get_question(self, roundNum):
        return textForWinnerUtils.as_question(
            self.config, self.summary.rounds[roundNum].winnerNames)

    def get_answer(self, roundNum):
        winner = self.summary.rounds[roundNum].winnerNames[0]
        return f"Because {winner} received more than 50% of the votes."


class WhyMultiWinner(FAQBase):
    """ Whenever someone is elected in STV """

    def is_active(self, roundNum):
        if self.graph.threshold is None:
            return False

        allWinners = self.summary.winnerNames
        thisRoundWinners = self.summary.rounds[roundNum].winnerNames
        return len(allWinners) > 1 and len(thisRoundWinners) >= 1

    def get_question(self, roundNum):
        return textForWinnerUtils.as_question(
            self.config, self.summary.rounds[roundNum].winnerNames)

    def get_answer(self, roundNum):
        winners = self.summary.rounds[roundNum].winnerNames
        winnerText = common.comma_separated_names_with_and(winners)
        threshold = self.graph.threshold
        supportCount = len(self.summary.winnerNames) + 1
        return f"Because {winnerText} received {threshold} votes. "\
               f"The threshold of {threshold} votes was chosen to achieve proportional "\
               f"representation, equal to at least one out of every {supportCount} voters "\
            "supporting this candidate."


class WhyThreshold(FAQBase):
    """ How the threshold is chosen in STV """

    def is_active(self, roundNum):
        if self.graph.threshold is None:
            return False

        allWinners = self.summary.winnerNames
        thisRoundWinners = self.summary.rounds[roundNum].winnerNames
        return len(allWinners) > 1 and len(thisRoundWinners) >= 1

    def get_question(self, roundNum):
        threshold = self.graph.threshold
        return f"Why did they need {threshold} votes to win?"

    def get_answer(self, roundNum):
        supportCount = len(self.summary.winnerNames) + 1
        return "In a single-winner election, the winning candidate needs to earn the support "\
            "of at least 1 in 2 voters. "\
            "Since each voter only gets one vote, "\
            "the same requirement is not possible for this Single Transferable Vote election. "\
            "Instead, "\
            f"each winning candidate must earn the support of 1 in {supportCount} voters."


class WhySurplusTransfer(FAQBase):
    """ Why surplus transfers happen """

    def __init__(self, graph, config):
        super(WhySurplusTransfer, self).__init__(graph, config)
        self._surplusCache = {}

    def is_active(self, roundNum):
        if self.graph.threshold is None:
            return False

        redistributionData = common.get_redistribution_data(self.graph, roundNum)
        self._surplusCache[roundNum] = redistributionData

        return len(redistributionData['names']) >= 1

    def get_question(self, roundNum):
        redistributionData = self._surplusCache[roundNum]
        lostVotes = common.intify_or_aboutify(redistributionData['sum'])
        names = common.comma_separated_names_with_and(redistributionData['names'])
        return f"Why did {names} lose {lostVotes} votes?"

    def get_answer(self, roundNum):
        redistributionData = self._surplusCache[roundNum]
        lostVotes = int(round(redistributionData['sum']))  # note: don't aboutify
        names = common.comma_separated_names_with_and(redistributionData['names'])
        threshold = self.graph.threshold
        numWinners = self.summary.numWinners
        return "A principle of RCV is that no vote should be wasted. "\
            f"Since {names} only needed {threshold} votes, "\
            "any vote beyond that should not be wasted, and is instead redistributed. "\
            f"This also ensures that {numWinners} candidates can reach the "\
            f"{threshold}-vote threshold. "\
            f"The {lostVotes} votes were are redistributed to remaining candidates "\
            "proportionally based on voters' next choices."


class WhatIsInactiveBallots(FAQBase):
    """ What does inactive ballots mean? """

    def __init__(self, graph, config):
        super(WhatIsInactiveBallots, self).__init__(graph, config)
        inactive = [c for c in self.summary.candidates.values() if c.name == INACTIVE_TEXT]
        self._inactiveCandidateInfoList = inactive

    def is_active(self, roundNum):
        return len(self._inactiveCandidateInfoList) != 0

    def get_question(self, roundNum):
        return "What are Inactive Ballots?"

    def get_answer(self, roundNum):
        inactiveItem = self._inactiveCandidateInfoList[0]
        numInactive = inactiveItem.totalVotesPerRound[roundNum]
        base = "Voters are not required to rank all candidates. "
        if numInactive != 0:
            rest = f"Because {numInactive} ballots had all of their choices eliminated, "\
                "those ballots are no longer active in this round."
        else:
            rest = "In this round, all ballots are still active, "\
                   "meaning that no ballot had all of their choices eliminated already."
        return base + rest


class WhyNoVotes(FAQBase):
    """ Summary shown on all single-winner elections """

    def is_active(self, roundNum):
        return self.summary.rounds[0].totalActiveVotes == 0

    def get_question(self, roundNum):
        return "What is happening?"

    def get_answer(self, roundNum):
        return "This is probably an upcoming Ranked-Choice Voting election. "\
               "Perhaps the results are not in, or maybe the election hasn't even happened yet. "\
               "This page may update once data becomes available."


class FAQGenerator():
    """ Helper class to generate a full FAQ for this graph """
    generators = (WhatHappeningSingleWinner,
                  WhatHappeningMultiWinner,
                  WhyNoVotes,
                  WhyEliminated,
                  WhyBatchEliminated,
                  WhySingleWinner,
                  WhyMultiWinner,
                  WhyThreshold,
                  WhySurplusTransfer,
                  WhatIsInactiveBallots)

    def __init__(self, graph, config):
        self.graph = graph
        self.config = config
        self.generatorObjects = [g(graph, config) for g in self.generators]

    def describe_all_rounds(self):
        """ Helper function around describe_round """
        return [self.describe_round(r) for r in range(len(self.graph.summarize().rounds))]

    def describe_round(self, roundNum):
        """ Returns an ordered list of the FAQs to display for this round. """
        description = []
        for g in self.generatorObjects:
            if g.is_active(roundNum):
                description.append({'question': g.get_question(roundNum),
                                    'answer': g.get_answer(roundNum)})
        return description
