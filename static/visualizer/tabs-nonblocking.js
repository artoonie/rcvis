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

function tabLinkFor(tabName) {
  return document.querySelector('a[data-toggle="changeviz"][href="#' + tabName + '"]');
}

function goToTab(newTabName) {
  if (newTabName == currentTabName) return;
  if (tabLinkFor(newTabName) == null) {
    // Unknown #anchor: fall back to the default tab
    newTabName = 'barchart';
    if (newTabName == currentTabName) return;
  }

  // Update navigation
  if (currentTabName != null) {
    const oldLink = tabLinkFor(currentTabName);
    oldLink.classList.remove('selected-nav');
    oldLink.setAttribute('aria-selected', 'false');
    oldLink.setAttribute('tabindex', '-1');
  }
  const newLink = tabLinkFor(newTabName);
  newLink.classList.add('selected-nav');
  newLink.setAttribute('aria-selected', 'true');
  newLink.removeAttribute('tabindex');

  // Select tab via bootstrap
  swapTabVisibility(currentTabName, newTabName);
  currentTabName = newTabName;

  // Update whether interactive/static toggle is there
  const canBeDynamic = newTabName == 'barchart' || newTabName == 'round-by-round';
  document.getElementById('toggle-dynamic').style.display = canBeDynamic ? 'block' : 'none';

  // Sankey wants a special resize
  if (newTabName == 'sankey') {
    fitSankeyViewboxToContents();
  }
}

function visibleTabLinks() {
  // Tabs hidden by the config (e.g. hidePie) are skipped when moving with the keyboard
  return Array.from(document.querySelectorAll('a[data-toggle="changeviz"]'))
    .filter(link => link.closest('li').offsetParent !== null);
}

// Roving tabindex: only the selected tab is in the tab order, arrow keys move between tabs
function initializeTabKeyboardNavigation() {
  const allLinks = document.querySelectorAll('a[data-toggle="changeviz"]');
  allLinks.forEach(link => {
    if (!link.classList.contains('selected-nav')) {
      link.setAttribute('tabindex', '-1');
    }
    link.addEventListener('keydown', function(e) {
      const links = visibleTabLinks();
      const index = links.indexOf(this);
      let nextIndex = null;
      if (e.key == 'ArrowRight' || e.key == 'ArrowDown') {
        nextIndex = (index + 1) % links.length;
      } else if (e.key == 'ArrowLeft' || e.key == 'ArrowUp') {
        nextIndex = (index - 1 + links.length) % links.length;
      } else if (e.key == 'Home') {
        nextIndex = 0;
      } else if (e.key == 'End') {
        nextIndex = links.length - 1;
      }
      if (nextIndex === null) return;
      e.preventDefault();
      const nextLink = links[nextIndex];
      const tabName = nextLink.getAttribute('href').substring(1);
      goToTab(tabName);
      history.pushState(null, null, '#' + tabName);
      nextLink.focus();
    });
  });
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
  if (config.hidePie)
  {
    $("li[name='li_hideable_pie']").css("display","none");
  }
  if (config.hideSankey)
  {
    $("li[name='li_hideable_sankey']").css("display","none");
  }

  // Dynamically load this when everything else finishes loading so it doesn't flicker the above two tabs
  $("#visualize-header-deferred-visibility").css("opacity","1");

  // The height has been guessed at to reduce the cumulative layout shift score.
  // Remove the guessed height so it dynamically scales with the content again.
  $("#visualize-header-deferred-visibility").css("height","");
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
initializeTabKeyboardNavigation();
hideTabsBasedOnConfig()
window.addEventListener("hashchange", loadTabFromTag, false);
