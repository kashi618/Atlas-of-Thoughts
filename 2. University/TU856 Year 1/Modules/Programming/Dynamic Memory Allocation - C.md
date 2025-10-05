---
tags:
  - C
aliases:
---
DMA is used when you want to create an array at the runtime of a program (whilst a program is running). This allows you to allocate only the memory you need.

## Allocating Memory
There are 2 main functions used to allocate memory. They are very similar, however `calloc()` is often favoured.
- `malloc()`
  This function allocates memory, however random data is contained inside
- `calloc()`
  This function allocates memory, and initializes all values to zero

### Using calloc() / malloc()
Using these functions, it allocates a contiguous block of memory, and then returns the address location of the first element in that block of memory. (Due to returning only the address location, a [[Pointers - C|pointer]] variable is needed)
- You must include the `<stdlib.h>` header file.
- These functions return `NULL` if it is unable to allocate a piece of memory.

**calloc()**
```c showlinenumbers
#include <stdlib.h>
pointerName = calloc(size, datatypeSize);
```
- For calloc, all that is needed is the size needed, and the size of the datatype that is going to be stored. This can be found simply by `sizeof(int)`

**malloc()**
```c showlinenumbers
#include <stdlib.h>
pointerName = malloc(size);
```
- `size` is the amount of bytes you want to allocate. You can calculate it by `amountOfElements * sizeof(dataType)`

**Example: DMA using calloc() and malloc()**
```c showlinenumbers
#include <stdlib.h>

int main(void) {
	int *arrPtr;
	int size; // Stores how big the array is
	int type; // Specifies what datatype the array is
	
	// Step 1, set size and datatype
	size = 10;
	type = sizeof(int);
	
	// Step 2, call the calloc function
	arrPtr = calloc(size, type);
	
	// step 2.1, call the malloc function
  //arrPtr = malloc(size*type);
	
	// Step 3, We check if calloc is successfull
	// Failure to allocate memory
	if (arryPtr == NULL) {
		printf("Failed to allocate memory");
		return 1;
	}
	// Successfully allocated memory
	else {
		printf("Memory allocated successfully");
	}
	
	// Step 4, we free the memory
	free(arrPtr);
	
	// End Program
	return 0;
}
```

**Example: Simplified**
```c showlinenumbers
#include <stdlib.h>

int main(void) {
	// Allocate block of memory using calloc
	int *ptr = calloc(10,sizeof(int));
	// Check if memmory has failed
	if (*ptr == NULL) {
		printf("Failed to allocate");
		return 1;
	}
	
	for (int 1=0; i<10; i++) {
		ptr[]
	}
	return 0;
}
```
## Changing Size of Dynamically Allocated Memory
**NOTE:** This only works for dynamically allocated memory such as malloc or calloc. Statically allocated memory does not work.

**realloc()**
```c showlinenumbers
#include <stdlib.h>
pointerName = realloc(ptr, totalByteSize)
```


# See Also
[[$ C - Programming Language]]