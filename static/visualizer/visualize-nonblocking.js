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

setUpIframeMessageListener();
