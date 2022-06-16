const numberButtons = document.querySelectorAll('#number');
const operatorButtons = document.querySelectorAll('#operator');
const display = document.querySelector('#display');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

let number;
let num1;
let num2;
let currOperator;

numberButtons.forEach( (button) => {
    button.addEventListener('click',() =>{
        populateDisplay(button.value);
    })
});

operatorButtons.forEach( (operator) => {
    operator.addEventListener('click', () =>{
        num1 = number;
        clearDisplay();
        currOperator = operator.value;
    });
});

equals.addEventListener('click',()=>{
    num2 = number;
    let res = operate(num1,num2,currOperator);
    clearDisplay();
    populateDisplay(res)
    number = res;
});

clear.addEventListener('click',()=>{
    clearDisplay();
})

function clearDisplay(){
    display.textContent = "";
    number = '';
    currOperator = '';
}

function populateDisplay(value){
    
    let text = display.textContent;
    if(value == 0 && text == ''){
        // do nothing as we do not want long strings of 0 at the start
    }
    else{
        text += value;
        display.textContent = text; 
        number = +text;
    }
    
    
}

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(num1,num2,operator){
    if(operator == '+'){
        return add(num1,num2);
    }else if(operator == '-'){
        return subtract(num1,num2);
    }else if(operator == '*'){
        return multiply(num1,num2);
    }else{
        return divide(num1,num2);
    }
}
