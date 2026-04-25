// Functions for operations logic
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Function for performing opereations
function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            add(num1, num2);
        case '-':
            subtract(num1, num2);
        case '*':
            multiply(num1, num2);
        case '/':
            divide(num1, num2);
        default:
            console.log("Unable to perform calculation");
            return;
    }
}

// Other functions
function hover() {
    const buttons = document.querySelectorAll('.buttons .row .button');

    buttons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
            button.classList.toggle('hover');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.toggle('hover');
        });
    });
}

hover();