


const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createSquares() {
  clearBoxes(); 
  
  const amount = input.value;
  
  if (amount < 1 || amount > 100) {
    return; 
  }

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

function clearBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', createSquares);
destroyButton.addEventListener('click', clearBoxes);