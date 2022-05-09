import Notiflix from 'notiflix';

const generatorForm = document.querySelector('.form');
let formData = {};

const inputHandler = e => {
   formData[e.target.name] = e.target.value;
   console.log(formData);
}

const position = formData.step;
const delay = formData.delay;
const amount = formData.amount;


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(position,delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

generatorForm.addEventListener('input', inputHandler);
