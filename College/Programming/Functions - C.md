---
tags:
  - C
  - Functions
  - ComputerScience
---
## Creating Functions
``` c
returnType functionName(parameter1, parameter2, parameter3) {
	// code to be executed
}

```


``` c
#include <stdio.h>

// Creates a function called meow
void meow(void) {
	printf("meow\n");
}
```
- Creates a function that prints out "meow" to the user

## Initializing Functions Before Main()
``` c
returnType functionName(parameters);
```


``` c
#include <stdio.h>
w
// This declares the meow function
void meow();

// This calls the meow function in main
int main() {
	meow();
}

// This is the meow function
void meow() {
	printf("meow\n");
}
```
- Declares the meow function, so that it can be called in the main function, regardless of positioning.
- The "void meow(void)" is called the functions prototype.
