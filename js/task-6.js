function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createSquares() {
  const input = document.querySelector('input[type="number"]');
  const amount = input.value;
  const boxesContainer = document.getElementById('boxes');
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const square = document.createElement('div');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(square);
    size += 10;
  }
}
const squareContainer = document.querySelector('button[data-create]');
squareContainer.addEventListener('click', createSquares);



 function clearBoxes(container) {
  container.innerHTML = '';
}
document.querySelector('button[data-destroy]').addEventListener('click', function() {
  const boxesContainer = document.getElementById('boxes');
  clearBoxes(boxesContainer);
  

});