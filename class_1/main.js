function calculate(num1, num2, func) {
  return func(num1, num2);
}

function sum(a, b) {
  return a + b;
}
function diff(a, b) {
  return a - b;
}

console.log(calculate(5, 3, diff));
