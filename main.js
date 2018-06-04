'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

var calculator = new Calculator(100, 2);

calculator.add().square().divide().squareRoot().multiply().subtract();
