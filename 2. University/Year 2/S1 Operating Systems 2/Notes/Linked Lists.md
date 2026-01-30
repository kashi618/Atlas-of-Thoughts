---
tags:
  - OS2
aliases:
---
## Arrays VS Link Lists
- The size of an array is fixed at run time
- If an array is full, it cannot add any more records
- List lists uses nodes of data

## Unique Properties
- Nodes can be created and deleted from **any** position in the list, if you have a reference

## Creating Nodes
```c showlinenumbers
struct ListNode {
	char value;                // Variable to store data
	struct ListNode *nextPtr; // Pointer to next node
} typedef ListNode ListNode;
```
- Datatype for `value` can be anything
- `struct ListNode *nextPtr` stores the address of a `ListNode`. Basically, it can store the memory address of a node.

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

## Insert()
This function has 4 possible cases:
1. Insert into an empty list
2. Insert at start of list
3. Insert at end of list
4. Insert at middle of list

However, we are able to merge many of these into:
1. Insert as first node (case 1 and case 2)
2. Insert in middle or end of list (case 3 and case 4)

### Function Signature
Lets call the function to insert a node `insert()`

```c showlinenumbers
void insert(ListNode **sPtr, char value);
```
- Must be a double pointer because you need to pass the pointer by reference

This function is called using
```c showlinenumbers
void main() {
	insert(&startPtr, item);
}
```


### insert()
This function inserts node in **ascending order**.

```c showlinenumbers
void insert(ListNode **sPtr, char value) {
	// Create new node (the one we are inserting)
	ListNode *newPtr = malloc(sizeof(ListNode));
	
	if (newPtr != NULL) {// Checks if node is successfully created
		// Sets attributes for our node
		newPtr->data    = value;
		newPtr->nextPtr = NULL;
		
		// Create temporary node, for sorting in ascending order
		ListNode *prevPtr = NULL; 
		ListNode *currPtr = *sPtr;
		
		// Loop to find where to place the newPtr (newPtr will be between prevPtr and currPtr)
		while (currPtr!=NULL && value > currPtr->data) {
			prevPtr = currPtr;
			currPtr = currPtr->nextPtr;
		}
		
		// Case for inserting node at beginning
		if (prevPtr == NULL {
			newPtr->nextPtr = *sPtr; // Points new node to current startPtr
			*sPtr = newPtr; // Set head node to node we created
		}
		// Case for inserting between prevPtr and currPtr
		else {
			prevPtr=->nextPtr = newPtr;
			newPtr->nextPtr = currPtr;
		}
	}
	else {
		printf("Memory not available");
	}
}
```


## Delete()
This function has 2 cases of deletion:
- Delete first node
- Delete node in middle or end of list

### Function Signature
```c showlinenumbers
char delete(ListNode* *sPtr, char value);
```
- Must be a double pointer because you need to pass the pointer by reference

This function is called using
```c showlinenumbers
void main() {
	delete(&startPtr, item);
}
```

### delete()
Deletes a specified node
```c showlinenumbers
char delete(ListNode* *sPtr, char value) {
	// Delete first node if match found
	if (value == (*sPtr)->data) {
		ListNode* tempPtr = *sPtr;
		// Move node 1 (startPtr) to start at node 2 (startPtr->nextPtr)
		*sPtr = (*sPtr)->nextPtr;
		free(tempPtr);
		return value;
	}
	else {
		ListNode* previousPtr = *sPtr;
		ListNode* currentPtr = (*sPtr)->nextPtr; // Set to nextPtr since first node already checked
		
		// Loop until match found (node to be deleted at currentPtr)
		while (currentPtr != NULL && currentPtr->data != value) {
			previousPtr = currentPtr;
			currentPtr = currentPtr->nextPtr;
		}
		
		// Delete node at currentPtr
		if (currentPtr != NULL) {
			/* 
			   EXAMPLE 
			   Node 1 = previousPtr
			   Node 2 = currentPtr
			   Node 2 is to be deleted
			   Node 1 is set to point at node 3 (node2->nextPtr)
			   If node 3 doesn't exist, it points to NULL (default nextPtr is NULL)
			*/
			previousPtr->nextPtr = currentPtr->nextPtr;
			
			// Free deleted node
			free(currentPtr);
			 
			return value;
		}
	} // END else
	
	return '\0';
}
```


# See Also
[[$ Operating Systems 2]]
[[$ C - Programming Language]]