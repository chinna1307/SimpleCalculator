
const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    try {
       
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
     
        display.value = 'Error';
    }
}