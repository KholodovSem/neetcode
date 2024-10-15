# RAM (Random Access Memory)

**Random Access Memory (RAM)** is used for temporarily storing data and instructions that the processor is currently working with. Access to data in RAM is significantly faster than access to data on a hard drive or SSD.

### Working Principle

RAM stores data during the operation of a program and frees it upon power-off. Any program is loaded into RAM before execution to ensure fast access to its data and instructions for the processor.

### Structure

RAM consists of a continuous block of memory cells, where each cell has a unique address and stores 1 byte of data.

### Interaction of C++ with RAM

When you declare a variable or create an array in C++, the compiler reserves memory for them in RAM. Each variable is allocated a specific number of bytes depending on its type (e.g., 4 bytes for `int`). In the case of arrays, a continuous block of memory is allocated, where each array element occupies the same number of bytes.

#### Example of Working with an Array in C++

In this example, an array of integers `arr` is stored in RAM:

```cpp
int arr[5] = {10, 20, 30, 40, 50};
```

The array consists of 5 elements, each of which is 4 bytes (type int). The total amount of memory allocated for this array will be:

```
5 × 4 = 20 bytes
```

Each element of the array has its address in memory, starting from the base address that corresponds to the first element (arr[0]).

#### Addressing in the Array

When you access an array element, C++ uses the following formula to compute its address in RAM:

```
Address of element = Base address of array + (i × Size of element)
```

- **Base address of the array** is the address of the first element of the array `arr[0]`.
- **i** is the index of the array element.
- **Size of the element** is the number of bytes occupied by each element (for example, for the type `int`, it is 4 bytes).

##### Example:

Let’s take an array:

```cpp
int arr[3] = {100, 200, 300};
```

Assuming the base address of arr[0] is 1000. Then:
- **Address of `arr[0]`** = 1000
- **Address of `arr[1]`** = 1004
- **Address of `arr[2]`** = 1008

This means that to access any element of the array, the above formula is used, which provides efficient access to data in RAM with a time complexity of O(1), as the offset for any index can be calculated directly.
