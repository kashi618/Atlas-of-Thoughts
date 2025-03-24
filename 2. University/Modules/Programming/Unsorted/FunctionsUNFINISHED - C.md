---
tags:
  - CMPU1025
  - UNFINISHED
---
Functions are a way to reuse certain code segments and blocks throughout a program. All programming languages have built in functions, and also allows a developer to make their own functions

## Creating Functions
```c showlinenumbers {1,3}
returnType functionName( dataType parameter1, datatype parameter2) {
	// code to be executed
	return data;
}

/*
returnType = The type of data the function will return
parameter = Pieces of data passed to a functions to use
return = Ends function, and goes back to where it was called
*/
```
[[EXAMPLE - Creating Functions|Example of a function]]


- In c, you can only return a SINGLE piece of data.
- Older programming standards have parameters with a named variable. Nowadays, it is redundant. meow(int var1)  -> meow(int)

- You don't need to add the variable name on line 4

## Function Signatures
This is how to initialize functions before main()
*Also known as a function prototype*
```c showlinenumbers
returnType functionName(parameters);
```


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
[[Pass by Value & Pass by Reference - C]]
[[Pointers - C]]