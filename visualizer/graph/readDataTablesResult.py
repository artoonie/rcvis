""" Converts DataTables JSON format to URCVT """

import json


class InvalidDataTableInput(Exception):
    """ Error messages caught here, that may not have been caught in JS """


def convert_to_urcvt(jsonData):
    if 'dataEntry' not in jsonData:
        raise InvalidDataTableInput("Data Tables isn't even shown. This should never happen.")

    dataTableData = json.loads(jsonData['dataEntry'])
    config = {}
    results = []
    config['contest'] = jsonData['configElectionTitle']
    config['date'] = jsonData['configElectionDate']
    config['threshold'] = jsonData['configThreshold']

    if config['contest'] == "":
        raise InvalidDataTableInput("Must give this election a title")

    if config['date'] == "":
        raise InvalidDataTableInput("Must give this election a date")

    if config['threshold'] == "":
        raise InvalidDataTableInput("Threshold cannot be empty")

    numRounds = len(dataTableData['data'][0])
    results = [{"round": i + 1, "tally": {}, "tallyResults": []} for i in range(numRounds)]

    names = dataTableData['rowNames']
    if len(set(names)) != len(names):
        raise InvalidDataTableInput("All candidate names must be unique")
    if any(n == "" for n in names):
        raise InvalidDataTableInput("All candidates must have names")

    # Iterate over the data, which goes candidate-by-candidate (whereas URCVT data
    # goes round-by-round), so we will transpose it
    for candidateNum, candidateData in enumerate(dataTableData['data']):
        candidateName = names[candidateNum]

        # Iterate over each row for this candidate
        wasElectedLastRound = False
        numVotesAfterElected = None
        for roundNum, roundData in enumerate(candidateData):
            # Gather data from table
            numVotes = roundData['# Votes']
            status = roundData['Status']

            # Special case: surplus transfer / all future rounds after an election
            if wasElectedLastRound:
                futureRoundStartsAt = roundNum
                if numVotes is not None and numVotes != 0:
                    # Surplus transfer round
                    numVotes = float(numVotes)
                    results[roundNum]['tally'][candidateName] = numVotes
                    futureRoundStartsAt += 1
                    numVotesAfterElected = numVotes

                # All future rounds keep the same vote total
                for futureRoundNum in range(futureRoundStartsAt, numRounds):
                    results[futureRoundNum]['tally'][candidateName] = numVotes

                # And don't process anything further from this candidate -
                # raising an error if any data does exist
                for i in range(roundNum + 1, numRounds):
                    if candidateData[roundNum]['# Votes'] is not None:
                        raise InvalidDataTableInput(
                            "You can't input values after a candidate is elected")
                break

            # The normal case: just append the tally
            try:
                numVotes = float(numVotes)
            except TypeError as e:
                raise InvalidDataTableInput(
                    f"On Round {roundNum+1}, \"{candidateName}\" has an invalid number of votes") from e
            results[roundNum]['tally'][candidateName] = numVotes

            # TallyResults only exist for eliminated and elected candidates
            if status == 'Eliminated':
                results[roundNum]['tallyResults'].append({'eliminated': candidateName})
                break
            elif status == 'Elected':
                results[roundNum]['tallyResults'].append({'elected': candidateName})
                wasElectedLastRound = True
                numVotesAfterElected = numVotes

    return {'config': config, 'results': results}
