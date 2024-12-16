const output = document.querySelector('.output');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.input button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentInput = '';
            result.textContent = '0';
            output.textContent = '';
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            output.textContent = currentInput;
        } else if (value === '=') {
            try {
                result.textContent = eval(currentInput) || '0';
            } catch {
                result.textContent = 'Error';
            }
        } else {
            currentInput += value;
            output.textContent = currentInput;
        }
    });
});
