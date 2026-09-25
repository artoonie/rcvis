Accessibility
========================

Every RCVis visualization is built to be usable without sight and without a mouse. There
is no accessibility widget or menu: the visualizations themselves are described, and
screenreader users bring their own software. Everything below is invisible to sighted
users.

Describing the charts
-------------------------------------

The charts are drawings, so each one is exposed to assistive technology as a single
described image rather than hundreds of unlabelled shapes:

* The **bar chart** SVG has ``role="img"`` with a ``<title>`` and a ``<desc>``. The
  description follows the round being shown: "Showing round 2 of 3." followed by the
  plain-English narration of that round.
* The **Sankey diagram** SVG has ``role="img"`` with a title and a description of how to
  read it plus the election summary. Its top bar of round labels is hidden from assistive
  technology.
* The **pie chart** has a visually hidden description.

The plain-English narration comes from
``visualizer.descriptors.roundDescriber.Describer.describe_narration()``: a summary
paragraph plus one paragraph per round, e.g. *"In the second round, people who voted for
Banana had their votes transferred to their next choice. Banana had the fewest votes and
was eliminated."* It is the same text spoken in the generated movies.

In all cases the description points to the table views, which carry the actual numbers.
The tables have captions, and the single-table summary adds visually hidden "Elected" and
"Eliminated" text to the cells whose status was previously shown by color only.

Moving between rounds
-------------------------------------

The intended screenreader workflow is: pick a round, then read what the chart says.

* Every round player has a labelled ``<select>`` for the round, native buttons for
  previous, next and play, and a polite live region that announces "Round N of M" and the
  round's narration whenever the round changes.
* The bar chart's description box above the chart is also a polite live region, and the
  "Read a detailed explanation" link is a real button.

Keyboard support
-------------------------------------

* A "Skip to main content" link is the first focusable element on every page.
* The visualization tabs use the ARIA tabs pattern: ``role="tablist"``, ``role="tab"``
  with ``aria-selected``, and ``role="tabpanel"``. Only the selected tab is in the tab
  order; the arrow keys, Home and End move between tabs.

Testing
-------------------------------------

``visualizer/tests/testAccessibility.py`` checks the rendered markup, and
``visualizer/tests/testLiveBrowserHeadless.py`` exercises the tab keyboard navigation,
the chart descriptions and the round announcements in a headless browser.

Known gaps
-------------------------------------

* The Sankey diagram's nodes can be dragged with a mouse but not moved with the keyboard.
  The table views carry the same data.
* The generated videos have spoken narration but no captions track yet.
* The pie chart is a third-party component; its animation-phase labels have low color
  contrast.
