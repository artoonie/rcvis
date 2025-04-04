function RoundPlayer({ container, onChange, totalRounds }) {
  let isPlaying = false;
  let currentStep = totalRounds - 1;
  // Imported from visualize-common.js
  let stepTimeMs = getTimeBetweenAnimationStepsMs(totalRounds);
  let timer = null;
  const svgNS = "http://www.w3.org/2000/svg";
  const MIN_ROUNDS_FOR_NAV = 3;
  const ARROW_SVG_VIEWBOX = "0 0 185.343 185.343";
  const ARROW_SVG_PATH =
    "M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175    l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934    c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z";

  function createNavButton(isNext) {
    const navBtn = document.createElement("button");
    navBtn.classList.add(
      "btn",
      "range-player-nav",
      isNext ? "range-player-next" : "range-player-prev"
    );
    // Including at the beginning because we start at the last round
    // Also including if there aren't more than two rounds
    if (isNext || totalRounds < MIN_ROUNDS_FOR_NAV) {
      navBtn.classList.add("range-player-hidden");
    }
    const navSvg = document.createElementNS(svgNS, "svg");
    navSvg.setAttribute("viewBox", ARROW_SVG_VIEWBOX);
    navSvg.setAttribute("aria-hidden", "true");

    const navPath = document.createElementNS(svgNS, "path");
    navPath.setAttribute("fill", "currentColor");
    navPath.setAttribute("d", ARROW_SVG_PATH);
    navSvg.appendChild(navPath);
    navBtn.appendChild(navSvg);

    navBtn.setAttribute("aria-label", isNext ? "Next" : "Previous");
    navBtn.addEventListener("click", () =>
      setStep(currentStep + (isNext ? 1 : -1))
    );
    return navBtn;
  }

  function createStepButton(round) {
    let stepBtn = document.createElement("button");
    stepBtn.classList.add("btn", "round-player-step-btn");
    if (round === currentStep) {
      stepBtn.classList.add("round-player-active");
    }
    if (round === 0 && totalRounds === 1) {
      stepBtn.innerText = "Round 1";
    } else {
      stepBtn.innerText = round + 1;
    }
    stepBtn.dataset.round = round;
    stepBtn.addEventListener("click", () => setStep(round));
    return stepBtn;
  }

  function createPlayButton() {
    const playBtn = document.createElement("button");
    playBtn.classList.add("btn", "round-player-play-btn");
    playBtn.innerText = "Play";
    playBtn.addEventListener("click", () => {
      isPlaying ? stop() : play();
    });
    return playBtn;
  }

  function init() {
    const playerEl = document.createElement("div");
    playerEl.classList.add("round-player-container");

    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add("round-player-wrapper");
    wrapperEl.appendChild(createNavButton(false));

    const stepsWrapperEl = document.createElement("div");
    stepsWrapperEl.classList.add("round-steps-wrapper");

    for (let round = 0; round < totalRounds; ++round) {
      stepsWrapperEl.appendChild(createStepButton(round));
    }
    wrapperEl.appendChild(stepsWrapperEl);

    wrapperEl.appendChild(createNavButton(true));
    playerEl.appendChild(wrapperEl);
    playerEl.appendChild(createPlayButton());

    container.appendChild(playerEl);
  }

  function changeStep(step) {
    // This shouldn't get triggered, but short-circuit if out of bounds
    if (step >= totalRounds || step < 0) {
      stop();
      return;
    }

    // Remove from previous element
    const previousStepEl = container.querySelector(
      `[data-round="${currentStep}"]`
    );
    if (previousStepEl) {
      previousStepEl.classList.remove("round-player-active");
    }
    currentStep = step;

    container
      .querySelector(`[data-round="${currentStep}"]`)
      .classList.add("round-player-active");

    if (totalRounds >= MIN_ROUNDS_FOR_NAV) {
      container
        .querySelector(".range-player-next")
        .classList.toggle(
          "range-player-hidden",
          currentStep >= totalRounds - 1
        );

      container
        .querySelector(".range-player-prev")
        .classList.toggle("range-player-hidden", currentStep <= 0);
    }

    onChange(step);
  }

  function setStep(step) {
    stop();
    changeStep(step);
  }

  function nextStep() {
    if (!isPlaying) return;

    timer = window.setTimeout(() => {
      changeStep(currentStep + 1);
      nextStep();
    }, stepTimeMs);
  }

  function play() {
    isPlaying = true;
    container.querySelector(".round-player-play-btn").innerText = "Stop";
    changeStep(0);
    nextStep();
  }

  function stop() {
    isPlaying = false;
    window.clearTimeout(timer);
    container.querySelector(".round-player-play-btn").innerText = "Play";
  }

  init();

  return { play, stop, setStep };
}
