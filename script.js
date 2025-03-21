const display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

function add(num1,num2){ return num1+num2; }
function subtract(num1,num2){ return num1-num2; }
function multiply(num1,num2){ return num1 * num2;}
function divide(num1,num2){ return num2 !== 0 ? num1 / num2 : "Infinity!"; }

let firstNumber = '';
let secondNumber='';
let operator='';
display.textContent ='';
let result = '';

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
       
        if (!isNaN(parseInt(btn.textContent))) {
            if (operator === '') {
                firstNumber += btn.textContent; 
            } else {
                secondNumber += btn.textContent; 
            }
            display.textContent += btn.textContent;
        } 
    
        else if (['+', '-', '*', '/'].includes(btn.textContent)) {
            operator = btn.textContent; 
        }

        else if (btn.textContent==="="){
            if (firstNumber && secondNumber && operator){
                let num1 = parseInt(firstNumber);
                let num2 = parseInt(secondNumber);

                switch(operator){
                    case '+': result = add(num1,num2); break;
                    case '-': result = subtract(num1,num2); break;
                    case '*': result = multiply(num1,num2); break;
                    case '/': result = divide(num1,num2); break;
                }
                display.textContent = result;
                firstNumber = result.toString();
                secondNumber = '';
                operator = '';

            }
        }

        else if (btn.id==="btn-clear"){
            display.textContent = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';

        }

        else if (btn.id === "btn-del"){
            display.textContent = display.textContent.slice(0, -1);
        }
    });
});