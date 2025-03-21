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
        case '+': result = add(firstNumber, secondNumber); break;
        case '-': result = subtract(firstNumber, secondNumber); break;
        case '*': result = multiply(firstNumber, secondNumber); break;
        case '/': result = divide(firstNumber, secondNumber); break;
        default: result = '';
    }
    return Math.round(result*100000)/100000;
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!isNaN(parseInt(btn.textContent)) || btn.textContent==='.' ) {
            
            if (operator === '') {
                firstNumber += btn.textContent;
                if (firstNumber && firstNumber.match(/\./g) && firstNumber.match(/\./g).length>1){
                    firstNumber = firstNumber.slice(0,-1);
                }
               
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
            if (firstNumber === ''){
                return; //Do Nothing :)
            }

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
                firstNumber = result.toString();
                display.textContent = result;
                firstNumber = '';
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

//keyboard support
document.addEventListener("keydown", function(event) {
    const keyClicks = {
        "Enter" : "btn-equal",
        "Backspace" : "btn-del",
        "Escape" : "btn-clear",
        "0" : "btn0",
        "1" : "btn1",
        "2" : "btn2",
        "3" : "btn3",
        "4" : "btn4",
        "5" : "btn5",
        "6" : "btn6",
        "7" : "btn7",
        "8" : "btn8",
        "9" : "btn9",
        "." : "btn-dot",
        "+" : "btn-plus",
        "-" : "btn-minus",
        "*" : "btn-cross",
        "/" : "btn-slash",
    };
    if (keyClicks[event.key]) {
        //If the id associated with the keys exist...
        document.getElementById(keyClicks[event.key]).click();
    }
                                        
});

