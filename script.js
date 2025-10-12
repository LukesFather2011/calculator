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
let total = 0;


function operate(operator, num1, num2) {
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
    num1 = 0;
    num2 = 0;
    operator = "";
    total = 0;
}


function inputUserCalculation() {
    const numbersList    = "1234567890";  // Used for determining if a number key is pressed.
    const operationList  = "+-X%";        // Used for determining if operator key is pressed.

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
                num1 = Number(display.innerHTML);
                operator = button.innerHTML;
                display.innerHTML += button.innerHTML;

            } else if (button.innerHTML = "=") {
                // Perform the calculation
                 let startIndexForNum2String = display.innerHTML.indexOf(operator) + 1; // Ensures num1 and operator don't show in string
                 num2 = Number(display.innerHTML.slice(startIndexForNum2String)); 

                 //calculation is stored
                 operate(operator, num1, num2);

                 // calculation is displayed
                 display.innerHTML = String(total);

            }
        });
    });
};


inputUserCalculation();
