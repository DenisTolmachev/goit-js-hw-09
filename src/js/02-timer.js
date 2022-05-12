import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let intervalId = null;

startBtn.addEventListener('click', startBtnCLick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
      clearInterval(intervalId);
      updateTimerValue({days: 0, hours: 0, minutes: 0, seconds: 0})
    } else {
      startBtn.disabled = false;
    }
  },
};

const flatpickrDate = flatpickr('#datetime-picker', options);

function startBtnCLick() {
  intervalId = setInterval(() => {
    const today = new Date();
    const deadline = flatpickrDate.selectedDates[0];
    const delta = deadline.getTime() - today.getTime();
    if (delta < 0) {
      clearInterval(intervalId);
      return;
    }
    const convertedTimerValue = convertMs(delta);
    updateTimerValue(convertedTimerValue);
    startBtn.disabled = true;
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
   return String(value).padStart(2, '0');
 }
 
 function updateTimerValue(value) {
   daysValue.textContent = addLeadingZero(value.days);
   hoursValue.textContent = addLeadingZero(value.hours);
   minutesValue.textContent = addLeadingZero(value.minutes);
   secondsValue.textContent = addLeadingZero(value.seconds);
 }

//  function resetTimerValue() {
//    daysValue.textContent = '00';
//    hoursValue.textContent = '00';
//    minutesValue.textContent = '00';
//    secondsValue.textContent = '00';
//  }
