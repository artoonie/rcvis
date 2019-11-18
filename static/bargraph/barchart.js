// Inspired by https://observablehq.com/@sampath-karupakula/stacked-bar-chart

// Makes a bar graph and returns a function that allows you to animate based on round
function makeBarGraph(idOfContainer, idOfLegendDiv, data, candidatesRange, totalVotesPerRound, numRoundsTilWin, colors, longestLabelApxWidth, isInteractive, threshold, doHideSurplusAndEliminated, isVertical) {
  longestLabelApxWidth *= 1.2; // TODO hacky but deosn't chop data labels
  var margin = {top: 10, right: 10, bottom: 35, left: 20};
  if(isVertical) {
      margin.left += longestLabelApxWidth * .707; // Room for candidate name on left
      margin.bottom += longestLabelApxWidth; // Room for candidate name at bottom
      margin.top += 20; // Room for data label
  }
  else {
      margin.left += longestLabelApxWidth + 20;// Room for candidate name
      margin.bottom += 20; // Room for candidate name diagonally down
      margin.right += 50; // Room for data label
  }

  var numCandidates = data.length;
  // 550 is not the final width, but the width of the viewbox.
  // We don't want it to even be that wide if there are just a few candidates.
  // TODO sync this 550 and numCandidates*100 with the one in barchart-interactive.html
  var maxWidth = Math.min(550, numCandidates*100);

  // TODO hacky way of matching the initial, and only the initial, aspect ratio
  var roomForStuffAboveUs = 150;
  var aspectRatio = (window.innerHeight-roomForStuffAboveUs) / window.innerWidth
  var maxHeight = Math.max(maxWidth * aspectRatio, 350);
  
  var width = maxWidth - margin.left - margin.right,
      height = maxHeight - margin.top - margin.bottom;

  var viewboxWidth = width + margin.left + margin.right;
  var viewboxHeight = height + margin.top + margin.bottom + longestLabelApxWidth;
  
  var svg = d3.select(idOfContainer)
    .append("svg")
    .attr("class", "col-md-auto")
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

  // Transpose the data into layers
  mappedData = candidatesRange.map(function(roundInfo) {
    return data.map(function(d) {
      return {x: d.candidate, y: d[roundInfo]};
    });
  });
  var candidateNames = mappedData[0].map(c => c.x);
  var roundNames = Object.keys(data[0]).slice(1)
  var numRounds = roundNames.length;
  var stackSeries = d3.stack().keys(roundNames)(data);
  
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
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(candidatesRange).ticks(null, "s"))
          .call(g => g.selectAll(".domain").remove())
    var votesAxis = g => g
          .attr("transform", `translate(0,${height - margin.bottom + 50})`)
          .call(d3.axisBottom(votesRange).tickSizeOuter(0))
          .call(g => g.selectAll(".domain").remove())
  }
  
  // Define legend
  var legend = svg => {
        const g = svg
          .selectAll("g")
          .data(roundNames)
          .join("g")
          .append("div")
          .style("float", "left")
          .style("width", "100%")

        g.append("div")
          .style("padding", "10px")
          .style("margin", "2px")
          .style("float", "left")
          .style("background-color", function(d, i) { return colors[i]; })

        g.append("div")
          .style("float", "none")
          .style("width", "auto")
          .style("white-space", "nowrap")
          .style("margin-top", "4px")
          .style("font-size", "0.8em")
            .text(d => d);
  }

  // Draw everything
  function isEliminated(d) { return d.numRoundsTilEliminated < currRound; }
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
          return eliminatedColor;
      else if(isSurplusFn(d))
          // TODO in here, hatch the original color maybe?
          //return surplusColor;
          return "url(#"+surplusPatternId+")";
      else
          return colors[d.round];
  };

  // Data label helper functions
  var isEliminationDataLabelFn = function(d) {
      return d.numRoundsTilEliminated < d.round+1;
  }
  var barVotesMainDataLabelPosFn = function(d) {
      // I hate this function. We need to do some magic because in vertical mode,
      // "up" is negative, whereas in horizontal, "right" is positive.
      var offset = isVertical ? -15 : 15;
      var startOfBarPlusABit = barVotesPosFn(d) + offset;
      if (isEliminationDataLabelFn(d))
      {
          // Eliminated candidates
          return votesRange(0) + offset;
      }
      else if (doHideSurplusAndEliminated && isSurplusFn(d))
      {
          // Surplus votes that are hidden - go down one bar
          return startOfBarPlusABit + barVotesSizeFn(d);
      }

      if (isVertical)
      {
        return startOfBarPlusABit;
      }
      else
      {
        return startOfBarPlusABit + barVotesSizeFn(d);
      }
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
      if(isEliminated(d))
      {
        // If we've been eliminated by now, then check if this round is the last round alive
        return d.numRoundsTilEliminated == d.round;
      }
      else if(isWinner(d))
      {
        // A candidate can win at any time. Only include the round on which they won.
        return d.numRoundsTilWin == d.round;
      }
      else
      {
        // Otherwise, check if this round is the latest available round
        return currRound == d.round+1;
      }
  }; 
  function dataLabelDisplayFor(d) { return isLatestRoundFor(d) ? null : "none" }; 
  var mainDataLabelTextFn = function(d) {
      // Horizontal shows "[eliminated]" or "x votes (y%)"
      // Vertical shows "[x]" or "x votes", and percent is shown on secondaryDataLabelTextFn
      if(isEliminationDataLabelFn(d))
      {
          return isVertical ? "❌ "  :  "[eliminated]";
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
          return startText + votesAndPctToText(d[1], totalVotesPerRound[d.round], false, false);
      }
  };
  var secondaryDataLabelTextFn = function(d) {
      if(isEliminationDataLabelFn(d) || !isVertical)
      {
          return "";
      }
      return percentToText(d[1], totalVotesPerRound[d.round]);
  };

  // Hover text helper
  var barTextFn = function(d) {
      var text = !isEliminated(d) ? "On Round " + d.round + ", has " : "Eliminated with ";
      return text + votesAndPctToText(d[1], totalVotesPerRound[d.round], true, false);
  };

  var eachBar = svg.append("g")
    .selectAll("g")
    .data(stackSeries)
    .join("g")
    .selectAll("rect")
    .data(function(d, i) {
      // This function is an entire round
      var numCandidates = d.length;
      var maxNumRounds = 0;
      for(var candidate_i = 0; candidate_i < numCandidates; ++candidate_i)
      {
        // We're doing a naughty thing and assuming that the number of keys minus one is the
        // number of rounds this candidate survivided (the keys are each round + one for "candidate").
        // We verify that assumption by looking at the max number of rounds after this loop.
        var numRoundsTilEliminated = Object.keys(d[candidate_i].data).length - 1;

        candidateName = d[candidate_i].data["candidate"]
        d[candidate_i].round = i;
        d[candidate_i].numRoundsTilEliminated = numRoundsTilEliminated;
        d[candidate_i].numRoundsTilWin = numRoundsTilWin[candidateName]
        d[candidate_i].isWinner = numRoundsTilWin[candidateName] <= i
        maxNumRounds = Math.max(maxNumRounds, numRoundsTilEliminated);
      }

      if(maxNumRounds != numRounds)
      {
          throw new Error("Assumption did not hold! See comment above.");
      }

      return d;
    });

  function drawTooltipText(obj, text) {
      var xPosition = d3.mouse(obj)[0] - 35;
      var yPosition = d3.mouse(obj)[1] - 25;
      tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
      tooltip.select("text").text(text);
  }

  if (isVertical)
  {
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
    .join("rect")
      .attr("class", "eachBar")
      .attr(candidatePosStr, d => candidatesRange(d.data.candidate))
      .attr(votesPosStr, barVotesPosFn)
      .attr(candidateSizeStr, candidatesRange.bandwidth() * 0.9)
      .attr(votesSizeStr, barVotesSizeFn)
      .attr("fill", barColorFn)
      .on("mouseover", function() { tooltip.style("display", null); })
      .on("mouseout", function() { tooltip.style("display", "none"); })
      .on("mousemove", function(d) {
        drawTooltipText(this, barTextFn(d));
      });

  eachBar
    .join("text")
      .attr("class", "dataLabels")
      .attr(candidatePosStr, barCandidatesDataLabalPosFn)
      .attr(votesPosStr, barVotesMainDataLabelPosFn)
      .attr("display", dataLabelDisplayFor)
      .attr("text-anchor", isVertical ? "middle" : "start")
      .attr("font-size", "1.5em")
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
          .attr("font-size", "1.0em")
          .text(secondaryDataLabelTextFn);
   }

  svg.append("g")
      .call(candidatesAxis)
      .selectAll("text")  
        .style("text-anchor", "end")
        .attr("font-size", "2em")
        .attr("transform", "rotate(-45)");

  svg.append("g")
      .call(votesAxis)
      .selectAll("text")  
        .attr("font-size", "1.0em");

  d3.select(idOfLegendDiv)
    .append("g")
      .call(legend);

  // Draw the threshold line
  svg.append("rect")
      .attr(candidatePosStr, isVertical ? margin.left : margin.top)
      .attr(votesPosStr, barVotesPosFn([threshold, threshold]))
      .attr(candidateSizeStr, isVertical ? width : height)
      .attr(votesSizeStr, 0.5)
      .attr("fill", "#AAA")
  // The invisible mouseover element
  mouseOverBorder = 10
  svg.append("rect")
      .attr(candidatePosStr, isVertical ? margin.left : margin.top)
      .attr(votesPosStr, barVotesPosFn([threshold, threshold]) - mouseOverBorder/2.0)
      .attr(candidateSizeStr, isVertical ? width : height)
      .attr(votesSizeStr, mouseOverBorder)
      .attr("opacity", "0")
      .on("mouseover", function() { tooltip.style("display", null); })
      .on("mouseout", function() { tooltip.style("display", "none"); })
      .on("mousemove", function(d) {
        drawTooltipText(this, "Threshold to win: " + threshold);
      });

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
    eachBar.enter().selectAll("rect.eachBar").transition()
        .duration(100)
        .delay(0)
        .attr(votesPosStr, barVotesPosFn)
        .attr(votesSizeStr, barVotesSizeFn)
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
  return transitions;
}
