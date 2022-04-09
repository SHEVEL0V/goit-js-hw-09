const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");
let intervalId = null;

btnStart.addEventListener("click", startMakeColor);
btnStop.addEventListener("click", stopMakeColor);

function startMakeColor() {
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
}

function stopMakeColor() {
  clearInterval(intervalId);
  btnStart.disabled = false;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
