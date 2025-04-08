---
tags:
  - C
aliases:
---
## Pass by Value
### Function Signature
```c showlinenumber
datatype functionName(struct structureTag);
```
- For pass by value, the `structureTag` is required for the function signature. This is because it tells the compiler the size and layout of the structure.

### Function Creation
```c showlinenumbers
datatype functionName(struct structureTag variableName) {
	// Code goes here...
}
```
## Calling func
### Example
```c showlinenumbers {8-9,16-17,23-26}
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
	
	// Call function to display age (pass by reference)
	displayAge(John_Doe);
	
	// End program
	return 0;
}

// Prints age of student (pass by reference)
void displayAge(struct studentInfo student) {
	printf("Age: %d\n", student.age);
}
```

## Pass by Reference
### Function Signature
```c showlinenumbers
datatype functionName(struct structureTag *) {
	// Code goes here...
}
```
- Just add an apostrophe.

### Function Creation
```c showlinenumbers
datatype functionName(struct structureTag *pointerName){
	// Code goes here...
}
```
- Just add an apostrophe.
  ## Calling func
**Example**
```c showlinenumbers {8-9,16-19,21-22,28-31}
#include <stdio.h>

// Structure template
struct studentInfo {
	int age;
};

// Function Signature
void displayAge(struct studentInfo *);

// Main function
int main(void) {
	// Initialize Structure Member John_Doe
	struct studentInfo John_Doe = {24}; // Set age
	
	// Create structure pointer
	struct studentInfo *ptrJohn;
	// Set pointer to address location of John_Doe
	ptrJohn = &John_Doe;
	
	// Call function to display age
	displayAge(ptrJohn);
	
	// End program
	return 0;
}

// Prints age of student (using pass by reference)
void displayAge(struct studentInfo *ptr) {
	printf("Age: %d\n", ptr -> age);
}
```

# See Also
[[$ C - Programming Language]]