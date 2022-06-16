const numberButtons = document.querySelectorAll('#number');
const display = document.querySelector('#display');

numberButtons.forEach( (button) => {
    button.addEventListener('click',() =>{
        populateDisplay(button.value);
    })
});


function populateDisplay(value){
    let text = display.textContent;
    text += value.toString();
    display.textContent = text; 
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
        add(num1,num2);
    }else if(operator == '-'){
        subtract(num1,num2);
    }else if(operator == '*'){
        multiply(num1,num2);
    }else{
        divide(num1,num2);
    }
}
