---
tags:
  - C
  - Functions
  - ComputerScience
---
Functions are a way to reuse certain code segments and blocks throughout a program. All programming languages have built in functions, and also allows a developer to make their own functions

**NOTE:** When a function ends, any variable declared in the function disappears, and is considered [[Memory Leak]]

## Creating Functions
```c showlinenumbers
returnType functionName(parameter1, parameter2, parameter3) {
	// code to be executed
	return data;
}
```
- returnType = The type of data the function will return
- parameter = Pieces of data passed to a functions to use
- return = Ends function, and goes back to where it was called--

### Example
```c showlinenumbers {4,8,12}
#include <stdio.h>

// Function Signature
int coolPP(int);

// Main Function
void main(void) {
	int x;
	// Call function and store return balue inside of x
	x = coolPP(5);
	// Print out x
	printf("%d",x);
}

// User Created Function
int coolPP(int number) {
	int i;
	
	for (i=0; i<number; i++) {
		printf("pp");
	}
	
	return 5;
}
```
- In c, you can only return a SINGLE piece of data.
- Older programming standards have parameters with a named variable. Nowadays, it is redundant. meow(int var1)  -> meow(int)

- You don't need to add the variable name on line 4

## Multiple Parameter Functions
```c showLineNumbers {}
#include <stdio.h>

int sum2(int, int);

void main(void) {
	int num1 = 5;
	int num2 = 10;
	
	printf("The sum of %d and %d is %d",num1 ,num2, sum(num1,num2));
	
	return 0;
}

int sum(int num1, int num2) {
	int sum = 0;
	sum = num1 + num2;
	
	return sum;
}
```

# See Also
[[Function Signatures - C]]
[[Order of Code - C]]
[[Pass by Value - Pass by Reference - C]]
[[Pointers - C]]