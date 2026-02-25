---
tags:
  - AlgorithmsAndDataStructures
aliases:
---
## What is it?
A heap is a way to implement a priority queue, that obeys the [[Heap Condition|heap condition]]. It is also a form of a [[Binary Tree|binary tree]].

**Example Tree Diagram**
![[Heap Example.png|200]]

### Characteristics
- Is a **complete binary tree structure**
	- This means all levels are fully filled, except the last level, which is filled from left to right
- **Obeys heap condition** (heap property)
	- Max-Heap: Every parent node is greater or equal to its children
	- Min-Heap: Every parent node is less than or equal to its children

### Pit Falls
For each heap, the order of nodes per level, does not matter. Only the relationship between a parent and its children.
This means that both these two heaps are valid
```
     90
   /    \
  40    70    <- (order of 40 and 70 doesn't matter)
 /  \  /  \
20 60 10  30

[90, 40, 70, 20, 60, 10, 30]
```
```
     90
   /    \
  70    40    <- (order of 40 and 70 doesn't matter)
 /  \  /  \
60 20 30  10

[90, 70, 40, 60, 20, 30, 10]
```

## Types of Heaps
### Min-Heap
```
     20
   /    \
  30    40
 /  \  /  \
50 70 60  90

[20, 30, 40, 50, 70, 60, 90]
```

### Max-Heap
Every parent node is greater or equal to its children
```
     90
   /    \
  50    70
 /  \  /  \
20 40 30  60

[90, 50, 70, 20, 40, 30, 60]
```

## Heap Functions
[[Heap Functions]]

# See Also
[[$ Algorithms & Data Structures]]
