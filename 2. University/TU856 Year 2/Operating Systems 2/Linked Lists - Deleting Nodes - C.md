---
tags:
  - OS2
aliases:
---
## Brief
Lets call this function to delete a node `delete()`

This function has 2 cases of deletion:
- Delete first node
- Delete node in middle or end of list

## Function Signature
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

## delete()
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
			 
			return value
		}
	} // END else
	
	return '\0';\
}
```

# See Also
[[$ Operating Systems 2]]