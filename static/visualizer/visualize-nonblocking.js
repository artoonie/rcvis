var hasAnimatedSlider = false;

function animationForBarchartCompleted() {
    isBargraphAnimationInProgress = false;
    showFaqButton();
}

function animateIfNeeded(newTabName) {
  if (hasAnimatedSlider) {
    return;
  }

  animateNow(newTabName);
}

function animateNow(newTabName) {
  // TODO only run animation on interactive visualizations
  if (newTabName == 'barchart') {
    hideFaqs();

    showTextOnRoundDescriber(humanFriendlySummary, true);
    isBargraphAnimationInProgress = true;

    trs_animate('bargraph-slider-container', animationForBarchartCompleted);
    hasAnimatedSlider = true;
  } else if (newTabName == 'round-by-round') {
    trs_animate('tabular-by-round-slider-container');
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
  styleSheet.insertRule('.expand-collapse-button { display: none !important}');
  styleSheet.insertRule('.round-description-wrapper { display: block !important}');
}

chooseBetweenTimelineAndDescription();
