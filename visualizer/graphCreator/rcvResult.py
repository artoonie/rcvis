""" Helper methods to generate a Graph """

from visualizer import common
from .colors import Color


#pylint: disable=too-few-public-methods
class Item:
    """ A single Item, also known as a Candidate elsewhere in the Code. """
    def __init__(self, name, color):
        assert isinstance(color, Color)
        self.name = name
        self.color = color

        # Mark inactive (exhausted) ballots
        self.isActive = name != common.INACTIVE_TEXT

#pylint: disable=too-few-public-methods
class Transfer:
    """ Transfers is a mapping from Item objects to a number of transferred votes. """
    def __init__(self, item, transfers):
        self.item = item
        self.transfers = transfers

#pylint: disable=too-few-public-methods
class Elimination(Transfer):
    """ Syntactic sugar for an Elimination, which is kind of like a transfer """

#pylint: disable=too-few-public-methods
class WinTransfer(Transfer):
    """ Syntactic sugar for a Win, which is kind of like a transfer """

#pylint: disable=too-few-public-methods
class Round:
    """ A single Round, with data about who won and where votes were transferred """
    def __init__(self):
        self.winners = []
        self.transfers = []
