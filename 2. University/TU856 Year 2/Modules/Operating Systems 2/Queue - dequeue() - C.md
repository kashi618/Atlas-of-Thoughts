---
tags:
  - OS2
aliases:
---

Removing a node from a queue is very similar to removing a node from a [[Stacks - pop() - C|stack]]. You only need to remove the uppermost one. it, the headPtr.

**To do this:**
1. Set the headPtr to tempPtr.
2. Change the address the headPtr is pointing to, so that it points to the next node in the queue.
3. Free tempPtr

## dequeue() function
```c showlinenumbers
// Removes node from queue, and returns its value
int dequeue(QueueNode* *headPtr, QueueNode* *tailPtr) {
	// This will store the node that we will delete
	StackNode* tempPtr = *headPtr;
	int dequeueValue = (*headPtr)->data;
	
	// Change address of headptr to the next node
	*headPtr = (*headPtr)->nextPtr;
	
	// If queue is empty (no more nodes after dequeue-ing)
	// set tailPtr to NULL
	if (*headPtr == NULL) {
		*tailPtr = NULL;
	}
	
	// Free tempPtr
	free(tempPtr);
}
```

# See Also
[[$ Operating Systems 2]]