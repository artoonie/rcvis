class Item:
    def __init__(self, name, color):
        assert(isinstance(color, Color))
        self.name = name
        self.color = color

class Color:
    def __init__(self, rgbAsFloat):
        assert(all([x<=1 and x>=0 for x in rgbAsFloat]))
        self.rgb = rgbAsFloat

    def asHex(self):
        rgbInt = [int(c*255) for c in self.rgb]
        # c/o https://stackoverflow.com/a/3380739
        return '#%02x%02x%02x' % (rgbInt[0], rgbInt[1], rgbInt[2])

    @classmethod
    def interpolate(cls, color0, color1, alpha):
        rgb = []
        for i in range(len(color0.rgb)):
            rgb.append((1-alpha)*color0.rgb[i] + alpha*color1.rgb[i])
        return Color(rgb)

class Transfer:
    def __init__(self, item, transfers):
        """ Transfers is a mapping from Item objects
            to a number of transferred votes. """
        self.item = item
        self.transfers = transfers
class Elimination(Transfer): pass
class WinTransfer(Transfer): pass

class Step:
    def __init__(self):
        self.winners = []
        self.transfers = []
