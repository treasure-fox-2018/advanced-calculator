'use strict'

class Calculator {
  //write your code here
  constructor (firstNumber) {
    this.result = firstNumber;
    this.phi = 3.14;
  }
  add (number) {
    this.result += number;
    return this;
  }
  subtract (number) {
    this.result -= number;
    return this;
  }
  multiply (number) {
    this.result *= number;
    return this;
  }
  divide (number) {
    this.result /= number;
    return this;
  }
  square (number) {
    this.result = Math.pow(this.result,number);
    return this;
  }
  squareRoot (number) {
    this.result = Math.pow(this.result,1/number);
    return this;
  }
  circleArea() {
    this.result = this.phi*this.result*this.result;
    return this;
  }
}

//run the code in main.js

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
