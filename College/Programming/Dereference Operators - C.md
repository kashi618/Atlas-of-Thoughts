---
tags:
  - C
  - ComputerScience
  - Pointers
---

Used to access the actual value/contents of an address location, stored in a pointer variable. Finds the value of an address location.
**NOT TO BE CONFUSED WITH CREATING RIABLES (int \*ptr1)**
Also known as the Indirection Operator
``` c
*pointerName
```

## Example
``` c
int var1 = 10;
int *ptr1;

ptr1 = &var1;

// The dereference operator is used here
printf("%d",*ptr1);
```

# See Also
[[Pointers - C]]