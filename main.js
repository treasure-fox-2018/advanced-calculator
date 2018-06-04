'use strict'
const Calculator = require("./calculator.js")
let hitung = new Calculator()
let result = hitung.add(10).add(4).subtract(3).multiply(100).value()
console.log(result)

// execute function on calculator.js in here
