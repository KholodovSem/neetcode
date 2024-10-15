const DoublyListNode = require("./doubly-list-node");

/**
 * @class DoublyLinkedList
 * @classdesc
 * A doubly linked list that stores elements in a sequence of nodes ({@link DoublyListNode}).
 */
class DoublyLinkedList {
  _head;
  _tail;
  _size;

  /**
   * Creates an empty doubly linked list.
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
    if (index < 0 || index >= this._size) {
      return -1;
    }

    let curr = this._head;
    let i = 0;

    if (index < this._size / 2) {
      while (i < index) {
        curr = curr.next;
        i++;
      }
    } else {
      curr = this._tail;
      i = this._size - 1;
      while (i > index) {
        curr = curr.prev;
        i--;
      }
    }

    return curr.val;
  }

  /**
   * Inserts a new value at the head of the list.
   * @param {number} val - The value to insert.
   * @complexity O(1)  Constant time complexity as it only modifies the head node.
   */
  insertAtHead(val) {
    const node = new DoublyListNode(val);

    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      node.next = this._head;
      this._head.prev = node;
      this._head = node;
    }
    this._size++;
  }

  /**
   * Inserts a new value at the tail of the list.
   * @param {number} val - The value to insert.
   * @complexity O(1)  Constant time complexity as it directly modifies the tail node.
   */
  insertAtTail(val) {
    const node = new DoublyListNode(val);

    if (!this._tail) {
      this._tail = node;
      this._head = node;
    } else {
      node.prev = this._tail;
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
    let curr;

    if (index < this._size / 2) {
      curr = this._head;
      while (i < index) {
        curr = curr.next;
        i++;
      }
    } else {
      curr = this._tail;
      i = this._size - 1;
      while (i > index) {
        curr = curr.prev;
        i--;
      }
    }

    const node = new DoublyListNode(val);
    node.next = curr;
    node.prev = curr.prev;
    curr.prev.next = node;
    curr.prev = node;
    this._size++;
  }

  /**
   * Removes the head node from the list.
   * @complexity O(1)  Constant time complexity as it only modifies the head node.
   */
  removeAtHead() {
    if (!this._head) {
      return;
    }

    if (this._head === this._tail) {
      this._head = null;
      this._tail = null;
    } else {
      this._head = this._head.next;
      this._head.prev = null;
    }

    this._size--;
  }

  /**
   * Removes the tail node from the list.
   * @complexity O(1)  Constant time complexity as it directly modifies the tail node.
   */
  removeAtTail() {
    if (!this._tail) {
      return;
    }

    if (this._head === this._tail) {
      this._head = null;
      this._tail = null;
    } else {
      this._tail = this._tail.prev;
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

    let curr;

    if (index < this._size / 2) {
      curr = this._head;
      let i = 0;
      while (i < index) {
        curr = curr.next;
        i++;
      }
    } else {
      curr = this._tail;
      let i = this._size - 1;
      while (i > index) {
        curr = curr.prev;
        i--;
      }
    }

    curr.prev.next = curr.next;
    if (curr.next) {
      curr.next.prev = curr.prev;
    }

    this._size--;
  }

  /**
   * Returns an array of all values in the list.
   * @returns {number[]}  An array containing all the values in the doubly linked list.
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

module.exports = DoublyLinkedList;
