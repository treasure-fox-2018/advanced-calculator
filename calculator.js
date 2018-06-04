'use strict'


class Calculator {
  //write your code here

  constructor (num) {
    this.Number = num;
    // this.num2 = num2;
    // this.hasil = hasil; 
  }

  add(num2) {
    this.Number = this.Number + num2
    return this
  }
  subtract (num2) {
    this.Number = this.Number - num2
    return this
  }    
  multiply (num2) {
    this.Number = this.Number * num2
    return this
  }
  divide (num2) {
    this.Number = this.Number/num2
    return this
  }
  square (num2) {
    this.Number = Math.pow(this.Number,num2)
    return this
  }
  squareRoot () {
    let hasil = sqrt(this.Number)
  }
}

// const calc = new Calculator(0);
// const data = Object.keys(calc);


// calc.add(2).add(2).square(2)
// console.log(data

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
