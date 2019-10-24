// The diagram flows across dimension0, horizontally
function dim0(v) { return v.x; }
function dim1(v) { return v.y; }
function ddim0(v) { return v.dx; }
function ddim1(v) { return v.dy; }
function set_dim0(v, a) { return v.x = a; }
function set_dim1(v, a) { return v.y = a; }
function set_ddim0(v, a) { return v.dx = a; }
function set_ddim1(v, a) { return v.dy = a; }
function idx0() { return 0; }
function idx1() { return 1; }
function size0string() { return "width"; }
function size1string() { return "height"; }
function size0margin(margin) { return margin.left + margin.right; }
function size1margin(margin) { return margin.top + margin.bottom; }
function commaSeparate(d0, d1) { return d0 + "," + d1; }

var nodeSize0 = 10;
var avgNodeSize1 = 70;

function textXPos(d) { return 6; }
function textYPos(d) { return ddim1(d) / 2 - 10; }

var doLockTopBarOnScroll = false;
