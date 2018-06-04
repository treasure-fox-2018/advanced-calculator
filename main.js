'use strict'

const Calculator = require("./calculator.js")

let getCalc = new Calculator

console.log(getCalc
  .add(2)
  .multiply(23)
  .subtract(2)
  .divide(2)
  .squareRoot()
  .power(3)
  .display());
//Expected output -> 27
