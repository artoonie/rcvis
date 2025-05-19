"""
Generates the dynamic, per-round Frequently-Asked-Questions
"""

import abc

from visualizer.common import INACTIVE_TEXT, intify
from visualizer.descriptors import common, textForWinnerUtils


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
        return not self.config.isPreferentialBlock \
            and self.summary.numWinners <= 1 \
            and self.summary.rounds[0].totalActiveVotes != 0

    def get_question(self, roundNum):
        return "What is happening?"

    def get_answer(self, roundNum):
        return "These are results from a ranked choice election. "\
            "Voters were asked to rank the candidates from most to least favorite. "\
            "The ballots are then counted in rounds. In each round, the candidate "\
            "with the fewest votes is eliminated, and their supporters' votes "\
            "transfer to the next choice on their ballots. The rounds continue until "\
            "one candidate wins by earning more than 50% of the votes."


class WhatHappeningPreferentialBlockWinner(FAQBase):
    """ Summary shown on all single-winner elections """

    def is_active(self, roundNum):
        return self.config.isPreferentialBlock \
            and self.summary.numWinners <= 1 \
            and self.summary.rounds[0].totalActiveVotes != 0

    def get_question(self, roundNum):
        return "What is happening?"

    def get_answer(self, roundNum):
        return "This is a Ranked Choice Voting election with Preferential Block Voting. "\
            "There were multiple seats to fill, but only one seat is represented here. "\
            "Voters have ranked their candidates in order of preference. "\
            "Each voter still only had one vote, but if their top pick wasn't going to win, "\
            "their next choices were taken into account. Once one winner is chosen, the "\
            "counting repeats without that candidate in play, until all seats are filled. "\
            "Check the page that linked you to this visualization to see if other seats "\
            "from this election are also visualized on RCVis."


class WhatHappeningMultiWinner(FAQBase):
    """ Summary shown on all multi-winner elections """

    def is_active(self, roundNum):
        return not self.config.isPreferentialBlock and self.summary.numWinners > 1

    def get_question(self, roundNum):
        return "What is happening?"

    def get_answer(self, roundNum):
        numWinners = self.summary.numWinners
        presentPerfectAction = textForWinnerUtils.as_present_perfect_tense(
            self.config, numWinners)
        output = f"These are results from a ranked choice election with {numWinners} "\
            "winners. Voters were asked to rank the candidates from most to least "\
            "favorite. The ballots are then counted in rounds. In each round, the "\
            "candidate with the fewest votes is eliminated, and their supporters' "\
            "votes transfer to the next choice on their ballots. The rounds continue "\
            f"until {numWinners} candidates {presentPerfectAction}"
        if self.graph.threshold:
            denominator = self.summary.percent_denominator(roundNum)
            threshold = self.graph.threshold / denominator
            output += f" by each earning more than {threshold:.1%} of the votes"
        return output + "."


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
        eliminatedNames = self.summary.rounds[roundNum].eliminatedNames
        elims = common.comma_separated_names_with_and(eliminatedNames)
        wasOrWere = "was" if len(eliminatedNames) == 1 else "were"
        return f"{elims} had the fewest votes in Round {roundNum}. Since {elims} "\
            f"{wasOrWere} eliminated, the voters who supported {elims} had their "\
            f"votes count for their next choices in Round {roundNum + 1}. "\
            "Transferring votes ensures that every voter can be included in choosing "\
            "the final winner(s), even if their favorite candidate doesn't win."


class WhyBatchEliminated(FAQBase):
    """ Whenever multiple people are eliminated """

    def is_active(self, roundNum):
        return len(self.summary.rounds[roundNum].eliminatedNames) > 1

    def get_question(self, roundNum):
        numElims = len(self.summary.rounds[roundNum].eliminatedNames)
        return f"Why were {numElims} candidates eliminated in this round?"

    def get_answer(self, roundNum):
        numElims = len(self.summary.rounds[roundNum].eliminatedNames)
        return "This election used \"batch\" elimination, which reduces the number of "\
            f"rounds without changing the winner. The {numElims} eliminated "\
            "candidates had fewer total votes together than the next highest "\
            f"candidates, so even if all of the votes for the {numElims} eliminated "\
            "candidates had gone to one of them, that person would still trail the "\
            "next highest candidates. Eliminating the candidates one at a time "\
            "produces the same results, \"batch\" elimination just takes fewer rounds."


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
        return f"{winner} received more than 50% of the votes after {roundNum + 1} "\
            "round(s). Only one candidate can have more than 50% of the votes, so "\
            f"{winner} was the candidate most preferred by these voters."


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
        threshold = self.graph.threshold / self.summary.percent_denominator(roundNum)
        return f"In a ranked choice election with {len(winners)}, each candidate "\
            f"needs to earn more than {threshold:.1%} of the votes to win a seat. "\
            f"{threshold:.1%} is the threshold for victory because only "\
            f"{len(winners)} candidates can earn more than {threshold:.1%} "\
            "of the votes."


class WhyThreshold(FAQBase):
    """ How the threshold is chosen in STV """

    def is_active(self, roundNum):
        if self.graph.threshold is None:
            return False

        allWinners = self.summary.winnerNames
        thisRoundWinners = self.summary.rounds[roundNum].winnerNames
        return len(allWinners) > 1 and len(thisRoundWinners) >= 1

    def get_question(self, roundNum):
        threshold = intify(self.graph.threshold)
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
        super().__init__(graph, config)
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
        names = common.comma_separated_names_with_and(redistributionData['names'])
        threshold = intify(self.graph.threshold)
        return f"{names} only needed {threshold} votes to win a seat, so their extra "\
            f"votes above {threshold} were transferred to those voters' next "\
            f"choices. Transferring the extra votes allows supporters of {names} to "\
            "win their fair share of representation in this election. Those voters "\
            "selected one of the seats and part of another."


class WhatIsInactiveBallots(FAQBase):
    """ What does inactive ballots mean? """

    def __init__(self, graph, config):
        super().__init__(graph, config)
        inactive = [c for c in self.summary.candidates.values() if c.name == INACTIVE_TEXT]
        self._inactiveCandidateInfoList = inactive

    def is_active(self, roundNum):
        return len(self._inactiveCandidateInfoList) != 0

    def get_question(self, roundNum):
        return "What are Inactive Ballots?"

    def get_answer(self, roundNum):
        return "A ballot is \"inactive\" if the voter did not rank any of the "\
            "candidates remaining in that round. Voters are not required to rank all "\
            "the candidates, so if all the candidates they ranked are eliminated, "\
            "their ballot becomes inactive."


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
                  WhatHappeningPreferentialBlockWinner,
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
