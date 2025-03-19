const display = document.querySelector(".display");
const btns =document.querySelectorAll("button");

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

display.textContent ='';
btns.forEach((btn) =>{
    btn.addEventListener("click", () =>{
    display.textContent += btn.textContent;
    });
});