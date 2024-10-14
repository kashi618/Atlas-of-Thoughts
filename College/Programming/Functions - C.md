---
tags:
  - C
  - Functions
  - ComputerScience
---
## Creating Functions
``` c
#include <stdio.h>

// Creates a function called meow
void meow(void) {
	printf("meow\n");
}
```
- Creates a function that prints out "meow" to the user

## Declaring Functions
``` c
#include <stdio.h>

// This declares the meow function
void meow(void);

// This calls the meow function in main
int main() {
	meow();
}

// This is the meow function
void meow(void) {
	printf("meow\n");
}
```
- Declares the meow function, so that it can be called in the main function, regardless of positioning.
- The "void meow(void)" is called the functions prototype.

## Taking in Arguments for Functions
``` c
#include <stdio.h>

void meow(int n);

// Calls the function meow, 3 times
int main() {
	meow(3);
}

void meow(int n) {
	// Will loop and add 1 to i, until 1 is equal to n
	for (int i = 0; i < n; i++) {
		printf("meow\n");
	}
}
```


