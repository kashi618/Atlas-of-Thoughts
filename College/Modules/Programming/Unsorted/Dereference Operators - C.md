---
tags:
  - C
  - ComputerScience
  - Pointers
  - UNFINISHED
---

Used to access the actual value/contents of an address location, stored in a pointer variable. Finds the value of an address location.
**NOT TO BE CONFUSED WITH CREATING VARIABLES (int \*ptr1)**
Also known as the Indirection Operator
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