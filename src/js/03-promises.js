const formEl = document.querySelector(".form");

const button = formEl.elements["button"];

button.addEventListener("click", submit);

function submit() {
  const formDate = new FormData(formEl);
  const deley = formDate.get("delay");
  const step = formDate.get("step");
  const amount = formDate.get("amount");
  console.log({ deley, step, amount });
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
