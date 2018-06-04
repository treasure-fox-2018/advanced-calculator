'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num
  }

  add () {
    return this.num += this.num
  }
  subtract () {
    return this.num -= this.num
  }
  multiply () {
    return this.num *= this.num
  }
  divide () {
    return this.num /= this.num
  }
  square (input) { // pangkat sesuai sebanyak, jadi kalinya sesuai sbnyak input
    var result = Math.pow(this.num, input)
    return result
  }
  squareRoot () {
    return this.num = Math.sqrt(this.num)
  }
  luasLingkaran(){
    this.pi = 3.14
    var result = this.pi*(Math.pow(this.num, 2)) //
    return result
  }
  kelilingLingkaran(){
    this.pi = 3.14
    var result = 2*this.pi*this.num
    return result
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
