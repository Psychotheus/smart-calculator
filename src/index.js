class SmartCalculator {
  constructor(initialValue) {

    this.string = "" + initialValue;
  }

  add(number) {
    this.string += (" + " + number);
    return this;
  }
  
  subtract(number) {
    this.string += (" - " + number);
    return this;
  }

  multiply(number) {
    this.string += (" * " + number);
    return this;
  }

  devide(number) {
    this.string += (" / " + number);
    return this;
  }

  pow(number) {
    this.string += (" ** " + number);
    return this;
  }

  valueOf() {
    return eval(this.string);
  }
}

module.exports = SmartCalculator;
