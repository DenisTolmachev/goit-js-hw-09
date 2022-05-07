function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
 
 const startSwitcherBtn = document.querySelector('[data-start]');
 const stopSwitcherBtn = document.querySelector('[data-stop]');
 const body = document.querySelector('body');
 let timerId = null;
 
 stopSwitcherBtn.disabled = true;
 
 startSwitcherBtn.addEventListener('click', () => {
   timerId = setInterval(() => {
     const color = getRandomHexColor();
     body.style.backgroundColor = color;
   }, 1000);
   startSwitcherBtn.disabled = true;
   stopSwitcherBtn.disabled = false;
 });
 
 stopSwitcherBtn.addEventListener('click', () => {
   clearInterval(timerId);
   startSwitcherBtn.disabled = false;
   stopSwitcherBtn.disabled = true;
 });
