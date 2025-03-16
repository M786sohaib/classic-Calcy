// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

function add(...arr) {
  return arr.flat().reduce((sum, num) => sum + num, 0);
}

function subtract(...arr) {
  return arr.flat().reduce((sum, num) => sum - num);
}
function multiply(...arr) {
  return arr.flat().reduce((sum, num) => sum * num, 1);
}

function divide(...arr) {
  return arr.flat().reduce((sum, num) => sum / num);
}

function percentage(num) {
  return num / 100;
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

let input;
const output = document.querySelector(".screen > p");

const buttons = document.querySelector(".top-buttons");

let isFirstClick = true;

buttons.addEventListener("click", (event) => {
  const button = event.target;

  if (button.tagName.toLowerCase() !== "button") return;

  if (button.value === "all-clear") {
    output.textContent = "0";
    return (isFirstClick = true);
  }

  if (button.value === "clear") {
    output.textContent = output.textContent.slice(0, -1) || "0";
    if (output.textContent === "0") {
      isFirstClick = true;
    }
  } else if (["+", "-", "%", "*", "/"].includes(button.value)) {
    if (output.textContent === "0") return;
    else if (/\d$/.test(output.textContent)) {
      output.textContent += button.textContent;
    }
  } else if (button.value === "=") {
    let expression = output.textContent.split("").join(",");
    let result = compute(expression);
    output.textContent = "";
    console.log(result);
  } else {
    if (isFirstClick) {
      output.textContent = "";
      isFirstClick = false;
    }
    output.textContent += button.textContent;
  }
});

function compute(value) {
  let expression = value.replace(/x/g, "*").replace(/÷/g, "/");

  let formattedExpression = expression.split(",");
  console.log(formattedExpression);
  let sum = 0;
  if (formattedExpression.includes("+")) {
    let para = [...formattedExpression];
    para.splice(1, 1);
    let numericPara = para.map((item) => +item);
    console.log(numericPara);
    sum += add(numericPara);
  } else if (formattedExpression.includes("-")) {
    let para = [...formattedExpression];
    para.splice(1, 1);
    let numericPara = para.map((item) => +item);
    console.log(numericPara);
    sum += subtract(numericPara);
  } else if (formattedExpression.includes("*")) {
    let para = [...formattedExpression];
    para.splice(1, 1);
    let numericPara = para.map((item) => +item);
    console.log(numericPara);
    sum += multiply(numericPara);
  } else if (formattedExpression.includes("/")) {
    let para = [...formattedExpression];
    para.splice(1, 1);
    let numericPara = para.map((item) => +item);
    console.log(numericPara);
    sum += divide(numericPara);
  } else if (formattedExpression.includes("%")) {
    let para = [...formattedExpression];
    para.splice(1, 1);
    let numericPara = para.map((item) => +item);
    console.log(numericPara);
    sum += percentage(numericPara);
  }

  return sum;
}

// const buttonsBody = document.querySelector(".body");

// function generateButtons() {
//   for (let i = 0; i < 20; i++) {
//     let button = document.createElement("button");
//     buttonsBody.appendChild(button);
//   }
// }
// generateButtons();
