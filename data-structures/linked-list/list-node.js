/**
 * @class ListNode
 * @description
 * A node in a singly linked list. Contains two properties:
 * - `value` the value of the node
 * - `next` a reference to the next node in the list
 *
 * @template T
 * @param {T} val - The value to store in the node
 */
class ListNode {
  /**
   * @constructor
   * @param {T} val
   */
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

module.exports = ListNode;
