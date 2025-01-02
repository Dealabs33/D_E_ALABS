function appendToDisplay(value) {
    document.getElementById('calc-display').value += value;
}

function clearDisplay() {
    document.getElementById('calc-display').value = '';
}

function calculate() {
    let display = document.getElementById('calc-display').value;
    try {
        display = display.replace(/sqrt/g, 'Math.sqrt')
                         .replace(/log/g, 'Math.log10')
                         .replace(/sin/g, 'Math.sin')
                         .replace(/cos/g, 'Math.cos')
                         .replace(/tan/g, 'Math.tan')
                         .replace(/exp/g, 'Math.exp');
                         
        document.getElementById('calc-display').value = eval(display);
    } catch (e) {
        document.getElementById('calc-display').value = 'Error';
    }
}

function backspace() {
    let display = document.getElementById('calc-display').value;
    document.getElementById('calc-display').value = display.slice(0, -1);
}