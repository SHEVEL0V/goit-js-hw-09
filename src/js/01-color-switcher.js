const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");
const SECOND = 1000;
let intervalId = null;

btnStart.addEventListener("click", startMakeColor);
btnStop.addEventListener("click", stopMakeColor);

function startMakeColor() {
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, SECOND);
  btnStart.disabled = true;
}

function stopMakeColor() {
  clearInterval(intervalId);
  btnStart.disabled = false;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
