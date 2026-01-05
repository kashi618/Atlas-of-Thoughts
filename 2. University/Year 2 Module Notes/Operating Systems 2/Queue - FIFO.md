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
- [[Queue - dequeue() - C]]
- [[Queue - enqueue() - C]]

# See Also
[[$ Operating Systems 2]]