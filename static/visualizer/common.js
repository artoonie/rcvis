function makeEmbeddedIframeTag(iframeUrl) {
  const text = `<iframe src="${iframeUrl}" width="100%"
     frameborder="0"
     allowtransparency="true"
     allowfullscreen="allowfullscreen"
     onload="
       var iframe = this;
       var key = '${iframeUrl}' + Math.floor(Math.random() * 10000);
       window.addEventListener('message', function(event) {
         if (isNaN(event.data.rcvisHeight)) return;
         if (event.data.key != key) return;
         var height = parseInt(event.data.rcvisHeight);
         iframe.height = height + 'px';
       }, false);
       contentWindow.postMessage({getSize: true, key: key}, '*');
     "/>
  `;
  return text;
}
