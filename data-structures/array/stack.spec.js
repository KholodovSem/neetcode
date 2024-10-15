const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const Stack = require("./stack");

describe("Stack data structure", () => {
  describe('"push" method', () => {
    it("should add an element to the top of the stack", () => {
      const stack = new Stack();
      stack.push(1);
      assert.equal(stack.elements[stack.elements.length - 1], 1);
    });

    it("should increase the number of elements by one after each push", () => {
      const stack = new Stack();
      const initialLength = stack.elements.length;

      stack.push(1);
      stack.push(2);

      assert.equal(stack.elements.length, initialLength + 2);
    });
  });

  describe('"pop" method', () => {
    it("should return the top element of the stack", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);

      const popped = stack.pop();

      assert.equal(popped, 2);
    });

    it("should remove the top element of the stack", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);

      const popped = stack.pop();

      assert.equal(stack.elements.length, 1);
    });

    it("should return undefined when the stack is empty", () => {
      const stack = new Stack();
      const popped = stack.pop();

      assert.equal(popped, undefined);
    });

    it("should decrease the number of elements by one after pop", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);

      stack.pop();

      assert.equal(stack.elements.length, 1);
    });

    it("should keep the stack size at zero when popping from an empty stack", () => {
      const stack = new Stack();
      stack.pop();

      assert.equal(stack.elements.length, 0);
    });
  });

  describe('"peek" method', () => {
    it("should return the top element", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);

      const topElement = stack.peek();

      assert.equal(topElement, 2);
    });

    it("should not modify the stack when peeking", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);

      stack.peek();

      assert.equal(stack.elements.length, 2);
    });

    it("should return undefined when the stack is empty", () => {
      const stack = new Stack();
      const topElement = stack.peek();

      assert.equal(topElement, undefined);
    });
  });

  describe('"isEmpty" method', () => {
    it("should return false when the stack isn't empty", () => {
      const stack = new Stack();
      stack.push(1);

      assert.equal(stack.isEmpty(), false);
    });

    it("should return true when the stack is empty", () => {
      const stack = new Stack();
      stack.push(1);
      stack.pop();

      assert.equal(stack.isEmpty(), true);
    });
  });

  describe('"size" method', () => {
    it("should return amount of stack elements", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(1);
      stack.push(1);

      assert.equal(stack.size(), 3);
    });
  });
});
