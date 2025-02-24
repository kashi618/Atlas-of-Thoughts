---
tags:
  - C
  - ComputerScience
  - DynamicMemoryAllocation
  - Memorey
---
Sometimes there are situations where we have an array. However, we do not know how much memory is required when the program is run. Therefore, we need to allocate the memory dynamically, as the program is running. This can be done is 2 ways..

## malloc()
Allocated a contiguous block of memory, and returns a pointer to the start of the allocated block
```c showlinenumbers
#include <stdlib.h>>
pointerName = malloc(size);
```
- **size** is the total number of **bytes** required for the memory block
	- You can use [[sizeof() - C|sizeof()]] to find the amount of bytes in a particular data type.
	- Or you can calculate it yourself, [[Data Types - C]]
- malloc() initializes the block of memory with [[Random Data - C|random data]].
- Don't forget to free the memory block using [[free() - C]]

### Example
```c showlinenumbers
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
	
	// Calcualtes the amount of bytes needed
	num_bytes = numbers * sizeof(int);
	
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
	
	// Returns what the user inputted
	prinff("You have entered: )");
	for (i=0; i<numbers; i++) {
		printf("%d", *(ptr+1));
	}
	
	// Frees up the allocated memory block
	free(ptr);
	
	return 0;
}
```

## calloc()
Allocates a contiguous block of memory just like malloc()
```c showlinenumbers
#include <stdio.h>
pointerName = calloc(number_of_data_items, size_of_each_data_item);
```
- Takes two prompts, the amount of data you want to store, and the size of each individual item.
- When calloc() initializes a memory block, it overwrites the **block** with 0.
- Basically just better than malloc(), due to needing to write less code, so just use calloc()

# See Also
[[Pointers - C]]