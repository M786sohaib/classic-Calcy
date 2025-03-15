// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

function add(...arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function subtract(...arr) {
  return arr.reduce((sum, num) => sum - num);
}
function multiply(...arr) {
  return arr.reduce((sum, num) => sum * num, 1);
}

function divide(...arr) {
  return arr.reduce((sum, num) => sum / num);
}

function factorial(...nums) {
  return nums.map((num) => {
    if (num < 0 || !Number.isInteger(num)) {
      return `Invalid input ${num}`;
    }

    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  });
}

let operand1 = 0;
let operand2 = 0;
let operator = "";

function operate(num1, oper, num2) {
  if (oper === "+") {
    return add(num1, num2);
  } else if (oper === "-") {
    return subtract(num1, num2);
  } else if (oper === "*") {
    return multiply(num1, num2);
  } else if (oper === "/") {
    return divide(num1, num2);
  }
}

// const buttonsBody = document.querySelector(".body");

// function generateButtons() {
//   for (let i = 0; i < 20; i++) {
//     let button = document.createElement("button");
//     buttonsBody.appendChild(button);
//   }
// }
// generateButtons();
