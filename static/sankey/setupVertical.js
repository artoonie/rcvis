// The diagram flows across dimension0, vertically
function dim0(v) { return v.y; }
function dim1(v) { return v.x; }
function ddim0(v) { return v.dy; }
function ddim1(v) { return v.dx; }
function set_dim0(v, a) { return v.y = a; }
function set_dim1(v, a) { return v.x = a; }
function set_ddim0(v, a) { return v.dy = a; }
function set_ddim1(v, a) { return v.dx = a; }
function idx0() { return 0; }
function idx1() { return 1; }
function size0string() { return "height"; }
function size1string() { return "width"; }
function size0margin(margin) { return margin.top + margin.bottom; }
function size1margin(margin) { return margin.left + margin.right; }
function commaSeparate(d0, d1) { return d1 + "," + d0; }

var nodeSize0 = 5;
var avgNodeSize1 = 150;

var doLockTopBarOnScroll = true;

function textXPos(d) { return 5; }
function textYPos(d) { return 20; }
