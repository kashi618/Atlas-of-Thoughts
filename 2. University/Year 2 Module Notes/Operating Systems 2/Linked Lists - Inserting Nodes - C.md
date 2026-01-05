---
tags:
  - OS2
aliases:
---
## Brief
Lets call this function to insert the node `insert()`

This function has 4 possible cases:
1. Insert into an empty list
2. Insert at start of list
3. Insert at end of list
4. Insert at middle of list

However, we are able to merge many of these into:
1. Insert as first node (case 1 and case 2)
2. Insert in middle or end of list (case 3 and case 4)



## Function Signature
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


## insert()
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
# See Also
[[$ Operating Systems 2]]
[[Linked Lists]]
[[$ C - Programming Language]]