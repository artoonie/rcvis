function chooseBetweenTimelineAndDescription() {
  // Pretty hacky - just for evaluation
  if (!config.doUseDescriptionInsteadOfTimeline) {
    return;
  }

  var style = document.createElement('style');
  document.head.appendChild(style);
  var styleSheet = style.sheet;
  styleSheet.insertRule('.expand-collapse-button { display: none !important}');
  styleSheet.insertRule('.round-description-wrapper { display: block !important}');
}

/**
 * Message passing between parent and our iframe to dynamically determine the size
 * that our embedder should use.
 */
function setUpIframeMessageListener() {
  if (document.getElementById("embedded-content") == null) {
    return;
  }

  window.addEventListener('message', function(event) {
    if (event.data.getSize == true) {
        if (parent == null) return;
        var key = event.data.key;

        var height = document.getElementById("embedded-content").scrollHeight
                   + document.getElementById("embedded-footer").scrollHeight
                   + 10;
        parent.postMessage({rcvisHeight: height, key: key}, "*");
    }
  });
}

chooseBetweenTimelineAndDescription();
setUpIframeMessageListener();
