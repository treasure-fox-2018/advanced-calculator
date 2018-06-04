'use strict'

class Calculator {
  //write your code here
  constructor (num1) {
    this.num1 = num1
  }
  add (num2) {
    this.num1 = this.num1 + num2
    return this
  }
  subtract (num2) {
    this.num1 = this.num1 - num2
    return this
  }
  multiply (num2) {
    this.num1 = this.num1 * num2
    return this
  }
  divide (num2) {
    this.num1 = this.num1 / num2
    return this
  }
  square (num2) {
    this.num1 = Math.pow(this.num1, num2)
    return this
  }
  squareRoot (num2) {
    this.num1 = Math.pow(this.num1, (1/num2))
    return this
  }
}
const pi = 22/7

var r = new Calculator (7)
let luasLingkaran = r.square(2).multiply(pi).num1
console.log(luasLingkaran)

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
