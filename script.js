const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#display");


// Basic Functions or Calculation
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};


// for the calculator display in html
let firstNumber  = 0;
let secondNumber = 0;
let operator     = "";


function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;

        case "-":
            subtract(num1, num2);
            break;

        case "*":
            multiply(num1, num2);
            break;

        case "/":
            divide(num1, num2);
            break;
    }
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(`You pressed the ${button.innerHTML} button.`);
  });
});
