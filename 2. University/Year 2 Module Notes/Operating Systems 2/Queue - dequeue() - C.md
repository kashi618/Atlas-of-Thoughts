---
tags:
  - OS2
aliases:
---

Removing a node from a queue is very similar to removing a node from a [[Stacks - pop() - C|stack]]. You only need to remove the uppermost one. it, the headPtr.

**To do this:**
1. Set the headPtr to tempPtr.
2. Set headPtr to point to the new node 
3. Free tempPtr

## dequeue() function
```c showlinenumbers {3-5, 7-8, 16-17}
// Removes node from queue, and returns its value
int dequeue(QueueNode* *headPtr, QueueNode* *tailPtr) {
	// 1. This will store the node that we will delete
	StackNode* tempPtr = *headPtr;
	int dequeueValue = (*headPtr)->data;
	
	// 2. Change address of headptr to the next node
	*headPtr = (*headPtr)->nextPtr;
	
	// If queue is empty (no more nodes after dequeue-ing)
	// set tailPtr to NULL
	if (*headPtr == NULL) {
		*tailPtr = NULL;
	}
	
	// 3. Free tempPtr
	free(tempPtr);
}
```

# See Also
[[$ Operating Systems 2]]
[[$ C - Programming Language]]
[[Queue - FIFO]]
[[Queue - enqueue() - C]]