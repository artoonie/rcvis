function RoundPlayer({
  container,
  onChange,
  onPlay,
  totalRounds,
  timeBetweenStepsMs,
}) {
  let isPlaying = false;
  let currentStep = totalRounds - 1;
  // Imported from visualize-common.js
  let stepTimeMs =
    timeBetweenStepsMs || getTimeBetweenAnimationStepsMs(totalRounds);
  let timer = null;
  const svgNS = "http://www.w3.org/2000/svg";
  const MIN_ROUNDS_FOR_NAV = 3;
  const ARROW_SVG_VIEWBOX = "0 0 24 28";
  const ARROW_SVG_PATH =
    "M21.981 16.5981C23.981 15.4434 23.981 12.5566 21.981 11.4019L3.22017 0.570383C2.01129 -0.127565 0.500193 0.744867 0.500193 2.14076C0.500193 2.81278 0.871843 3.42969 1.46593 3.7438L15.7356 11.2887C17.8878 12.4266 17.8597 15.5191 15.6872 16.6179L1.59932 23.7428C0.925186 24.0837 0.500193 24.7749 0.500193 25.5304C0.500193 27.0724 2.16952 28.0362 3.50498 27.2652L21.981 16.5981Z";

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

    const labelEl = document.createElement("span");
    labelEl.innerText = `${isNext ? "Next" : "Previous"} Round`;
    navBtn.appendChild(labelEl);

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
    wrapperEl.appendChild(createPlayButton());

    wrapperEl.appendChild(createNavButton(true));
    playerEl.appendChild(stepsWrapperEl);
    playerEl.appendChild(wrapperEl);

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
    if (onPlay) onPlay();
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

  function playing() {
    return isPlaying;
  }

  function setTimeBetweenStepsMs(timeBetweenStepsMs) {
    stepTimeMs = timeBetweenStepsMs;
  }

  init();

  return { play, stop, setStep, setTimeBetweenStepsMs, playing };
}
