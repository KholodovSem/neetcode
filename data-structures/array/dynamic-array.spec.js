const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const DynamicArray = require("./dynamic-array");

describe("DynamicArray data structure", () => {
  describe('"insertAt" method', () => {
    it("should insert an element at the specified index", () => {
      const arr = new DynamicArray(2);
      arr.insertAt(0, 1);
      assert.equal(arr[0], 1);
    });

    it("should shift elements when inserting at a valid index", () => {
      const arr = new DynamicArray(2);
      arr.insertAt(0, 1);
      arr.insertAt(0, 2);
      assert.equal(arr[0], 2);
    });

    it("should resize when array reaches capacity", () => {
      const arr = new DynamicArray(2);
      arr.insertAtEnd(1);
      arr.insertAtEnd(2);
      arr.insertAtEnd(3);
      assert.equal(arr.capacity(), 4);
    });

    it("should maintain elements after resize", () => {
      const arr = new DynamicArray(2);
      arr.insertAtEnd(1);
      arr.insertAtEnd(2);
      arr.insertAtEnd(3);
      assert.equal(arr[2], 3);
    });
  });

  describe('"resize" method', () => {
    it("should double the array capacity", () => {
      const arr = new DynamicArray(2);
      arr.insertAtEnd(1);
      arr.insertAtEnd(2);
      arr.insertAtEnd(3);
      assert.equal(arr.capacity(), 4);
    });

    it("should preserve the current elements after resizing", () => {
      const arr = new DynamicArray(2);
      arr.insertAtEnd(1);
      arr.insertAtEnd(2);
      arr.insertAtEnd(3);
      assert.equal(arr[0], 1);
    });
  });

  describe('"isThreshold" method', () => {
    it("should return true when the array is full", () => {
      const arr = new DynamicArray(2);
      arr.insertAtEnd(1);
      arr.insertAtEnd(2);
      assert.equal(arr._isThreshold(), true);
    });

    it("should return false when the array is not full", () => {
      const arr = new DynamicArray(2);
      arr.insertAtEnd(1);
      assert.equal(arr._isThreshold(), false);
    });
  });
});
