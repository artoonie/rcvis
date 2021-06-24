const residualSurplusString = "Residual Surplus";
const inactiveBallotsString = "Inactive Ballots";

// Simplify number: e.g. use 1.1k instead of 1,135, 3.2m instead of 3,159,023
function simplifyNumber(num)
{
  let tmp = num;
  let numCommas = 0;
  while(tmp % 1000 != tmp) {
    numCommas++;
    tmp /= 1000;
  }
  const units = ["", "k", "m"];
  let unit_ptr = 0;
  for (let i = 0; i < Math.min(numCommas, 2); ++i)
  {
      num /= 100;
      num = Math.round(num);
      num /= 10.0;
      unit_ptr++;
  }
  return num + units[unit_ptr];
}

function votesToText(numVotes, includeWordVotes, doSimplifyNumber)
{
  let roundedVotes;
  if (doSimplifyNumber && numVotes >= 1000)
      roundedVotes = simplifyNumber(numVotes);
  else
      roundedVotes = Math.round(numVotes*1000/10.0) / 100;
  return roundedVotes + " " + (includeWordVotes ? "votes" : "");
}

function percentToText(candidateName, numVotes, totalVotes)
{
  // Inactive ballots should not show %
  if (candidateName == inactiveBallotsString)
    return "with no choices left";
  // Zero-vote (in-progress) elections should not show anything
  if (totalVotes == 0)
    return "";

  const percentVotes = Math.round(1000.0*numVotes/totalVotes)/10.0;
  return "(" + percentVotes + "%)";
}

function votesAndPctToText(candidateName, numVotes, totalVotes, includeWordVotes, doSimplifyNumber)
{
  return votesToText(numVotes, includeWordVotes, doSimplifyNumber) + " " + percentToText(candidateName, numVotes, totalVotes);
}

function classNameForDescriptionVerb(verb) {
  /**
   * Returns a class name given the hardcode verb. Must sync with roundDescriber.py.
   */
  if (verb == ' won')
    return 'timeline-info-good'
  if (verb == ' eliminated')
    return 'timeline-info-bad'
  if (verb == ' redistributed votes')
    return '' // default class
  if (verb == 'initial')
    return '' // default class
  if (verb == ' transferred votes')
    return '' // default class
  else
    throw new Error("Unexpected verb " + verb +
                    " - this function must be in sync with roundDescriber.py")
}

/*
 * Functions for magic word wrapping
 */
function magicWordWrap(text) {
  /* If the candidate name is too long, wraps it using these rules:
   * 1. If there is a parenthetical, that goes on the next line;
   * 2. If there is a comma, it splits the two lines at the first comma;
   * 3. Otherwise, evenly splits words between the first and second line, or
   * 4. If there is only one, long word, splits that word in half
   * Input is a <text>. This function adds one or two <tspan>s, replacing
   * the existing text.
   */
  text.each(function() {
    let textElem = d3.select(this),
      text = textElem.text();

    let lineHeight = 1.1, // ems
      dy = parseFloat(textElem.attr("dy")),
      tspan = textElem.text(null)
                      .append("tspan")
                      .attr("class", "dataLabel")
                      .attr("x", textElem.attr("x"))
                      .attr("y", textElem.attr("y"))
                      .attr("dy", dy + "em")
                      .attr("text-anchor", textElem.attr("text-anchor"))
                      .text(text);

    // If don't need a second line, stop here
    if (!needsTwoLines(text)) {
        return;
    }
    let split = splitText(text);

    // Shift previous text up
    tspan.text(split[0]);
    tspan.attr("dy", (dy - 0.5*lineHeight) + "em");

    // Create secondary text
    textElem.append("tspan")
            .attr("class", "dataLabel secondaryDataLabel")
            .attr("x", textElem.attr("x"))
            .attr("y", textElem.attr("y"))
            .attr("dy", (dy + 0.8*lineHeight) + "em")
            .attr("text-anchor", textElem.attr("text-anchor"))
            .text(split[1]);
  });
}

function splitText(text) {
  /**
   * Helper function for magicWordWrap. Always returns an array with
   * exactly two elements
   */
  // First, split parantheticals, e.g. Bob (Incumbant) -> [Bob, (Incumbant)]
  // Then, split commas, e.g. Bob, The First -> [Bob, The First]
  for (const regexp of [/([^(]*)(\(.*\))/, /(.*,)(.*)/]) {
    const match = text.match(regexp)
    if (match) {
        return [match[1], match[2]]
    }
  }

  // Finally, split in the middle by words
  let words = text.split(/\s+/);
  if (words.length == 1) {
    // Split a word down the middle
    const word = words[0];
    const splitPoint = Math.round(word.length / 2.0);
    return [word.substring(0, splitPoint) + "-", word.substring(splitPoint)];
  } else {
    // Split array of words in half
    const splitPoint = Math.round(words.length / 2.0);
    return [words.slice(0, splitPoint).join(' '), words.slice(splitPoint).join(' ')];
  }
}

function namesNeedAnyTwoLineLabels(names) {
    for (const name of names) {
       if (needsTwoLines(name)) return true;
    }
    return false;
}

function needsTwoLines(name) {
    return name.length > 25;
}

/*
 * Functions for range-timeline-slider
 */

let _timelineData_cached;
function generateTimelineData(humanFriendlyEventsPerRound) {
  if (_timelineData_cached !== undefined) {
    return _timelineData_cached;
  }
  _timelineData_cached = humanFriendlyEventsPerRound.map(function(humanFriendlyEvents) {
    return humanFriendlyEvents.map(function(humanFriendlyEvent) {
      return {
        summaryText: humanFriendlyEvent.summary,
        className: classNameForDescriptionVerb(humanFriendlyEvent.verb),
        moreInfoText: humanFriendlyEvent.description
      }
    })
  });
  return _timelineData_cached;
}

function generateTickTexts(numRounds) {
  if (!doHideActiveTickText(numRounds)) {
    return Array(numRounds).fill().map((_, i) => "Round " + (i+1));
  }
  return "»";
}

function doHideActiveTickText(numRounds) {
  // The magic number swapping from "Rounds" mode to >> mode
  return numRounds > 7;
}

function getTimeBetweenAnimationStepsMs(numRounds) {
  // Tries to give the ideal time of 1200ms, but it gets boring after a while,
  // so starts to slow down and approach 500ms over time.
  // See plot:
  // wolframalpha.com/input/?i=plot+500%2B700%2F%28max%28x-6%2C1%29%29+from+x%3D1+to+x%3D20
  const alpha = Math.max(numRounds-6, 1)
  return 500 + 700/alpha;
}
