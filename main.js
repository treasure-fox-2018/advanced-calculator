'use strict'

const Calculator = require("./calculator.js")

var calc = new Calculator(10)

console.log(calc.add(5).minus(10).times(2).pow(4).root().constPI())