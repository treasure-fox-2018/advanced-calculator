'use strict'

class Calculator {
  constructor() {
    this.total = 0;
    this.phi = 3.14
  }
  add(num) {
    this.total += num
    return this
  }
  subtract(num) {
    this.total -= num
    return this
  }
  multiply(num) {
    this.total *= num
    return this
  }
  divide(num) {
    this.total /= num
    return this
  }
  square(num) {
    this.total = num * num
    return this
  }
  squareRoot(num) {
    this.total = Math.sqrt(this.total)
    return this
  }

  power(num) {
    this.total = Math.pow(this.total, num)
    return this
  }

  circle(r) {
    this.total = this.phi * (r * r)
    return this
  }

  value() {
    return this.total
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
