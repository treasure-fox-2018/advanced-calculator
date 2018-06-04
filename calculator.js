'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number || 0
  }
  add (num) {
    this.number += num
    return this
  }
  subtract (num) {
    this.number -= num
    return this
  }
  multiply (num) {
    this.number *= num
    return this
  }
  divide (num) {
    this.number /= num
    return this
  }
  square (num) {
    this.number = Math.pow(this.number,num)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  pi () {
    this.number *= 3,14
    return this
  }
}



var Cal = new Calculator(9)

// Cal.add(4)
// console.log(Cal.squareRoot());

console.log(Cal.add(4).multiply(2).subtract(30).divide(4).square(4).pi().squareRoot());



/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
