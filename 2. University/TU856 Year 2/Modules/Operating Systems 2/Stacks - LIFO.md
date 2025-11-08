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
- [[Stacks - push() - C]]
- [[Stacks - pop() - C]]

# See Also
[[$ Operating Systems 2]]