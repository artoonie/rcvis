// Handle bootstrap nav clicks
$('a[data-toggle="changeviz"]').on('click', function (e) {
  e.preventDefault()
  const tab = this.id;
  const tabName = tab.substring(0, tab.length - 4) // remove "-tab" to get the data-anchor
  goToTab(tabName);

  // Only update history on clicks, not back/foreward nav or initial load
  history.pushState(null,null,'#' + tabName);
})

let currentTabName = null;

function swapTabVisibility(oldTabName, newTabName) {
  if (oldTabName != null) {
    const oldTabId = 'id-' + oldTabName;
    document.getElementById(oldTabId).style.display = 'none';
  }
  const newTabId = 'id-' + newTabName;
  document.getElementById(newTabId).style.display = 'block';
}

function goToTab(newTabName) {
  if (newTabName == currentTabName) return;

  // Update navigation
  if (currentTabName != null) {
    $('a[data-toggle="changeviz"][href="#' + currentTabName + '"]').removeClass('selected-nav');
  }
  $('a[data-toggle="changeviz"][href="#' + newTabName + '"]').addClass('selected-nav');

  // Select tab via bootstrap
  swapTabVisibility(currentTabName, newTabName);
  currentTabName = newTabName;

  // Update whether interactive/static toggle is there
  const canBeDynamic = newTabName == 'barchart' || newTabName == 'round-by-round';
  document.getElementById('toggle-dynamic').style.display = canBeDynamic ? 'block' : 'none';

  animateIfNeeded(newTabName);

  // Sankey wants a special resize
  if (newTabName == 'sankey') {
    fitSankeyViewboxToContents();
  }
}

function loadTabFromTag() {
    // c/o https://stackoverflow.com/a/9393768/1057105
    // Javascript to enable link to tab
    var url = document.location.toString();
    let firstTab = 'barchart';
    if (url.match('#')) {
      firstTab = url.split('#')[1];
    } 
    goToTab(firstTab);
}

function hideTabsBasedOnConfig() {
  if (config.hideTabular)
  {
    $("li[name='li_hideable_tabular']").css("display","none");
  }
  if (config.hideSankey)
  {
    $("li[name='li_hideable_sankey']").css("display","none");
  }

  // Dynamically load this when everything else finishes loading so it doesn't flicker the above two tabs
  $("#visualize-header-deferred-visibility").css("opacity","1");
}

function togglePrintFriendly(isPrintFriendly) {
  const fixed = document.querySelectorAll('.vis-fixed');
  const interactive = document.querySelectorAll('.vis-interactive');
  fixed.forEach(element => {
    element.style.display = isPrintFriendly ? 'block' : 'none';
  });
  interactive.forEach(element => {
    element.style.display = !isPrintFriendly ? 'block' : 'none';
  });
}

// Handle print-friendly buttons, and make sure they don't change the #tag
document.getElementById("make-print-friendly").addEventListener("click", function(event) {
  togglePrintFriendly(true);
  event.preventDefault();
  return false;
});
document.getElementById("make-interactive").addEventListener("click", function(event) {
  togglePrintFriendly(false);
  event.preventDefault();
  return false;
});

loadTabFromTag();
hideTabsBasedOnConfig()
window.addEventListener("hashchange", loadTabFromTag, false);
