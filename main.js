'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

const kalkulator = new Calculator(5)
//let hitung = kalkulator.add(5).multiply(5).divide(10).square(2)

let hitungLuas = kalkulator.luasLingkaran(6)
console.log(hitungLuas)