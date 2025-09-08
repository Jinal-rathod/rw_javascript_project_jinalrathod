// Basic Calculator

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Cannot divide by zero!";
    }
} else {
    result = "Invalid operator!";
}

alert("Result: " + result);
