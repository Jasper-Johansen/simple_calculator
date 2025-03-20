const display = document .querySelector(".display");
const btns = document.querySelectorAll("button");

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

display.textContent = '';

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1,num2){
    if(num2 != 0){
        return num1 / num2;
    }else{
    return "Zero Division is not allowed!"
    }
}

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        display.textContent += btn.textContent;

        /* if(display.textContent.split(/([+\-x*\/])/)<=3){
            [firstNumber,operator,secondNumber] = display.textContent.split(/([+\-*\/])/);
            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);
        }else{
            for (let i=0; i<display.textContent.split(/([+\-*\/])/); i++){
                [firstNumber,operator,secondNumber] = display.textContent.split(/([+\-*\/])/);
            }
               

        } */
        

        if (btn.id === "btn-equal") {
            display.textContent = '';
            if (operator==='+'){
                result = add(firstNumber,secondNumber);
                
            }else if (operator === '-'){
                result = subtract(firstNumber,secondNumber);
            }else if(operator === '*'){
                result = multiply(firstNumber,secondNumber);
            }else{
                result = divide(firstNumber,secondNumber);
            }
            display.textContent += result;
        }else if (btn.id === "btn-clear"){
            display.textContent = '';
        }else if (btn.id === "btn-del"){
            display.textContent = display.textContent.slice(0,-4);
        }
    });
});

