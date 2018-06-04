'use strict'

class Calculator {
  //write your code here
  constructor (number1) {
    this.hasil = number1;
  }
  add (number2) {
    this.hasil = this.hasil + number2; 
    return this
  }
  subtract (number2) {
    this.hasil = this.hasil - number2; 
    return this
  }
  multiply (number2) {
    this.hasil = this.hasil * number2; 
    return this

  }
  divide (number2) {
    this.hasil = this.hasil / number2; 
    return this
  }
  square (number2) {
    this.hasil = Math.pow(this.hasil,number2); 
    return this
  }
  squareRoot () {
    this.hasil = Math.sqrt(this.hasil); 
    return this
  }

  root (number2) {
    this.hasil = Math.pow(this.hasil, 1/number2);
    return this
  }

  circleCircumference() {
    this.hasil = 2 * Math.PI * this.hasil;
    return this
  }
  areaCircle() {
    this.hasil = Math.PI * Math.pow(this.hasil,2);
    return this
  }
}

var result = new Calculator (7);

// console.log(result.add(2).subtract(5).multiply(4).divide(2).square(3).squareRoot().root(2).circleCircumference().areaCircle().hasil);
console.log(result.areaCircle())
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
