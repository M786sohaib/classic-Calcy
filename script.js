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
