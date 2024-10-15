const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const DoublyLinkedList = require("./doubly-linked-list");

describe("Doubly Linked List", () => {
  describe("Initializing", () => {
    it("Should be initialized as empty", () => {
      const doublyLinkedList = new DoublyLinkedList();

      assert.deepEqual(doublyLinkedList.getValues(), []);
    });
  });

  describe("get", () => {
    it("should return -1 if index out of bounds", () => {
      const doublyLinkedList = new DoublyLinkedList();

      assert.equal(doublyLinkedList.get(0), -1);
    });

    it("should return value if index in bounds", () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.insertAtTail(10);

      assert.equal(doublyLinkedList.get(0), 10);
    });
  });

  describe("insertAtHead", () => {
    it("should insert element or elements at the head of the doubly linked list", () => {
      const doublyLinkedList = new DoublyLinkedList();

      const values = [1, 2, 3];

      for (const value of values) {
        doublyLinkedList.insertAtHead(value);
      }

      assert.deepEqual(doublyLinkedList.getValues(), values.reverse());
    });
  });

  describe("insertAtTail", () => {
    it("should insert element or elements at the tail of the doubly linked list", () => {
      const doublyLinkedList = new DoublyLinkedList();

      const values = [1, 2, 3];

      for (const value of values) {
        doublyLinkedList.insertAtTail(value);
      }

      assert.deepEqual(doublyLinkedList.getValues(), values);
    });
  });

  describe("remove", () => {
    it("should remove value from specified position of the doubly linked list", () => {
      const doublyLinkedList = new DoublyLinkedList();

      doublyLinkedList.insertAtTail(2);
      doublyLinkedList.remove(0);

      assert.equal(doublyLinkedList._tail, null);
    });
  });

  describe("getValues", () => {
    it("should return ordered list of all given values", () => {
      const doublyLinkedList = new DoublyLinkedList();

      const values = [1, 2, 3];

      for (const value of values) {
        doublyLinkedList.insertAtTail(value);
      }

      assert.deepEqual(doublyLinkedList.getValues(), values);
    });
  });
});
