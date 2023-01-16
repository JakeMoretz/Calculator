let currentNum = '';
let previousNum = '';
let operator = '';

const currentDisplayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');


const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  if (currentNum != '' && previousNum!= '') {
    operate();
  }
});

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
  addDecimal();
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearCalculator);

const numberButtons = document.querySelectorAll('.number');

const operators = document.querySelectorAll('.operator');

numberButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number) {
  if (previousNum !== '' && currentNum !== '' && operator === '') {
    previousNum = '';
    currentDisplayNumber.textContent = currentNum;
  }
  if (currentNum.length <= 10) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
  }
}

operators.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleOperator(op) {
  if (previousNum === '') {
    previousNum = currentNum;
    operatorCheck(op);
  } else if (currentNum === '') {
    operatorCheck(op);
  } else {
    operate();
    operator = op;
    currentDisplayNumber.textContent = '0';
    previousDisplayNumber.textContent = previous + ' ' + operator;
  }
}

function operatorCheck(text) {
  operator = text;
  previousDisplayNumber.textContent = previousNum + ' ' + operator;
  currentDisplayNumber.textContent = '0';
  currentNum = '';
}

function operate() {
  previousNum = Number(previousNum);
  currentNum= Number(currentNum);

  if (operator === '+') {
    previousNum += currentNum;
  } else if (operator === '-') {
    previousNum -= currentNum;
  } else if (operator === 'x') {
    previousNum*= currentNum;
  } else if (operator === '/') {
    if (currentNum <= 0) {
      previousNum = "Try Again";
      displayResults();
      return;
    }             
    previousNum /= currentNum;
  }
  previousNum = roundNumber(previousNum);
  previousNum = previousNum.toString();
  displayResults();
}

function roundNumber(num) {
  return Math.round(num * 100000) / 100000;
}

function displayResults() {
  if (previousNum.length <= 10) {
    currentDisplayNumber.textContent = previousNum;
  } else {
    currentDisplayNumber.textContent = previousNum.slice(0, 10) + '...';
  }
  previousDisplayNumber.textContent = '';
  operator = '';
  currentNum = '';
}

function clearCalculator() {
  currentNum = '';
  previousNum = '';
  operator = '';
  currentDisplayNumber.textContent = '0';
  previousDisplayNumber.textContent = '';
}

function addDecimal() {
  if (!currentNum.includes('.')) {
    currentNum += '.';
    currentDisplayNumber.textContent = currentNum;
  }
}


operate();
