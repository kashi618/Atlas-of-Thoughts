---
tags:
  - OS2
aliases:
---

When removing a value from a stack, you only need to remove the uppermost one. ie, the topPtr.

**To do this:**
1. Set the topPtr to tempPtr.
2. Change the address that topPtr is pointing to, so that it points to the next node in the stack
3. Free the tempPtr

## pop() function
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
[[Stacks]]
[[Stacks - push() - C]]