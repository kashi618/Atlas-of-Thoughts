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
4. 



## enqueue() function
```c showlinenumbers
void enqueue(QueueNode* *headPtr, QueueNode* *tailPtr, int value) {
	// Create new node
	QueueNode* newPtr = malloc(sizeof(QueueNode));
	
	if (newPtr != NULL) {
		// Set node attributes
		newPtr->data = value;
		newPtr->nextPtr = NULL;
		
		
		// if queue is empty, insert node at head
		if (*headPtr == NULL) {
			*headPtr = newPtr;
		}
		// if the queue isn't empty (tailPtr currently points at a node)
		// set the last node to point to the new node (*tailPtr is the last node)
		else {
			(*tailPtr)->nextPtr = newPtr;
		}
		
		// Set newPtr as the new tailPtr
		*tPtr = newPtr;
	}
	else {
		printf("No memory available to create node");
	}
}
```

# See Also
[[$ Operating Systems 2]]