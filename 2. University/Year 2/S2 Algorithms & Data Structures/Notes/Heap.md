---
tags:
  - AlgorithmsAndDataStructures
aliases:
---
## What is it?
Heap is a complete binary tree obeying the heap condition.
**Heap Condition**
The priority of the parent node, greater or equal than the priority of the left and right child


## Example
**Example Tree Diagram**
![[Pasted image 20260130144653.png]]
- Lets insert a value of `10`. We need to compare the parent, and then its respective childs

## Heap Functions
### insert()
Pseudocode
```python
insert(int x)
	a[++n] = x
	siftUp(n)

siftUp(int k) # k is heap position
	v = a[k]
	a[0] = INFINITY/INT_MAX
	 while (v > a[k])
		 a[k] = a[k/2]
		 k = k/2
	a[k] = v
```

# See Also
[[$ Algorithms & Data Structures]]
