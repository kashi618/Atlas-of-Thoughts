---
tags:
  - C
aliases:
---
A string is an array of characters. What if we need an array of strings?
To create an array of strings, it can simply be done by creating an array of pointers.

## Creating a Pointer of Strings
```c showlinenumbers
char *stringArray[size] = {"Jan", ... , "Dec"};
```

**Example**
```c showlinenumbers
#include <stdio.h>
#include <string.h>

// Set size of array
#define SIZE = 4

int main(void) {
	// Initialize array of strings
	char *words[SIZE] = {"A", "BB", "CCC", "DDDD"};
	
	int i;
	
	// Print each element in array of strings
	for (i=0, i<SIZE, i++) {
		printf("%s", words[i]);
	}
	
	// End program
	return 0;
}
```
# See Also
[[$ C - Programming Language]]