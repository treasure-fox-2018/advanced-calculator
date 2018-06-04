'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
    this.phi = 3.14
    return this
  }

  add (num) {
    this.number = this.number + num
    return this
  }

  subtract (num) {
    this.number = this.number - num
    return this
  }

  multiply (num) {
    this.number = this.number * num
    return this
  }

  divide (num) {
    this.number = this.number / num
    return this
  }

  square (pow) {
    this.number = Math.pow(this.number, pow)
    return this
  }

  squareRoot (num) {
    this.number = Math.sqrt(this.number)
    return this
  }

  diameterCircle(num) {
    this.number = 2 * this.phi * this.number 
    return this
  }

}

var calculator = new Calculator(4)
var output = calculator.squareRoot().number
console.log(output)

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
