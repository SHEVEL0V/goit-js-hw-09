import Notiflix from "notiflix";

const formEl = document.querySelector(".form");

formEl.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const formDate = new FormData(formEl);

  const deley = formDate.get("delay");
  const step = formDate.get("step");
  const amount = formDate.get("amount");

  timer(deley, step, amount);
}

function timer(deley, step, amount) {
  const areyValue = [];

  let delay = Math.abs(deley) - Math.abs(step);
  let position = 0;

  for (let i = 1; i <= amount; i++) {
    delay += Math.abs(step);
    position++;
    areyValue.push({ delay, position });
  }
  areyValue.map((arey) => {
    promis(arey);
  });
}

function promis(arey) {
  createPromise(arey)
    .then(({ delay, position }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ delay, position }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

function createPromise({ delay, position }) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ delay, position });
        // Fulfill
      } else {
        reject({ delay, position });
        // Reject
      }
    }, delay);
  });
}
