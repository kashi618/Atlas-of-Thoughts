---
tags:
  - OS2
aliases:
---


## Creating Nodes Struct
```c showlinenumbers
struct ListNode {
	char value;                // Variable to store data
	struct ListNode *nextPtr; // Pointer to next node
} typedef ListNode ListNode;
```
- Datatype for `value` can be anything
- `struct ListNode *nextPtr` stores the address of a `ListNode`. Basically, it can store the memory address of a node.
- 

**Using the node struct**
```c showlinenumbers
#include <stdio.h>
#include <stdlib.h>

// Creating Linked list Struct
struct ListNode {
	char data;                // Variable to store data
	struct ListNode *nextPtr; // Pointer to next node
} typedef ListNode ListNode;

// Main Function
int main(void) {
	char value;
	 
	// Create a new node
	ListNode* node = malloc(sizeof(ListNode));
	
	// Get character
	printf("Enter a char: ");
	scanf("%c", &value);
	
	// Assign value to node (and check if malloc successfull)
	if (node != NULL) {
		node -> data = value;
		
		// End linked list, by setting next node to NULL
		node -> nextPtr = NULL;
	}
	
	// Free node
	free(node);
	return 0;
}
```


# See Also
[[$ Operating Systems 2]]