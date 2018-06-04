'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

const calculator = new Calculator (3)
calculator.subtract(6)
            .add(8)
            .multiply(2)
            .divide(5)
            .square(3)
            .squareRoot(2)
console.log(calculator.number)