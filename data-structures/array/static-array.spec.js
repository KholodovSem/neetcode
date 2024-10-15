const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const StaticArray = require("./static-array");

describe("StaticArray data structure", () => {
  describe("insertAt", () => {
    it("should insert an element at the specified index", () => {
      const arr = new StaticArray(5);
      arr.insertAt(0, 1);
      assert.equal(arr[0], 1);
    });

    it("should shift elements to the right when inserting at a valid index", () => {
      const arr = new StaticArray(5);
      arr.insertAt(0, 1);
      arr.insertAt(0, 2);
      assert.equal(arr[1], 1);
    });

    it("should not insert when the array is at capacity", () => {
      const arr = new StaticArray(2);
      arr.insertAt(0, 1);
      arr.insertAt(1, 2);
      const sizeAfterInsert = arr.insertAt(2, 3);
      assert.equal(sizeAfterInsert, 2);
    });

    it("should return the new size after insertion", () => {
      const arr = new StaticArray(5);
      const sizeAfterInsert = arr.insertAt(0, 1);
      assert.equal(sizeAfterInsert, 1);
    });
  });

  describe("insertAtStart", () => {
    it("should insert an element at the start of the array", () => {
      const arr = new StaticArray(5);
      arr.insertAtStart(1);
      assert.equal(arr[0], 1);
    });

    it("should shift existing elements to the right when inserting at the start", () => {
      const arr = new StaticArray(5);
      arr.insertAtStart(1);
      arr.insertAtStart(2);
      assert.equal(arr[1], 1);
    });
  });

  describe("insertAtEnd", () => {
    it("should insert an element at the end of the array", () => {
      const arr = new StaticArray(5);
      arr.insertAtEnd(1);
      assert.equal(arr[0], 1);
    });

    it("should increase the size of the array after insertion at the end", () => {
      const arr = new StaticArray(5);
      arr.insertAtEnd(1);
      assert.equal(arr.size(), 1);
    });
  });

  describe("pop", () => {
    it("should return the last element of the array", () => {
      const arr = new StaticArray(5);
      arr.insertAtEnd(1);
      arr.insertAtEnd(2);
      const poppedElement = arr.pop();
      assert.equal(poppedElement, 2);
    });

    it("should remove the last element of the array", () => {
      const arr = new StaticArray(5);
      arr.insertAtEnd(1);
      arr.insertAtEnd(2);
      arr.pop();
      assert.equal(arr.size(), 1);
    });

    it("should return undefined when the array is empty", () => {
      const arr = new StaticArray(5);
      const poppedElement = arr.pop();
      assert.equal(poppedElement, undefined);
    });
  });

  describe("size", () => {
    it("should return the current number of elements in the array", () => {
      const arr = new StaticArray(5);
      arr.insertAtEnd(1);
      arr.insertAtEnd(2);
      assert.equal(arr.size(), 2);
    });

    it("should return zero when the array is empty", () => {
      const arr = new StaticArray(5);
      assert.equal(arr.size(), 0);
    });
  });

  describe("capacity", () => {
    it("should return the maximum capacity of the array", () => {
      const arr = new StaticArray(5);
      assert.equal(arr.capacity(), 5);
    });
  });

  describe("toString", () => {
    it("should return a string representation of the array", () => {
      const arr = new StaticArray(5);
      arr.insertAtEnd(1);
      arr.insertAtEnd(2);
      assert.equal(arr.toString(), "[1,2]");
    });

    it("should return an empty array representation when empty", () => {
      const arr = new StaticArray(5);
      assert.equal(arr.toString(), "[]");
    });
  });
});
