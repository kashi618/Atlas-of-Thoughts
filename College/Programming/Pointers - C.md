---
tags:
  - C
  - ComputerScience
  - Pointers
---
- Stores the address location of a variable, in hexadecimal.
- The datatype used to declare a pointer variable is used to store the hex value of that datatype.
- Regular variable, as in it can used in printf normally

``` c
dataType *pointerName;
```

```c
pointerName = &variableName
```
## Example
``` c 
#include <stdio.h>

int main () {
	int *ptr1;
	int var1;
	
	var1 = 10;
	ptr1 = &var1;
	
	printf("var1 contains %d, with the memory address of %p\n",var1,ptr1);
}
```

## Uses
Used for [[Dynamic Memory Allocation - C|dynamic memory allocation]], for storing values.

# See Also
[[Variables - C]]
[[Dereference Operators - C]]
[[Pointers and Arrays - C]]