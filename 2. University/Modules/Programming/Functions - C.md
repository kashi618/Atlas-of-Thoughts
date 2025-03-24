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
int meowmeow(int, int);

int main(void) {
	meowmeow(5,5);
}

void meowmeow(int a, int b) {
	printf("I meowed %d% times",a);
	printf("She meowed %d% times",b);
}
```

# See Also
[[$ C - Programming Language]]