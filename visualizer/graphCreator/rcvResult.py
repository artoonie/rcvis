from visualizer import common
from .colors import Color


class Item:
    def __init__(self, name, color):
        assert (isinstance(color, Color))
        self.name = name
        self.color = color

        # Mark inactive (exhausted) ballots
        self.isActive = name != common.inactiveText


class Transfer:
    def __init__(self, item, transfers):
        """ Transfers is a mapping from Item objects
            to a number of transferred votes. """
        self.item = item
        self.transfers = transfers


class Elimination(Transfer):
    """ Syntactic sugar for an Elimination, which is kind of like a transfer """


class WinTransfer(Transfer):
    """ Syntactic sugar for a Win, which is kind of like a transfer """


class Round:
    """ A single Round, with data about who won and where votes were transferred """
    def __init__(self):
        self.winners = []
        self.transfers = []
