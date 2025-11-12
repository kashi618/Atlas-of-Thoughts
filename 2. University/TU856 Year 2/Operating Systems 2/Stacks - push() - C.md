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
# See Also
[[$ Operating Systems 2]]
[[$ C - Programming Language]]
[[Stacks]]
[[Stacks - pop() - C]]