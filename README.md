[![Documentation Status](https://readthedocs.org/projects/rcvis/badge/?version=latest)](https://rcvis.readthedocs.io/en/latest/?badge=latest) [![codecov](https://codecov.io/gh/artoonie/rcvis/branch/main/graph/badge.svg)](https://codecov.io/gh/artoonie/rcvis)

# RCVis.com
This is the code repository for [rcvis.com](https://www.rcvis.com). Unless you're a programmer, you probably want to be there instead of here!

RCVis has been used by millions of voters in the United States and abroad for Election Night Reporting of Ranked Choice Voting elections.
It has hosted thousands of mock election results from RCV-compatible voting tools, including [RankedVote.co](https://RankedVote.co) and [RankedChoices.com](https://RankedChoices.com).
It can import data from Opavote, ElectionBuddy, Dominion software, RCTab, and more.
It has been published in the [Washington Post](https://www.washingtonpost.com/dc-md-va/2023/06/23/arlington-county-board-democratic-primary-election-results/), on [Ballotpedia](https://ballotpedia.org/June_22,_2021,_election_results), in the [Gothamist](https://gothamist.com/arts-entertainment/big-apple-book-ballot-results-best-nyc-book), featured on [NBC New York](https://www.nbcnewyork.com/news/politics/adams-garcia-wnbc-poll-nyc-mayor/3104963/), [Fox 5 NY](https://www.fox5ny.com/video/940333), and dozens of other news outlets.

While you may fork and run this code to run it locally, almost all users find it sufficient to upload data directly to RCVis.com.

# Ranked Choice Voting Visualization
Visualize the results of ranked-choice voting elections.

**What is RCV?** RCV allows you to have backup options. If your preferred candidate can't win, you still have a say: your vote gets _transferred_ to your next-best pick.

**Why RCV?** In an RCV election, you can't spoil votes. Third-party candidates don't waste votes. Similar candidates help each other instead of hurting each other. They're less polarized and more fair. Multi-winner RCV elections mitigate the effects of gerrymandering. For more information, check out [FairVote's guide to the benefits of RCV elections](https://www.fairvote.org/rcv#rcvbenefits).

**Why the visualizer?** In a traditional election, the results are easy to understand: how many votes did each candidate get? In an RCV election, it can be a harder to understand how a candidate won, based on what happens in each round. Our goal is to create a series of visualizations which can work for a variety of audiences on a variety of mediums: print, web, and TV.

Learn more on our Medium post: [An Illustrated Guide to Ranked-Choice Voting](https://medium.com/@armin.samii/an-illustrated-guide-to-ranked-choice-voting-4ce3c5fe73f9).

## Examples
Check out [rcvis.com](https://www.rcvis.com) for live examples, including:

| Barchart | Round-by-Round |
| --- | --- |
| ![Barchart](static/visualizer/icon_interactivebar.gif "Interactive Barchart") | ![Round-by-Round](static/visualizer/icon_interactiveroundbyround.gif "Round-by-Round") |

| Sankey | Tabular Summary |
| --- | --- |
| ![Sankey](static/visualizer/icon_sankey.jpg "Sankey") | ![Tabular Summaries](static/visualizer/icon_singletable.png "Tabular Summaries") |

## Embedding
RCVis implements the [oembed protocol](http://www.oembed.com) with discoverability, allowing you to embed files into your website with an iframe.


# Running RCVis Locally

## Installation
Install `python3`, `virtualenv`, and `npm` with your favorite package manager, then run `./scripts/install.sh`. This script will initialize a `.env` file in the root directory for your secrets and configuration. You will need to supply a secret key in `.env` before proceeding.


## Running

You can begin serving the website at localhost:8000 using:
```bash
./scripts/serve.sh
```
The first time you execute this script, you will be prompted to create a new admin user. You can skip this step for future executions by storing the email of the admin user as `OFFLINE_ADMIN` in `.env`.

You may also need to run this whenever the npm dependencies change:
```bash
source .env
source venv/bin/activate

npm install  # this works for me
python3 manage.py npminstall  # this is purported to work but doesn't
```

## Test Data
Test data, including real and mock elections, can be found in the `testData` directory. Example input formats can be found on [RCVFormats](https://github.com/artoonie/rcvformats/tree/main/testdata/inputs).

## REST API
The primary API documentation is in the form of [example code](visualizer/tests/testRestApiExampleCode.py), which is documented line-by-line.
We recommend you start by looking over the example code.
Addition documentation is available at [rcvis.com/api/](https://www.rcvis.com/api/).

To get started with programmatic access to rcvis:

1. Create an account on RCVis
2. Email team@rcvis.com to request API access
3. Submit a POST request to [https://www.rcvis.com/api/auth/get-token](https://www.rcvis.com/api/auth/get-token) to obtain an API Key, e.g. `curl -X POST https://www.rcvis.com/api/auth/get-token -d username=yourUserName -d password=yourAmazingPassword`

With your API key, you may access two endpoints:
1. [https://www.rcvis.com/api/visualizations/](https://www.rcvis.com/api/visualizations/) requires field `jsonFile` with the body of a valid summary JSON.
2. [https://www.rcvis.com/api/bp/](https://www.rcvis.com/api/bp/) requires field `resultsSummaryFile` with the body of a valid summary JSON and allows four optional fields: `candidateSidecarFile`, `dataSourceURL` (string), `areResultsCertified` (boolean), and `isPrimary` (boolean).

For both endpoints, upload with POST and modify with PUT or PATCH. Authenticated users are limited to 1000 requests per hour.


## Movies

To get moviepy working for Ubuntu 16.04 LTS users, comment out the following statement in `/etc/ImageMagick-6/policy.xml`:
```xml
<policy domain="path" rights="none" pattern="@*"/>
```
or, simply run `sudo ./scripts/fix-moviepy-on-ubuntu-1604.sh`

To run workers to generate movies (optional - only needed to use the movie generation flow):
```bash
source .env
source venv/bin/activate
export DISPLAY=":0" # if not already set
celery -A rcvis worker --loglevel info
```
