const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function () {
    const trimValue = nameInput.value.trim();

    if (trimValue) {
        nameOutput.textContent = trimValue; 
    } else {
        nameOutput.textContent = 'Anonymous'; 
    }
});