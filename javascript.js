/* 
For the purpose of keep track of where the calculations are at, I have established a step process:
step 0 - No number has been stored to num1 or operator stored in operator variable
step 1 - num 1 and operator variables now have stored values
step 2 - at least a single digit of another number has been entered after hitting the operator
*/

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


function roundMaxDecimals(value, decimals = 6) {
    // rounds the number and then adds the proper amount of decimals up to 6 to not overload display.
    const factor = 10 ** decimals;
    return Math.round((value + Number.EPSILON) * factor) / factor;
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

            // Choosing and operator
            } else if (opList.includes(button.textContent)) {

                if (step === "step 0") {
                    operator = button.textContent;
                    step = "step 1";
                    currentDisplayInput.textContent += ` ${operator} `;

                    //wipes temp variable for second number input
                    num1 = parseFloat(temp);
                    temp = "";

                } else if (step === "step 1") {
                    // replace current operator
                    operator = button.textContent;
                    // update the display
                    currentDisplayInput.textContent = `${num1} ${operator} `;

                } else if (step === "step 2") {  
                    // evaluates current pair and continues with picked operator
                    num2 = parseFloat(temp);
                    temp = "";
                    previousDisplayInput.textContent = currentDisplayInput.textContent;
                    temp = operate(operator, num1, num2);
                    currentDisplayInput.textContent = `${roundMaxDecimals(temp, 6)} ${operator} `;

                    // set up step 1 again
                    num1 = temp;
                    num2 = "";
                    temp = "";
                    operator = button.textContent;
                    step = "step 1";


                    // check to see if solution is a number divided by zero
                    if (temp === Infinity) {
                        currentDisplayInput.textContent = "Don't do that.";
                        previousDisplayInput.textContent = "You know what you did :(";

                    } 
                }

            // Evalulte the expression
            } else if (button.textContent === "=") {

                if (step === "step 0") {  // nothing entered yet
                    // pass

                } else if (step === "step 1") {  // num 1 and operator are filled, but no second number entered
                    // pass

                } else {
                    // evaluates current pair and continues with picked operator
                    num2 = parseFloat(temp);
                    temp = "";
                    previousDisplayInput.textContent = currentDisplayInput.textContent;
                    temp = operate(operator, num1, num2);
                    currentDisplayInput.textContent = `${roundMaxDecimals(temp, 6)}`;

                    // set up step 1 again
                    num1 = temp;
                    num2 = "";
                    temp = "";
                    operator = button.textContent;
                    step = "step 1";


                    // check to see if solution is a number divided by zero
                    if (temp === Infinity) {
                        currentDisplayInput.textContent = "Don't do that.";
                        previousDisplayInput.textContent = "You know what you did :("; 
                    }
                }


            // All Clear Button
            } else if (button.textContent === "AC") {
                num1        = "";
                num2        = "";
                operator    = "";
                temp        = "";
                solution    = "";
                step        = "step 0"
                currentDisplayInput.textContent  = "";
                previousDisplayInput.textContent = "";


            // Decimal Button
            } else if (button.textContent === ".") {
                
                if (step === "step 0") {
                    // If no digit has been entered at all
                    if (temp === "") {
                        temp = "0.";
                        currentDisplayInput.textContent = temp;
                    }

                }

            }
        })
    }
}


function main() {
    buttonPress();
}

main();
