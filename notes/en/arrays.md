
## Arrays

### Fixed Array

A fixed array is a data structure with a predetermined length that cannot be changed after creation. When the array is filled to its maximum capacity, adding new elements is impossible, as the array represents a contiguous memory region. If all cells are occupied, adding an element will result in an error since it cannot be guaranteed that the next memory region is free.

**Advantages:**
- Fast access to elements by index (O(1)).
- Minimal memory management overhead as the size is fixed.

**Disadvantages:**
- Inefficient use of memory if the array is not fully populated.
- Limited flexibility: resizing the array is impossible without creating a new array and copying the data.
- Removing elements does not free the occupied memory.

---

### Dynamic Array (Array List)

A dynamic array is a data structure whose size can change during program execution. When the number of elements reaches a certain threshold, a new array is created with increased capacity. Then, the data from the old array is copied to the new one, and new elements are added. This process continues until the array reaches maximum capacity.

**Advantages:**
- Flexibility: the size of the array can grow as needed.
- Efficient use of memory since allocation happens only when necessary.
- Ability to dynamically add and remove elements.

**Disadvantages:**
- Moving data when increasing the array size can cause temporary delays (O(n)).
- Increased overhead for memory management.

---

### Stack

A stack is a data structure that operates on a LIFO (Last In, First Out) principle, meaning the last added element will be the first one removed. Elements are added to the stack using the **push** operation and removed using the **pop** operation. A new element is placed at the top of the stack, and when an element is removed, it is taken from the top. The stack may have a size limit, and when it reaches maximum capacity, memory may be reallocated to increase its size.

**Advantages:**
- Simple interface for adding and removing elements.

**Disadvantages:**
- Limited access to elements: you cannot access elements in the middle of the stack without removing the top elements.

---

| **Operation**         | **Description**                                         | **Time Complexity** |
|-----------------------|---------------------------------------------------------|---------------------|
| **Read**              | Reading an array element                                | O(1)                |
| **Write (to the end)**| Writing a new element to the end of the array           | O(1)                |
| **Write (to position)**| Writing to any position other than the end             | O(n)                |
| **Traverse**          | Going through all elements in the array                 | O(n)                |
| **Delete (from end)** | Deleting the last element                               | O(1)                |
| **Delete (from position)**| Deleting an element from any other position         | O(n)                |
