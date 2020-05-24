""" Helpers for creating a set of colors, with perceptually-lineararity and interpolation"""

import math


class Color:
    """ A simple color class built for interpolation """

    def __init__(self, rgbAsFloat):
        """ Initialize with an [r,g,b] triple """
        assert all([0 <= x <= 1 for x in rgbAsFloat])
        self.rgb = rgbAsFloat

    def as_hex(self):
        """ Returns hex string """
        rgbInt = [int(c * 255) for c in self.rgb]
        # c/o https://stackoverflow.com/a/3380739
        return '#%02x%02x%02x' % (rgbInt[0], rgbInt[1], rgbInt[2])

    @classmethod
    def interpolate(cls, color0, color1, alpha):
        """ Interpolation between two Color objects """
        rgb = []
        for i in range(len(color0.rgb)):
            rgb.append((1 - alpha) * color0.rgb[i] + alpha * color1.rgb[i])
        return Color(rgb)


class ColorGenerator():
    """ Generates perceptually-spaced colors """

    def __init__(self, totalToGenerate):
        self.total = totalToGenerate
        self.curr = 0

    def __iter__(self):
        return self

    def __next__(self):
        # c/o https://stackoverflow.com/a/30296361/1057105
        if self.curr >= self.total:
            raise StopIteration
        alpha = self.curr / self.total  # [0, 1]
        r = 100
        a = r * math.sin(2 * math.pi * alpha)
        b = r * math.cos(2 * math.pi * alpha)
        lab = [80, a, b]
        self.curr += 1
        return lab2rgb(lab)


# Converted from the Javascript at
# https://github.com/antimatter15/rgb-lab/blob/master/color.js
# which in turn was based off the psuedocode at
# found on www.easyrgb.com


def lab2rgb(lab):
    """ Convert LAB to RGB """

    y = (lab[0] + 16) / 116
    x = lab[1] / 500 + y
    z = y - lab[2] / 200

    x = 0.95047 * (x * x * x if (x * x * x > 0.008856)
                   else (x - 16 / 116) / 7.787)
    y = 1.00000 * (y * y * y if (y * y * y > 0.008856)
                   else (y - 16 / 116) / 7.787)
    z = 1.08883 * (z * z * z if (z * z * z > 0.008856)
                   else (z - 16 / 116) / 7.787)

    r = x * 3.2406 + y * -1.5372 + z * -0.4986
    g = x * -0.9689 + y * 1.8758 + z * 0.0415
    b = x * 0.0557 + y * -0.2040 + z * 1.0570

    r = (1.055 * pow(r, 1 / 2.4) - 0.055) if (r > 0.0031308) else 12.92 * r
    g = (1.055 * pow(g, 1 / 2.4) - 0.055) if (g > 0.0031308) else 12.92 * g
    b = (1.055 * pow(b, 1 / 2.4) - 0.055) if (b > 0.0031308) else 12.92 * b

    return [max(0, min(1, r)),
            max(0, min(1, g)),
            max(0, min(1, b))]


def rgb2lab(rgb):
    """ Convert RGB to LAB """

    r = rgb[0] / 255
    g = rgb[1] / 255
    b = rgb[2] / 255

    r = pow((r + 0.055) / 1.055, 2.4) if (r > 0.04045) else r / 12.92
    g = pow((g + 0.055) / 1.055, 2.4) if (g > 0.04045) else g / 12.92
    b = pow((b + 0.055) / 1.055, 2.4) if (b > 0.04045) else b / 12.92

    x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047
    y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000
    z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883

    x = pow(x, 1 / 3) if (x > 0.008856) else (7.787 * x) + 16 / 116
    y = pow(y, 1 / 3) if (y > 0.008856) else (7.787 * y) + 16 / 116
    z = pow(z, 1 / 3) if (z > 0.008856) else (7.787 * z) + 16 / 116

    return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
