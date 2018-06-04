'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num

  }
  add (num1) {
   this.num = this.num + num1
   return this
  }

  subtract (num1) {
    this.num = this.num - num1
    return this
  }

  multiply (num1) {
    this.num = this.num * num1
    return this
  }

  divide (num1) {
    this.num = this.num / num1
    return this
  }

  square (num1) {
    this.num = Math.pow(this.num, num1)
    return this
  }

  squareRoot (num1) {
    this.num = Math.sqrt(this.num, (1/num1))
    return this
  }
}


var z = new Calculator(27)
 let count = z.squareRoot(3).num
console.log(count)
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
