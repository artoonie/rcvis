# Ranked Choice Voting Visualization
Visualize ranked-choice voting results with a sankey diagram using d3.js and django.

## Installation & running
To run:
```bash
virtualenv venv
source venv/bin/activate
pip3 install -e .
python manage.py runserver
open localhost:8000/sankey
```

## Functionality & manual testing
As the functionality is changing rapidly, we do not yet have automated tests. The following is a set of regression tests to verify each commit.

- Top bar of candidate names
    - *Sticky*: On a short screen, when you scroll down far enough, it should become sticky and lock to the top of the page.
    - *Live Candidates*: The bar should by dynamic based on the candidates shown at the top of the screen, not the very first round.
    - As you continue to scroll down, the X positions of the candidate names should shift to continue to align with the _Live Candidates_.
    - Candidates who are not _Live Candidates_ should be removed as you scroll down.
    - On a skinny screen, when you sideways scroll (particularly when it's _Sticky_), the X position should continue to align with the _Live Candidates_.
- Drag
    - Dragging nodes should have both the text and connected links move
- Long candidate names
    - Candidate names should not overlap in the top bar. If a candidate name is very long, or a candidate’s number of votes makes its bar short, the name should automatically truncate to ellipses.
    - When you hover over these ellipses, they should reveal the candidate’s full name
