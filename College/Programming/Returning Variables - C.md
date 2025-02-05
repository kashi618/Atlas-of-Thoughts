---
tags:
  - C
  - ComputerScience
  - Variables
---
To store a value inside a variable, a variable must first be [[Declaring and Initializing Variables - C|declared]].
```c showlinenumbers
printf("variableDelimeter",variableName);
```
[[Delimeters - C]]

## Example
```c showlinenumbers
#include <stdio.h>

int main() {
	int var1 = 10;
	
	// Prints out the value of var1
	printf("Var 1 is %d",var1);
}
```

# See Also
[[Variables - C]]