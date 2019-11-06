function fixMaxWidthFor(elementId, leaveRoomForLegend) {
    var currPixelRatio = window.devicePixelRatio;
    currPixelRatio = Math.min(currPixelRatio, 1.5); // TODO hack, this looks nicer
    // TODO sync this 550 and numCandidates*100 with the one in barchart.js
    var numCandidates = data.length;
    var maxWidth = Math.min(550, numCandidates*100);
    if (leaveRoomForLegend) {
        maxWidth += Math.min(numCandidates*20, maxWidth*0.5);
    }
    document.getElementById(elementId).style.maxWidth = currPixelRatio*maxWidth + "px";
}
