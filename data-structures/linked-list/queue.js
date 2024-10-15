const ListNode = require("./list-node");

/**
 * @class Queue
 * @classdesc
 * A queue data structure that follows the FIFO (First In, First Out) principle,
 * allowing elements to be enqueued at the end and dequeued from the start.
 */
class Queue {
  _head;
  _tail;

  /**
   * Creates an empty queue.
   * @constructor
   */
  constructor() {
    this._head = null;
    this._tail = null;
  }

  /**
   * Enqueues (adds) an element to the end of the queue.
   * @param {*} val The value to add to the queue.
   * @complexity O(1) Constant time complexity as it modifies only the tail.
   */
  enqueue(val) {
    const node = new ListNode(val);

    if (!this._head) {
      this._tail = node;
      this._head = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
  }

  /**
   * Dequeues (removes) the element from the front of the queue.
   * @returns {*} The `value` of the dequeued element, or `-1` if the queue is empty.
   * @complexity O(1) - Constant time complexity as it modifies only the head.
   */
  dequeue() {
    if (!this._head) return -1;

    const head = this._head;
    this._head = this._head.next;

    if (!this._head) this._tail = null;

    return head.val;
  }

  /**
   * Checks whether the queue is empty.
   * @returns {boolean} True if the queue is empty, otherwise false.
   * @complexity O(1) Constant time complexity.
   */
  isEmpty() {
    return !this._head;
  }
}

module.exports = Queue;
