const display = document.getElementById('display');

function calculate() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = '';
}

function deleteCharacter() {
  display.value = display.value.slice(0, -1);
}

document.getElementById('btn-clear').onclick = clearDisplay;

document.getElementById('btn-delete').onclick = deleteCharacter;

document.getElementById('btn-equals').onclick = calculate;

const numberButtons = document.querySelectorAll('.number');

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].onclick = function () {
    display.value += this.value;
  }
}

const operatorButtons = document.querySelectorAll('.operator');

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].onclick = function () {
    display.value += this.value;
  }
}
