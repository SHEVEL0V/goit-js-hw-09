import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const SEKOND = 1000;
const date = new Date();
let inputTime = null;

const ref = {
  btnStart: document.querySelector("button[data-start]"),
  dayEl: document.querySelector("span[data-days]"),
  hourEl: document.querySelector("span[data-hours]"),
  minuteEl: document.querySelector("span[data-minutes]"),
  secondEl: document.querySelector("span[data-seconds]"),
};

ref.btnStart.disabled = true;
ref.btnStart.addEventListener("click", timer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (date > selectedDates[0]) {
      Notiflix.Notify.failure("Please choose a date in the future"),
        {
          timeout: 6000,
        };
    } else {
      ref.btnStart.disabled = false;
      inputTime = selectedDates[0];
    }
  },
};
flatpickr("#datetime-picker", options);

function timer() {
  setInterval(() => {
    const d = new Date();
    const time = inputTime - d;
    if (time > 0) {
      convertMs(time);
    }
  }, SEKOND);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return timerModelingClock(days, hours, minutes, seconds);
}

function timerModelingClock(days, hours, minutes, seconds) {
  ref.secondEl.textContent = seconds.toString().padStart(2, 0);
  ref.minuteEl.textContent = minutes.toString().padStart(2, 0);
  ref.hourEl.textContent = hours.toString().padStart(2, 0);
  ref.dayEl.textContent = days.toString().padStart(2, 0);
}
