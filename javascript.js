// variables
const currentDisplayInput  = document.querySelector("#currentInput");
const previousDisplayInput = document.querySelector("#previousInput");

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

}
