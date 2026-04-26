let number1 = '', number2 = '', operand = '';
let calculation = '';

// Other functions
function backspace(string) {
    return string.slice(0, -1);
}

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

function operate(num1, num2, operand) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(operand) {
        case '+': 
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

// Update variables
function updateVariables() {
    let operandPressed = false;

    const buttons = document.querySelectorAll('.button');
    const displayEntered = document.querySelector('.entered');
    const displayCalculation = document.querySelector('.calculation');

    const classNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'];
    const classOperands = ['divide', 'multiply', 'minus', 'plus'];
    const classSpecial = ['equal', 'period', 'clear', 'delete'];

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Handle digits
            if (classNumbers.some(element => button.classList.contains(element))) {
                if (!operandPressed) {
                    number1 += button.textContent;
                    calculation = number1;
                    displayEntered.textContent = number1;
                }
                else if (operandPressed) {
                    number2 += button.textContent;
                    displayCalculation.textContent = calculation;
                    displayEntered.textContent = number2;
                }
            }
            // Handle operands
            else if (classOperands.some(element => button.classList.contains(element))) {
                if (number1 === '') {
                    alert('Please enter number before operand.');
                    return;
                }
                else if (operandPressed == true) {
                    alert('Operand already present');
                    return;
                }

                operand = button.textContent;
                displayCalculation.textContent = calculation;
                calculation += operand;
                displayEntered.textContent = operand;

                operandPressed = true;
            }
            // Handle 'equal', 'period' and 'delete'
            else if (classSpecial.some(element => button.classList.contains(element))) {
                if (button.classList.contains('equal')) {
                    if (number1 === '' || number2 === '' || operand === '') {
                        alert('Enter necessary number(s)/operand.');
                        return;
                    }
                    
                    number1 = Math.round(operate(number1, number2, operand) * 100) / 100;
                    number2 = '';
                    operandPressed = false;

                    displayEntered.textContent = number1;
                    displayCalculation.textContent = '';
                }
                else if (button.classList.contains('delete')) {
                    if (!operandPressed) {
                        number1 = backspace(number1);
                        calculation = number1;
                        displayEntered.textContent = number1;
                    }
                    else {
                        if (number2 === '') {
                            operand = '';
                            operandPressed = false;
                            calculation = number1;
                            displayEntered.textContent = number1;
                            displayCalculation.textContent = '';
                        }
                        else {
                            number2 = backspace(number2);
                            displayEntered.textContent = number2;
                        }
                    }
                }
                else if (button.classList.contains('clear')) {
                    number1 = '';
                    number2 = '';
                    operand = '';
                    calculation = '';
                    displayCalculation.textContent = '';
                    displayEntered.textContent = '';
                    operandPressed = false;
                }
            }
        });
    });
}

hover();
updateVariables();