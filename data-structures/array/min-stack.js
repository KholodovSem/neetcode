const Stack = require("./stack");

const { InvalidArgumentError } = require("../utils/errors");

class MinStack extends Stack {
  _minElements = new Stack();

  getMin() {
    return this._minElements.peek();
  }

  push(element) {
    if (!Number.isInteger(element)) {
      throw new InvalidArgumentError("Argument must be a number");
    }

    if (this._minElements.isEmpty() || element <= this._minElements.peek()) {
      this._minElements.push(element);
    }

    this.elements.push(element);
  }

  pop() {
    const lastElement = this.elements.pop();

    if (lastElement === this._minElements.peek()) {
      this._minElements.pop();
    }

    return lastElement;
  }
}

module.exports = MinStack;

//TODO: Write jsdoc
