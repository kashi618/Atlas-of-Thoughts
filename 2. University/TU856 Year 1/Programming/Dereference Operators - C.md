---
tags:
  - C
---
This is used to access the value stored at the memory address held by a pointer.
- It dereferences a pointer, returning the value stored
- Also known as the Indirection Operator
```c showlinenumbers
*pointerName
```

## Example
```c showlinenumbers
int var1 = 10;
int *ptr1;

ptr1 = &var1;

// The dereference operator is used here
printf("%d",*ptr1);
```

# See Also
[[Pointers - C]]
[[Subscript and Pointer Notation - C]]
[[$ C - Programming Language]]