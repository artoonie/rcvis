from math import fmod


def comma_separated_names_with_and(listOfNames):
    if len(listOfNames) == 0:
        return ""

    if len(listOfNames) == 1:
        nameString = listOfNames[0]
    else:
        lastNameInList = listOfNames[-1]
        otherNamesInList = ", ".join(listOfNames[:-1])
        nameString = otherNamesInList + " and " + lastNameInList

    return nameString


def text_to_describe_list_of_names(listOfNames, whatHappenedToThemDescription):
    """
    e.g. With listOfNames = [Foo,Bar,Baz] and whatHappenedToThemDescription="{name} ate chips":
    "Foo, Bar, and Baz ate chips. "
    listOfNames can be empty, in which case the empty string is returned.
    """
    if len(listOfNames) == 0:
        return ""

    nameString = comma_separated_names_with_and(listOfNames)
    return whatHappenedToThemDescription.format(name=nameString)


def intify_or_aboutify(num):
    """ Either returns num as an int, if it's an int, or says "about num" """
    numAsString = str(int(round(num)))
    if fmod(num, 1) < 1e-6:
        return numAsString
    else:
        return "about " + numAsString


def get_redistribution_data(graph, roundNum):
    candidates = graph.summarize().candidates
    redistributedNames = []
    redistributedSum = 0
    for item, candidateInfo in candidates.items():
        if roundNum >= len(candidateInfo.votesAddedPerRound):
            continue
        votesAdded = candidateInfo.votesAddedPerRound[roundNum]
        if votesAdded < 0:
            redistributedNames.append(item.name)
            redistributedSum -= votesAdded
    return {'names': redistributedNames, 'sum': redistributedSum}
