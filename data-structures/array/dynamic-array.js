const StaticArray = require("./static-array");

class DynamicArray extends StaticArray {
  insertAt(i, v) {
    if (this._isThreshold()) this._resize();
    super.insertAt(i, v);
  }

  _isThreshold() {
    return this._capacity === this._size;
  }

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
