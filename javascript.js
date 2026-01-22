// variables
const currentDisplayInput  = document.querySelector("#currentInput");
const previousDisplayInput = document.querySelector("#previousInput");
const clearButton          = document.querySelector("#acButton");
const buttons              = document.querySelectorAll(".btn");
const numList   = "1234567890";
const opList    = "+-*/"

let num1        = "";
let num2        = "";
let temp        = "";
let operator    = "";
let solution    = "";
// Keep track of steps in calculation (null, step 1, step 2)
let step        = "step 0";


// calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(operator, num1, num2) {
    // calls one of the above calculator functions to calculate the result. 
    if (operator === "+") {
        return add(num1, num2);

    } else if (operator === "-") {
        return subtract(num1, num2);

    } else if (operator === "*") {
        return multiply(num1, num2);

    } else {
        return divide(num1, num2);

    }
}


function buttonPress() {
    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            
            // for number buttons
            if (numList.includes(button.textContent)) {
                // ensures when "=" is pressed before a second number is entered, nothing happens.
                if (step === "step 1") {
                    step = "step 2";
                }
                temp += button.textContent;
                currentDisplayInput.textContent += button.textContent;

            } else if (opList.includes(button.textContent)) {
                operator = button.textContent;
                step = "step 1";
                currentDisplayInput.textContent += ` ${operator} `;

                //wipes temp variable for second number input
                num1 = parseInt(temp);
                temp = "";

            } else if (button.textContent === "=") {
                if (step === "step 0") {
                    // pass

                } else if (step === "step 1") {
                    // pass

                } else {
                    num2 = parseInt(temp);
                    temp = "";
                    previousDisplayInput.textContent = currentDisplayInput.textContent;
                    
                    solution = operate(operator, num1, num2);
                    // to keep the calculations going. 
                    temp = solution; 
                    //round decimal to 6 places, but keep actual value stored in temp for more precise calculations. 
                    currentDisplayInput.textContent = solution.toFixed(6); 

                }
                

            } else if (button.textContent === "AC") {

                // clears all inputs and variables
                num1        = "";
                num2        = "";
                operator    = "";
                temp        = "";
                step        = "step 0"
                currentDisplayInput.textContent  = "";
                previousDisplayInput.textContent = "";
            }
        })
    }
}


function main() {
    buttonPress();
}

main();
