---
tags:
  - C
aliases:
---
Functions are a way to reuse certain code segments. They known as sometimes known as "methods".

## Creating Functions
```c showlinenumbers
returnType functionName(datatype param1, datatype param2) {
	// Code to be executed
	
	// This line only used if a return type is specified
	return var;
}
```
- Only one piece of data can be returned from a function

**Example: Function that prints meow**
```c showlinenumbers

int main(void) {

}
```
NOTE: in this case, the function is declared before the main function. Generally this is bad example, but for the sake of an example, lets ignore it. Please check out

## Function Signatures
Also known as function prototypes. These are used to declare a function before the main function. It informs the compiler about what other functions are present in the program, so that it may go to it when it is called in main.
```c showlinenumbers
returnType functionName(parameters);
```

**Example**
```c showlinenumbers
// Function signature
int meowmeow(int, int);

// Main function
int main(void) {
	meowmeow(5,5);
}

// meowmeow function
void meowmeow(int a, int b) {
	printf("I meowed %d% times",a);
	printf("She meowed %d% times",b);
}
```

## Functions and Arrays
### Function Signature
There are two ways to write the function signature for a function that passes an array
**Method 1: Subscript notation (most common)**
```c showlinenumbers
// Function signature
int coolFunction(int[]);
```

```c showlinenumbers
// Alternative Way
int coolFunctin(int arr[]);
```

**Method 2: Pointer notation**
```c showlinenumbers
// Function signature
int coolFunction(int *arr)
```

### Passing Arrays
When passing an array to a function, only the array name is needed.
*[[Arrays - C|Recall that the name of the array is the same as the memory location of the first element in the array]]*

```c showlinenumbers
int main(void) {
	functionName(arrayName);
}
```

**Example: Function that returns all numbers in an array**
```c showlinenumbers {4,12,19}
#include <stdio.h>

// Function signatures
void returnArray(int [], int);

// Main function
int main(void) {
	int size = 5;
	int nums[size] = {1,2,3,4,5}
	
	// Pass array to function
	returnArray(nums, size);
	
	// End program
	return 0;
}

// Cool Function
void returnAray(int arr[], int size) {
	// Print each element in an array
	for (int i=0; i<size; i++) {
		printf("\n%d",arr[i]);
	}
}
```

## Return From Function Without Datatype
```c showlinenumbers
void cool(void) {
	return;
}
```

# See Also
[[$ C - Programming Language]]