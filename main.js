'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here


let calculate = new Calculator(1)
console.log(calculate.add(4).multiply(3).subtract(5).num)
