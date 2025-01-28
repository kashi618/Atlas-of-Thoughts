---
tags:
  - C
  - ComputerScience
  - Functions
---
This is how to initialize functions before main()
``` c
returnType functionName(parameters);
```

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
# See Also
[[Functions - C]]