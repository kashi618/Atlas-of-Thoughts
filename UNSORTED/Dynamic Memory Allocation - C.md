---
tags:
  - C
  - ComputerScience
  - DynamicMemoryAllocation
  - MemoryAllocation
---
Sometimes there are situations where we have an array. However, we do not know how much memory is required when the program is run. Therefore, we need to allocate the memory dynamically, as the program is running. This can be done is 2 ways..

## malloc()
Allocated a contiguous block of memory, and returns a pointer to the start of the allocated block
``` c
#include <stdlib.h>>
pointerName = malloc(size);
```
- **size** is the toal number of **bytes** required for the memory block
- You can use [[sizeof() - c|sizeof()]] to find the amount of bytes in a particular data type.
- Note: once the memotry block is allocated, it contains [[Random Data - C|random data]]

### Example
``` c
#include <stdio.h>
#include <stdlib.h>

int main () {
	int numbers;
	int *ptr;
	int num_bytes;
	int i;
	
	
	// Finds how many numbers wil be entered
	printf("How many numbers will you enter? ");
	scanf("%d",&numbers);	
	
	// Calcualtes the amount of bytes neede
	num_bytes = numbesr * sizeof(int);
	
	// Allocates a block of memory
	ptr = malloc(no_bytes);
	
	// Checks if malloc was successful, if memory has been allocated
	if (ptr == NULL){
		printf("\nFailed to allocate memory\n");
	}
	else {
		print("\nMemory allocated successfully");
		printf("ENter the set of &d numbers", numbers);
		
		// Allows user to enter data inside of allocated memory block
		for (i=0; i<numbers; i++) {
			scanf("%d", & *(ptr+i));
		}		
	}
	
	for (i=0; i<numbers; i++) {
	printf()}
}
```


# See Also
[[Pointers - C]]