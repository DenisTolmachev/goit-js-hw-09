import Notiflix from 'notiflix';

const generatorForm = document.querySelector('.form');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
};

const submitHandler = e => {
const step = e.currentTarget.elements.step.value;
const delay = e.currentTarget.elements.delay.value;
const amount = e.currentTarget.elements.amount.value;

  e.preventDefault();
  for (let i = 0; i < amount; i += 1) {
    setTimeout(() => {
      createPromise(i + 1, +delay + i * +step)
        .then(message => Notiflix.Notify.success(message))
        .catch(message => Notiflix.Notify.failure(message));
    }, +delay + i * +step);
  }
  e.currentTarget.reset();
};

generatorForm.addEventListener('submit', submitHandler);
