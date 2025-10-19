""" Helper methods to generate a Graph """

from visualizer import common


# pylint: disable=too-few-public-methods
class Candidate:
    """ A single Candidate. """

    def __init__(self, name):
        self.name = name

        # Mark inactive (exhausted) ballots
        self.isActive = name != common.INACTIVE_TEXT

# pylint: disable=too-few-public-methods


class Transfer:
    """ Transfers is a mapping from Candidate objects to a number of transferred votes. """

    def __init__(self, candidate, transfersByCandidate):
        self.candidate = candidate
        self.transfersByCandidate = transfersByCandidate

# pylint: disable=too-few-public-methods


class Elimination(Transfer):
    """ Syntactic sugar for an Elimination, which is kind of like a transfer """

# pylint: disable=too-few-public-methods


class WinTransfer(Transfer):
    """ Syntactic sugar for a Win, which is kind of like a transfer """

# pylint: disable=too-few-public-methods


class Round:
    """ A single Round, with data about who won and where votes were transferred """

    def __init__(self):
        self.winners = []
        self.transfers = []
        self.candidatesToVotes = {}
