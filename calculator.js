'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num;
  }

  add (num) {
    console.log(this.num += num);
    return this;
  }

  subtract (num) {
    console.log(this.num -= num);
    return this;
  }

  multiply (num) {
    console.log(this.num *= num);
    return this;
  }

  divide (num) {
    console.log(this.num /= num);
    return this;
  }

  square (num) {
    console.log(Math.pow(this.num, num));
    return this; 
  
  }

  squareRoot () {
    console.log(this.num = Math.sqrt(this.num));
    return this;
  }

  piCalculator () {
    console.log(this.pi = Math.PI);
    return this;

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
