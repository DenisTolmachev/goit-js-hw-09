import Notiflix from 'notiflix';

const generatorForm = document.querySelector('.form');
let formData = {};

const inputHandler = e => {
  formData[e.target.name] = e.target.value;
};

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
  e.preventDefault();
  for (let i = 0; i < formData.amount; i += 1) {
    setTimeout(() => {
      createPromise(i + 1, +formData.delay + i * +formData.step)
        .then(message => Notiflix.Notify.success(message))
        .catch(message => Notiflix.Notify.failure(message));
    }, +formData.delay + i * +formData.step);
  }
  e.currentTarget.reset();
};

generatorForm.addEventListener('input', inputHandler);
generatorForm.addEventListener('submit', submitHandler);
