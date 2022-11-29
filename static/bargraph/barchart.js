// Makes a bar graph and returns a function that allows you to animate based on round
function makeBarGraph(args) {
  // Unpack the args
  const idOfContainer = args.idOfContainer; // SVG container
  const idOfLegend = args.idOfLegend; // id for the legend (fixed) 
  const humanFriendlyRoundNames = args.humanFriendlyRoundNames; // The human-friendly keys noted above
  const totalVotesPerRound = args.totalVotesPerRound; // list of # of active ballots each round
  const numRoundsTilWin = args.numRoundsTilWin; // dict mapping winners to the round they won on
  const colors = args.colors; // List of colors, one per round
  const longestLabelApxWidth = args.longestLabelApxWidth; // How many pixels wide is the longest candidate name?
  const isInteractive = args.isInteractive; // toggles between print-friendly and interactive mode
  const threshold = args.threshold; // The optional threshold single value (cannot change over time currently)
  const eliminationBarColor = args.eliminationBarColor; // Color of elimination bar
  const isVertical = args.isVertical; // Horizontal or vertical mode?
  const doDimPrevRoundColors = args.doDimPrevRoundColors; // Desaturate previous rounds? No-op on noninteractive
  const candidateSidecarData = args.candidateSidecarData; // Additional metadata about each candidate
  const candidateVoteCounts = args.candidateVoteCounts; // List of dicts of candidate descriptions.
                                                        // Each dict has two keys:
                                                        //  .candidate for the name,
                                                        //  .<rounddescription> for the vote count,
                                                        // where the <rounddescription> is a
                                                        // the humanFriendlyRoundName for that round

  // Before doing anything else, remove residual surplus from the struct
  hideResidualSurplus(candidateVoteCounts);

  // Transpose the data into d3 layers
  const mappedData = humanFriendlyRoundNames.map(function(roundInfo) {
    return candidateVoteCounts.map(function(d) {
      return {x: d.candidate, y: d[roundInfo]};
    });
  });
  const candidateNames = mappedData[0].map(c => c.x);
  const numRounds = humanFriendlyRoundNames.length;
  const stackSeries = d3.stack().keys(humanFriendlyRoundNames)(candidateVoteCounts);

  // Now do some magic to figure out the right size
  const margin = {top: 10, right: 10, bottom: 0, left: 20};
  if(isVertical) {
      const labelWidthCorrected = longestLabelApxWidth * 1.2; // TODO hacky
      margin.left += labelWidthCorrected * .707; // Room for candidate name on left
      margin.bottom += labelWidthCorrected; // Room for candidate name at bottom
      margin.top += 20; // Room for data label
      margin.bottom = 35; // Room for candidate name diagonally down
  }
  else {
      margin.left = 5; // Candidate name overlaps bars
  }

  const numCandidates = candidateVoteCounts.length;

  const maxWidth = 500; // of the viewbox - it can be scaled up by the outer div as needed
                        // NOTE: sync this 500 with barchart-common.js

  // TODO hacky way of matching the initial, and only the initial, aspect ratio
  // Setting this precisely prevents scrolling in iframes and mobile
  // We have to manually test this guy...for now :( :(
  const estSizeOfHeaderAndFooter = 180;
  const aspectRatio = (window.innerHeight-estSizeOfHeaderAndFooter) / window.innerWidth;
  let maxHeight = Math.max(maxWidth * aspectRatio, 350);
  if (!isVertical) {
      // Limit the horizontal bar size to [20, 70]
      const maximumHorizontalBarSize = 70;
      const minimumHorizontalBarSize = 20;
      maxHeight = Math.min(maxHeight, numCandidates*maximumHorizontalBarSize);
      maxHeight = Math.max(maxHeight, numCandidates*minimumHorizontalBarSize);
  }

  // If any of the labels are too long, the max height will be even longer.
  // Check for that, and ensure it's then at least 40px high.
  if (namesNeedAnyTwoLineLabels(candidateNames)) {
      maxHeight = Math.max(numCandidates*40, maxHeight);
  }

  const width = maxWidth - margin.left - margin.right,
        height = maxHeight - margin.top - margin.bottom;

  const paddingForVertical = (isVertical ? longestLabelApxWidth*2 : 0);
  const viewboxWidth = width + margin.left + margin.right;
  const viewboxHeight = height + margin.top + margin.bottom + paddingForVertical;
  
  const svg = d3.select('#'+idOfContainer)
    .append("svg")
    .attr("viewBox", "0 0 " + viewboxWidth + " " + viewboxHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const surplusPatternId = "diagonalHatch"+idOfContainer;
  const defs = svg.append("defs");
  defs.append("pattern")
    .attr("id", surplusPatternId)
    .attr("patternUnits", "userSpaceOnUse")
    .attr("width", 4)
    .attr("height", 4)
    .append("path")
        .attr("d", "M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" )
        .style("stroke", "white")
        .style("stroke-width", 1);

  
  // Add metadata to stackSeries and filter out already-eliminated candidates
  addMetadataToEachBar();

  // Get the number of winners in the last round
  const lastRoundNumWinners = stackSeries[numRounds-1].filter(d => d.isWinner).length;

  // Set x, y and colors
  let maxVotesToShow = d3.max(stackSeries, d => d3.max(d, d => d[1]));

  if (threshold !== null) {
      maxVotesToShow = Math.max(maxVotesToShow, threshold);
  }
  const candidatesDomain = d3.scaleBand()
        .domain(candidateNames);
  const votesDomain = d3.scaleLinear()
        .domain([0, maxVotesToShow]);

  let votesRange, candidatesRange;
  if (isVertical) {
      votesRange = votesDomain
            .rangeRound([height - margin.bottom, margin.top]);
      candidatesRange = candidatesDomain
            .range([margin.left, width])
            .padding(0.01);
  } else {
      votesRange = votesDomain
            .rangeRound([margin.left, width - margin.right]);
      candidatesRange = candidatesDomain
            .range([margin.top, height])
            .padding(0.01);
  }
  
  // Define axes
  let candidatesAxis;
  if (isVertical)
  {
    candidatesAxis = g => g
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(candidatesRange).tickSizeOuter(0))
          .call(g => g.selectAll(".domain").remove());
  }
  else
  {
    candidatesAxis = g => g
          .attr("transform", `translate(20,0)`)
          .call(d3.axisLeft(candidatesRange).tickSize(0))
          .call(g => g.selectAll(".domain").remove());
  }
  
  // Define legend
  const legend = svg => {
        const g = svg
          .selectAll("g")
          .append("ul")
          .data(humanFriendlyRoundNames)
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
  };

  let currRound = numRounds - 1;
  let prevRound = currRound;

  // Draw everything
  function isEliminated(d) { return d.numRoundsTilEliminated < currRound; }
  function isEliminatedThisRound(d) { return d.numRoundsTilEliminated < d.round; }
  function barVotesSizeHelperFn(d) {
      return (votesRange(d[0]) - votesRange(d[1])) * (isVertical ? 1 : -1);
  }
  function shouldDisplayFn(d) { return !isInteractive || d.round <= currRound; }
  function isEliminatedInteractiveFn(d) { return isInteractive && isEliminated(d); }
  function isSurplusFn(d) { return barVotesSizeHelperFn(d) <= 0; };
  function barVotesPosFn(d) {
      const index = isVertical ? 1 : 0;
      if (isNaN(d[0]) || isNaN(d[1])) return 0; // not sure why this happens
      if (!shouldDisplayFn(d)) return votesRange(d[index]); // Place it nicely for the animation
      const offsetForOvervotes = -Math.max(0, -barVotesSizeHelperFn(d));
      return offsetForOvervotes + votesRange(d[index]);
  };
  function barVotesSizeFn(d) {
      if (isNaN(d[0]) || isNaN(d[1])) return 0; // not sure why this happens
      if (!shouldDisplayFn(d)) return 0;
      return Math.abs(barVotesSizeHelperFn(d));
  };
  const bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
  function barColorFn(d) {
      if (isEliminatedInteractiveFn(d))
      {
          if (eliminationBarColor == 0) {
              return "#CCC";
          }
          if (eliminationBarColor == 1) {
              return bgColor;
          }
          if (eliminationBarColor == 2) {
              const colorOfNextRound = d.numRoundsTilEliminated + 1;
              return r2h(_interpolateColor(h2r(colors[colorOfNextRound]), h2r("#F0F0F0"), 0.9));
          }
      }
      else if(isSurplusFn(d))
      {
          return "url(#"+surplusPatternId+")";
      }
      else if (d.data.candidate == inactiveBallotsString)
      {
          return "#FFFFFF";
      }
      else
      {
          if (!doDimPrevRoundColors || !isInteractive)
              // Don't dim previous round colors: either not requestsed, or this is the print view
              return colors[d.round]
          if (d.round == currRound)
              // Dimming on. Only the last round gets full colors.
              return colors[d.round];
          else
              // All previous rounds are dimmed
              return r2h(_interpolateColor(h2r(colors[d.round]), h2r("#FFFFFF"), 0.8))
      }
  };

  // Data label helper functions
  function barVotesMainDataLabelPosFn(d) {
      // I hate this function. We need to do some magic because in vertical mode,
      // "up" is negative, whereas in horizontal, "right" is positive.
      // NOTE: Manually test this functionality using macomb-multiwinner-surplus.json
      //
      if (!isVertical) {
        const defaultDataLabelPos = width - 20;

        if (threshold === null) {
          return defaultDataLabelPos;
        }

        const thresholdPosition = barVotesPosFn([threshold, threshold]);
        const expectedMaxWidthOfLabel = 100;

        // If the threshold isn't right up against the edge, use it
        if ((width - thresholdPosition) > expectedMaxWidthOfLabel) {
          return defaultDataLabelPos;
        }

        // Otherwise, go a little back from the threshold and anchor there
        // NOTE: Manually test this functionality using opavote2.json
        return thresholdPosition - 10;
      }

      const offset = -15;
      const startOfBarPlusABit = barVotesPosFn(d) + offset;
      if (isEliminatedThisRound(d))
      {
          // Eliminated candidates
          return votesRange(0) + offset;
      }

      return startOfBarPlusABit;
  };
  function barCandidatesDataLabalPosFn(d) {
      let offset;
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
  function doesCandidateGetAnyMoreVotes(d) {
      // Is d.round the last round that this candidate has any changes?
      // Use for rounding the right/top edge
      // TODO memoize this, it's currently needlessly quadratic
      if (d.doesCandidateGetAnyMoreVotes !== undefined) {
        return d.doesCandidateGetAnyMoreVotes;
      }
      for (let i = d.round + 1; i < numRounds; ++i) {
        if (i > d.numRoundsTilEliminated) {
          // Note: opavote data has transfers to a candidate after elimination,
          // so this is a safety check against that
          break;
        }
        if (d.data[humanFriendlyRoundNames[i]] > 0) {
          d.doesCandidateGetAnyMoreVotes = true;
          return true;
        }
      }
      d.doesCandidateGetAnyMoreVotes = false;
      return false;
  };
  /*
  function memoizeDoCandidatesGetAnyMoreVotes() {
    for (let round_i = numRounds - 1; round_i >= 0; round_i--) {
      for(let candidate_i = 0; candidate_i < numCandidates; ++candidate_i) {
        // TODO here should be the memoizeeee
        // why does the data format suckeeeeee
      }
    }
  }
  */
  function isLatestRoundFor(d) { return currRound == d.round; };
  function dataLabelDisplayFor(d) { return isLatestRoundFor(d) ? null : "none" }; 
  function mainDataLabelTextFn(d) {
      // Horizontal shows "eliminated" or "x votes (y%)"
      // Vertical shows "[x]" or "x votes", and percent is shown on secondaryDataLabelTextFn
      if(isEliminatedThisRound(d)) {
          return isVertical ? "❌ "  :  "eliminated";
      }
      let startText = "";
      if (d.isWinner)
          startText = "✔️ " ;
      if (isVertical)
      {
          return startText + votesToText(d[1], false, true);
      }
      else
      {
          return startText + votesAndPctToText(d.data["candidate"], d[1], totalVotesPerRound[d.round], false, false);
      }
  };
  function secondaryDataLabelTextFn(d) {
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
           + "h" + (width - radius)
           + "v" + height
           + "h" + (-width + radius)
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
           + "h" + (width - 2*radius)
           + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
           + "v" + (height - 2*radius)
           + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
           + "h" + (-width + 2*radius)
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
  function getBBoxFor(data) {
      let x = candidatesRange(data.data.candidate);
      let y = barVotesPosFn(data);
      let width = candidatesRange.bandwidth() * 0.9;
      let height = barVotesSizeFn(data);

      if (!isVertical) {
        [x, y] = [y, x];
        [width, height] = [height, width];
      }

      return {x, y, width, height};
  }
  function getMaybeRoundedBarFor(object, data) {
      let size = getBBoxFor(data);
      let x = size.x;
      let y = size.y;
      let width = size.width;
      let height = size.height;
      let r = 4;
      r = Math.min(r, width/2.0, height/2.0); // Don't let the radius expand the bar

      if (height == 0 || width == 0) {
        // Don't draw a strip of a radius on eliminated rounds
        return '';
      }

      if (data.round == 0 && !doesCandidateGetAnyMoreVotes(data)) {
        // Eliminated or won on first round - round on all sides on horizontal, top on vertical
        if (isVertical) return  topRoundedRect(x, y, width, height, r);
        else            return allRoundedRect(x, y, width, height, r);
      } else if (data.round == 0) {
        // First round (vertical gets no rounding on first round)
        if (isVertical) return  notRoundedRect(x, y, width, height);
        else            return leftRoundedRect(x, y, width, height, r);
      } else if (!doesCandidateGetAnyMoreVotes(data)) {
        // Last round 
        if (isVertical) return   topRoundedRect(x, y, width, height, r);
        else            return rightRoundedRect(x, y, width, height, r);
      } else {
        // Middle rounds
        return notRoundedRect(x, y, width, height);
      }
  }

  // Hover text helper
  function barTextFn(d) {
      const text = !isEliminatedThisRound(d) ? "On Round " + (d.round+1) + ", has " : "Eliminated on Round " + (d.round+1) + " with ";
      return text + votesAndPctToText(d.data["candidate"], d[1], totalVotesPerRound[d.round], true, false);
  };

  function addMetadataToEachBar() {
      console.assert(stackSeries.length == numRounds);
      for (let round_i = 0; round_i < stackSeries.length; ++round_i) {
          const d = stackSeries[round_i];
          const numCandidates = d.length;

          let maxNumRounds = 0;
          for(let candidate_i = 0; candidate_i < numCandidates; ++candidate_i)
          {
            // We're doing a naughty thing and assuming that the number of keys minus one is the
            // number of rounds this candidate survived (the keys are each round + one for "candidate").
            // We verify that assumption by looking at the max number of rounds after this loop.
            // Note: we ensure 0-indexing for consistency with d.rounds
            const numSegmentsInThisBar = Object.keys(d[candidate_i].data).length - 1;
            let numRoundsTilEliminated = numSegmentsInThisBar - 1;  // -1 to 0-index it

            const candidateName = d[candidate_i].data["candidate"]
            d[candidate_i].round = round_i;
            d[candidate_i].numRoundsTilWin = numRoundsTilWin[candidateName]
            d[candidate_i].isWinner = numRoundsTilWin[candidateName] <= round_i
            maxNumRounds = Math.max(maxNumRounds, numRoundsTilEliminated+1);

            // When/if they're eliminated
            if (numRoundsTilEliminated == numRounds-1) {
              numRoundsTilEliminated = numRounds + 1; // i.e. never eliminated
            }
            d[candidate_i].numRoundsTilEliminated = numRoundsTilEliminated;
          }

          if(maxNumRounds != numRounds)
          {
              throw new Error(`Assumption did not hold! Found ${maxNumRounds} instead of ${numRounds} rounds. See comment above.`);
          }

          stackSeries[round_i] = d;
      }
  }

  function hideResidualSurplus(candidateVoteCounts) {
      for (let i = 0; i < candidateVoteCounts.length; ++i) {
          const candidateName = candidateVoteCounts[i].candidate;
          if (candidateName == residualSurplusString) {
              candidateVoteCounts.splice(i, 1);
              return;
          }
      }
  }
  function replaceTextWithSidecarData(d3TextElem) {
    /*
     * Wraps the text element in a href from the sidecar data.
     * Precondition: this candidate must have sidecar data
     */
    d3TextElem.each(function() {
      const textElem = d3.select(this),
        name = textElem.text(),
        data = candidateSidecarData['info'][name],
        href = data['moreinfo_url'],
        party = data['party'],
        isIncumbent = data['incumbent'];

        const link = textElem.text(null)
          .append("a")
          .attr("href", href)
          .attr("target", "_blank")
          .attr("dy", ".32em")
          .style("fill", "#1c5f99")
          .text(name);
        textElem.append("tspan")
          .attr("dx", "5px")
          .style("fill", "#999")
          .text(party);

        if (isIncumbent) {
          link.classed("dataLabelIncumbent", true);
        }
    });
  }

  let candidatePosStr, votesPosStr, candidateSizeStr, votesSizeStr;
  if (isVertical) {
    candidatePosStr = "x";
    votesPosStr = "y";
    candidateSizeStr = "width";
    votesSizeStr = "height";
  } else {
    candidatePosStr = "y";
    votesPosStr = "x";
    candidateSizeStr = "height";
    votesSizeStr = "width";
  }

  const eachBar = svg.append("g")
    .selectAll("g")
    .data(stackSeries)
    .join("g")
    .selectAll("path")
    .data((d, i) => stackSeries[i]);

  eachBar
    .join("path")
      .attr("class", "eachBar")
      .attr("d", function(d) { return getMaybeRoundedBarFor(this, d); })
      .attr("fill", barColorFn)
      .attr("data-toggle", "tooltip")
      .attr("title", function(d) { return barTextFn(d); });

  // Labels: names
  if (isVertical)
  {
      // Candidate name
      svg.append("g")
          .call(candidatesAxis)
          .selectAll("text")
            .style("text-anchor", "end")
            .attr("class", "dataLabel")
            .attr("transform", "rotate(-45)");

      // Labels: vote counts (number)
      eachBar
        .join("text")
          .attr(candidatePosStr, barCandidatesDataLabalPosFn)
          .attr(votesPosStr, barVotesMainDataLabelPosFn)
          .attr("display", dataLabelDisplayFor)
          .attr("class", "dataLabel")
          .attr("text-anchor", isVertical ? "middle" : "end")
          .attr("fill", "currentColor")
          .style("font-size", "0.7em")
          .text(mainDataLabelTextFn);

      // Label: vote counts (percent)
      eachBar
        .join("text")
          .attr(candidatePosStr, barCandidatesDataLabalPosFn)
          .attr(votesPosStr, function(d) { return barVotesMainDataLabelPosFn(d) + 10})
          .attr("display", dataLabelDisplayFor)
          .attr("class", "dataLabel")
          .attr("text-anchor", "middle")
          .style("font-size", "0.4em")
          .text(secondaryDataLabelTextFn);
  }
  else {
      const candidateWrapper = svg.append("g")
          .attr("id", "candidateNamesWrapper")
          .call(candidatesAxis);

      if (candidateSidecarData != null)
      {
          const imageSize = Math.min(candidatesRange.bandwidth() * .75, 48);
          const circleDefId = idOfContainer + "-thumbnailCirclizer";

          defs.append("clipPath")
            .attr("id", circleDefId)
            .append("circle")
            .attr("cx", imageSize/2)
            .attr("cy", 0)
            .attr("r", imageSize/2);

          const candidatesWithoutSidecarData = candidateWrapper.selectAll(".tick")
            .filter(d => candidateSidecarData['info'][d] === undefined);

          const candidatesWithSidecarData = candidateWrapper.selectAll(".tick")
            .filter(d => candidateSidecarData['info'][d] !== undefined);

          candidatesWithSidecarData.selectAll(".tick text")
              .call(c => replaceTextWithSidecarData(c));

          candidatesWithSidecarData
            .append("image")
              .attr("href", d => candidateSidecarData['info'][d]['photo_url'])
              .attr("clip-path", `url(#${circleDefId})`)
              .attr("width", imageSize)
              .attr("height", imageSize)
              .attr("y", -imageSize/2);

          // Shift the text over and word wrap
          const textShift = imageSize + 10;
          candidatesWithoutSidecarData.selectAll(".tick text")
              .attr("text-anchor", "start")
              .attr("x", textShift)
              .call(magicWordWrap);
          candidatesWithSidecarData.selectAll("a")
              .attr("text-anchor", "start")
              .attr("x", textShift)
              .call(magicWordWrap);
      }
      else
      {
          // Shift the text over and word wrap
          const textShift = 10;
          candidateWrapper.selectAll(".tick text")
              .attr("text-anchor", "start")
              .attr("x", textShift)
              .call(magicWordWrap);
      }


      // Labels: vote counts
      // Note: dy=0.32em to match axisLeft, as hardcoded in the d3 source:
      // https://github.com/d3/d3-axis/blob/master/src/axis.js#L74
      eachBar
        .join("text")
          .attr("class", "dataLabel")
          .attr(candidatePosStr, barCandidatesDataLabalPosFn)
          .attr(votesPosStr, barVotesMainDataLabelPosFn)
          .attr("display", dataLabelDisplayFor)
          .attr("text-anchor", isVertical ? "middle" : "end")
          .attr("fill", "currentColor")
          .attr("dy", ".32em")
          .text(mainDataLabelTextFn);
  }

  if (!isInteractive) {
    // Show a legend
    d3.select('#'+idOfLegend)
      .append("g")
        .call(legend);
  }

  // Draw the threshold dashed line
  if (threshold !== null) {
      const thresh_x1 = isVertical ? margin.left : margin.top;
      const thresh_y1 = barVotesPosFn([threshold, threshold]);
      svg.append("line")
          .attr("id", 'threshold'+idOfContainer)
          .attr(candidatePosStr + "1", thresh_x1)
          .attr(votesPosStr     + "1", thresh_y1)
          .attr(candidatePosStr + "2", thresh_x1 + (isVertical ? width : height))
          .attr(votesPosStr     + "2", thresh_y1 + 0.5)
           .style("stroke", "#AAA")
           .style("stroke-dasharray", ("5, 5"));
      const mouseOverBorder = 10;
      svg.append("rect")
          .attr("id", 'threshold-hover'+idOfContainer)
          .attr(candidatePosStr, isVertical ? margin.left : margin.top)
          .attr(votesPosStr, barVotesPosFn([threshold, threshold]) - mouseOverBorder/2.0)
          .attr(candidateSizeStr, isVertical ? width : height)
          .attr(votesSizeStr, mouseOverBorder)
          .attr("opacity", "0")
          .attr("data-toggle", "tooltip")
          .attr("title", function(d) { return "Threshold to win: " + votesToText(threshold); });
  }

  function moveBarsToAnimationStartPoint() {
    // Where is the transfer coming from?
    const transferFrom = eachBar.enter().filter(function(d) {
      const prevRound = currRound - 1;
      if (d.round == 0 && d.numRoundsTilEliminated == prevRound) {
        // get first round of candidate eliminated this round
        d.xferType = 'elimination';
        return true;
      }
      if (d.round == currRound && d[1] < d[0]) {
        // surplus transfer
        d.xferType = 'surplus';
        return true;
      }
      return false;
    })

    // If we found something to transfer from, start the animation bars from there
    if (transferFrom.nodes().length > 0) {
      const elimNode = transferFrom.nodes()[0];
      const elimData = elimNode.__data__;
      const elimSize = getBBoxFor(elimData);
      let xShift = 0;  // which ensures bars are next to each other, not on top of each other
      eachBar.enter()
          .filter(isLatestRoundFor)
          .selectAll('path.eachBar')
          .attr("fill", d =>
            // transitions begin as darkred (transfer) or darkgreen (surplus)
            elimData.xferType == 'elimination' ? "lightcoral" : "lightgreen"
          )
          .attr("opacity", d =>
            // darker on elimination
            elimData.xferType == 'elimination' ? 0.8 : 0.5
          )
          .attr("transform", function(d, i) {
            // Set initial x shift
            // Note, this is called twice: https://stackoverflow.com/a/27578308/1057105
            // So we need to reset on the second time around
            if (i == 0) {
              if (elimData.xferType == 'elimination') {
                // Elimination transfer. Keep adding to xShift.
                xShift = elimSize.x;
              } else {
                // Surplus transfer needs to start the movement from the
                // same place the hashes start (== threshold)
                xShift = elimSize.x - elimSize.width;
              }
            }

            const mySize = getBBoxFor(d);
            const x = xShift - mySize.x;
            const y = elimSize.y - mySize.y;
            xShift += mySize.width;

            return "translate(" + x + "," + y + ")"
          });
    }
  }

  // Return animation controls
  function transitionEachBarForRound() {
    eachBar.enter().selectAll("path")
        .attr("d", function(d) { return getMaybeRoundedBarFor(this, d); });

    if (currRound == prevRound + 1) {
      moveBarsToAnimationStartPoint()
    }

    // hashes should show immediately
    // don't animate hashes moving around - override the transform
    eachBar.enter().selectAll("path.eachBar")
        .filter(d => isSurplusFn(d))
        .attr("transform", "translate(0,0)");

    // Each bar should take up 70% of the timestep:
    // 15% with it static, as a new color,
    // 55% moving,
    // then the remaining 30% is a breather
    const timestepMs = getTimeBetweenAnimationStepsMs(numRounds);
    eachBar.enter().selectAll("path.eachBar")
        .transition()
        .delay(timestepMs * 0.15)
        .duration(timestepMs * 0.55)
        .attr("opacity", 1)
        .attr("transform", "translate(0,0)")
        .attr("fill", barColorFn);
  };
  function completeAllExistingAnimations() {
    eachBar.enter().selectAll("path.eachBar")
        .attr("opacity", 1)
        .attr("transform", "translate(0,0)")
        .attr("fill", barColorFn);
  };
  function transitionDataLabelsForRound() {
    // Set all labels to correct display
    svg.selectAll("text.dataLabel")
        .attr("display", dataLabelDisplayFor);

    // Create starting position and color for the just-eliminated candidate
    const eliminatedLabel = svg.selectAll("text.dataLabel")
      .filter(isLatestRoundFor)
      .filter(d => d.numRoundsTilEliminated == currRound-1);

    eliminatedLabel
      .attr("opacity", 0.2)
      .attr("transform", `translate(-${width}, 0)`);

    // Transition to the correct final position
    eliminatedLabel.transition()
        .delay(0)
        .duration(getTimeBetweenAnimationStepsMs(numRounds) * 0.15)
        .attr("opacity", 1.0)
        .attr("transform", "translate(0, 0)");
  };
  function transitionThresholdForRound() {
    // In IRV, the threshold line is hidden until the last round.
    // In STV, the threshold line is always visible.
    if (lastRoundNumWinners > 1)
    {
        return;
    }

    if (currRound == numRounds - 1)
    {
        svg.select('#threshold'+idOfContainer).transition()
            .duration(getTimeBetweenAnimationStepsMs(numRounds) * 0.5)
            .attr("opacity", 1.0);
    }
    else
    {
        svg.select('#threshold'+idOfContainer).transition()
            .duration(getTimeBetweenAnimationStepsMs(numRounds) * 0.15)
            .attr("opacity", 0.0);
    }
  };
  function transitions(round) {
    completeAllExistingAnimations();
    prevRound = currRound;
    currRound = round;
    transitionEachBarForRound();
    transitionDataLabelsForRound();
    transitionThresholdForRound();
  };

  // Enable the bootstrap tooltip
  $('[data-toggle="tooltip"]').tooltip();

  return transitions;
}
