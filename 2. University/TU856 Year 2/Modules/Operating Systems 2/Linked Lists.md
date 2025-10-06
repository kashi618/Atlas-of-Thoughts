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
struct ListNode {
	char data;                // Variable to store data
	struct ListNode *nextPtr; // Pointer to next node
} typedef ListNode ListNode;


int main(void) {
	ListNode*

}
```

# See Also
[[$ Operating Systems 2]]