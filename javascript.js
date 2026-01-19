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
        console.log(add(num1, num2));

    } else if (operator === "-") {
        console.log(subtract(num1, num2));

    } else if (operator === "*") {
        console.log(multiply(num1, num2));

    } else {
        console.log(divide(num1, num2));

    }


}function buttonPress() {
    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            
            // for number buttons
            if (numList.includes(button.textContent)) {
                temp += button.textContent;
                currentDisplayInput.textContent += button.textContent;
                //debugging
                console.log(temp);

            } else if (opList.includes(button.textContent)) {
                operator = button.textContent;
                currentDisplayInput.textContent += ` ${operator} `;
                //wipes temp variable for second number input
                num1 = temp;
                temp = "";
                //debugging
                console.log(operator);

            } else if (button.textContent === "AC") {

                // clears all inputs and variables
                num1        = "";
                num2        = "";
                operator    = "";
                temp        = "";
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
