---
tags:
  - C
  - ComputerScience
  - Functions
---
This is how to initialize functions before main()
*Also known as a function prototype*
``` c
returnType functionName(parameters);
```

- returnType = The type of data the function will return
- parameter = Pieces of data passed to a functions to use
## Example
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
- Older programming standards have parameters with a named variable. Nowadays, it is redundant. ~~meow(int var1)~~  -> meow(int)
# See Also
[[Functions - C]]