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
