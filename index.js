const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'AC') {
            display.value = '';
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});
