'use strict'

class Calculator {
  //write your code here
  constructor (input1) {
    this.input1 = input1;
    this.pi = 3.14;
  }
  add (input2) {
    console.log(`${this.input1} + ${input2}:`);
    console.log(this.input1 += input2);
    return this;
  }
  subtract (input2) {
    console.log(`${this.input1} - ${input2}:`);
    console.log(this.input1 -= input2);
    return this;
  }
  multiply (input2) {
    console.log(`${this.input1} - ${input2}:`);
    console.log(this.input1 *= input2);
    return this;
  }
  divide (input2) {
    console.log(`${this.input1} / ${input2}:`);
    console.log(this.input1 /= input2);
    return this;
  }
  square (input2) {
    console.log(`${this.input1} ^ ${input2}:`);
    console.log(Math.pow(this.input1, input2));
    return this;
  }
  squareRoot (input2) {
    console.log(`${input2} √ ${this.input1}:`);
    console.log(Math.sqrt(this.input1, input2));
    return this;
  }
  circleArea(){
    console.log(`${this.input1} * ${this.input1} * ${this.pi}:`);
    console.log(this.input1 *= this.input1 *= this.pi);
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
