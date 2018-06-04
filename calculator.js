'use strict'

class Calculator {
  //write your code here
  constructor (num) { // kaya buat nyimpen inputan
    this.num = num
  }
  add (num) {
    this.num = this.num + num
    return this
  }
  subtract (num) {
    this.num = this.num - num
    return this 
  }
  multiply (num) {
    this.num = this.num * num
    return this
  }
  divide (num) {
    this.num = this.num / num
    return this
  }
  square (num) {
    this.num = Math.pow(this.num,num)
    return this
  }
  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  }
  hitung_lingkaran(){ // keliling lingkaran
    this.num = Math.PI * this.num;
    return this;
  }
}

var calculate = new Calculator(2);
console.log(calculate.add(5).add(5).subtract(4).divide(4).hitung_lingkaran().num); 

// hasil = ((2+2+5+4)/4) ---> pi * hasil = 6.28

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator

