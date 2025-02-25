---
tags:
  - C
  - ComputerScience
  - UNFINISHED
---

## Arrays and Memory Addresses

The name of an array, is the same as the memory address location of the first element of that array.
```c showlinenumbers
#include <stdio.h>

int main () {
	int a[5];
	
	printf("a is %p, and &a[0] is %p",a,&a[0]);
	
	return 0;
}
```


```
a      =    &a[0];
a+1    =    &a[1];
a+2    =    &a[2];
a+3    =    &a[3];
```

## Arrays and Dereferencing
The value of an array, can also be found by dereferencing the memory address, which can be found above.

```
*a       =    a[0];
*(a+1)   =    a[1];
*(a+2)   =    a[2];
*(a+3)   =    a[3];
```


# See Also
[[Arrays - CC]]
[[Pointers - C]]
[[Subscript and Pointer Notation - C]]
[[Dereference Operators - C]]