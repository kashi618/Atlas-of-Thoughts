Allocates a contiguous block of memory, and returns a pointer to the start of the allocated block
``` c
#include <stdlib.h>>
pointerName = malloc(size);
```
- **size** is the toal number of **bytes** required for the memory block
- You can use [[sizeof() - c|sizeof()]] to find the amount of bytes in a particular data type.
  OR
  Check calculate it yourself [[Data Types]]
- Note: once the memotry block is allocated, it contains [[Random Data - C|random data]]
- If FAILED, then it returns **NULL**
- Don't for get to free the memory block using [[free() - c]]

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
