const formEl = document.querySelector(".form");

formEl.addEventListener("input", e);

function e(n) {
  n.preventDefault();
  console.dir(n);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
