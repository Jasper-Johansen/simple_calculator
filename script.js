const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const dotButton = document.querySelector("#btnDot")

function add(num1, num2) { return num1 + num2; }
function subtract(num1, num2) { return num1 - num2; }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { return num2 !== 0 ? num1 / num2 : "Error"; }

let firstNumber = '';
let secondNumber = '';
let operator = '';
display.textContent = '';
let result = '';

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+': return add(firstNumber, secondNumber);
        case '-': return subtract(firstNumber, secondNumber);
        case '*': return multiply(firstNumber, secondNumber);
        case '/': return divide(firstNumber, secondNumber);
        default: return '';
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!isNaN(parseInt(btn.textContent)) || btn.textContent==='.' ) {
            if (operator === '') {
                firstNumber += btn.textContent;
                if (firstNumber && firstNumber.match(/\./g) && firstNumber.match(/\./g).length>1){
                    firstNumber = firstNumber.slice(0,-1);
                }
                display.textContent = firstNumber;
            } else {
                secondNumber += btn.textContent;
                if (secondNumber && secondNumber.match(/\./g) && secondNumber.match(/\./g).length>1){
                    secondNumber = secondNumber.slice(0,-1);
                }
                display.textContent =secondNumber;
            }
    
        }

        else if (['+', '-', '*', '/'].includes(btn.textContent)) {
            // If an operator is clicked, set the operator
            if (firstNumber !== '' && secondNumber !== '') {
                let num1 = parseFloat(firstNumber);
                let num2 = parseFloat(secondNumber);
                result = operate(operator, num1, num2);
                display.textContent = result;
                firstNumber = result.toString();
                secondNumber = '';
            }
            operator = btn.textContent;
        }

        else if (btn.textContent === "=") {
            if (firstNumber && secondNumber && operator) {
                let num1 = parseFloat(firstNumber);
                let num2 = parseFloat(secondNumber);
                result = operate(operator, num1, num2);
                display.textContent = result;
                firstNumber = result.toString();
                secondNumber = '';
                operator = '';
            }
        }

        else if (btn.id === "btn-clear") {
            display.textContent = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';
        }

        else if (btn.id === "btn-del") {
            display.textContent = display.textContent.slice(0, -1);
            if (secondNumber) {
                secondNumber = secondNumber.slice(0, -1);
            } else if (operator) {
                operator = '';
            } else if (firstNumber) {
                firstNumber = firstNumber.slice(0, -1);
            }
        }
    });
});
