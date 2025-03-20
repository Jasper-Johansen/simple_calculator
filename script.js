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
    return num2 !== 0 ? num1/num2 : "Undefined!";
}

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        display.textContent += btn.textContent;

        if (btn.id === "btn-clear"){
            display.textContent = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';
            result = '';
            return;
        }

        if (btn.id === "btn-del"){
            display.textContent = display.textContent.slice(0,-4);
            return;
        }

        let parts = display.textContent.split(/([+\-*\/])/).filter('');
        console.log(parts);
        if(parts.length>=3){
            firstNumber = parseFloat(parts[0]);
            operator = parts[1];
            secondNumber = parseFloat(parts[2]);
            if (!isNaN(firstNumber) && !isNaN(secondNumber)) {

                switch(operator){
                    case "+": result = add(firstNumber,secondNumber); break;
                    case "-": result = subtract(firstNumber,secondNumber); break;
                    case "*": result = multiply(firstNumber,secondNumber); break;
                    case "/": result = divide(firstNumber,secondNumber); break;

                }
                
                }
            display.textContent = result;
            firstNumber = parseFloat(result);
                
        }
    });
});

