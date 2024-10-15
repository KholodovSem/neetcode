## Queue

A queue is a data structure that operates on the principle of "first in, first out" (FIFO). Elements are added to the end of the queue and removed from the front. Queues are widely used in algorithms for managing data streams and tasks that require ordered execution.

**Advantages:**
- Simple implementation.
- Efficient addition to the end and removal from the front (O(1)).

---

### Basic Operations:

| **Operation**     | **Description**                                     | **Complexity** |
|-------------------|-----------------------------------------------------|----------------|
| **enqueue**       | Add an element to the end of the queue              | O(1)           |
| **dequeue**       | Remove an element from the front of the queue       | O(1)           |
| **peek**          | View the element at the front of the queue without removal | O(1)           |
| **isEmpty**       | Check if the queue is empty                         | O(1)           |

---

## Deque (Double-Ended Queue)

A deque (double-ended queue) is an extended version of a queue that allows adding and removing elements from both ends. Deques combine the properties of both stacks and queues, providing flexibility in operations.

**Advantages:**
- Ability to add and remove elements from both ends (O(1)).
- Versatility: a deque can be used as a stack or a queue.

**Disadvantages:**
- More complex structure compared to a simple queue.

---

### Basic Operations:

| **Operation**      | **Description**                                         | **Complexity** |
|--------------------|--------------------------------------------------------|----------------|
| **append**         | Add an element to the end of the deque                 | O(1)           |
| **appendLeft**     | Add an element to the front of the deque               | O(1)           |
| **pop**            | Remove an element from the end of the deque            | O(1)           |
| **popLeft**        | Remove an element from the front of the deque          | O(1)           |
| **isEmpty**        | Check if the deque is empty                            | O(1)           |
| **peekLeft**       | View the element at the front of the deque without removal | O(1)           |
| **peekRight**      | View the element at the end of the deque without removal | O(1)           |

---

### Applications:

Deques are suitable for various tasks such as managing browsing histories, implementing buffers, scheduling tasks, searching algorithms, etc. Queues and deques are also commonly used in problems related to parallel computing and resource-limited systems.
