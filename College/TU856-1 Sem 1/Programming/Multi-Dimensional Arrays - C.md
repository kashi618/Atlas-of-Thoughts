---
tags:
  - C
  - ComputerScience
  - Arrays
---
## 2D Arrays
```c
dataType arrayName[ROW][COLUMN];
```
### Example
``` c
int array[ROWS][COLS] = { 
	{1, 2, 3, 4}, 
	{5, 6, 7, 8}, 
	{9, 10, 11, 12} 
};

int array[ROWS][COLS] = {1, 2, 3, 4,5, 6, 7, 8,9, 10, 11, 12};
```
## Printing Multi-Dimensional Arrays
``` c
// Print the 2D array 
for (i=0; i<ROWS; i++) { 
	for (j=0; j<COLS; j++) { 
		printf("%d ", array[i][j]); 
	} 
} 
```

# See Also
[[Arrays - C]]
