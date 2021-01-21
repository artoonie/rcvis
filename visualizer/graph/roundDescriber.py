"""
Describes what happened in each round of an RCV Election in plain English.
"""

from math import fmod


class Describer:
    """ Describes a graph in plain English.
        Iteratively call describe_round() on each round for the given graph. """

    def __init__(self, graph):
        """ Initializes the Describer """
        self.graph = graph

    @classmethod
    def _describe_the_round_number(cls, roundNum):
        """ e.g. "In the third round, " """
        roundDescribers = [
            "first",
            "second",
            "third",
            "fourth",
            "fifth",
            "sixth",
            "seventh",
            "eighth",
            "ninth",
            "tenth"]
        if roundNum < 10:
            return f"In the {roundDescribers[roundNum]} round, "
        # I'm being lazy, but...this many rounds is rare
        return f"In round {roundNum}, "

    def _describe_most_nonwinner_votes_this_round(self, roundNum):
        """ e.g. "Foo received the most votes. "
            Returns empty string if there are any winners this round. """
        candidates = self.graph.summarize().candidates
        rounds = self.graph.summarize().rounds

        # Don't return who has the most votes if there are winners
        if rounds[roundNum].winnerNames:
            return ""

        def _num_votes_this_round(item):
            # Gets the number of votes for this item on this round
            candidateInfo = candidates[item]
            if roundNum >= len(candidateInfo.totalVotesPerRound):
                return 0  # already eliminated
            return candidateInfo.totalVotesPerRound[roundNum]
        mostVotes = max(candidates, key=_num_votes_this_round)

        return mostVotes.name + " received the most votes. "

    @classmethod
    def _text_to_describe_list_of_names(cls, listOfNames, whatHappenedToThem):
        """
        e.g. With listOfNames = [Foo,Bar,Baz] and whatHappenedToThem="ate chips":
        "Foo, Bar, and Baz ate chips. "
        listOfNames can be empty, in which case the empty string is returned.
        """
        if len(listOfNames) == 0:
            return ""
        if len(listOfNames) == 1:
            return listOfNames[0] + whatHappenedToThem

        lastNameInList = listOfNames[-1]
        otherNamesInList = ", ".join(listOfNames[:-1])
        return otherNamesInList + " and " + lastNameInList + whatHappenedToThem

    def _describe_eliminated_this_round(self, roundNum):
        """ e.g. "Foo had the fewest votes and was eliminated. "
            Returns empty string if nobody was eliminated """
        rounds = self.graph.summarize().rounds
        eliminated = rounds[roundNum].eliminatedNames
        whatHappened = " had the fewest votes and was eliminated. "
        return self._text_to_describe_list_of_names(eliminated, whatHappened)

    def _describe_redistribution_this_round(self, roundNum):
        """ Describes redistribution, if there was any.
            Returns empty string if there wasn't. """
        candidates = self.graph.summarize().candidates
        redistributedNames = []
        redistributedSum = 0
        for item, candidateInfo in candidates.items():
            if roundNum >= len(candidateInfo.votesAddedPerRound):
                continue
            votesAdded = candidateInfo.votesAddedPerRound[roundNum]
            if votesAdded < 0:
                redistributedNames.append(item.name)
                redistributedSum -= votesAdded

        redistributedSumStrInt = str(int(redistributedSum))
        if fmod(redistributedSum, 1) < 1e-6:
            surplusNumVotes = redistributedSumStrInt
        else:
            surplusNumVotes = "about " + redistributedSumStrInt
        whatHappened = (" had more than enough votes to win, so to ensure no vote is wasted, "
                        f"{surplusNumVotes} surplus votes were redistributed to other candidates. ")
        return self._text_to_describe_list_of_names(redistributedNames, whatHappened)

    def _describe_winners_this_round(self, roundNum):
        """ e.g. "Foo had the most votes and was elected. "
            Returns empty string if there wasn't a winner. """
        rounds = self.graph.summarize().rounds
        eliminated = rounds[roundNum].winnerNames
        whatHappened = " had the most votes and was elected. "
        return self._text_to_describe_list_of_names(eliminated, whatHappened)

    def describe_round(self, roundNum):
        """ Returns a long string of all the interesting things that happened this round. """
        text = self._describe_the_round_number(roundNum)
        text += self._describe_eliminated_this_round(roundNum)
        text += self._describe_most_nonwinner_votes_this_round(roundNum)
        text += self._describe_winners_this_round(roundNum)
        text += self._describe_redistribution_this_round(roundNum)
        return text

    def describe_all_rounds(self):
        """ Returns an array corresponding to the description of each round """
        return [self.describe_round(i) for i in range(self.graph.numRounds)]

    def describe_initial_summary(self):
        """ Summarizes the entire election. """
        summary = self.graph.summarize()
        winners = [winner for round in summary.rounds for winner in round.winnerNames]
        numRounds = len(summary.rounds)

        if len(winners) == 0:
            raise NotImplementedError()

        wereOrWas = "was" if len(winners) == 1 else "were"
        winnerText = self._text_to_describe_list_of_names(winners, f" {wereOrWas} elected. ")

        text = f"In this ranked choice voting election, there were {numRounds} rounds, after which "
        text += winnerText
        text += "Here's what happened in each round. "

        return text
