'use strict'

class Calculator {
  //write your code here
  constructor (num1, num2) {
    this.num1 = num1,
    this.num2 = num2
  }
  add () {
    return this.num1 + this.num2
  }
  subtract () {
    return this.num1 - this.num2
  }
  multiply () {
    return this.num1 * this.num2
  }
  divide () {
    return this.num1 / this.num2
  }
  square () {
    return Math.pow(this.num1, this.num2)
  }
  squareRoot () {
    return Math.sqrt(this.num1)
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
