'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number;
  }

  add (num) {
    this.number += num;
    return this;
  }

  subtract (num) {
    this.number -= num;
    return this;
  }

  multiply (num) {
    this.number *= num;
    return this;
  }

  divide (firstNumber,secondNumber) {
    this.number /= num;
    return this;
  }

  square (pangkat) {
    this.number = Math.pow(this.number,pangkat);
    return this;
  }

  squareRoot () {
    this.number = Math.sqrt(this.number);
    return this;
  }

  circle(){
    // KLL lingkaran, inputan DIAMETER
    this.number *= Math.PI;
    return this;
  }
}
var hitung = new Calculator(2);

console.log(hitung.add(4).multiply(2).subtract(3).number);
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
