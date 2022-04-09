import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const date = new Date();
const ref = {
  btnStart: document.querySelector("button[data-start]"),
  dayEl: document.querySelector("span[date-days]"),
  housEl: document.querySelector("span[date-hours]"),
  minuteEl: document.querySelector("span[date-minutes]"),
  secondEl: document.querySelector("span[date-seconds]"),
};

ref.btnStart.disabled = true;
let time = {};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (date > selectedDates[0]) {
      window.alert("Please choose a date in the future");
    } else {
      ref.btnStart.disabled = false;
      convertMs(selectedDates[0] - date);
    }
  },
};

flatpickr("#datetime-picker", options);

ref.btnStart.addEventListener("click", timer);

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
  return (time = { days, hours, minutes, seconds });
}
function timer() {
  console.log(ref.secondEl);
}
