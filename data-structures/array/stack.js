/**
 * @class Stack
 * @classdesc
 * Stack representation in JavaScript
 *
 * Stacks are considered a LIFO data structure.
 *
 * LIFO - Last in. First Out.
 *
 * @template T
 * Value that can be stored in stack
 */
class Stack {
  /**
   * @constructor
   */
  constructor() {
    /**
     * @type {T[]}
     * Stored elements in the stack
     */
    this.elements = [];
  }

  /**
   * @param {T} element
   * Element that will be added to the stack
   *
   * @description
   * Push element at the top of the stack.
   *
   * **O(1) - complexity**
   *
   * @returns {void}
   */
  push(element) {
    this.elements.push(element);
  }

  /**
   * @description
   * Remove and return the top element of the stack.
   *
   * **O(1) - complexity**
   *
   * @returns {T | undefined}
   * The top element of the stack or undefined
   * if the stack is empty
   */
  pop() {
    return this.elements.pop();
  }

  /**
   * @description
   * Get the top element of the stack
   * without removing it
   *
   * **O(1) - complexity**
   *
   * @returns {T | undefined}
   * The top element of the stack or undefined
   * if the stack is empty
   */
  peek() {
    return this.elements[this.elements.length - 1];
  }

  /**
   * @description
   * Check if the stack is empty
   *
   * @returns {boolean}
   * True if the stack is empty,
   * false otherwise
   */
  isEmpty() {
    return this.elements.length === 0;
  }

  /**
   * @description
   * Get the size of the stack
   *
   * @returns {number}
   * The number of elements in the stack
   */
  size() {
    return this.elements.length;
  }
}

module.exports = Stack;
