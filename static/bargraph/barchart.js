// Makes a bar graph and returns a function that allows you to animate based on round
function makeBarGraph(idOfContainer, idOfLegendDiv, data, candidatesRange, totalVotesPerRound, numRoundsTilWin, colors, longestLabelApxWidth, isInteractive, threshold, doHideSurplusAndEliminated, isVertical, doDimPrevRoundColors) {
  // First, transpose the data into layers
  mappedData = candidatesRange.map(function(roundInfo) {
    return data.map(function(d) {
      return {x: d.candidate, y: d[roundInfo]};
    });
  });
  var candidateNames = mappedData[0].map(c => c.x);
  var roundNames = Object.keys(data[0]).slice(1)
  var numRounds = roundNames.length;
  var stackSeries = d3.stack().keys(roundNames)(data);

  // Now do some magic to figure out the right size
  longestLabelApxWidth *= 1.2; // TODO hacky but deosn't chop data labels
  var margin = {top: 10, right: 10, bottom: 35, left: 20};
  if(isVertical) {
      margin.left += longestLabelApxWidth * .707; // Room for candidate name on left
      margin.bottom += longestLabelApxWidth; // Room for candidate name at bottom
      margin.top += 20; // Room for data label
  }
  else {
      margin.left = 5; // Candidate name overlaps bars
      margin.bottom += 20; // Room for candidate name diagonally down
  }

  var numCandidates = data.length;
  // 850 is not the final width, but the width of the viewbox.
  // We don't want it to even be that wide if there are just a few candidates.
  // TODO sync this 500 and numCandidates*100 with the one in barchart-interactive.html
  var numHorizontalElements = isVertical ? numCandidates : numRounds;
      numHorizontalElements = Math.max(numHorizontalElements, 5) // ensure at least 5 elements wide
  var maxWidth = Math.min(500, numHorizontalElements*100);

  // TODO hacky way of matching the initial, and only the initial, aspect ratio
  var roomForStuffAboveUs = 150;
  var aspectRatio = (window.innerHeight-roomForStuffAboveUs) / window.innerWidth
  var maxHeight = Math.max(maxWidth * aspectRatio, 350);
  if (!isVertical) {
      // Limit the horizontal bar size to [20, 70]
      var maximumHorizontalBarSize = 70;
      var minimumHorizontalBarSize = 20;
      maxHeight = Math.min(maxHeight, numCandidates*maximumHorizontalBarSize);
      maxHeight = Math.max(maxHeight, numCandidates*minimumHorizontalBarSize);
  }

  var width = maxWidth - margin.left - margin.right,
      height = maxHeight - margin.top - margin.bottom;

  var viewboxWidth = width + margin.left + margin.right;
  var viewboxHeight = height + margin.top + margin.bottom + longestLabelApxWidth;
  
  var svg = d3.select(idOfContainer)
    .append("svg")
    .attr("viewBox", "0 0 " + viewboxWidth + " " + viewboxHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var surplusPatternId = "diagonalHatch"+idOfContainer;
  svg.append("defs")
    .append("pattern")
    .attr("id", surplusPatternId)
    .attr("patternUnits", "userSpaceOnUse")
    .attr("width", 4)
    .attr("height", 4)
    .append("path")
        .attr("d", "M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" )
        .style("stroke", "white")
        .style("stroke-width", 1);
  
  // Set x, y and colors
  var candidatesDomain = d3.scaleBand()
        .domain(candidateNames)
  var votesDomain = d3.scaleLinear()
        .domain([0, d3.max(stackSeries, d => d3.max(d, d => d[1]))]);

  if (isVertical) {
      var votesRange = votesDomain
            .rangeRound([height - margin.bottom, margin.top]);
      var candidatesRange = candidatesDomain
            .range([margin.left, width])
            .padding(0.01);
  } else {
      var votesRange = votesDomain
            .rangeRound([margin.left, width - margin.right])
      var candidatesRange = candidatesDomain
            .range([margin.top, height])
            .padding(0.01);
  }
  
  // Define axes
  if (isVertical)
  {
    var votesAxis = g => g
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(votesRange).ticks(null, "s"))
          .call(g => g.selectAll(".domain").remove())
    var candidatesAxis = g => g
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(candidatesRange).tickSizeOuter(0))
          .call(g => g.selectAll(".domain").remove())
  }
  else
  {
    var candidatesAxis = g => g
          .attr("transform", `translate(20,0)`)
          .call(d3.axisLeft(candidatesRange).tickSize(0))
          .call(g => g.selectAll(".domain").remove())
    var votesAxis = g => g
          .attr("transform", `translate(0,${height - margin.bottom + 60})`)
          .call(d3.axisBottom(votesRange).ticks(5))
          .call(g => g.selectAll(".domain").remove())
  }
  
  // Define legend
  var legend = svg => {
        const g = svg
          .selectAll("g")
          .append("ul")
          .data(roundNames)
          .join("li")
          .style("list-style-type", "none")

        g.append("div")
          .style("padding", "10px")
          .style("margin-right", "2px")
          .style("float", "left")
          .style("background-color", function(d, i) { return colors[i]; })

        g.append("div")
          .style("margin-top", "4px")
          .style("font-size", "0.8em")
            .text(d => d);
  }

  // Draw everything
  function isEliminated(d) { return d.numRoundsTilEliminated < currRound; }
  function isEliminatedThisRound(d) { return d.numRoundsTilEliminated <= d.round; }
  function isWinner(d) { return d.numRoundsTilWin < currRound; }
  var currRound = numRounds;
  var barVotesSizeHelperFn = function(d) {
      return (votesRange(d[0]) - votesRange(d[1])) * (isVertical ? 1 : -1);
  }
  var shouldDisplayFn = function(d) { return !isInteractive || d.round < currRound; }
  var isEliminatedInteractiveFn = function(d) { return isInteractive && isEliminated(d); }
  var isSurplusFn = function(d) { return barVotesSizeHelperFn(d) <= 0; };
  var barVotesPosFn   = function(d) {
      var index = isVertical ? 1 : 0;
      if (isNaN(d[0]) || isNaN(d[1])) return 0; // not sure why this happens
      if (!shouldDisplayFn(d)) return votesRange(d[index]); // Place it nicely for the animation
      var offsetForOvervotes = -Math.max(0, -barVotesSizeHelperFn(d));
      return offsetForOvervotes + votesRange(d[index]);
  };
  var barVotesSizeFn = function(d) {
      if (isNaN(d[0]) || isNaN(d[1])) return 0; // not sure why this happens
      if (!shouldDisplayFn(d)) return 0;
      return Math.abs(barVotesSizeHelperFn(d));
  };
  var bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
  var eliminatedColor = doHideSurplusAndEliminated ? bgColor : "#CCC";
  var surplusColor = doHideSurplusAndEliminated ? bgColor : "#666";
  var barColorFn = function(d) {
      if (isEliminatedInteractiveFn(d))
      {
          return eliminatedColor;
      }
      else if(isSurplusFn(d))
      {
          // TODO in here, hatch the original color maybe?
          //return surplusColor;
          return "url(#"+surplusPatternId+")";
      }
      else
      {
          if (!doDimPrevRoundColors || !isInteractive)
              // Don't dim previous round colors: either not requestsed, or this is the print view
              return colors[d.round]
          if (d.round == currRound-1)
              // Dimming on. Only the last round gets full colors.
              return colors[d.round];
          else
              // All previous rounds are dimmed
			  return r2h(_interpolateColor(h2r(colors[d.round]), h2r("#F0F0F0"), 0.7))
      }
  };

  // Data label helper functions
  var barVotesMainDataLabelPosFn = function(d) {
      // I hate this function. We need to do some magic because in vertical mode,
      // "up" is negative, whereas in horizontal, "right" is positive.
      if (!isVertical) {
        var thresholdPosition = barVotesPosFn([threshold, threshold]);
        var expectedMaxWidthOfLabel = 100;
        // If the threshold isn't right up against the edge, use it
        if ((width - thresholdPosition) > expectedMaxWidthOfLabel) {
          // NOTE: Manually test this functionality using macomb-multiwinner-surplus.json
          return width - 20;
        }

        // Otherwise, go a little back from the threshold and anchor there
        // NOTE: Manually test this functionality using opavote2.json
        return thresholdPosition - 10;
      }

      var offset = -15;
      var startOfBarPlusABit = barVotesPosFn(d) + offset;
      if (isEliminatedThisRound(d))
      {
          // Eliminated candidates
          return votesRange(0) + offset;
      }
      else if (doHideSurplusAndEliminated && isSurplusFn(d))
      {
          // Surplus votes that are hidden - go down one bar
          return startOfBarPlusABit + barVotesSizeFn(d);
      }

      return startOfBarPlusABit;
  };
  var barCandidatesDataLabalPosFn = function(d) {
      if (isVertical)
      {
        offset = candidatesRange.bandwidth()/2.0;
      }
      else
      {
        // Horizontal is all at the same height
        offset = candidatesRange.bandwidth()/2.0;
      }
      return candidatesRange(d.data.candidate) + offset;
  };
  function isLatestRoundFor(d) {
      if(isEliminated(d)) {
        // If we've been eliminated by now, then check if this round is the last round alive
        return d.numRoundsTilEliminated == d.round;
      } else if(isWinner(d)) {
        // A candidate can win at any time. Only include the round on which they won.
        return d.numRoundsTilWin == d.round;
      } else {
        // Otherwise, check if this round is the latest available round
        return currRound == d.round+1;
      }
  }; 
  function dataLabelDisplayFor(d) { return isLatestRoundFor(d) ? null : "none" }; 
  var mainDataLabelTextFn = function(d) {
      // Horizontal shows "eliminated" or "x votes (y%)"
      // Vertical shows "[x]" or "x votes", and percent is shown on secondaryDataLabelTextFn
      if(isEliminatedThisRound(d)) {
          return isVertical ? "❌ "  :  "eliminated";
      }
      startText = "";
      if (d.isWinner)
          startText = "✅ " ;
      if (isVertical)
      {
          return startText + votesToText(d[1], false, true);
      }
      else
      {
          return startText + votesAndPctToText(d.data["candidate"], d[1], totalVotesPerRound[d.round], false, false);
      }
  };
  var secondaryDataLabelTextFn = function(d) {
      if(isEliminatedThisRound(d) || !isVertical) {
          return "";
      }
      return percentToText(d.data["candidate"], d[1], totalVotesPerRound[d.round]);
  };
  function rightRoundedRect(x, y, width, height, radius) {
      return "M" + x + "," + y
           + "h" + (width - radius)
           + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
           + "v" + (height - 2 * radius)
           + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
           + "h" + (radius - width)
           + "z";
  }
  function leftRoundedRect(x, y, width, height, radius) {
      return "M" + x + "," + (y+radius)
           + "a" + radius + "," + -radius + " 0 0 1 " + radius + "," + -radius
           + "h" + width
           + "v" + height
           + "h" + (-width)
           + "a" + -radius + "," + -radius + " 0 0 1 " + -radius + "," + -radius
           + "z";
  }
  function topRoundedRect(x, y, width, height, radius) {
      return "M" + x + "," + (y+radius)
           + "a" + radius + "," + -radius + " 0 0 1 " + radius + "," + -radius
           + "h" + (width - 2*radius)
           + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
           + "v" + (height-radius)
           + "h" + (-width)
           + "z";
  }
  function allRoundedRect(x, y, width, height, radius) {
      return "M" + x + "," + (y+radius)
           + "a" + radius + "," + -radius + " 0 0 1 " + radius + "," + -radius
           + "h" + (width - radius)
           + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
           + "v" + (height - 2*radius)
           + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
           + "h" + (-width + radius)
           + "a" + -radius + "," + -radius + " 0 0 1 " + -radius + "," + -radius
           + "z";
  }
  function notRoundedRect(x, y, width, height) {
      return "M" + x + "," + y
           + "h" + width
           + "v" + height
           + "h" + (-width)
           + "z";
  }
  function getMaybeRoundedBarFor(object, data) {
      let x = candidatesRange(data.data.candidate);
      let y = barVotesPosFn(data);
      let width = candidatesRange.bandwidth() * 0.9;
      let height = barVotesSizeFn(data);
      const r = 4;

      if (height == 0 || width == 0) {
        // Don't draw a strip of a radius on eliminated rounds
        return '';
      }

      if (!isVertical) {
        [x, y] = [y, x];
        [width, height] = [height, width];
      }

      if (data.round == 0 && isEliminatedThisRound(data)) {
        // Eliminated on first round - round on all sides on horizontal, top on vertical
        if (isVertical) return  topRoundedRect(x, y, width, height, r);
        else            return allRoundedRect(x, y, width, height, r);
      }
      else if (data.round == 0) {
        // First round (vertical gets no rounding on first round)
        if (isVertical) return  notRoundedRect(x, y, width, height);
        else            return leftRoundedRect(x, y, width, height, r);
      } else if (isLatestRoundFor(data)) {
        // Last round 
        if (isVertical) return   topRoundedRect(x, y, width, height, r);
        else            return rightRoundedRect(x, y, width, height, r);
      } else {
        // Middle rounds
        return notRoundedRect(x, y, width, height);
      }
  }

  // Hover text helper
  var barTextFn = function(d) {
      var text = !isEliminatedThisRound(d) ? "On Round " + (d.round+1) + ", has " : "Eliminated on Round " + (d.round+1) + " with ";
      return text + votesAndPctToText(d.data["candidate"], d[1], totalVotesPerRound[d.round], true, false);
  };

  var eachBar = svg.append("g")
    .selectAll("g")
    .data(stackSeries)
    .join("g")
    .selectAll("path")
    .data(function(d, i) {
      // @param d The data on the bars
      // @param i The round number
      var numCandidates = d.length;
      var maxNumRounds = 0;
      for(var candidate_i = 0; candidate_i < numCandidates; ++candidate_i)
      {
        // We're doing a naughty thing and assuming that the number of keys minus one is the
        // number of rounds this candidate survivided (the keys are each round + one for "candidate").
        // We verify that assumption by looking at the max number of rounds after this loop.
        // Note: we ensure 0-indexing for consistency with d.rounds
        var numRoundsTilEliminated = Object.keys(d[candidate_i].data).length - 2;

        candidateName = d[candidate_i].data["candidate"]
        d[candidate_i].round = i;
        d[candidate_i].numRoundsTilWin = numRoundsTilWin[candidateName]
        d[candidate_i].isWinner = numRoundsTilWin[candidateName] <= i
        maxNumRounds = Math.max(maxNumRounds, numRoundsTilEliminated+1);

        // When/if they're eliminated
        if (numRoundsTilEliminated == numRounds-1) {
          numRoundsTilEliminated = numRounds + 1; // i.e. never eliminated
        }
        d[candidate_i].numRoundsTilEliminated = numRoundsTilEliminated;
      }

      if(maxNumRounds != numRounds)
      {
          throw new Error("Assumption did not hold! See comment above.");
      }

      return d;
    });

  if (isVertical) {
    var candidatePosStr = "x";
    var votesPosStr = "y";
    var candidateSizeStr = "width";
    var votesSizeStr = "height";
  } else {
    var candidatePosStr = "y";
    var votesPosStr = "x";
    var candidateSizeStr = "height";
    var votesSizeStr = "width";
  }
  eachBar
    .join("path")
      .attr("class", "eachBar")
      .attr("d", function(d) { return getMaybeRoundedBarFor(this, d); })
      .attr("fill", barColorFn)
      .attr("data-toggle", "tooltip")
      .attr("title", function(d) { return barTextFn(d); });

  let primaryLabelTextSizeEm = getMagicTextLabelSize(longestLabelApxWidth, 0.8);
  let secondaryLabelTextSizeEm = getMagicTextLabelSize(longestLabelApxWidth, 0.6);
  let candidateAxisTextSizeEm = getMagicTextLabelSize(longestLabelApxWidth, 1.0);

  eachBar
    .join("text")
      .attr("class", "dataLabels")
      .attr(candidatePosStr, barCandidatesDataLabalPosFn)
      .attr(votesPosStr, barVotesMainDataLabelPosFn)
      .attr("display", dataLabelDisplayFor)
      .attr("text-anchor", isVertical ? "middle" : "end")
      .attr("font-size", primaryLabelTextSizeEm)
      .attr("fill", "currentColor")
      .text(mainDataLabelTextFn);

  if (isVertical)
  {
      eachBar
        .join("text")
          .attr("class", "dataLabels")
          .attr(candidatePosStr, barCandidatesDataLabalPosFn)
          .attr(votesPosStr, function(d) { return barVotesMainDataLabelPosFn(d) + 10})
          .attr("display", dataLabelDisplayFor)
          .attr("text-anchor", "middle")
          .attr("font-size", secondaryLabelTextSizeEm)
          .text(secondaryDataLabelTextFn);

      svg.append("g")
          .call(candidatesAxis)
          .selectAll("text")
            .style("text-anchor", "end")
            .attr("font-size", candidateAxisTextSizeEm)
            .attr("transform", "rotate(-45)");
  }
  else {
    svg.append("g")
        .call(candidatesAxis)
        .selectAll("text")  
          .style("text-anchor", "start")
          .attr("font-size", candidateAxisTextSizeEm);
  }

  svg.append("g")
      .call(votesAxis)
      .selectAll("text")  
        .attr("font-size", candidateAxisTextSizeEm);

  d3.select(idOfLegendDiv)
    .append("g")
      .call(legend);

  // Draw the threshold dashed line
  var thresh_x1 = isVertical ? margin.left : margin.top;
  var thresh_y1 = barVotesPosFn([threshold, threshold]);
  svg.append("line")
      .attr(candidatePosStr + "1", thresh_x1)
      .attr(votesPosStr     + "1", thresh_y1)
      .attr(candidatePosStr + "2", thresh_x1 + (isVertical ? width : height))
      .attr(votesPosStr     + "2", thresh_y1 + 0.5)
       .style("stroke", "#AAA")
       .style("stroke-dasharray", ("5, 5"))
  mouseOverBorder = 10
  svg.append("rect")
      .attr(candidatePosStr, isVertical ? margin.left : margin.top)
      .attr(votesPosStr, barVotesPosFn([threshold, threshold]) - mouseOverBorder/2.0)
      .attr(candidateSizeStr, isVertical ? width : height)
      .attr(votesSizeStr, mouseOverBorder)
      .attr("opacity", "0")
      .attr("data-toggle", "tooltip")
      .attr("title", function(d) { return "Threshold to win: " + threshold; });

  // Prep the tooltip bits, initial display is hidden
  // Place this at the end so it renders on top
  var tooltip = svg.append("g")
    .attr("class", "toolTip")
    .style("display", "none");
      
  tooltip.append("rect")
    .attr("width", 200)
    .attr("height", 25)
    .attr("fill", "white")
    .style("opacity", 0.5);
  
  tooltip.append("text")
    .attr("x", 15)
    .attr("dy", "1.2em")
    .style("text-anchor", "left")
    .attr("font-size", "1.6em")
    .attr("font-weight", "bold");


  // Return animation controls
  var transitionEachBarForRound = function(round) {
    currRound = round;
    eachBar.enter().selectAll("path.eachBar")
        .attr("d", function(d) { return getMaybeRoundedBarFor(this, d); });
    eachBar.enter().selectAll("path.eachBar").transition()
        .duration(300)
        .delay(0)
        .attr("fill", barColorFn);
  };
  var transitionDataLabelsForRound = function(round) {
    currRound = round;
    eachBar.enter().selectAll("text.dataLabels").transition()
        .duration(50)
        .delay(0)
        .attr("display", dataLabelDisplayFor)
  };
  var transitions = function(round) {
    transitionEachBarForRound(round);
    transitionDataLabelsForRound(round);
  };

  // Enable the bootstrap tooltip
  $('[data-toggle="tooltip"]').tooltip();

  return transitions;
}
