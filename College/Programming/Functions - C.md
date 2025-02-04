---
tags:
  - C
  - Functions
  - ComputerScience
---
Functions are a way to reuse certain code segments and blocks throughout a program. All programming languages have built in functions, and also allows a developer to make their own functions

## Creating Functions
``` c
returnType functionName(parameter1, parameter2, parameter3) {
	// code to be executed
	return data;
}
```
- returnType = The type of data the function will return
- parameter = Pieces of data passed to a functions to use
- return = Ends function, and goes back to where it was called--

### Example
```c
#include <stdio.h>

int coolPP(int);

void main(void) {
	coolPP(5);
}

int coolPP(number) {
	for (int i=0; i< number; i++) {
		printf("pp");
	}
}
```
- In c, you can only return a SINGLE piece of data.
- Older programming standards have parameters with a named variable. Nowadays, it is redundant. meow(int var1)  -> meow(int)

## Multiple Parameter Functions
```c
#include <stdio.h>

int sum2(int, int);

void main(void) {
	int num1 = 5;
	int num2 = 10;
	
	printf("The sum of %d and %d is %d",num1 ,num2, sum(num1,num2));
	
	return 0;
}

int sum(num1, num2) {
	int sum = 0;
	sum = num1 + num2;
	
	return sum;
}
```

# See Also
[[Function Signatures - C]]
[[Order of Code - C]]