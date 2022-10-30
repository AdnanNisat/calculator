function add(a,b){
  return a + b;
};

function subtract(a,b){
  return a - b;
};

function multiply(a,b){
  return a * b;
};

function divide(a,b){
  return a / b;
};

function operate(number1, operator, number2){
  if( operator === '+' )
   return add(number1,number2);

  else if( operator === '-' )
    return subtract(number1,number2);

  else if( operator === '*' )
    return multiply(number1,number2);

  else if( operator === '/' );
    return divide(number1,number2);
};

function display(symbol){
  const display = document.getElementById("display");
  display.textContent = symbol;
};

function clear(){
  const display = document.getElementById("display");
  display.textContent = '';

str = '';
operator = '';
num1 = 0;
result = 0;
click_count = 0;
};

// Global Variables
let str = '';
let operator = '';
let num1 = 0;
let result = 0;
let click_count = 0;
//
const btn = document.querySelectorAll('.num');

btn.forEach((item) => {
  item.addEventListener('click', () => {
    let content = item.textContent;
    str = str + content;
    display(str);  
  });  
});

const clear_btn = document.querySelector('#clear');
clear_btn.addEventListener('click', () => {
  clear();
  str = '';
});

const operators = document.querySelectorAll('.operator');
operators.forEach((item) => {
  item.addEventListener('click', () => {
    operator = item.textContent;

    if(click_count === 1)
     result = parseFloat(str);
    else 
     num1 = parseFloat(str);

    str = '';
    if(click_count === 1){
      result = operate(num1,previous_operator,result);
    }else if(click_count > 1){
      result = operate(result,previous_operator,num1);
    }
  previous_operator = operator;
    click_count++;
  });
});

const evaluate = document.querySelector('#evaluate');
evaluate.addEventListener('click', () => {
  
  

  if(click_count === 1){
    result = parseFloat(str);
    result = operate(num1,operator,result);
  }else if(click_count > 1){
    num1 = parseFloat(str);
    result = operate(result,operator,num1);
  }
  display(result);

str = '';
operator = '';
num1 = 0;
result = 0;
click_count = 0;
});