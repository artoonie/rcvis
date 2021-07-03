"""
This file downloads NYC Board of Elections Ranked Choice Voting results
and converts the data to the Universal Tabulator format.

It is particularly frustrating because BOE generated their visualizations based
on the UT format and RCVis, and we have to reverse-engineer their work to get the
data back into a format where it can use RCVis properly, rather than their static,
animationless barchart.

This file is poorly document because it's throw-away code.
I doubt the format will be the same next cycle.
If you really care...ask me, I guess.
"""

import json
import requests

from bs4 import BeautifulSoup
from rcvformats.schemas import universaltabulator

def persist_to_file(file_name):
    def decorator(original_func):
        try:
            cache = json.load(open(file_name, 'r'))
        except (IOError, ValueError):
            cache = {}

        def new_func(param):
            if param not in cache:
                cache[param] = original_func(param)
                json.dump(cache, open(file_name, 'w'))
            return cache[param]
        return new_func
    return decorator

@persist_to_file('download_cache.dat')
def download(url):
    req = requests.get(url)
    return {'status_code': req.status_code, 'content': str(req.content)}

def parseTally(soup):
    table = soup.table.tbody.tr.td.table.tbody.find_all('tr')[12]

    tally = {}
    eliminated = []
    for tr in table.find_all('tr'):
        innerTable = tr.td.table

        # Some tables are just empty??
        if innerTable is None:
            continue

        tds = innerTable.tr.find_all('td')
        name = str.strip(tds[0].string)
        votes = tds[1].string.split(' ')[0]
        if votes == 'eliminated':
            eliminated.append(name)
        else:
            # I'm sorry on all accounts
            if name == 'Inactive ballots':
                name = 'Inactive Ballots'
            tally[name] = float(votes)

    return eliminated, tally

def getConfig(soup):
    contest = soup.table.tbody.tr.td.table.tbody.find_all('tr')[7].find_all('td')[1].string
    return {
        "contest" : "New York City " + contest,
        "date" : "2021-06-22",
        "jurisdiction" : "New York City"
  }

def getThreshold(lastRoundTally):
    return sum(votes for name, votes in lastRoundTally.items() if name != "Inactive Ballots") / 2.0

def getWinners(anyRoundTally):
    threshold = getThreshold(anyRoundTally)
    return [name for name, votes in anyRoundTally.items() if votes > threshold and name != "Inactive Ballots"]

def downloadAndConvertToUniversalTabulatorFormat(contest):
    baseUrl = 'https://web.enrboenyc.us/rcv/%s_%d.html'
    round_i = 1
    universalTabulatorDataFormat = {'results': []}
    winnersFoundSoFar = set()
    eliminatedSoFar = set()
    while True:
        url = baseUrl % (contest, round_i)
        print(f"Looking at {url}")
        req = download(url)

        if req['status_code'] == 404:
            break
        if req['status_code'] != 200:
            raise RuntimeError(f"Unexpected error code on round {round_i}: {req['status_code']}")

        soup = BeautifulSoup(req['content'], 'html.parser')
        eliminatedNames, tally = parseTally(soup)

        # Update who was eliminated last round
        if round_i != 1:
            # note: no eliminations on round 1, so its fine
            eliminatedNames = [e for e in eliminatedNames if e not in eliminatedSoFar]
            eliminatedSoFar.update(eliminatedNames)
            eliminatedDicts = [{'eliminated': e} for e in eliminatedNames]
            universalTabulatorDataFormat['results'][-1]['tallyResults'].extend(eliminatedDicts)

        # Update who this round tally data
        universalTabulatorDataFormat['results'].append({
            'round': round_i,
            'tally': tally,
            'tallyResults': []
        })
        # Update any winners this round
        winners = getWinners(tally)
        winners = [w for w in winners if w not in winnersFoundSoFar]
        winnersFoundSoFar.update(winners)
        winnerDicts = [{'elected': name} for name in winners]
        universalTabulatorDataFormat['results'][-1]['tallyResults'].extend(winnerDicts)

        # Only get the config on the first round
        if round_i == 1:
            universalTabulatorDataFormat['config'] = getConfig(soup)

        # Update the threshold each round, so it'll be correct on the last round
        universalTabulatorDataFormat['config']['threshold'] = getThreshold(tally)

        round_i += 1
        if round_i == 30:
            raise RuntimeError("No way we have 30 rounds.")
    return universalTabulatorDataFormat

def parseAndValidateContest(contest):
    ut_format = downloadAndConvertToUniversalTabulatorFormat(contest)
    out_filename = f'outdir/{contest}.json'
    with open(out_filename, 'w') as f:
        json.dump(ut_format, f)
    schema = universaltabulator.SchemaV0()
    if not schema.validate(out_filename):
        print("Didn't generate a correct format: ", schema.last_error())
    print(f"Completed contest, saved to {out_filename}")

def collect_urls():
    baseUrl = 'https://web.enrboenyc.us/rcv/'
    linksToTraverse = ['/']
    alreadySeenLinks = set()
    alreadySeenLinks.update(linksToTraverse)

    allLinks = []

    while linksToTraverse:
        relpath = linksToTraverse.pop()
        req = download(baseUrl + relpath)
        print("getting", relpath)
        soup = BeautifulSoup(req['content'], 'html.parser')
        linksThisPage = soup.find_all('a')
        for link in linksThisPage:
            if link.text == 'Home':
                continue
            if link.text == 'Back':
                continue

            # Links that don't start with 0 happen to have more links...go to them
            href = link['href']
            if href.startswith('0'):
                allLinks.append(href)
            else:
                linksToTraverse.append(href)
        print(f"Traversed everything on {relpath}, still to go: {linksToTraverse}")
    return allLinks

allUrls = collect_urls()
assert all(a.startswith('024') and a.endswith('.html') for a in allUrls)
contestIds = [a[:len('024337')] for a in allUrls]
    
for contestId in contestIds:
    parseAndValidateContest(contestId)
