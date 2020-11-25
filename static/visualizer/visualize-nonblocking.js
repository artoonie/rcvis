fullpageOptions.verticalCentered = false;
fullpageOptions.navigation = false;
fullpageOptions.fitToSection = false;
fullpageOptions.lockAnchors = true;
fullpageOptions.slidesNavigation = false;
fullpageOptions.controlArrows = false;
fullpageOptions.autoScrolling = true;
fullpageOptions.scrollOverflow = true;
fullpageOptions.scrollBar = false;
fullpageOptions.bigSectionsDestination = 'top';
fullpageOptions.onSlideLeave = function(section, origin, destination, direction) {
  goToTab(destination.item.getAttribute('data-anchor'));
}
fullpageOptions.afterLoad = function(origin, destination, direction) {
  loadTabFromTag();
}

// Handle bootstrap nav clicks, forward them to fullpage.js
$('.nav-tabs a').on('click', function (e) {
  e.preventDefault()
  const tab = this.id;
  goToTab(tab.substring(0, tab.length - 4)); // remove "-tab" to get the data-anchor
})

let currentTab = '';
function goToTab(tabName) {
  if (tabName == currentTab) return;
  currentTab = tabName;

  // Select tab via bootstrap
  fullpage_api.moveTo(2, tabName)
  $('.nav-tabs a[href="#' + tabName + '"]').tab('show');

  // Update whether interactive/static toggle is there
  const canBeDynamic = tabName == 'barchart' || tabName == 'round-by-round';
  document.getElementById('toggle-dynamic').style.display = canBeDynamic ? 'block' : 'none';

  // Update history
  history.pushState(null,null,'#' + tabName)
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

hideTabsBasedOnConfig()
