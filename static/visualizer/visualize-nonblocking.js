// Handle bootstrap nav clicks
$('.nav-tabs a').on('click', function (e) {
  e.preventDefault()
  const tab = this.id;
  goToTab(tab.substring(0, tab.length - 4)); // remove "-tab" to get the data-anchor
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

var hasAnimatedSlider = false;

function goToTab(newTabName) {
  if (newTabName == currentTabName) return;

  // Select tab via bootstrap
  swapTabVisibility(currentTabName, newTabName);
  currentTabName = newTabName;
  $('.nav-tabs a[href="#' + newTabName + '"]').tab('show');

  // Update whether interactive/static toggle is there
  const canBeDynamic = newTabName == 'barchart' || newTabName == 'round-by-round';
  document.getElementById('toggle-dynamic').style.display = canBeDynamic ? 'block' : 'none';

  // Update history
  history.pushState(null,null,'#' + newTabName);

  animateIfNeeded(newTabName);
}

function animateIfNeeded(newTabName) {
  // TODO only run animation on interactive visualizations
  if (hasAnimatedSlider) {
    return;
  }

  if (newTabName == 'barchart') {
    animateSlider(sliderStep)
    hasAnimatedSlider = true;
  }
  else if (newTabName == 'round-by-round') {
    animateSlider(sliderStepTabular)
    hasAnimatedSlider = true;
  }
}

function slideTo(sliderObj, round, numRounds) {
  setTimeout(() => {
    const didUserGrabControl = round != 1  && sliderObj.value() != round-1;
    if (didUserGrabControl) {
      return;
    }

    sliderObj.value(round);

    if (round+1 < numRounds) {
      slideTo(sliderObj, round+1, numRounds);
    }
  }, 50);
}

function animateSlider(sliderObj) {
  const numRounds = 20;

  slideTo(sliderObj, 1, numRounds);
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
