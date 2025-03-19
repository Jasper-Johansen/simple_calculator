const display = document.querySelector(".display");
const btns =document.querySelectorAll("button[id^='btn']");
const btnNumbers = Array.from(btns).filter(btn => /\d/.test(btn.id));
const btnOperators = Array.from(btns).filter(btn => !/\d/.test(btn.id));

const firstNumber='';
const secondNumber='';
const operator = '';

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


btnNumbers.forEach((btn) =>{
    btn.addEventListener("click", () =>{
    display.textContent += btn.textContent;
    });
});

