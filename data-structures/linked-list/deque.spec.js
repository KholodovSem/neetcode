const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const Deque = require("./deque");

describe("Deque", () => {
  describe("append", () => {
    it("should add element to the end of the deque", () => {
      const deque = new Deque();

      deque.append(1);
      assert.equal(deque._tail.val, 1);
    });

    it("should update head when appending to empty deque", () => {
      const deque = new Deque();

      deque.append(1);
      assert.equal(deque._head.val, 1);
    });
  });

  describe("appendLeft", () => {
    it("should add element to the front of the deque", () => {
      const deque = new Deque();

      deque.appendLeft(1);
      assert.equal(deque._head.val, 1);
    });

    it("should update tail when appending to empty deque", () => {
      const deque = new Deque();

      deque.appendLeft(1);
      assert.equal(deque._tail.val, 1);
    });
  });

  describe("pop", () => {
    it("should remove element from the end of the deque", () => {
      const deque = new Deque();

      deque.append(1);
      deque.append(2);
      const result = deque.pop();
      assert.equal(result, 2);
    });

    it("should return -1 when deque is empty", () => {
      const deque = new Deque();
      assert.equal(deque.pop(), -1);
    });
  });

  describe("popLeft", () => {
    it("should remove element from the front of the deque", () => {
      const deque = new Deque();

      deque.append(1);
      deque.append(2);
      const result = deque.popLeft();
      assert.equal(result, 1);
    });

    it("should return -1 when deque is empty", () => {
      const deque = new Deque();
      assert.equal(deque.popLeft(), -1);
    });
  });

  describe("isEmpty", () => {
    it("should return true when deque is empty", () => {
      const deque = new Deque();
      assert.equal(deque.isEmpty(), true);
    });

    it("should return false when deque has elements", () => {
      const deque = new Deque();
      deque.append(1);
      assert.equal(deque.isEmpty(), false);
    });
  });
});
