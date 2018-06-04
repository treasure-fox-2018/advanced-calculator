class Calculator {
  constructor(number) {
      this.number = number

  }   

  add(addNumber) {
      this.number += addNumber
      return this
  }

  minus(minusNumber) {
      this.number -= minusNumber
      return this
  }

  times(timesNumber) {
      this.number *= timesNumber
      // console.log(this)
      return this
  }

  dividedBy(dividedNumber) {
      this.number /= dividedNumber
      return this
  }

  pow(powNumber) {
      this.number = Math.pow(this.number, powNumber)
      return this
  }

  root() {
      this.number = Math.sqrt(this.number)
      return this
  }

  constPI() {
      this.number = Math.PI * this.number * 2
      return this
  }
}

module.exports = Calculator