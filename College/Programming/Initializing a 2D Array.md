---
tags:
  - C
  - ComputerScience
  - Arrays
  - 2D-Arrays
---

```c
dataType arrayName[ROW][COLUMN];
```

## Example
``` c
#include <stdio.h>

int main () {
	// Method 1
	int numbers[4][3] = {1,2,3,4,5,6,7,8,9,10,11,12};
	
	// Method 2
	int numbers[4][3] = {1,  2,  3,
						 4,  5,  6,
						 7,  8,  9,
						 10, 11, 12}
	
	// Method 3
	int numbers[4][3] = { {1,  2,  3},
						  {4,  5,  6},
						  {7,  8,  9},
						  {10, 11, 12} }
	
}

```

# See Also
[[Arrays - C]]