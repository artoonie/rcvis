d3.sankey = function() {
  var sankey = {},
      nodeSize0 = 24,
      nodePadding = 8,
      size = [1, 1],
      nodes = [],
      links = [];

  sankey.nodeSize0 = function(_) {
    if (!arguments.length) return nodeSize0;
    nodeSize0 = +_;
    return sankey;
  };

  sankey.nodePadding = function(_) {
    if (!arguments.length) return nodePadding;
    nodePadding = +_;
    return sankey;
  };

  sankey.nodes = function(_) {
    if (!arguments.length) return nodes;
    nodes = _;
    return sankey;
  };

  sankey.links = function(_) {
    if (!arguments.length) return links;
    links = _;
    return sankey;
  };

  sankey.size = function(_) {
    if (!arguments.length) return size;
    size = _;
    return sankey;
  };

  sankey.layout = function(iterations) {
    computeNodeLinks();
    computeNodeValues();
    computeNodeBreadths();
    computeNodeDepths(iterations);
    computeLinkDepths();
    return sankey;
  };

  sankey.relayout = function() {
    computeLinkDepths();
    return sankey;
  };

  sankey.link = function() {
    var curvature = 0.5;

    function link(d) {
      var dim0_s = dim0(d.source) + ddim0(d.source), // start
          dim0_e = dim0(d.target), // end
          dim0_i = d3.interpolateNumber(dim0_s, dim0_e),
          dim0_a = dim0_i(curvature), // spline cp 0
          dim0_b = dim0_i(1 - curvature), // spline cp 1
          dim1_0 = dim1(d.source) + d.sdim1 + ddim1(d) / 2,
          dim1_1 = dim1(d.target) + d.tdim1 + ddim1(d) / 2;
      r = ddim1(d) / 2
      rminus = Math.max(r, 3)
      rplus =  r
      // TODO on the outgoing edge, this doesn't line up
      // and the line is drawn outside 
      return "M" + commaSeparate(dim0_s, dim1_0+rplus)
           + "C" + commaSeparate(dim0_a, dim1_0+rplus)
           + " " + commaSeparate(dim0_b, dim1_1+rplus)
           + " " + commaSeparate(dim0_e, dim1_1+rplus)
           + "L" + commaSeparate(dim0_e, dim1_1-rminus)
           + "C" + commaSeparate(dim0_b, dim1_1-rminus)
           + " " + commaSeparate(dim0_a, dim1_0-rminus)
           + " " + commaSeparate(dim0_s, dim1_0-rminus)
           + "Z" + commaSeparate(dim0_s, dim1_0-rminus)
    }

    link.curvature = function(_) {
      if (!arguments.length) return curvature;
      curvature = +_;
      return link;
    };

    return link;
  };

  // Populate the sourceLinks and targetLinks for each node.
  // Also, if the source and target are not objects, assume they are indices.
  function computeNodeLinks() {
    nodes.forEach(function(node) {
      node.sourceLinks = [];
      node.targetLinks = [];
    });
    links.forEach(function(link) {
      var source = link.source,
          target = link.target;
      if (typeof source === "number") source = link.source = nodes[link.source];
      if (typeof target === "number") target = link.target = nodes[link.target];
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    });
  }

  // Compute the value (size) of each node by summing the associated links.
  function computeNodeValues() {
    nodes.forEach(function(node) {
      node.value = Math.max(
        d3.sum(node.sourceLinks, value),
        d3.sum(node.targetLinks, value)
      );
    });
  }

  // Iteratively assign the breadth (x-position) for each node.
  // Nodes are assigned the maximum breadth of incoming neighbors plus one;
  // nodes with no incoming links are assigned breadth zero, while
  // uncomment moveSinksRight to make:
  //          nodes with no outgoing links are assigned the maximum breadth.
  function computeNodeBreadths() {
    var max_dim0 = 0;
    nodes.forEach(function(node) {
        set_dim0(node, node.round);
        set_ddim0(node, nodeSize0);
        if(node.round > max_dim0) max_dim0 = node.round
    });

    scaleNodeBreadths((totalSize0 - nodeSize0) / max_dim0);

    //
    // moveSinksRight(x);
  }

  function moveSourcesRight() {
    nodes.forEach(function(node) {
      if (!node.targetLinks.length) {
        set_dim0(node, d3.min(node.sourceLinks, function(d) { return dim0(d.target); }) - 1);
      }
    });
  }

  function moveSinksRight(dim0) {
    nodes.forEach(function(node) {
      if (!node.sourceLinks.length) {
        set_dim0(node, dim0 - 1);
      }
    });
  }

  function scaleNodeBreadths(kdim0) {
    nodes.forEach(function(node) {
      set_dim0(node, dim0(node) * kdim0);
    });
  }

  function computeNodeDepths(iterations) {
    var nodesByBreadth = d3.nest()
        .key(function(d) { return dim0(d); })
        .sortKeys(d3.ascending)
        .entries(nodes)
        .map(function(d) { return d.values; });

    //
    initializeNodeDepth();
    resolveCollisions();
    for (var alpha = 1; iterations > 0; --iterations) {
      relaxRightToLeft(alpha *= .99);
      resolveCollisions();
      relaxLeftToRight(alpha);
      resolveCollisions();
    }

    function initializeNodeDepth() {
      var kdim1 = d3.min(nodesByBreadth, function(nodes) {
        return (size[idx1()] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
      });

      nodesByBreadth.forEach(function(nodes) {
        nodes.forEach(function(node, i) {
          set_dim1(node, i);
          set_ddim1(node, node.value * kdim1);
        });
      });

      links.forEach(function(link) {
        set_ddim1(link, link.value * kdim1);
      });
    }

    function relaxLeftToRight(alpha) {
      nodesByBreadth.forEach(function(nodes, breadth) {
        nodes.forEach(function(node) {
          if (node.targetLinks.length) {
            var new_dim1 = d3.sum(node.targetLinks, weightedSource) / d3.sum(node.targetLinks, value);
            set_dim1(node, dim1(node) + (new_dim1 - center(node)) * alpha);
          }
        });
      });

      function weightedSource(link) {
        return center(link.source) * link.value;
      }
    }

    function relaxRightToLeft(alpha) {
      nodesByBreadth.slice().reverse().forEach(function(nodes) {
        nodes.forEach(function(node) {
          if (node.sourceLinks.length) {
            var new_dim1 = d3.sum(node.sourceLinks, weightedTarget) / d3.sum(node.sourceLinks, value);
            set_dim1(node, dim1(node) + (new_dim1 - center(node)) * alpha);
          }
        });
      });

      function weightedTarget(link) {
        return center(link.target) * link.value;
      }
    }

    function resolveCollisions() {
      nodesByBreadth.forEach(function(nodes) {
        var node,
            new_ddim1,
            dim1_0 = 0,
            n = nodes.length,
            i;

        for (i = 0; i < n; ++i) {
          set_dim1(nodes[i], i*nodePadding);
        }
        // Push any overlapping nodes down.
        nodes.sort(ascendingDepth);
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          new_ddim1 = dim1_0 - dim1(node);
          if (new_ddim1 > 0) set_dim1(node, dim1(node) + new_ddim1);
          dim1_0 = dim1(node) + ddim1(node) + nodePadding;
        }

        // If the bottommost node goes outside the bounds, push it back up.
        new_ddim1 = dim1_0 - nodePadding - size[idx1()];
        if (new_ddim1 > 0) {
          dim1_0 = set_dim1(node, dim1(node) - new_ddim1);

          // Push any overlapping nodes back up.
          for (i = n - 2; i >= 0; --i) {
            node = nodes[i];
            new_ddim1 = dim1(node) + ddim1(node) + nodePadding - dim1_0;
            if (new_ddim1 > 0) set_dim1(node, dim1(node) - new_ddim1);
            dim1_0 = dim1(node);
          }
        }
      });
    }

    function ascendingDepth(a, b) {
      return dim1(a) - dim1(b);
    }
  }

  function computeLinkDepths() {
    nodes.forEach(function(node) {
      node.sourceLinks.sort(ascendingTargetDepth);
      node.targetLinks.sort(ascendingSourceDepth);
    });
    nodes.forEach(function(node) {
      var sdim1 = 0, tdim1 = 0;
      node.sourceLinks.forEach(function(link) {
        link.sdim1 = sdim1;
        sdim1 += ddim1(link);
      });
      node.targetLinks.forEach(function(link) {
        link.tdim1 = tdim1;
        tdim1 += ddim1(link);
      });
    });

    function ascendingSourceDepth(a, b) {
      return dim1(a.source) - dim1(b.source);
    }

    function ascendingTargetDepth(a, b) {
      return dim1(a.target) - dim1(b.target);
    }
  }

  function center(node) {
    return dim1(node) + ddim1(node) / 2;
  }

  function value(link) {
    return link.value;
  }

  return sankey;
};
