const StaticArray = require("./static-array");

/**
 * @class DynamicArray
 *
 * @classdesc
 * A class that represents a dynamic array, which can grow in size when needed.
 *
 * Extends the StaticArray class.
 *
 * @extends {StaticArray}
 */
class DynamicArray extends StaticArray {
  /**
   * Inserts an element at the specified index. If the array is at capacity, it will resize.
   *
   * @param {number} i - The index at which to insert the element.
   * @param {*} v - The value to insert.
   * @returns {number} - The new size of the array.
   */
  insertAt(i, v) {
    if (this._isThreshold()) this._resize();
    return super.insertAt(i, v);
  }

  /**
   * Checks whether the array has reached its capacity and needs to resize.
   *
   * @private
   * @returns {boolean} - Returns true if the array is at capacity, otherwise false.
   */
  _isThreshold() {
    return this._capacity === this._size;
  }

  /**
   * Resizes the array by doubling its capacity.
   *
   * @private
   */
  _resize() {
    this._capacity *= 2;
    const newArray = new Array(this._capacity);

    for (let i = 0; i < this._size; i++) {
      newArray[i] = this._arr[i];
    }

    this._arr = newArray;
  }
}

module.exports = DynamicArray;
