// Simplify number: e.g. use 1.1k instead of 1,135, 3.2m instead of 3,159,023
function simplifyNumber(num)
{
  tmp = num
  numCommas = 0;
  while(tmp % 1000 != tmp) {
    numCommas++;
    tmp /= 1000;
  }
  units = ["", "k", "m"]
  unit_ptr = 0
  for (var i = 0; i < Math.min(numCommas, 2); ++i)
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
  if (doSimplifyNumber && numVotes >= 1000)
      roundedVotes = simplifyNumber(numVotes);
  else
      roundedVotes = Math.round(numVotes*1000/10.0) / 100;
  return roundedVotes + " " + (includeWordVotes ? "votes" : "");
}

function percentToText(candidateName, numVotes, totalVotes)
{
  // Inactive ballots should not show %
  if (candidateName == "Inactive Ballots")
    return "no choices left";

  percentVotes = Math.round(1000.0*numVotes/totalVotes)/10.0;
  return "(" + percentVotes + "%)";
}

function votesAndPctToText(candidateName, numVotes, totalVotes, includeWordVotes, doSimplifyNumber)
{
  return votesToText(numVotes, includeWordVotes, doSimplifyNumber) + " " + percentToText(candidateName, numVotes, totalVotes);
}

function getMagicTextLabelSize(longestLabelApxWidth, scalar=1.0)
{
  // I'm really sorry about this. Make the text smaller for very long labels.
  let candidateAxisTextSizeEm = 2;
  let maxTextSizeFor2em = 13;
  if (longestLabelApxWidth > maxTextSizeFor2em)
  {
      candidateAxisTextSizeEm /= longestLabelApxWidth/maxTextSizeFor2em;
  }
  candidateAxisTextSizeEm *= scalar;
  return candidateAxisTextSizeEm + "em";
}

let _timelineData_cached;
function generateTimelineData(humanFriendlyRoundNames) {
  /**
   * Shared by both sliders' generations
   */
  if (_timelineData_cached !== undefined) {
    return _timelineData_cached;
  }
  _timelineData_cached = humanFriendlyRoundNames.map(function(name) {
    return [{
      summaryText: name,
      className: name.includes('eliminated') ? 'timeline-info-bad' : 'timeline-info-good',
      moreInfoText: name.includes('eliminated') ?
        'The candidate had the fewest votes, so everybody who voted for this candidate now moves on to their next choice.' :
        'The candidate reached the threshold and won'
    }]
  });
  return _timelineData_cached;
}


/* Color functions courtesy of https://codepen.io/hnq90/pen/YvoxMJ */
// Converts a #ffffff hex string into an [r,g,b] array
var h2r = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
};
// Inverse of the above
var r2h = function(rgb) {
    return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
};
var _interpolateColor = function(color1, color2, factor) {
  var result = color1.slice();
  for (var i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor*(color2[i]-color1[i]));
  }
  return result;
};
/* End color functions */
