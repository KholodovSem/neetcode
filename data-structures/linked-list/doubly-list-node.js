/**
 * @class DoublyListNode
 * @description
 * A node in a doubly linked list. Contains three properties:
 * - `value`: The value of the node.
 * - `next`: A reference to the next node in the list.
 * - `prev`: A reference to the previous node in the list.
 *
 * @template T
 * @param {T} val - The value to store in the node.
 */
class DoublyListNode {
  /**
   * @constructor
   * @param {T} val - The value to store in the node.
   */
  constructor(val = null) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

module.exports = DoublyListNode;
