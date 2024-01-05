function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


   const changeClrBtn = document.querySelector('.change-color');
const clrSpan = document.querySelector('.color');

changeClrBtn.addEventListener('click', function() {
  const randomClr = getRandomHexColor();

  document.body.style.backgroundColor = randomClr;

  clrSpan.textContent = randomClr; 
});