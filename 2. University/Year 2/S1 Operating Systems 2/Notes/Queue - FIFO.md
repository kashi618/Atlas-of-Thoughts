---
tags:
  - OS2
aliases:
---
A queue is a **first in first out** type structure.
It uses the `enqueue()` and `dequeue()` functions to add and remove a node from the queue.

## Tips
In a queue:
- `push()` adds nodes to the top/head of the queue
- `pop()` removes nodes from the bottom/tail of the queue
- nodes point from head -> tail

| Keywords | Meaning                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| headPtr  | points to the top of the queue                                                                                |
| tailPtr  | points to the bottom of the queue                                                                             |
| value    | attribute of a node, stores a value                                                                           |
| tempPtr  | stores address of a node to be deleted (so it doesn't get lost when you replace the topPtr with the next one) |

## Structure
![[Pasted image 20251101184326.png]]

**structure in C**
```c showlinenumbers
struct queueNode {
	int data;
	struct stackNode *nextPtr;
};
typedef struct stackNode StackNode
```

**main function in C**
```c showlinenumbers
int main(void) {
	QueueNode* headPtr = NULL;
	QueueNode* tailPtr = NULL;
	
	// Adding a node
	int value = scanf("%d");
	enqueue(&headPtr, &tailptr, value)
	
	// Removing a node
	dequeue(&headPtr, &tailPtr);
	
	return 0;
}
```

## Enqueue()
When adding a node into a queue, it is added to the end of the queue, the tailPtr then points to that new node.

**To do this:**
1. Create a new queue node
2. Set node attributes
3. Case 1: Queue is empty
   - headPtr AND tailPtr will point to the new node
   
   Case 2: Queue is NOT empty
   - tailPtr (last node) will point to the new node
4. Set tailPtr as the new node



### enqueue() function
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
		*tailPtr = newPtr;
	}
	else {
		printf("No memory available to create node");
	}
}
```

## Dequeue()

Removing a node from a queue is very similar to removing a node from a [[Stacks - pop() - C|stack]]. You only need to remove the uppermost one. it, the headPtr.

**To do this:**
1. Set the headPtr to tempPtr.
2. Set headPtr to point to the new node 
3. Free tempPtr

### dequeue() function
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