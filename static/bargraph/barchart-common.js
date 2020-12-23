function fixMaxWidthFor(elementId, numCandidates) {
    var currPixelRatio = window.devicePixelRatio;
    currPixelRatio = Math.min(currPixelRatio, 1.5); // TODO hack, this looks nicer

    // TODO sync this 500 and numCandidates*100 with the one in barchart.js -
    // we limit the viewport to 500, but allow it to stretch as much as it needs based on num candidates
    var maxWidth = Math.max(500, numCandidates*30);

    document.getElementById(elementId).style.minWidth = "300px"; // smallest supported screen size
    document.getElementById(elementId).style.maxWidth = currPixelRatio*maxWidth + "px";
}
