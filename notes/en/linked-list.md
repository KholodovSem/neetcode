## Linked Lists

### Singly Linked List

A singly linked list is a data structure consisting of nodes where each node contains data and a reference to the next node in the list. Singly linked lists allow efficient addition and deletion of elements from the beginning of the list. However, accessing elements by index requires traversing the list from the start to the desired node, which makes read operations less efficient compared to arrays.

**Advantages:**
- Efficient insertion/deletion of elements at the start of the list (O(1)).
- Memory-efficient since no need to pre-allocate memory.

**Disadvantages:**
- Accessing elements requires linear traversal (O(n)).
- No direct access to elements by index.
- Deleting a node requires searching for the previous node.

---

### Doubly Linked List

A doubly linked list is similar to a singly linked list, but each node contains two references: one to the next node and one to the previous node. This allows for more efficient insertion and deletion of elements in the middle of the list and simplifies traversing the list in both directions (forward and backward). However, doubly linked lists require more memory due to the additional reference to the previous node.

**Advantages:**
- Efficient insertion/deletion at both the beginning and the end of the list (O(1)).
- Ability to traverse the list in both directions.
- Easier to delete nodes since the previous node is available.

**Disadvantages:**
- Takes up more memory than a singly linked list due to additional references.
- Accessing elements by index still requires linear traversal (O(n)).

---

| **Operation**                 | **Description**                                     | **Singly Linked List** | **Doubly Linked List** |
|-------------------------------|----------------------------------------------------|------------------------|------------------------|
| **Reading**                   | Access an element by index                         | O(n)                   | O(n)                   |
| **Insertion (at the start)**   | Insert a new element at the start of the list      | O(1)                   | O(1)                   |
| **Insertion (at the end)**     | Insert a new element at the end of the list        | O(1)                   | O(1)                   |
| **Insertion (in the middle)**  | Insert a new element at any position               | O(n)                   | O(n)                   |
| **Deletion (from the start)**  | Delete the first element of the list               | O(1)                   | O(1)                   |
| **Deletion (from the end)**    | Delete the last element of the list                | O(n)                   | O(1)                   |
| **Deletion (from the middle)** | Delete an element from any position                | O(n)                   | O(n)                   |
| **Traversal (forward)**        | Traverse the list from start to end                | O(n)                   | O(n)                   |
| **Traversal (backward)**       | Traverse the list from end to start                | -                      | O(n)                   |
