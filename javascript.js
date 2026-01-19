// variables
const currentDisplayInput  = document.querySelector("#currentInput");
const previousDisplayInput = document.querySelector("#previousInput");
const clearButton          = document.querySelector("#acButton");
const buttons              = document.querySelectorAll(".btn");

const numList = "1234567890";
let num1 = "";
let num2 = "";
let temp = "";

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


// working through the function to get the numbers to populate in the variables and on display
// see below, differentiated num and not num keys. Use below as a reference. 

// }function buttonPress() {
//     for (const button of buttons) {
//         button.addEventListener("click", (e) => {
//             console.log(`The ${button.textContent} button ${
//                 numList.includes(button.textContent) ? "contains" : "does not contain"
//             } a number.`
//             )
//         })
//     }
// }


}function buttonPress() {
    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            if (numList.includes(button.textContent)) {
                num1 += button.textContent;
                console.log(num1);

                currentDisplayInput.textContent = num1;
            }
        })
    }
}


function main() {
    buttonPress();
}

main();
