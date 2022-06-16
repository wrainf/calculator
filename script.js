const numberButtons = document.querySelectorAll('#number');
const operatorButtons = document.querySelectorAll('#operator');
const display = document.querySelector('#display');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

let currOperator;

numberButtons.forEach( (button) => {
    button.addEventListener('click', ()=>{
        populateDisplay(button.value);
    });
});

operatorButtons.forEach( (operator) => {
    operator.addEventListener('click', () =>{
        if(display.textContent != ''){
            if(display.textContent.split(currOperator).length == 2){
                equals.click();
            }
            currOperator = operator.value;
            populateDisplay(operator.value);
        }
        
    });
});

equals.addEventListener('click',()=>{
    if(display.textContent != ''){
        let numList = display.textContent.split(currOperator);
        let res = operate(numList[0],numList[1],currOperator);
        clearDisplay();
        populateDisplay(res);
    }
    
});

clear.addEventListener('click',()=>{
    clearDisplay();
})

function clearDisplay(){
    display.textContent = '';
}




function populateDisplay(value){
    
    let text = display.textContent;
    if(value == 0 && text == ''){
        // do nothing as we do not want long strings of 0 at the start
    }
    else{
        text += value;
        display.textContent = text; 
    
    }
    
}

function add(num1,num2){
    return +num1 + +num2;
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
