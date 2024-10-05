const util = require("util");

class StaticArray {
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

  insertAtStart(v) {
    return this.insertAt(0, v);
  }

  insertAtEnd(v) {
    return this.insertAt(this._size, v);
  }

  pop() {
    if (!this._size) return undefined;

    const lastElement = this._arr[this._size - 1];
    this._arr[this._size - 1] = undefined;
    this._size--;

    return lastElement;
  }

  size() {
    return this._size;
  }

  capacity() {
    return this._capacity;
  }

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

  [util.inspect.custom]() {
    return this.toString();
  }
}

module.exports = StaticArray;

//TODO: Write jsdoc
//TODO: Write tests
//TODO: Exercises
