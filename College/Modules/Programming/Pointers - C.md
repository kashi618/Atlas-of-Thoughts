---
tags:
  - C
  - ComputerScience
  - Pointers
  - UNFINISHED
---
## What is a Pointer?
- It is a variable that is used to store a memory address
- Usually, it is used to store the memory address of another variable

## Using a Pointer
`
- Stores the address location of a variable, in hexadecimal.
- The datatype used to declare a pointer variable is used to store the hex value of that datatype.
- Regular variable, as in it can used in printf normally

### Initializing Pointer
```c showlinenumbers
dataType *pointerName;
```

### Using Pointer
```c showlinenumbers
pointerName = &variableName
```
## Example
```c showlinenumbers 
#include <stdio.h>

int main () {
	// Initialize a Pointer Variable
	int *ptr1;
	
	
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
[[Pass by Value & Pass by Reference - C]]