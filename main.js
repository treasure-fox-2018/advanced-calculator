'use strict'

const Calculator = require("./calculator.js")

var counting = new Calculator(4)

console.log(counting.add(4).subtract(5).result)