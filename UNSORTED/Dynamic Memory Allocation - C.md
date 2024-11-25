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
- Note: once the memotry block is allocated, it contains [[Random Data - C|random data]]

### Example
``` c
#include <stdio.h>
#include <stdlib.h>

int main () {
	
	
	
}
```



# See Also