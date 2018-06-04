'use strict'

class Calculator {
  //write your code here
  constructor (input) {
    this.num = input
  }

  add (tambah) {
    console.log(this.num += tambah)
    return this
  }

  subtract (kurang) {
    console.log(this.num -= kurang)
    return this
  }

  multiply (kali) {
    console.log(this.num *= kali)
    return this
  }

  divide (bagi) {
    console.log(this.num /= bagi)
    return this
  }

  square (pangkat) {
    console.log(Math.pow(this.num, pangkat))
    return this
  }

  squareRoot (akar) {
    console.log(Math.sqrt(akar))
    return this
  }

  luasLingkaran(r) {
    console.log(Math.round(Math.PI * r * r))
    return this
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
