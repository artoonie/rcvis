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

  const newTab = $('.nav-tabs a[href="#' + newTabName + '"]');
  if (newTab.length == 0) {
    console.log("You provided an invalid tab name (" + newTabName + ").");
    newTabName = 'barchart';
  }

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

  // Sankey wants a special resize
  if (newTabName == 'sankey') {
    fitSankeyViewboxToContents();
  }
}

function animationForBarchartCompleted() {
    isBargraphAnimationInProgress = false;
    showFaqButton();
}

function animateIfNeeded(newTabName) {
  // TODO only run animation on interactive visualizations
  if (hasAnimatedSlider) {
    return;
  }

  if (newTabName == 'barchart') {
    showTextOnRoundDescriber(humanFriendlySummary, true)
    isBargraphAnimationInProgress = true;

    trs_animate('bargraph-slider-container', animationForBarchartCompleted)
    hasAnimatedSlider = true;
  } else if (newTabName == 'round-by-round') {
    trs_animate('tabular-by-round-slider-container')
    hasAnimatedSlider = true;
  }
}

function chooseBetweenTimelineAndDescription() {
  // Pretty hacky - just for evaluation
  if (!config.doUseDescriptionInsteadOfTimeline) {
    return;
  }

  var style = document.createElement('style');
  document.head.appendChild(style);
  var styleSheet = style.sheet;
  styleSheet.insertRule('.expand-collapse-button { display: none !important}')
  styleSheet.insertRule('.round-description-wrapper { display: block !important}')
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

chooseBetweenTimelineAndDescription()
loadTabFromTag();
hideTabsBasedOnConfig()
