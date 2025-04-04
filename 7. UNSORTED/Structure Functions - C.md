---
tags:
  - C
aliases:
---
## Function Signature
```c showlinenumber
datatype functionName(struct structureTag);
```
- For function signatures, the `structureTag` is required. This is because it tells the compiler the size and layout of the structure.

## Pass by Value
```c showlinenumbers
#include <stdio.h>

// Structure template
struct studentInfo {
	int age;
};

// Function Signature
void displayAge(struct studentInfo);

// Main function
int main(void) {
	// Initialize Structure Member John_Doe
	struct studentInfo John_Doe = {24}; // Set age
	
	// Call function to display age
	displayAge(John_Doe);
	
	return 0;
}

// Prints age of student
void displayAge(struct studentInfo John_Doe) {

}
```


## Pass by Reference

# See Also
[[$ C - Programming Language]]