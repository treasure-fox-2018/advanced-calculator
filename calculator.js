'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._value = 0
  }

  get value() { return this._value }

  add (amount) {
    this._value += amount
    return this
  }
  subtract (amount) {
    this._value -= amount
    return this
  }
  multiply (amount) {
    this._value *= amount
    return this
  }
  divide (amount) {
    if (amount === 0) {
      throw Error('Cannot divide by 0');
    }
    this._value /= amount
    return this
  }
  square () {
    let val = Math.pow(this._value, 2)
    this._value = val
    return this
  }
  power (amount) {
    let val = Math.pow(this._value, amount)
    this._value = val
    return this
  }
  squareRoot () {
    let val = Math.sqrt(this._value)
    this._value = val
    return this
  }
  pi() {
    this._value *= 3.14
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
