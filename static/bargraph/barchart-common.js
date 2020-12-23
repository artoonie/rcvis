function fixMaxWidthFor(elementId, isVertical, numRounds, numCandidates) {
    var currPixelRatio = window.devicePixelRatio;
    currPixelRatio = Math.min(currPixelRatio, 1.5); // TODO hack, this looks nicer

    // TODO sync this 550 and numCandidates*100 with the one in barchart.js -
    // we limit the viewport to 550, but allow it to stretch as much as it needs based on num candidates
    var numHorizontalElements = isVertical ? numCandidates : numRounds;
        numHorizontalElements = Math.max(numHorizontalElements, 5) // ensure at least 5 elements wide
    var maxWidth = Math.min(550, numHorizontalElements*100);

    document.getElementById(elementId).style.minWidth = "300px"; // size of iphone?
    document.getElementById(elementId).style.maxWidth = currPixelRatio*maxWidth + "px";
}
