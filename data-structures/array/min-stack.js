const Stack = require("./stack");
const { InvalidArgumentError } = require("../utils/errors");

/**
 * @class MinStack
 * @classdesc
 * A stack that, in addition to standard stack operations, supports retrieving
 * the minimum element in constant time.
 *
 * @extends Stack
 */
class MinStack extends Stack {
  /**
   * @constructor
   */
  constructor() {
    super();
    /**
     * @private
     * @type {Stack<number>}
     * A stack to keep track of the minimum elements.
     */
    this._minElements = new Stack();
  }

  /**
   * @description
   * Retrieve the minimum element in the stack.
   *
   * **O(1) - complexity**
   *
   * @returns {number | undefined}
   * The minimum element in the stack or undefined
   * if the stack is empty.
   */
  getMin() {
    return this._minElements.peek();
  }

  /**
   * @description
   * Push a new element onto the stack and update the minimum element if necessary.
   *
   * **O(1) - complexity**
   *
   * @param {number} element
   * The element to be added to the stack. Must be an integer.
   *
   * @throws {InvalidArgumentError}
   * Throws if the argument is not an integer.
   *
   * @returns {void}
   */
  push(element) {
    if (!Number.isInteger(element)) {
      throw new InvalidArgumentError("Argument must be a number");
    }

    if (this._minElements.isEmpty() || element <= this._minElements.peek()) {
      this._minElements.push(element);
    }

    this.elements.push(element);
  }

  /**
   * @description
   * Pop the top element from the stack and update the minimum element if necessary.
   *
   * **O(1) - complexity**
   *
   * @returns {number | undefined}
   * The popped element from the stack or undefined if the stack is empty.
   */
  pop() {
    const lastElement = this.elements.pop();

    if (lastElement === this._minElements.peek()) {
      this._minElements.pop();
    }

    return lastElement;
  }
}

module.exports = MinStack;
