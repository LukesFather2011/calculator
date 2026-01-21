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
                temp += button.textContent;
                currentDisplayInput.textContent += button.textContent;
                //debugging
                console.log(temp);
                //debug end

            } else if (opList.includes(button.textContent)) {
                operator = button.textContent;
                //debugging
                console.log(`The operator variable holds ${operator}, and it is type ${typeof(operator)}`)
                //debug end
                currentDisplayInput.textContent += ` ${operator} `;
                //wipes temp variable for second number input
                num1 = parseInt(temp);
                temp = "";
                //debugging
                console.log(`num1 is holding the number ${num1} and it is of type ${typeof(num1)}`)
                //debug end

            } else if (button.textContent === "=") {
                num2 = parseInt(temp);
                temp = "";
                previousDisplayInput.textContent = currentDisplayInput;
                //debugging
                console.log(`num2 is holding the number ${num2} and it is of type ${typeof(num2)}`)
                //debug end
                solution = operate(operator, num1, num2);
                console.log(`The value of solution is ${solution} and it's type: ${typeof(solution)}`);

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
