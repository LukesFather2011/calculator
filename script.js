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
let firstNumber  = NaN;
let secondNumber = NaN;
let operator     = "";
let total        = NaN;


function operate(operator, num1, num2) {
    // all the operations of the calculator, updates total variable
    switch (operator) {
        case "+":
            total = add(num1, num2);
            break;

        case "-":
            total = subtract(num1, num2);
            break;

        case "*":
            total = multiply(num1, num2);
            break;

        case "/":
            total = divide(num1, num2);
            break;
    }
};


function clearCalculator() {
    // Clears the display and variables used for calculations
    display.innerHTML = "";
    num1 = NaN;
    num2 = NaN;
    operator = "";
    total = NaN;
}


function getOperator(displayContent, buttonPressed) {
    num1 = Number(displayContent);
    operator = buttonPressed;
    return operator;
}


function performCalculation() {
    // Ensures num1 and operator don't show in string so number can be extrated for num2
    let startIndexForNum2String = display.innerHTML.indexOf(operator) + 1; 
    num2 = Number(display.innerHTML.slice(startIndexForNum2String)); 

    //calculation is stored
    operate(operator, num1, num2);

    // calculation is displayed
    display.innerHTML = String(total);
}


function Main() {
    const numbersList    = "1234567890.";  // Used for determining if a number key is pressed.
    const operationList  = "+-*/";        // Used for determining if operator key is pressed.

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Clear the display and variables
            if (button.innerHTML === "AC") {
                clearCalculator();

            // Show numbers on display and store in variables
            } else if (numbersList.includes(button.innerHTML)) {
                display.innerHTML += button.innerHTML;

            // Get the operator and show on display
            } else if (operationList.includes(button.innerHTML)) {
                operator = getOperator(display.innerHTML, button.innerHTML);
                display.innerHTML += " " + operator + " ";

            // Perform the calculation
            } else if (button.innerHTML = "=") {
                performCalculation();
                 
            }
        });
    });
};


Main();
