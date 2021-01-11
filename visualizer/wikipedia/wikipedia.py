"""
Export a single table summary to Wikipedia
"""

import datetime

from visualizer import common
from visualizer.tabular.tabular import SingleTableSummary


class WikipediaExport():
    def __init__(self, graph, visualizeReferenceUrl):
        self.graph = graph
        self.summary = graph.summarize()
        self.visualizeReferenceUrl = visualizeReferenceUrl

        self.numRounds = len(self.summary.rounds)

        self.winnersSoFar = set()
        self.alreadyDrewEliminatedRow = set()

    @classmethod
    def _get_todays_date_string(cls):
        return datetime.date.today().strftime("%B %d, %Y")

    def _create_reference(self):
        """ Creates a <ref> tag pointing back to RCVIS """
        todaysDate = self._get_todays_date_string()
        title = self.graph.title + " Ranked Choice Voting Election Results Visualization"
        referenceUrl = self.visualizeReferenceUrl

        return """<ref>
                {{cite web
                |title=""" + title + """
                |url=""" + referenceUrl + """
                |website=rcvis.com
                |publisher=RCVIS
                |date=""" + todaysDate + """
                }}
            </ref>"""

    def _create_header(self):
        """ Creates a multiline header """
        reference = self._create_reference()
        title = self.graph.title
        numColumns = str(self.numRounds * 2 + 1)

        # Overall header (rowspan across all rows)
        header = """
            {| class="wikitable sortable"
            ! colspan=" """ + numColumns + """ " | """ + title + " " + reference + """
            |- style="background:#eee; text-align:center;" """

        # Candidate header (rowspan 2)
        header += """
            ! rowspan=2 style="text-align:center;" | Candidate"""

        # Each round header (top row - round enumeration)
        for i in range(1, self.numRounds + 1):
            header += f"""
                ! colspan=2 style="text-align:center;" | Round {i}"""

        # Each round header (bottom row - votes vs percent)
        header += """
            |-"""
        for i in range(1, self.numRounds + 1):
            header += """
                ! Votes
                ! %"""

        return header

    def _get_sortable_referenced_name_if_possible(self, name):
        """ Create a sortable name, with a reference if we can """
        nameSplitBySpaces = name.split(' ')
        if name == common.INACTIVE_TEXT:
            inactiveArticleHref = "Instant-runoff voting#Invalid ballots and incomplete ballots"
            nameWithLink = f"[[{inactiveArticleHref}|{name}]]"
        elif '/' in name:
            # Probably a name like Primary Pick/VP Pick
            nameWithLink = name
        elif len(nameSplitBySpaces) > 1:
            # These are the only sortable names - first + last names
            # Assume the first name is only one name, last name can be multiple, like Em de Silva
            nameWithLink = nameSplitBySpaces[0] + '|' + ' '.join(nameSplitBySpaces[1:])
            nameWithLink = "{{sortname| " + nameWithLink + "}}"
        else:
            # Names like "write-in" are not sortable
            nameWithLink = name

        return nameWithLink

    def _get_class_text_for(self, name, roundTabulation):
        """ Return the text for the class styling (for winners - turns bg green) """
        if roundTabulation.isWinner:
            self.winnersSoFar.add(name)
        if name in self.winnersSoFar:
            return "{{won|}}"
        return ""

    def _get_elimination_row_bar(self, name, roundsRemaining):
        """ Return the text of the elimination row bar """
        self.alreadyDrewEliminatedRow.add(name)
        colspan = roundsRemaining * 2
        text = "{{lost|Eliminated}}"
        return f"""
            ! colspan={colspan} style="text-align:center;" {text}"""

    def _already_has_elimination_bar(self, name):
        """ Does this candidate already have an elimination row bar? """
        return name in self.alreadyDrewEliminatedRow

    def _is_elimination_row_bar_needed(self, name, roundTabulation):
        """ Does this candidate need an elimination row bar now? """
        return not roundTabulation and not self._already_has_elimination_bar(name)

    def _create_table_body(self):
        """ Creates the body of the table """
        singleTableSummary = SingleTableSummary(self.graph).tabulation

        body = ""
        for candidateTabulation in singleTableSummary:
            # Get the candidate name - sorted if possible
            name = candidateTabulation.name
            sortableName = self._get_sortable_referenced_name_if_possible(name)
            body += """
                |-
                ! scope="row" style="text-align:left;" | """ + sortableName

            # Go over each round
            for round_i, roundTabulation in enumerate(candidateTabulation.eachRound):
                # Get the elimination bar if needed
                if self._is_elimination_row_bar_needed(name, roundTabulation):
                    roundsRemaining = self.numRounds - round_i
                    body += self._get_elimination_row_bar(name, roundsRemaining)
                    continue
                elif self._already_has_elimination_bar(name):
                    continue

                assert roundTabulation  # should be handled by _already_has_elimination_bar

                # Get the green background class text if elected
                classText = self._get_class_text_for(name, roundTabulation)

                pctVotes = roundTabulation.pctVotes
                numVotes = roundTabulation.numVotes
                if name == common.INACTIVE_TEXT:
                    # No percentages in inactive ballots
                    body += f"""
                        ! colspan="2" |  {classText} {numVotes} ballots"""
                else:
                    body += f"""
                        | {classText} {numVotes}
                        | {classText} {pctVotes}"""
            body += """
                |-"""
        body += """
            |}"""

        return body

    def create_wikicode(self):
        """ Return the text to generate the wikicode table """
        text = ""
        text += self._create_header()
        text += self._create_table_body()
        return text
