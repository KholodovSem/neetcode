const util = require("util");

/**
 * @class StaticArray
 *
 * @classdesc
 * A fixed-size array implementation with dynamic insertion and removal methods.
 */
class StaticArray {
  /**
   * Creates an instance of StaticArray with a specified capacity.
   * @param {number} size - The maximum number of elements the array can hold.
   */
  constructor(size) {
    this._arr = new Array(size);
    this._capacity = size;
    this._size = 0;

    return new Proxy(this, {
      get(target, prop) {
        if (typeof target[prop] === "function") {
          return function (...args) {
            return target[prop].apply(target, args);
          };
        }

        if (prop[0] !== "_" && prop in target) {
          return target[prop];
        }

        const index = Number(prop);

        if (Number.isInteger(index) && index < target._size && index >= 0) {
          return target._arr[index];
        }

        return undefined;
      },
    });
  }

  /**
   * Inserts a value at the specified index in the array.
   * @param {number} i - The index at which to insert the value.
   * @param {*} v - The value to insert.
   * @returns {number} - The new size of the array after insertion.
   * @complexity O(n) - Linear time complexity due to shifting elements.
   */
  insertAt(i, v) {
    if (!(i < 0 || i > this._capacity - 1) && this._size < this._capacity) {
      for (let j = this._size; j >= i; j--) {
        this._arr[j] = this._arr[j - 1];
      }

      this._arr[i] = v;
      this._size++;
    }

    return this._size;
  }

  /**
   * Inserts a value at the start of the array.
   * @param {*} v - The value to insert at the start.
   * @returns {number} - The new size of the array after insertion.
   * @complexity O(n) - Linear time complexity due to shifting elements.
   */
  insertAtStart(v) {
    return this.insertAt(0, v);
  }

  /**
   * Inserts a value at the end of the array.
   * @param {*} v - The value to insert at the end.
   * @returns {number} - The new size of the array after insertion.
   * @complexity O(1) - Constant time complexity.
   */
  insertAtEnd(v) {
    return this.insertAt(this._size, v);
  }

  /**
   * Removes and returns the last element from the array.
   * @returns {*} - The removed element, or undefined if the array is empty.
   * @complexity O(1) - Constant time complexity.
   */
  pop() {
    if (!this._size) return undefined;

    const lastElement = this._arr[this._size - 1];
    this._arr[this._size - 1] = undefined;
    this._size--;

    return lastElement;
  }

  /**
   * Gets the current number of elements in the array.
   * @returns {number} - The size of the array.
   */
  size() {
    return this._size;
  }

  /**
   * Gets the maximum number of elements the array can hold.
   * @returns {number} - The capacity of the array.
   */
  capacity() {
    return this._capacity;
  }

  /**
   * Converts the array to a string representation.
   * @returns {string} - The string representation of the array.
   */
  toString() {
    let str = "";

    for (let i = 0; i < this._size; i++) {
      str += this._arr[i];

      if (i !== this._size - 1) {
        str += ",";
      }
    }

    return "[" + str + "]";
  }

  /**
   * Custom inspect method for debugging.
   * @returns {string} - The string representation of the array for debugging.
   */
  [util.inspect.custom]() {
    return this.toString();
  }
}

module.exports = StaticArray;
