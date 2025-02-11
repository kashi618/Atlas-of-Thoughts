---
tags:
  - ComputerScience
  - Arrays
  - Functions
---
## Passing a 1D Array to a Function
- Passing an array is actually using [[Pass by Value - Pass by Reference - C|pass by reference]]

### Function Signature
```c showlinenumbers
// Function Signature
dataType arrayName(datatype []);
```
- Doesn't need square brackets, as the OS knows that it is an array

### Example
```c showlinenumbers
#include <stdio.h>
#define SIZE 5
// Function Signature
int incrementArray(int []);

// Main Function
void main() {
	int i;
	int arr[SIZE];
	// Sets array to 0-4
	arr = {0,1,2,3,4};
	// Calls function to increment all values in the array
	incrementArray(arr);
	// Prints out all values in array
	for (i=0; i<SIZE, i++) {
		printf("%d\n",arr[i]);
	}
}
// Increments all value sin array
int incrementArray(int arr[]) {
	int i;
	
	for (i=0; i<SIZE; i++) {
		arr[i] += 1;
	}
}

```

### Example
```c showlinenumbers {3-4,8}
#include <stdio.h>

// Function signature
int sum_array(int []);

// Main function
int main() {  
    int values[SIZE];
    int i;
    int sum = 0;
	 
    // Enter data into the array
	printf("Enter %d numbers\n", SIZE);
    for(i = 0; i < SIZE; i++) {
        scanf("%d", &values[i]); // scanf("%d", & *(values + i));
    }
	  
    sum = sum_array(values);    // values = &values[0]
	  
    // Display the sum of the contents of the array
    printf("\nThe sum of the array is %d\n", sum);
    return 0;
}


int sum_array(int my_array[]) {
    int total = 0;
    int i;
	
    // calculate the total of the array
    for(i = 0; i < SIZE; i++) {
        total += my_array[i];
    }
	
    return total;
}
```

## Passing 2d Array


### Function Signature
```c showlinenumber
returnType arrayName(dataType [][COLUMNS]);
```
- Function signature requires the amount of **columns** to be stated, the rows is not needed


### Example



# See Also
[[Functions - C]]
[[Arrays - C]]