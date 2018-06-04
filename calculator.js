'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.result = number
    
  }
  add (number2) {
    this.result = this.result + number2
    return this
  }
  subtract (number2) {
    this.result = this.result - number2
    return this
  }
  multiply (number2) {
    this.result = this.result*number2
    return this
  }
  divide (number2) {
    this.result = this.result/number2
     return this
  }
  square (number2) {
    this.result = Math.pow(this.result, number2)
    return this
  }
  squareRoot () {
    this.result= Math.sqrt(this.result)
    return this
  }
  circleArea(){
    this.number = Math.PI + (Math.pow(value, 2))
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
