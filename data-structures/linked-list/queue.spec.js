const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const Queue = require("./queue");

describe("Queue", () => {
  describe("enqueue", () => {
    it("should add element to the end of the queue", () => {
      const queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      assert.equal(queue._head.val, 1);
    });

    it("should update head when adding first element", () => {
      const queue = new Queue();

      queue.enqueue(1);
      assert.equal(queue._head.val, 1);
    });
  });

  describe("dequeue", () => {
    it("should remove an element from the start of the queue", () => {
      const queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      assert.equal(queue.dequeue(), 1);
    });

    it("should return -1 when queue is empty", () => {
      const queue = new Queue();
      assert.equal(queue.dequeue(), -1);
    });
  });

  describe("isEmpty", () => {
    it("should return true when queue is empty", () => {
      const queue = new Queue();

      assert.equal(queue.isEmpty(), true);
    });

    it("should return false when queue has at least one element", () => {
      const queue = new Queue();

      queue.enqueue(1);

      assert.equal(queue.isEmpty(), false);
    });
  });
});
