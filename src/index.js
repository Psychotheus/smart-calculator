class SmartCalculator {
  constructor(initialValue) {

    this.priority = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3
    };

    this.ops = [];
    this.ops.push({operand: '', value: initialValue});
  }

  add(number) {
    this.ops.push({operand: '+', value: number});
    return this;
  }
  
  subtract(number) {
    this.ops.push({operand: '-', value: number});
    return this;
  }

  multiply(number) {
    this.ops.push({operand: '*', value: number});
    return this;
  }

  devide(number) {
    this.ops.push({operand: '/', value: number});
    return this;
  }

  pow(number) {
    this.ops.push({operand: '^', value: number});
    return this;
  }
  
  operate(i) {
    switch(this.ops[i].operand) {
      case '+': 
        if (this.ops[i - 1].operand == '-') {
          this.ops[i - 1].value -= this.ops[i].value;
        } else {
          this.ops[i - 1].value += this.ops[i].value;
        }
        break;
      case '-':
        if (this.ops[i - 1].operand == '-') {
          this.ops[i - 1].value += this.ops[i].value;
        } else {
          this.ops[i - 1].value -= this.ops[i].value;
        }
        break;
      case '*':
        this.ops[i - 1].value *= this.ops[i].value;
        break;
      case '/':
        this.ops[i - 1].value /= this.ops[i].value;
        break;
      case '^': 
        this.ops[i - 1].value = Math.pow(this.ops[i - 1].value, this.ops[i].value);
        break;
    }
  }

  valueOf() {
    this.ops[0].operand = '+';
    let i = this.ops.length - 1;

    while (i != 0) {
      if (this.priority[this.ops[i].operand] >= 
        this.priority[this.ops[i - 1].operand]) {
          this.operate(i);
          this.ops.splice(i, 1);
          i = this.ops.length - 1;
      } else {
        i--;
      }
    }

    return this.ops[0].value;
  }
}

module.exports = SmartCalculator;
