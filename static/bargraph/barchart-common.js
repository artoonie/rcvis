function fixMaxWidthFor(elementId, numCandidates) {
    var currPixelRatio = window.devicePixelRatio;
    currPixelRatio = Math.min(currPixelRatio, 1.5); // TODO hack, this looks nicer

    // Max width should be the same as the viewbox unless there are a ton of candidates
    // NOTE: sync this 500 with barchart.js
    var maxWidth = Math.max(500, numCandidates*30);

    document.getElementById(elementId).style.minWidth = "300px"; // smallest supported screen size
    document.getElementById(elementId).style.maxWidth = currPixelRatio*maxWidth + "px";
}
