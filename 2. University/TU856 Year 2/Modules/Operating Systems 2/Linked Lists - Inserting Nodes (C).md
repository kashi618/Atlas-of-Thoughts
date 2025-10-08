---
tags:
  - OS2
aliases:
---
## Brief


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



# See Also
[[$ Operating Systems 2]]