""" A helper function for javascript-generating python """

import string


def approx_length(stringToMeasure):
    """ c/o https://stackoverflow.com/a/16008023/1057105 -
        measure the approximate pixels of the given string """
    size = 0  # in milinches
    for char in stringToMeasure:
        if char in 'lij|\' ':
            size += 37
        elif char in '![]fI.,:;/\\t':
            size += 50
        elif char in '`-(){}r"':
            size += 60
        elif char in '*^zcsJkvxy':
            size += 85
        elif char in 'aebdhnopqug#$L+<>=?_~FZT' + string.digits:
            size += 95
        elif char in 'BSPEAKVXY&UwNRCHD':
            size += 112
        elif char in 'QGOMm%W@':
            size += 135
        else:
            size += 50
    return size * 6 / 1000.0  # Convert to picas
