const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const MinStack = require("./min-stack");

const { InvalidArgumentError } = require("../utils/errors");

describe("MinStack - Modified Stack that works with only numbers", () => {
  describe('"push" must accept only number as argument', () => {
    it('should throw an "Invalid argument" error', () => {
      const minStack = new MinStack();

      assert.throws(
        () => minStack.push("char"),
        new InvalidArgumentError("Argument must be a number"),
      );
    });

    it("should increase number of elements with valid argument", () => {
      const minStack = new MinStack();
      minStack.push(1);

      assert.equal(minStack.size(), 1);
    });
  });

  describe('"getMin" return minimal number in the stack', () => {
    it("should return undefined when the stack is empty", () => {
      const minStack = new MinStack();

      assert.equal(minStack.getMin(), undefined);
    });

    it("should return number that is alone in the stack as minimal number", () => {
      const minStack = new MinStack();
      minStack.push(1);

      assert.equal(minStack.getMin(), 1);
    });

    it("should return minimal number from the stack that has more than one element", () => {
      const minStack = new MinStack();
      minStack.push(3);
      minStack.push(4);
      minStack.push(5);
      minStack.push(6);
      minStack.push(7);

      assert.equal(minStack.getMin(), 3);
    });

    it("should return minimal number from the stack event if pop was used", () => {
      const minStack = new MinStack();
      minStack.push(5);
      minStack.push(0);
      minStack.push(2);
      minStack.push(4);
      minStack.pop();
      minStack.pop();

      assert.equal(minStack.getMin(), 0);
    });
  });
});
