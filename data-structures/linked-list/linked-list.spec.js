const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const LinkedList = require("./linked-list");

describe("Linked List", () => {
  describe("Initializing", () => {
    it("Should be initialized as empty", () => {
      const linkedList = new LinkedList();

      assert.deepEqual(linkedList.getValues(), []);
    });
  });

  describe("get", () => {
    it("should return -1 if index out of bounds", () => {
      const linkedList = new LinkedList();

      assert.equal(linkedList.get(0), -1);
    });

    it("should return value if index in bounds", () => {
      const linkedList = new LinkedList();
      linkedList.insertAtTail(10);

      assert.equal(linkedList.get(0), 10);
    });
  });

  describe("insertAtHead", () => {
    it("should insert element of elements at the head of linked list", () => {
      const linkedList = new LinkedList();

      const values = [1, 2, 3];

      for (const value of values) {
        linkedList.insertAtHead(value);
      }

      assert.deepEqual(linkedList.getValues(), values.reverse());
    });
  });

  describe("insertAtTail", () => {
    it("should insert element of elements at the tail of linked list", () => {
      const linkedList = new LinkedList();

      const values = [1, 2, 3];

      for (const value of values) {
        linkedList.insertAtTail(value);
      }

      assert.deepEqual(linkedList.getValues(), values);
    });
  });

  describe("remove", () => {
    it("should remove value from specified position of the linked list", () => {
      const linkedList = new LinkedList();

      linkedList.insertAtTail(2);
      linkedList.remove(0);

      assert.equal(linkedList._tail, null);
    });
  });

  describe("getValues", () => {
    it("should return ordered list of all given values", () => {
      const linkedList = new LinkedList();

      const values = [1, 2, 3];

      for (const value of values) {
        linkedList.insertAtTail(value);
      }

      assert.deepEqual(linkedList.getValues(), values);
    });
  });
});
