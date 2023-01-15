
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
let output = document.querySelector('.output');


const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => b === 0 ? 'Cannot divide with zero' : a / b;


function operate(num1, num2, operator) {
    switch (operator) {
      case "add":
        return add(num1, num2);
      case "subtract":
        return subtract(num1, num2);
      case "multiply":
        return multiply(num1, num2);
      case "divide":
        return divide(num1, num2);
    }
  };




