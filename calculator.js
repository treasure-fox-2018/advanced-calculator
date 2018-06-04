'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
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
    this.number *=num
    return this
  }

  divide (num) {
    this.number = this.number/num
    return this
  }

  square (num) {
    let power=1
    for(let a=0; a<num; a++) {
      power=power*this.number
    }
    this.number=power
    return this
  }

  squareRoot () {
    this.number=Math.sqrt(this.number)
    return this
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
