function makeSankey(graph, numRounds, numCandidates, longestLabelApxWidth, totalVotesPerRound, colorThemeIndex) {
  // Below are crazy heuristics to try to get the graph to look good
  // on a variety of sizes.
  const units = "Votes";
  const nodePadding = 20 + 0.5*Math.min(numCandidates,10) // the more candidates, the more room you want to display connections.
  const linkPadding = 60
  const roundSize0 = nodeSize0 + nodePadding + linkPadding
  const totalSize0 = numRounds * roundSize0
  const idealTotalSize1 = Math.min(numCandidates,5)*avgNodeSize1 + Math.max(numCandidates-5,0)*avgNodeSize1
  const disableMagicTopBar = true; // TODO figure out how to scale properly with responsive SVG
  let heightUntilSticky;
  if (disableMagicTopBar)
      heightUntilSticky = 20000000;
  else
      heightUntilSticky = 200; // how far you scroll down before the top bar "sticks" to the top
  const stickyHysteresis = 180; // How far you scroll back up before the top bar "unsticks"

  const ESTIMATED_CHAR_WIDTH = 18; // yikes this is not correct

  // set the dimensions and margins of the graph
  // leftPadForHorizontalNames: guess how wide the longest name will be, knowing that the multiline
  // label means we divide it by two
  const leftPadForHorizontalNames = config.horizontalSankey ? longestLabelApxWidth/2.0 * ESTIMATED_CHAR_WIDTH : 0;
  const cmargin = {top:  0, right: 10, bottom: 15, left: 50 + leftPadForHorizontalNames}, // content
        tmargin = {top:  0,                        left: 50}, // topbar
        bottomLabelPadding = 20;
  let size0 = totalSize0;
  let size1 = idealTotalSize1;
  if (config.horizontalSankey) {
      size0 += linkPadding;
      size1 += avgNodeSize1;
  } else {
      // Extra padding to leave room for expansion (??) of something (???)
      const hackExtraPadding = numCandidates*20;
      size0 += bottomLabelPadding;
      size1 += hackExtraPadding;
  }

  let tmarginLength;
  let rotationOffset = 0;
  if (config.rotateNames)
  {
      tmarginLength = longestLabelApxWidth * ESTIMATED_CHAR_WIDTH;
      rotationOffset = config.horizontalSankey ? tmarginLength*.7071067/2.0 : tmarginLength*.7071067;
  }
  else
  {
      tmarginLength = config.horizontalSankey ? leftPadForHorizontalNames : 40;
  }

  const viewboxSize0 = size0 + size0margin(cmargin);
  const viewboxSize1 = size1;

  let lastRound = -1;

  const colorThemeGenerator = getColorGenerator(colorThemeIndex);
  const colorsPerCandidate = Array.from(colorThemeGenerator(numCandidates));

  function hackCharsForWidth(width, text) {
      const length = width/ESTIMATED_CHAR_WIDTH
      if(length >= text.length - 3) {
          return text;
      } else {
          return text.substring(0, length) + "...";
      }
  }
  function getNodeLabelText(d) {
      return d.name;
  }
  function getNodeLabelTextTruncated(d) {
      return hackCharsForWidth(d.dx, d.name);
  }
  function textForNode(d) {
      let s = "";
      if(d.isEliminated)
          s += "❌ " ;
      if(d.isWinner)
          s += "✅ " ;
      s += votesToText(d.value, false, true)
      return s;
  }

  function getNodeVotesText(d) {
      return textForNode(d)
  }
  function getNodePercentText(d) {
      return percentToText(d.name, d.value, totalVotesPerRound[d.round])
  }

  function makeViewboxSizeString(size0, size1) {
      return size0string() == "width" ? size0 + " " + size1
                                      : size1 + " " + size0;
  }

  function getIdealWidth() {
    return (size0string() == "width" ? viewboxSize0 : viewboxSize1) + "px";
  }

  function makeRoundLabels(svg) {
    const labels = svg.append("g").selectAll(".roundLabels")
        // TODO we shouldn't assume dim1 is at zero but
        // this is the easiest way to get unique values
        // and computing the height based on nodeSize0
        // didn't work for some reason?
      .data(graph.nodes.filter(function(d){return dim1(d) == 0;}))
      .enter().append("text")
      .attr("class", 'roundLabels' );
    if (config.horizontalSankey)
    {
      labels
      .attr("x", function(d) {
            return dim0(d) - roundSize0*0.4 - 50;
       })
      .attr("y", function(d) {
            return 60
       });
    }
    else
    {
      labels
      .attr("x", function(d) {
            return avgNodeSize1 * 1.5
      })
      .attr("y", function(d) {
            return dim0(d) - roundSize0*0.2;
      });
    }

    labels.text(function(d) { return "Round " + (d.round+1) });
  }

  function makeGraph(graph) {
      // format variables
      const formatNumber = d3.format(",.2f");    // two decimal places
      const format = function(d) {
        // format num if it's a float
        let num;
        if(d%1 != 0) num = formatNumber(d);
        else         num = d;
        return num + " " + units;
      };

      // Dynamic max-width based on sankey size
      d3.select("#sankey-body")
          .style("width", getIdealWidth());

      // append the svg object to the body of the page
      const svg = d3.select("#sankey-body").append("svg")
          .attr("id", "sankey-svg")
          .attr("viewBox", "0 0 " + makeViewboxSizeString(viewboxSize0, viewboxSize1))
        .append("g")
          .attr("transform", 
                "translate(" + cmargin.left + "," + cmargin.top + ")");

      // Set the sankey diagram properties
      const sankey = d3.sankey(totalSize0)
          .nodeSize0(nodeSize0)
          .nodePadding(nodePadding)
          .size([0, idealTotalSize1]);

      const path = sankey.link();

      sankey
        .nodes(graph.nodes)
        .links(graph.links)
        .layout(32);

      // the function for moving the nodes
      function dragmove(d) {
          const translate0 = dim0(d);
          const translate1 = (set_dim1(d, Math.max(
                            0, Math.min(size1 - ddim1(d), dim1(d3.event))))
                           );
          const commad = commaSeparate(translate0, translate1)
          d3.select(this)
            .attr("transform", 
                  "translate(" + commad + ")");
          sankey.relayout();
          link.attr("d", path);
      }

      // add in the links
      const link = svg.append("g").selectAll(".link")
        .data(graph.links)
      .enter().append("path")
        .attr("class", "link")
        .attr("d", path)
        .style("fill", function(d) { return d3.rgb(colorsPerCandidate[d.source.index]) })
        .style("opacity", 0.3)
        .sort(function(a, b) { return ddim1(b) - ddim1(a); });

      // add the link titles
      link.append("title")
          .text(function(d) {
              return format(d.value); });

      // add in the nodes
      const node = svg.append("g").selectAll(".node")
        .data(graph.nodes)
      .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { 
            const commad = commaSeparate(dim0(d), dim1(d))
            return "translate(" + commad + ")"; })
        .attr("cursor", function(d) { return d.round != 0 ? "move" : "unset"; } )
        .call(d3.drag()
           // don't allow dragging top row since the titles don't move with it
          .filter(function(d){return d.round != 0;})
          .subject(function(d) {
            return d;
          })
          .on("start", function() {
            this.parentNode.appendChild(this);
          })
          .on("drag", dragmove));

      if (config.horizontalSankey)
      {
        // For horizontal sankey, labels go on the first-round nodes,
        // not on the top bar
        node
          .filter(function(d) { return d.round == 0 })
          .append("text")
          .attr("x", -5)
          .attr("y", textYPos)
          .attr("dy", ".35em")
          .attr("text-anchor", "end")
          .attr("class", "dataLabel")
          .text(getNodeLabelText);
        node.selectAll(".dataLabel")
          .call(magicWordWrap);
      }

      if (config.showRoundNumbersOnSankey)
      {
        makeRoundLabels(svg);
      }

      // add the rectangles for the nodes
      node.append("rect")
        .attr(size1string(), function(d) { return ddim1(d); })
        .attr(size0string(), sankey.nodeSize0())
        .style("fill", function(d) { return colorsPerCandidate[d.index] })
      .append("title")
        .text(function(d) { 
            return d.name + "\n" + format(d.value); });

      // add in the title for the nodes
      const SHIFT_TEXT_LEFT_IF_WIDTH_LESS_THAN = 100;
    function magicShift(d) {
          if(ddim1(d) > SHIFT_TEXT_LEFT_IF_WIDTH_LESS_THAN || size1string() != "width")
              return textXPos(d);
          return 0; }
      node.append('g')
        .append("text")
        .attr("x", magicShift) 
        .attr("y", textYPos)
        .style("pointer-events", "all")
        .text(getNodeVotesText)
        .call(d3.drag());
      node.append('g')
        .append("text")
        .attr("x", magicShift)
        .attr("y", function(d) { return textYPos(d) + 20 })
        .text(getNodePercentText)
        .call(d3.drag());
  }

  function makeTopBar(graph) {
      const viewboxLeft = -tmargin.left
      const topbarG = d3.select('#topbar').append("svg")
          .attr("viewBox", viewboxLeft + " 0 " + makeViewboxSizeString(tmarginLength, viewboxSize1))
          .style("max-width", getIdealWidth())
          .append("g")
      return topbarG;
  }

  function makeRound1SpecialLabel(topbarG) {
     // Remove the special round 1 label
     d3.selectAll(".roundLabels").filter((d) => d.round == 0).remove();

     // First round is above the sankey SVG so needs to be handled specially
     const round1Label = topbarG.append("g").
        append("text")
        .attr("class", 'roundLabels' );

      if (config.horizontalSankey) {
        round1Label
          .attr("x", tmarginLength-roundSize0*.2 - 75)
          .attr("y",  avgNodeSize1 * 1.5);
      } else {
        round1Label
          .attr("x", avgNodeSize1 * 1.5)
          .attr("y", tmarginLength-roundSize0*.2 );
      }

      round1Label.text("Round 1");
      return round1Label;
  }

  function populateTopBarFor(topbarG, round) {
      lastRound = round;
      const data = graph.nodes.filter(function(d){return d.round == round;});
      const topbar = topbarG
        .selectAll(".topbar_element")
        .data(data, function(d) { return d; });

      const topbar_g = topbar.enter().append("g")
        .attr('class', 'topbar_element')
        .attr("transform", function(d) { 
            const commad = commaSeparate(0, dim1(d))
            return "translate(" + commad + ")"; })
        .attr(size1string(), function(d) { return ddim1(d); })
        .attr(size0string(), nodeSize0)
        .append("text");
      if (config.rotateNames) {
        topbar_g
        .attr("dx", -rotationOffset + 5)
        .attr("dy", rotationOffset + 5)
        .attr("transform", "rotate(-45)")
        .text(getNodeLabelText)
      } else {
        topbar_g
        .attr("x", 0 )
        .attr("y", 30 )
        .attr("dy", ".35em")
        .text(getNodeLabelTextTruncated)
          .on('mouseover', function(d){
              d3.select(this).text(getNodeLabelText);
          })
          .on('mouseout', function(d){
              d3.select(this).text(getNodeLabelTextTruncated);
          })
          .call(d3.drag());
      }
      topbar.exit().remove();
  }

  function getBodyMarginInt() {
      const style = window.getComputedStyle(document.body);
      const bodyMargin = style.getPropertyValue('margin-left');
      return parseInt(bodyMargin, 10);
  }

  function notifyScrolled(round1SpecialLabel) {
    // TODO this only supports vertical sankey mode
    if (!doLockTopBarOnScroll) return;

    const x = -window.pageXOffset + bodyMargin;
    if (window.pageYOffset >= sticky) {
      topbarDiv.classList.add("sticky")
      round1SpecialLabel.style("display", "none")
    } else if (window.pageYOffset < sticky - stickyHysteresis){
      topbarDiv.classList.remove("sticky");
      round1SpecialLabel.style("display", "inherit")
    }
    topbarDiv.style.left = x+"px"; 
    const desiredHeight = size1string() == "height" ? viewboxSize1 : viewboxSize0;
    const actualHeight = document.getElementById('sankey-body').offsetHeight;
    const viewportScale =  actualHeight/desiredHeight
    let round = (window.pageYOffset + tmarginLength)/(viewportScale*roundSize0) - viewportScale*cmargin.top
    round = Math.floor(round);
    round = Math.min(round, numRounds)
    round = Math.max(round - 1, 0)
    if(round != lastRound && !disableMagicTopBar) {
        populateTopBarFor(topbarG, round)
    }
  }
  const topbarDiv = document.getElementById("topbar");
  const sticky = topbarDiv.offsetTop + heightUntilSticky;
  const bodyMargin = getBodyMarginInt()
  makeGraph(graph);

  const topbarG = makeTopBar(graph);
  if (!config.horizontalSankey) {
    if (config.showRoundNumbersOnSankey)
    {
      const round1SpecialLabel = makeRound1SpecialLabel(topbarG);
      if (!disableMagicTopBar)
      {
        window.onscroll = function() {notifyScrolled(round1SpecialLabel)};
      }
    }
    populateTopBarFor(topbarG, 0)
  }
}

function fitSankeyViewboxToContents() {
  // Hack: the sankey isn't always drawn fully inside the viewbox since we make a lot of guesses.
  // This takes the "close enough" and fixes is to actually wrap the sankey.
  const svg = document.getElementById('sankey-svg');
  const bbox = svg.getBBox()
  const p = 10; // padding
  svg.setAttribute("viewBox", (bbox.x-p) + " " + (bbox.y-p) + " " + (bbox.width+p) + " " + (bbox.height+p));
}
