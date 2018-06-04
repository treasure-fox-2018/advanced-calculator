'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calculator = new Calculator(0);

console.log(calculator.add(4).subtract(2).multiply(2).divide(2).square(2).squareRoot(2).circleArea().result);
// result = 12.56