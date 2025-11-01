---
tags:
  - OS2
aliases:
---

When adding a node onto a stack, it should point to the topPtr

**To do this:**
1. Create a new stack node
2. Set node value and have it point the topPtr (top of stack)
3. Set topPtr to the new node created

## push() function
```c showlinenumbers
void push(StackNode* *topPtr, int value) {
	// Create new node
	StackNode* newPtr = malloc(sizeof(StackNode));
	
	if (newPtr != NULL) {
		// Set node attributes
		newPtr->data = value;
		newPtr-nextPtr = *topPtr;
		// Let topPtr point to new node 
		*topPtr = newPtr;
	}
	else {
		printf("No memory available to create node");
	}
}
```
# See Also
[[$ Operating Systems 2]]