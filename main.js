'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let newCalc = new Calculator();

console.log(newCalc.subtract(10).add(15).pi().power(3).value) 