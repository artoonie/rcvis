function fixMaxWidthFor(elementId, numCandidates) {
    // Note: we no longer use the pixel ratio in computing this, as the descriptor does not.
    // var currPixelRatio = window.devicePixelRatio;
    // currPixelRatio = Math.min(currPixelRatio, 1.5); // NOTE: 1.5 is a good min, 2 is too much

    var maxWidth = Math.max(750); // NOTE: sync this 750 with barchart.js

    document.getElementById(elementId).style.minWidth = "300px"; // smallest supported screen size
    document.getElementById(elementId).style.maxWidth = maxWidth + "px";
}
