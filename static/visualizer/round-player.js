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
      "round-player-nav",
      isNext ? "round-player-next" : "round-player-prev"
    );
    // Including at the beginning because we start at the last round
    // Also including if there aren't more than two rounds
    if (isNext || totalRounds < MIN_ROUNDS_FOR_NAV) {
      navBtn.classList.add("round-player-hidden");
    }

    const labelEl = document.createElement("span");
    labelEl.classList.add("round-player-nav-label");
    labelEl.innerText = isNext ? "Next" : "Back";
    navBtn.appendChild(labelEl);

    const navSvg = document.createElementNS(svgNS, "svg");
    navSvg.setAttribute("viewBox", ARROW_SVG_VIEWBOX);
    navSvg.setAttribute("aria-hidden", "true");

    const navPath = document.createElementNS(svgNS, "path");
    navPath.setAttribute("fill", "currentColor");
    navPath.setAttribute("d", ARROW_SVG_PATH);
    navSvg.appendChild(navPath);
    navBtn.appendChild(navSvg);

    navBtn.addEventListener("click", () =>
      setStep(currentStep + (isNext ? 1 : -1))
    );
    return navBtn;
  }

  function createDropdown() {
    const selectWrapper = document.createElement("div");
    selectWrapper.classList.add("round-player-select-wrapper");

    const select = document.createElement("select");
    select.classList.add("round-player-select");
    for (let round = 0; round < totalRounds; ++round) {
      const opt = document.createElement("option");
      opt.value = round;
      opt.innerText = `Round ${round + 1} of ${totalRounds}`;
      if (round === totalRounds - 1) {
        opt.selected = true;
      }
      select.appendChild(opt);
    }

    select.addEventListener("change", (e) => {
      setStep(+e.target.value);
    });

    selectWrapper.appendChild(select);
    return selectWrapper;
  }

  function createPlayButton() {
    const playBtn = document.createElement("button");
    playBtn.classList.add("btn", "round-player-play-btn");
    playBtn.innerText = "Play animation";
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
    wrapperEl.appendChild(createDropdown());
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

    currentStep = step;
    container.querySelector(`select option[value="${step}"]`).selected = true;

    if (totalRounds >= MIN_ROUNDS_FOR_NAV) {
      container
        .querySelector(".round-player-next")
        .classList.toggle(
          "round-player-hidden",
          currentStep >= totalRounds - 1
        );

      container
        .querySelector(".round-player-prev")
        .classList.toggle("round-player-hidden", currentStep <= 0);
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
    container.querySelector(".round-player-play-btn").innerText =
      "Play animation";
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
