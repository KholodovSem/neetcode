const DoublyListNode = require("./doubly-list-node");

/**
 * @class Deque
 * @classdesc
 * A double-ended queue (deque) that allows elements to be added or removed
 * from both the front and the back of the list, implemented using a doubly linked list.
 */
class Deque {
  _head;
  _tail;

  /**
   * Creates an empty deque.
   * @constructor
   */
  constructor() {
    this._head = null;
    this._tail = null;
  }

  /**
   * Checks if the deque is empty.
   * @returns {boolean} - True if the deque is empty, otherwise false.
   * @complexity O(1) - Constant time complexity.
   */
  isEmpty() {
    return !this._head;
  }

  /**
   * Appends a value to the end of the deque.
   * @param {number} value - The value to add to the deque.
   * @complexity O(1) - Constant time complexity as it modifies only the tail.
   */
  append(value) {
    const node = new DoublyListNode(value);

    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
  }

  /**
   * Appends a value to the front of the deque.
   * @param {number} value - The value to add to the front of the deque.
   * @complexity O(1) - Constant time complexity as it modifies only the head.
   */
  appendLeft(value) {
    const node = new DoublyListNode(value);

    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      node.next = this._head;
      this._head.prev = node;
      this._head = node;
    }
  }

  /**
   * Removes and returns the value from the end of the deque.
   * @returns {number} - The node that was removed, or -1 if the deque is empty.
   * @complexity O(1) - Constant time complexity as it modifies only the tail.
   */
  pop() {
    if (!this._head) return -1;

    const tail = this._tail;
    this._tail = this._tail.prev;

    if (this._tail) {
      this._tail.next = null;
    } else {
      this._head = null;
    }

    return tail.val;
  }

  /**
   * Removes and returns the value from the front of the deque.
   * @returns {number} - The node that was removed, or -1 if the deque is empty.
   * @complexity O(1) - Constant time complexity as it modifies only the head.
   */
  popLeft() {
    if (!this._head) return -1;

    const head = this._head;
    this._head = this._head.next;

    if (this._head) {
      this._head.prev = null;
    } else {
      this._tail = null;
    }

    return head.val;
  }
}

module.exports = Deque;
