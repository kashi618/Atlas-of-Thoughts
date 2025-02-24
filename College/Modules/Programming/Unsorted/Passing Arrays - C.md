---
tags:
  - ComputerScience
  - Arrays
  - Functions
  - UNFINISHED
---

## Passing a 1D Array to a Function
- Passing an array is actually using [[Pass by Value & Pass by Reference - C|pass by reference]]
- A 1D array can can be passed to a function using only its name, (which is a pointer to the first element)

### Function Signature
```c showlinenumbers
// Function Signature
dataType arrayName(datatype []);
```
- Don't need to add size of the array

### Example
```c showlinenumbers {6,15,19}
#include <stdio.h>

#define SIZE 5

// Function Signature
int sumArray(int []);

// Main Function
void main() {
	int i;
	int arr[SIZE];
	// Sets array to 0-4
	arr = {0,1,2,3,4};
	// Calls function to find the sum of the array
	printf("The sum is: %d",incrementArray(arr));
}

// Finds the sum of an array
int sumArray(int arr[]) {
	int i;
	int sum;
	// Increments elements in the array
	for (i=0; i<SIZE; i++) {
		sum += arr[i];
	}
	// Return the answer
	return sum;
}
```

## Passing 2d Array
### Function Signature
```c showlinenumber
returnType arrayName(dataType [][COLUMNS]);
```
- Function signature requires the amount of **columns** to be stated, the rows is not needed

### Example
```c showlinenumbers {3-4,12,19,23}
#include <stdio.h>

#define ROW 5
#define COL 5

// Function Signature
int sumArray(int [][COL]);

// Main Function
void main() {
	int i;
	int arr[ROW][COL];
	// Sets array
	arr = {0,1,2,3,4,
		   5,6,7,8,9,
		   0,1,2,3,4,
		   5,6,7,8,9};
	// Calls function to find the sum of the array
	printf("The sum is: %d",incrementArray(arr));
}

// Finds the sum of an array
int sumArray(int arr[]) {
	int i; int j;
	int sum;
	// Increments elements in the array
	for (i=0; i<SIZE; i++) {
		for (j=0; j<SIZE; j++) {
			sum += arr[i][j];
		}
	}
	// Return the answer
	return sum;
}
```


# See Also
[[Functions - C]]
[[Arrays - C]]