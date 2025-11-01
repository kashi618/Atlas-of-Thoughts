---
tags:
  - OS2
aliases:
---

When adding a node into a queue, it is added to the end of the queue, the tailPtr then points to that new node.

**To do this:**
1. Create a new queue node
2. Set node attributes
3. Case 1: Queue is empty
   - headPtr AND tailPtr will point to the new node
   
   Case 2: Queue is NOT empty
   - tailPtr (last node) will point to the new node
4. Set tailPtr as the new node



## enqueue() function
```c showlinenumbers {2-3, 6-8, 11-14, 16-20} {22-23}
void enqueue(QueueNode* *headPtr, QueueNode* *tailPtr, int value) {
	// 1. Create new node
	QueueNode* newPtr = malloc(sizeof(QueueNode));
	
	if (newPtr != NULL) {
		// 2. Set node attributes
		newPtr->data = value;
		newPtr->nextPtr = NULL;
		
		
		// 3.1 if queue is empty, insert node at head
		if (*headPtr == NULL) {
			*headPtr = newPtr;
		}
		
		// 3.2 if the queue isn't empty (tailPtr currently points at a node)
		// set the last node to point to the new node (*tailPtr is the last node)
		else {
			(*tailPtr)->nextPtr = newPtr;
		}
		
		// 4. Set newPtr as the new tailPtr
		*tPtr = newPtr;
	}
	else {
		printf("No memory available to create node");
	}
}
```

# See Also
[[$ Operating Systems 2]]
[[Queue - FIFO]]
[[Queue - dequeue() - C]]