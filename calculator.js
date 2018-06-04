'use strict'

class Calculator {
  //write your code here
  constructor (hasil) {
    this.hasil = hasil
  }
  add (num) {
    console.log(this.hasil += num)
    return this
  }
  subtract (num) {
    console.log(this.hasil -= num)
    return this
  }
  multiply (num) {
    console.log(this.hasil *= num);
    return this
  }
  divide () {
    console.log(this.hasil /= num);
    return this
  }
  square (num) {
    console.log(Math.pow(this.hasil,num));
    return this
  }
  squareRoot () {
    console.log(Math.sqrt(this.hasil));
    return this
  }
}

var hitung = new Calculator(5)

// console.log(hitung.add(2));
// console.log(hitung.subtract(3));
var kalkulasi = hitung.add(3).subtract(3)
hitung.square(2);
hitung.squareRoot()


// console.log(hitung.square());
// console.log(hitung.squareRoot());

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/


// module.exports = Calculator
