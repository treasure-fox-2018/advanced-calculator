'use strict'

class Calculator {
  //write your code here
  constructor (initInt) {
    this.value = initInt;
    this.pi = Math.PI;
  }
  add (addInt) {
    this.value = this.value + addInt
    return this;
  }
  subtract (subsInt) {
    this.value = this.value - subsInt
    return this;
  }
  multiply (multiplier) {
    this.value = this.value * multiplier
    return this;
  }
  divide (divider) {
    this.value = this.value / divider
    return this;
  }
  square (power) {
    this.value = Math.pow(this.value, power)
    return this;
  }
  squareRoot (root) {
    this.value = Math.pow(this.value, (1/root))
    return this;
  }
  circleCircumference () {
    this.value = 2 * this.pi * this.value
    return this;
  }
  circleArea () {
    this.value = this.pi * this.value * this.value
    return this;
  }
}

var calculation = new Calculator(4);

console.log(calculation.add(4).circleArea(2).value);

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
