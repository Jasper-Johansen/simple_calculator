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
    if (event.key === "Enter") {
        document.getElementById("btn-equal").click();
    }
    if (event.key === "Backspace") {
        document.getElementById("btn-del").click();
        }
    if (event.key === "Escape") {
            document.getElementById("btn-clear").click();
    }
    if (event.key === "1"){
        document.getElementById("btn1").click();
    }
    if (event.key === "2"){
        document.getElementById("btn2").click();
        }
    if (event.key === "3"){
        document.getElementById("btn3").click();
        }
    if (event.key === "4"){
        document.getElementById("btn4").click();
        }
    if (event.key === "5"){
        document.getElementById("btn5").click();
        }
    if (event.key === "6"){
        document.getElementById("btn6").click();
        }
    if (event.key === "7"){
        document.getElementById("btn7").click();
        }
    if (event.key === "8"){
       document.getElementById("btn8").click();
        }
    if (event.key === "9"){
        document.getElementById("btn9").click();
        }
    if (event.key === "0"){
        document.getElementById("btn0").click();
    }
    if (event.key === "."){
        document.getElementById("btn-dot").click();
    }
    if (event.key === "/"){
        document.getElementById("btn-slash").click();
    }
    if (event.key === "*"){
        document.getElementById("btn-cross").click();
    }
    if (event.key === "+") {
        document.getElementById("btn-plus").click();
    }
    if (event.key === "-"){
        document.getElementById("btn-minus").click();
    }
                                        
});

