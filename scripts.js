// functions for calculations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Can't Divide By 0");
const percentage = (a) => a / 100;

//function to calculate the expressions

const operate = function (val1, oper, val2 = "") {
  let num1 = +val1;
  let num2 = +val2;

  switch (oper) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "x":
      result = multiply(num1, num2);
      break;
    case "%":
      result = percentage(num1);
      break;
    case "÷":
      result = divide(num1, num2);
  }
  console.log(result);
};

// Variables to store calculation values

let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = 0;

const display = document.querySelector(".screen > p");
display.textContent = "0";

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonContent = button.textContent;
    console.log(buttonContent);

    const buttonValue = button.value;
    console.log(buttonValue);

    switch (buttonValue) {
      case "num":
        if (display.textContent === "0") {
          display.textContent = buttonContent;
          firstOperand = buttonContent; // Use assignment (=) instead of +=
        } else if (!operator) {
          display.textContent += buttonContent;
          firstOperand += buttonContent;
        } else {
          display.textContent += buttonContent;
          secondOperand += buttonContent;
        }
        break;

      case "operator":
        if (!operator) {
          operator = buttonContent;
          if (operator === "%") {
            operate(firstOperand, operator);
            firstOperand = result;
            display.textContent = result;
            operator = "";
          }
          display.textContent += buttonContent;
        } else if (secondOperand) {
          operate(firstOperand, operator, secondOperand);
          firstOperand = result;
          secondOperand = ""; // Reset for the next input
          display.textContent = result;
          operator = ""; // Update operator for the next operation
        }

        break;

      case "all-clear":
        display.textContent = "";
        display.textContent = "0";
        firstOperand = "";
        secondOperand = "";
        operator = "";
        result = "";
        break;

      case "clear":
        if (secondOperand) {
          secondOperand = secondOperand.slice(0, -1);
        } else if (operator) {
          operator = "";
        } else if (firstOperand) {
          firstOperand = firstOperand.slice(0, -1);
        }
        display.textContent = display.textContent.slice(0, -1);

        if (!firstOperand && !secondOperand && !operator) {
          display.textContent = "0";
        }

        console.log(firstOperand);
        console.log(operator);
        console.log(secondOperand);
        break;

      case "compute":
        operate(firstOperand, operator, secondOperand);
        secondOperand = "";
        operator = "";
        firstOperand = result;
        display.textContent = result;
    }
  });
});
