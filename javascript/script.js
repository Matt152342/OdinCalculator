let number1 = '', number2 = '', operand = '';
let calculation = '';

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

// Update variables
function updateVariables() {
    let operandPressed = false;
    let equalPressed = false;

    const buttons = document.querySelectorAll('.button');
    const displayEntered = document.querySelector('.entered');
    const displayCalculation = document.querySelector('.calculation');

    const classNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'];
    const classOperands = ['divide', 'multiply', 'minus', 'plus'];
    const classSpecial = ['equal', 'period', 'clear', 'delete'];

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (classNumbers.some(element => button.classList.contains(element))) {
                if (!operandPressed) {
                    number1 += button.textContent;
                    calculation = number1 + ' ';
                    displayEntered.textContent = number1;
                }
                else if (operandPressed) {
                    number2 += button.textContent;
                    displayCalculation.textContent = calculation;
                    displayEntered.textContent = number2;
                }
            }
            else if (classOperands.some(element => button.classList.contains(element))) {
                if (number1 === '') {
                    alert('Please enter number before operand.');
                    return;
                }
                else if (operandPressed === true) {
                    alert('Operand already present');
                    return;
                }

                operand = button.textContent;
                displayCalculation.textContent = calculation;
                calculation += operand + ' ';
                displayEntered.textContent = operand;

                operandPressed = true;
            }
            else if (classSpecial.some(element => button.classList.contains(element))) {
                if (button.classList.contains('equal') && operandPressed === true && number2 != '') {
                    calculation += number2;
                    number1 = eval(calculation);
                    number2 = '';
                    calculation = number1 + ' ';
                    displayEntered.textContent = number1;
                    displayCalculation.textContent = '';
                    operandPressed = false;
                }
            }
        });
    });
}

hover();
updateVariables();