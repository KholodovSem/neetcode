const ListNode = require("./list-node");

/**
 * @class LinkedList
 * @classdesc
 * A singly linked list that stores elements in a sequence of nodes ({@link ListNode}).
 */
class LinkedList {
  _head;
  _tail;
  _size;

  /**
   * Creates an empty linked list.
   * @constructor
   */
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  /**
   * Retrieves the value at the given index.
   * @param {number} index - The index of the element to retrieve.
   * @returns {number}  The value at the given index, or -1 if the index is out of bounds.
   * @complexity O(n)  Linear time complexity, where n is the index provided.
   */
  get(index) {
    if (index < 0 || index > this._size - 1) {
      return -1;
    }

    if (index === 0) {
      return this._head.val;
    }

    let i = 0;
    let curr = this._head;

    while (curr && i < index) {
      curr = curr.next;
      i++;
    }

    return curr ? curr.val : -1;
  }

  /**
   * Inserts a new value at the head of the list.
   * @param {number} val  The value to insert.
   * @complexity O(1)  Constant time complexity as it only modifies the head node.
   */
  insertAtHead(val) {
    const node = new ListNode(val);

    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      node.next = this._head;
      this._head = node;
    }
    this._size++;
  }

  /**
   * Inserts a new value at the tail of the list.
   * @param {number} val  The value to insert.
   * @complexity O(1)  Constant time complexity as it directly modifies the tail node.
   */
  insertAtTail(val) {
    const node = new ListNode(val);

    if (!this._tail) {
      this._tail = node;
      this._head = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    this._size++;
  }

  /**
   * Inserts a value at the specified index.
   * @param {number} index - The index at which to insert the value.
   * @param {number} val - The value to insert.
   * @complexity O(n)  Linear time complexity, where n is the index provided.
   */
  insertAt(index, val) {
    if (index < 0 || index > this._size) {
      return;
    } else if (index === 0) {
      return this.insertAtHead(val);
    } else if (index === this._size) {
      return this.insertAtTail(val);
    }

    let i = 0;
    let prev = null;
    let curr = this._head;

    while (curr && i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    const node = new ListNode(val);
    node.next = curr;
    prev.next = node;
    this._size++;
  }

  /**
   * Removes the head node from the list.
   * @complexity O(1)  Constant time complexity as it only modifies the head node.
   */
  removeAtHead() {
    if (!this._head) {
      return;
    } else if (!this._head.next) {
      this._head = null;
      this._tail = null;
    } else {
      this._head = this._head.next;
    }
    this._size--;
  }

  /**
   * Removes the tail node from the list.
   * @complexity O(n)  Linear time complexity, as it needs to traverse the list to find the second-to-last node.
   */
  removeAtTail() {
    if (!this._tail) {
      return;
    } else if (!this._head.next) {
      this._head = null;
      this._tail = null;
    } else {
      let prev = null;
      let curr = this._head;

      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }

      this._tail = prev;
      this._tail.next = null;
    }

    this._size--;
  }

  /**
   * Removes the node at the specified index.
   * @param {number} index  The index of the node to remove.
   * @complexity O(n)  Linear time complexity, where n is the index provided.
   */
  remove(index) {
    if (index < 0 || index >= this._size) {
      return;
    } else if (index === 0) {
      return this.removeAtHead();
    } else if (index === this._size - 1) {
      return this.removeAtTail();
    }

    let i = 0;
    let prev = null;
    let curr = this._head;

    while (curr && i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    prev.next = curr.next;
    this._size--;
  }

  /**
   * Returns an array of all values in the list.
   * @returns {number[]}  An array containing all the values in the linked list.
   * @complexity O(n)  Linear time complexity, where n is the number of nodes in the list.
   */
  getValues() {
    const res = [];

    let node = this._head;
    while (node) {
      res.push(node.val);
      node = node.next;
    }
    return res;
  }
}

module.exports = LinkedList;
