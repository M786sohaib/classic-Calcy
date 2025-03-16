// functions for calculations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Can't Divide By 0");
const percentage = (a) => a / 100;

// Variables to store calculation values

let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = 0;

const display = document.querySelector(".screen > p");

display.textContent = "0";

const allOperands = document.querySelectorAll(".num");
const allOperators = document.querySelectorAll(".operator");

// Event Listeners for button clicks

allOperands.forEach((button) => {
  button.addEventListener("click", (event) => {
    let button = event.target.textContent;
    console.log(event.target.textContent);
    if (display.textContent === "0") {
      display.textContent = "";
    }
    display.textContent += button;
  });
});

allOperators.forEach((button) => {
  button.addEventListener("click", (event) => {
    let button = event.target.id;
    let buttonContent = event.target.textContent;
    console.log(event.target.textContent);

    switch (button) {
      case "all-clear":
        display.textContent = "";
        display.textContent = "0";
        break;
      case "clear":
        display.textContent = display.textContent.slice(0, -1) || "0";
        break;
      case "compute":
        if (
          display.textContent === "0" || //return if only 0 in expression.
          !display.textContent || //return if no value in expression.
          !/[+\-x%÷]/.test(display.textContent) //return if no operator present.
        ) {
          return;
        }
        operate();
        break;
      default:
        if (/\d$/.test(display.textContent)) {
          if (/[+\-x%÷]/.test(display.textContent)) {
            operate();
          } // if an operator already exist then run calculation first.
          display.textContent += buttonContent; //if a number preceeds then add operator to screen.
        }
    }
  });
});

operate(num1, oper, num2){
  switch(oper){
    case "+":

     result += add(num1,num2);
     break;

     case "-":
      result += subtract(num1, num2);
      break;

      case"x":
      result += multiply(num1, num2);
      break;

      case "÷":
        result += divide(num1, num2);
        break;
        
        case "%":
          result += percentage(num1);
          break;
  }
}
