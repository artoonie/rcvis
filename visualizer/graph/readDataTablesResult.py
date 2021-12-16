""" Converts DataTables JSON format to URCVT """

import json


class InvalidDataTableInput(Exception):
    """ Error messages caught here, that may not have been caught in JS """


# pylint: disable=too-few-public-methods
class ReadDataTableJSON():
    """ A class to read DataTable-serialized data """

    def __init__(self, jsonData):
        self.jsonData = jsonData
        self.numRounds = None

    def _parse_config(self):
        """ Parses the config from the JSON data passed from upload.html """
        config = {}
        config['contest'] = self.jsonData['configElectionTitle']
        config['date'] = self.jsonData['configElectionDate']
        config['threshold'] = self.jsonData['configThreshold']

        if config['contest'] == "":
            raise InvalidDataTableInput("Must give this election a title")

        if config['date'] == "":
            raise InvalidDataTableInput("Must give this election a date")

        if config['threshold'] == "":
            raise InvalidDataTableInput("Threshold cannot be empty")

        return config

    def _fill_rest_of_rounds_after_elected(
            self,
            results,
            candidateName,
            electedOnRound,
            finalVoteTotal):
        assert electedOnRound < self.numRounds

        # All future rounds keep the same vote total
        for futureRoundNum in range(electedOnRound + 1, self.numRounds):
            results[futureRoundNum]['tally'][candidateName] = finalVoteTotal

    def _handle_candidate(self, results, candidateData, candidateName):
        """
        Fills in the data for one candidate across all rounds
        Returns true if was just elected
        """
        # Iterate over each row for this candidate
        wasElectedLastRound = False
        for roundNum, roundData in enumerate(candidateData):
            # Gather data from table
            numVotes = roundData['# Votes']
            status = roundData['Status']

            try:
                numVotes = float(numVotes)
            except (TypeError, ValueError) as exc:
                raise InvalidDataTableInput(f"On Round {roundNum+1}, \"{candidateName}\" " +
                                            "has an invalid number of votes") from exc

            if numVotes < 0:
                raise InvalidDataTableInput("All vote counts must be positive")

            # Already elected last round - fill out remaining rounds, then break
            if wasElectedLastRound:
                if numVotes is None or numVotes == 0:
                    # No surplus transfer: use the last-round's value
                    finalVoteTotal = results[roundNum - 1]['tally'][candidateName]
                else:
                    # Has surplus transfer
                    finalVoteTotal = float(numVotes)

                self._fill_rest_of_rounds_after_elected(
                    results, candidateName, roundNum - 1, finalVoteTotal)
                break

            # The normal case: just append the tally
            results[roundNum]['tally'][candidateName] = numVotes

            # TallyResults only exist for eliminated and elected candidates
            if status == 'Eliminated':
                results[roundNum]['tallyResults'].append({'eliminated': candidateName})
                break
            if status == 'Elected':
                results[roundNum]['tallyResults'].append({'elected': candidateName})
                wasElectedLastRound = True
            else:
                assert status == 'Active'

    def _parse_results(self):
        """ Parses the results from the dataEntry serialization """
        if 'dataEntry' not in self.jsonData:
            raise InvalidDataTableInput("Data Tables isn't even shown. This should never happen.")
        dataTableData = json.loads(self.jsonData['dataEntry'])

        self.numRounds = len(dataTableData['data'][0])
        results = [{"round": i + 1, "tally": {}, "tallyResults": []} for i in range(self.numRounds)]

        names = dataTableData['rowNames']
        if len(set(names)) != len(names):
            raise InvalidDataTableInput("All candidate names must be unique")
        if any(n == "" or n is None for n in names):
            raise InvalidDataTableInput("All candidates must have names")

        # Iterate over the data, which goes candidate-by-candidate (whereas URCVT data
        # goes round-by-round), so we will transpose it
        for candidateNum, candidateData in enumerate(dataTableData['data']):
            candidateName = names[candidateNum]
            self._handle_candidate(results, candidateData, candidateName)

        return results

    def convert_to_urcvt(self):
        """
        Worker function: converts all data passed from upload.html, including the config
        (from RCVis' fields) and the results (from the datatables' serialization)
        """
        config = self._parse_config()
        results = self._parse_results()

        return {'config': config, 'results': results}
