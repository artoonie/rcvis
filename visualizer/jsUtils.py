import string

# c/o https://stackoverflow.com/a/16008023/1057105


def approxLength(st):
    size = 0  # in milinches
    for s in st:
        if s in 'lij|\' ':
            size += 37
        elif s in '![]fI.,:;/\\t':
            size += 50
        elif s in '`-(){}r"':
            size += 60
        elif s in '*^zcsJkvxy':
            size += 85
        elif s in 'aebdhnopqug#$L+<>=?_~FZT' + string.digits:
            size += 95
        elif s in 'BSPEAKVXY&UwNRCHD':
            size += 112
        elif s in 'QGOMm%W@':
            size += 135
        else:
            size += 50
    return size * 6 / 1000.0  # Convert to picas
