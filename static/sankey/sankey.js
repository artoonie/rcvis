d3.sankey = function(totalSize0) {
  let sankey = {},
      nodeSize0 = 24,
      nodePadding = 8,
      minNodeSize = 30,
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
    computeNodeBreadths();
    computeNodeDepths(iterations);
    computeNodeLinks();
    setNodeMinSize1(minNodeSize);
    computeLinkDepths();
    return sankey;
  };

  sankey.relayout = function() {
    computeLinkDepths();
    return sankey;
  };

  sankey.link = function() {
    let curvature = 0.5;

    function link(d) {
      const dim0_s = dim0(d.source) + ddim0(d.source), // start, center (source)
            dim0_e = dim0(d.target), // end, center (target)
            dim0_i = d3.interpolateNumber(dim0_s, dim0_e),
            dim0_a = dim0_i(curvature), // spline cp 0
            dim0_b = dim0_i(1 - curvature), // spline cp 1
            dim1_0 = dim1(d.source) + d.sdim1 + ddim1(d)*d.source_ddim1scalar / 2,
            dim1_1 = dim1(d.target) + d.tdim1 + ddim1(d)*d.target_ddim1scalar / 2;
      const r = ddim1(d) / 2;
      const rminus = r;
      const rplus =  r;
      // TODO on the outgoing edge, this doesn't line up
      // and the line is drawn outside 
      return "M" + commaSeparate(dim0_s, dim1_0+rplus*d.source_ddim1scalar)
           + "C" + commaSeparate(dim0_a, dim1_0+rplus*d.source_ddim1scalar)
           + " " + commaSeparate(dim0_b, dim1_1+rplus*d.target_ddim1scalar)
           + " " + commaSeparate(dim0_e, dim1_1+rplus*d.target_ddim1scalar)
           + "L" + commaSeparate(dim0_e, dim1_1-rminus*d.target_ddim1scalar)
           + "C" + commaSeparate(dim0_b, dim1_1-rminus*d.target_ddim1scalar)
           + " " + commaSeparate(dim0_a, dim1_0-rminus*d.source_ddim1scalar)
           + " " + commaSeparate(dim0_s, dim1_0-rminus*d.source_ddim1scalar)
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
      let source = link.source,
          target = link.target;
      if (typeof source === "number") source = link.source = nodes[link.source];
      if (typeof target === "number") target = link.target = nodes[link.target];
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    });
  }

  // Iteratively assign the breadth (x-position) for each node.
  // Nodes are assigned the maximum breadth of incoming neighbors plus one;
  // nodes with no incoming links are assigned breadth zero, while
  function computeNodeBreadths() {
    let max_dim0 = 0;
    nodes.forEach(function(node) {
        set_dim0(node, node.round);
        set_ddim0(node, nodeSize0);
        if(node.round > max_dim0) max_dim0 = node.round
    });

    scaleNodeBreadths((totalSize0 - nodeSize0) / max_dim0);
  }
  function scaleNodeBreadths(kdim0) {
    nodes.forEach(function(node) {
      set_dim0(node, dim0(node) * kdim0);
    });
  }

  function computeNodeDepths(iterations) {
    const nodesByBreadth = d3.nest()
        .key(function(d) { return dim0(d); })
        .sortKeys(d3.ascending)
        .entries(nodes)
        .map(function(d) { return d.values; });

    //
    initializeNodeDepth();
    resolveCollisions();
    for (let alpha = 1; iterations > 0; --iterations) {
      relaxRightToLeft(alpha *= .99);
      resolveCollisions();
      relaxLeftToRight(alpha);
      resolveCollisions();
    }

    function initializeNodeDepth() {
      const kdim1 = d3.min(nodesByBreadth, function(nodes) {
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
            const new_dim1 = d3.sum(node.targetLinks, weightedSource) / d3.sum(node.targetLinks, value);
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
            const new_dim1 = d3.sum(node.sourceLinks, weightedTarget) / d3.sum(node.sourceLinks, value);
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
        let node,
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
          dim1_0 = dim1(node) + Math.max(ddim1(node), minNodeSize) + nodePadding;
        }

        // Shift out-of-bounds nodes by progressively larger steps to keep padding equal
        new_ddim1 = dim1_0 - nodePadding - size[idx1()];
        if (new_ddim1 > 0) {
            const shift = new_ddim1 / (n-1);
            for (i = 1; i < n; ++i) {
                node = nodes[i];
                set_dim1(node, dim1(node) - shift/n*i);
            }
        }
      });
    }

    function ascendingDepth(a, b) {
      return dim1(a) - dim1(b);
    }
  }

  function setNodeMinSize1(size1) {
    nodes.forEach(function(node) {
        node.targetLinks.forEach(function(link) {
          link.source_ddim1scalar = 1.0;
          link.target_ddim1scalar = 1.0;
        });
    })
    nodes.forEach(function(node) {
        if(ddim1(node) < size1 && ddim1(node) != 0 /* Prevent division by zero */) {
            ddim1scalar = size1/ddim1(node);
            set_dim1(node, dim1(node))
            set_ddim1(node, size1)
            node.sourceLinks.forEach(function(link) {
              link.source_ddim1scalar = ddim1scalar;
            });
            node.targetLinks.forEach(function(link) {
              link.target_ddim1scalar = ddim1scalar;
            });
        }
    })
  }

  function computeLinkDepths() {
    nodes.forEach(function(node) {
      node.sourceLinks.sort(ascendingTargetDepth);
      node.targetLinks.sort(ascendingSourceDepth);
    });
    nodes.forEach(function(node) {
      let sdim1 = 0, tdim1 = 0;
      node.sourceLinks.forEach(function(link) {
        link.sdim1 = sdim1;
        sdim1 += ddim1(link)*link.source_ddim1scalar;
      });
      node.targetLinks.forEach(function(link) {
        link.tdim1 = tdim1;
        tdim1 += ddim1(link)*link.target_ddim1scalar;
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
