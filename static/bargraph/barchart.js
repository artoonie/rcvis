// Inspired by https://observablehq.com/@sampath-karupakula/stacked-bar-chart

// Makes a bar graph and returns a function that allows you to animate based on round
function makeBarGraph(idOfContainer, data, candidatesRange, colors, longestLabelApxWidth, isInteractive) {
  var margin = {top: 20, right: 180 + longestLabelApxWidth*13, bottom: 35, left: 60};
  
  var width = 960 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;
  
  var svg = d3.select(idOfContainer)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + longestLabelApxWidth*13)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
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
  var x = d3.scaleBand()
        .domain(candidateNames)
        .range([margin.left, width])
        .padding(0.01);
  
  var y = d3.scaleLinear()
        .domain([0, d3.max(stackSeries, d => d3.max(d, d => d[1]))])
        .rangeRound([height - margin.bottom, margin.top])
  
  // Define axes
  var yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(null, "s"))
        .call(g => g.selectAll(".domain").remove())
  var xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .call(g => g.selectAll(".domain").remove())
  
  // Define legend
  var legend = svg => {
        const g = svg
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)
            .attr("text-anchor", "end")
            .attr("transform", `translate(${width + margin.left},${margin.top})`)
          .selectAll("g")
          .data(roundNames)
          .join("g")
            .attr("transform", (d, i) => `translate(0,${i * 20})`);

        g.append("rect")
            .attr("x", -19)
            .attr("width", 19)
            .attr("height", 19)
            .attr("fill",  function(d, i) { return colors[i]; });

        g.append("text")
            .attr("x", -24)
            .attr("y", 9.5)
            .attr("dy", "0.35em")
            .text(d => d);
  }

  // Draw everything
  var currRound = numRounds;
  var shouldColorFn = function(d) { return !isInteractive || d.numRoundsTilEliminated >= currRound; }
  var shouldDisplayFn = function(d) { return !isInteractive || d.round < currRound; }
  var barYPosFn   = function(d) { if (shouldDisplayFn(d)) return y(d[1]); else return 0;};
  var barHeightFn = function(d) { if (shouldDisplayFn(d)) return y(d[0]) - y(d[1]); else return 0;};
  var barColorFn = function(d) { if (shouldColorFn(d)) return colors[d.round]; else return "#CCC"};

  var eachBar = svg.append("g")
    .selectAll("g")
    .data(stackSeries)
    .join("g")
    .selectAll("rect")
    .data(function(d, i) {
      var numCandidates = d.length;
      var maxNumRounds = 0;
      for(var candidate_i = 0; candidate_i < numCandidates; ++candidate_i)
      {
        // We're doing a naughty thing and assuming that the number of keys minus one is the
        // number of rounds this candidate survivided (the keys are each round + one for "candidate").
        // We verify that assumption by looking at the max number of rounds after this loop.
        var numRoundsTilEliminated = Object.keys(d[candidate_i].data).length - 1;

        d[candidate_i].round = i;
        d[candidate_i].numRoundsTilEliminated = numRoundsTilEliminated;
        maxNumRounds = Math.max(maxNumRounds, numRoundsTilEliminated);
      }

      if(maxNumRounds != numRounds)
      {
          throw new Error("Assumption did not hold! See comment above.");
      }

      return d;
    });

  eachBar
    .join("rect")
      .attr("x", d => x(d.data.candidate))
      .attr("y", barYPosFn)
      .attr("height", barHeightFn)
      .attr("width", x.bandwidth() * 0.9)
      .attr("fill", barColorFn)
      .on("mouseover", function() { tooltip.style("display", null); })
      .on("mouseout", function() { tooltip.style("display", "none"); })
      .on("mousemove", function(d) {
        var xPosition = d3.mouse(this)[0] - 35;
        var yPosition = d3.mouse(this)[1] - 25;
        tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
        tooltip.select("text").text("Current total: " + d[1]);
      });

  svg.append("g")
      .call(xAxis)
      .selectAll("text")  
        .style("text-anchor", "end")
        .attr("transform", "rotate(-45)");

  svg.append("g")
      .call(yAxis);

  svg.append("g")
      .call(legend);

  // Prep the tooltip bits, initial display is hidden
  // Place this at the end so it renders on top
  var tooltip = svg.append("g")
    .attr("class", "toolTip")
    .style("display", "none");
      
  tooltip.append("rect")
    .attr("width", 200)
    .attr("height", 20)
    .attr("fill", "white")
    .style("opacity", 0.5);
  
  tooltip.append("text")
    .attr("x", 15)
    .attr("dy", "1.2em")
    .style("text-anchor", "left")
    .attr("font-size", "12px")
    .attr("font-weight", "bold");


  // Return animation controls
  var transitionEachBarForRound = function(round) {
    currRound = round;
    eachBar.enter().selectAll("rect").transition()
        .duration(100)
        .delay(0)
        .attr("y", barYPosFn)
        .attr("height", barHeightFn)
        .attr("fill", barColorFn);
  };
  return transitionEachBarForRound;
}
