let dim0;
let dim1;
let ddim0;
let ddim1;
let set_dim0;
let set_dim1;
let set_ddim0;
let set_ddim1;
let idx0;
let idx1;
let size0string;
let size1string;
let size0margin;
let size1margin;
let commaSeparate;

let nodeSize0;
let avgNodeSize1;

let textXPos;
let textYPos;

let doLockTopBarOnScroll;

function loadFunctions(isHorizontal) {
  if (isHorizontal)
  {
    dim0 = function(v) { return v.x; }
    dim1 = function(v) { return v.y; }
    ddim0 = function(v) { return v.dx; }
    ddim1 = function(v) { return v.dy; }
    set_dim0 = function(v, a) { return v.x = a; }
    set_dim1 = function(v, a) { return v.y = a; }
    set_ddim0 = function(v, a) { return v.dx = a; }
    set_ddim1 = function(v, a) { return v.dy = a; }
    idx0 = function() { return 0; }
    idx1 = function() { return 1; }
    size0string = function() { return "width"; }
    size1string = function() { return "height"; }
    size0margin = function(margin) { return margin.left + margin.right; }
    size1margin = function(margin) { return margin.top + margin.bottom; }
    commaSeparate = function(d0, d1) { return d0 + "," + d1; }

    textXPos = function(d) { return 12; }
    textYPos = function(d) { return 25; }

    nodeSize0 = 10;
    avgNodeSize1 = 70;
    doLockTopBarOnScroll = false;
  } else {
    dim0 = function(v) { return v.y; }
    dim1 = function(v) { return v.x; }
    ddim0 = function(v) { return v.dy; }
    ddim1 = function(v) { return v.dx; }
    set_dim0 = function(v, a) { return v.y = a; }
    set_dim1 = function(v, a) { return v.x = a; }
    set_ddim0 = function(v, a) { return v.dy = a; }
    set_ddim1 = function(v, a) { return v.dx = a; }
    idx0 = function() { return 0; }
    idx1 = function() { return 1; }
    size0string = function() { return "height"; }
    size1string = function() { return "width"; }
    size0margin = function(margin) { return margin.top + margin.bottom; }
    size1margin = function(margin) { return margin.left + margin.right; }
    commaSeparate = function(d0, d1) { return d1 + "," + d0; }

    textXPos = function(d) { return 5; }
    textYPos = function(d) { return 20; }

    nodeSize0 = 5;
    avgNodeSize1 = 150;
    doLockTopBarOnScroll = true;
  }
}
