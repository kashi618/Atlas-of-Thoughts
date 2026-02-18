---
tags:
  - AlgorithmsAndDataStructures
aliases:
---
## What is it?
A queue where elements are processed based on priority, not arrival order such as queues (LIFO)
The highest priority is stored at the front, and will be removed first
Meanwhile, the lowest priority is stored at the back and is removed last

**Example**
Lets say we have these elements `A B X Z`, where A is the lowest priority and Z is the highest
In a priority queue, it would look like this.
`Z -> X -> B -> A`

## Priority Queue Implementations
### Sorted Linked List/Array
One way to implement a priority queue is through a sorted or unsorted array.

| Queue Type     | remove() | insert() |
| -------------- | -------- | -------- |
| Sorted Array   | O(1)     | O(n)     |
| Unsorted Array | O(n)     | O(1)     |

**Unsorted Array**
In a unsorted array, the array simply holds elements without any order. This means that inserting values is very quick, as you place it in the next available spot. However, you will need to go through each element if you want to remove a value.


**Sorted Array**
In a sorted array, each element is sorted by priority. This means that when you insert a value, it has to go through each element to find its position. However, if a value needs to be removed, it is instant as it is sorted.



### Heaps
Another way to implement priority queues is through [[Heaps]]. 


# See Also
[[$ Algorithms & Data Structures]]
