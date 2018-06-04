'use strict'

class Calculator {
    //write your code here
    constructor (firstValue, secondValue) {
        this.firstValue = firstValue;
        this.secondValue = secondValue;
        this.pi = 3.14159265359;
        this.addResult;
        this.subtractResult;
        this.multiplyResult = 1;
        this.divideResult;
        this.squareResult = 1;
        this.squareRootResult;
        this.circleResult;
    }

    add () {            // method menambah
        this.addResult = this.firstValue + this.secondValue;
        console.log(this.addResult);
        return this;
    }

    subtract () {       // method mengurangi
        this.subtractResult = this.firstValue - this.secondValue;
        console.log(this.subtractResult);
        return this;
    }

    multiply () {       // method mengali
        this.multiplyResult = this.firstValue * this.secondValue;
        console.log(this.multiplyResult);
        return this;
    }

    divide () {         // method membagi
        this.divideResult = this.firstValue / this.secondValue;
        console.log(this.divideResult);
        return this;
    }

    square () {         // pangkat
        for (let i = 0; i < this.secondValue; i++) {
            this.squareResult *= this.squareResult;
        }
        console.log(this.squareResult);
        return this;
    }

    squareRoot () {     // akar pangkat
        this.squareRoot = Math.sqrt(this.firstValue);
        console.log(this.squareRoot);
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

module.exports = Calculator;
