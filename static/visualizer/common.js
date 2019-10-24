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

function percentToText(numVotes, totalVotes)
{
  percentVotes = Math.round(1000.0*numVotes/totalVotes)/10.0;
  return "(" + percentVotes + "%)";
}

function votesAndPctToText(numVotes, totalVotes, includeWordVotes, doSimplifyNumber)
{
  return votesToText(numVotes, includeWordVotes, doSimplifyNumber) + " " + percentToText(numVotes, totalVotes);
}
