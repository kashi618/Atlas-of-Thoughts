---
tags:
  - OS2
aliases:
---
A stack is a last in first out type structure.
It uses the `push()` and `pop()` functions to add and delete a node form the stack.

Can also be known as FILO, but LIFO is used more !


## Tips
In a stack, both options `push()` and `pop()` happen at the top of the stack.


| Keywords        | Meaning                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| stackPtr/topPtr | points to the top of the stack                                                                                |
| nextPtr         | attribute of a node, stores address of the next node                                                          |
| value           | attribute of a node, stores a value                                                                           |
| tempPtr         | stores address of a node to be deleted (so it doesn't get lost when you replace the topPtr with the next one) |

## Structure
![[Pasted image 20251101163235.png]]

**structure in C**
```c showlinenumbers
struct stackNode {
	int data;
	struct stackNode *nextPtr;
};
typedef struct stackNode StackNode
```

**main function**
```c showlinenumbers
int main(void) {
	// Also known as the topPtr
	// It points to the top of the stack
	StackNode* stackPtr = NULL;
	
	// Adding a node
	int value = scanf("%d");
	push(&stackPtr, value);
	
	// Removing a node
	pop(*stackPtr);
	
	return 0;
}
```

## Push()
When adding a node onto a stack, it should point to the topPtr

**To do this:**
1. Create a new stack node
2. Set node value and have it point the topPtr (top of stack)
3. Set topPtr to the new node created

### push() function
```c showlinenumbers {2-3, 6-8, 10-11}
void push(StackNode* *topPtr, int value) {
	// 1. Create new node
	StackNode* newPtr = malloc(sizeof(StackNode));
	
	if (newPtr != NULL) {
		// 2. Set node attributes
		newPtr->data = value;
		newPtr-nextPtr = *topPtr;
		
		// 3. Let topPtr point to new node 
		*topPtr = newPtr;
	}
	else {
		printf("No memory available to create node");
	}
}
```

## Pop()

When removing a value from a stack, you only need to remove the uppermost one. ie, the topPtr.

**To do this:**
1. Set the topPtr to tempPtr.
2. Change the address that topPtr is pointing to, so that it points to the next node in the stack
3. Free the tempPtr

### pop() function
```c showlinenumbers
// Removes node from stack, and returns its value
int pop(StackNode* *topPtr) {
	// This will store the node that we will delete
	StackNode* tempPtr = *topPtr;
	int popValue = (*topPtr)->data;
	
	// Change address of topPtr to the next node
	*topPtr = (*topPtr)->nextPtr;
	
	// Free tempPtr
	free(tempPtr);
	
	return popValue;
}
```
**Note:** error checking is NOT implemented.
- You will need to check if the stack is empty
- You will need to check if the stack will point to NULL after deletion

# See Also
[[$ Operating Systems 2]]
[[$ C - Programming Language]]