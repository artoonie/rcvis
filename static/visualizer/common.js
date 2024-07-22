function makeEmbeddedIframeTag(iframeUrl) {
  const text = `<iframe src="${iframeUrl}" width="100%"
     frameborder="0"
     allowtransparency="true"
     allowfullscreen="allowfullscreen"
     onload="
       var iframe = this;
       window.addEventListener('message', function(event) {
         if (isNaN(event.data.rcvisHeight)) return;
         var height = parseInt(event.data.rcvisHeight);
         iframe.height = height + 'px';
       }, false);
       contentWindow.postMessage({getSize: true}, '*');
     ">
  `;
  return text;
}
