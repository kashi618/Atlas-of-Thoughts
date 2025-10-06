---
tags:
  - OS2
aliases:
---
6## Arrays VS Link Lists
- The size of an array is fixed at run time
- If an array is full, it cannot add any more records
- List lists uses nodes of data

## Nodes
In a linked list, a node has two parts:
1. One for containing data
2. A pointer to another node


## Link List in C
**Creating a node struct**
```c showlinenumbers
struct ListNode {
	char data;                // Variable to store data
	struct ListNode *nextPtr; // Pointer to next node
} typedef ListNode ListNode;
```


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