---
tags:
  - C
aliases:
---

## Creating a Structure Pointer
This is a pointer that points to the address location of a variable in the structure.
```c showlinenumbers
struct structure_tag *pointer_name;
```

**Example**
```c showlinenumbers {20-23}
#include <stdio.h>

// Structure Template
struct studentInfo { // Structure Tag
	// Structure Members
	char  sex;
	int   age;
	int   roleNumber;
	float totalMarks;
};

int main(void) {
	// Initialize Structure Member John_Doe
	struct studentInfo John_Doe = { 'M',    // sex
									24,     // age
									1,      // roleNumber
									95.25   // totalMarks
								  };
	
	// Create structure pointer
	struct studentInfo *ptr;
	// Assign pointer to address location of John_Doe
	ptr = &John_Doe;
	
	// End program
	return 0;
}
```

## Dereferencing Structure Pointer
There are two ways to dereference a structure pointer.

**1) Dereferencing Structure Pointer**
```c showlinenumbers
(*ptr).structureMember
```
  
**2) Arrow Notation**
```c showlinenumbers
ptr -> structureMember
```

- Both these methods do the same thing. However, arrow notation is preferred due to its readability.
- To move onto the next element if you are dealing with a structure array, just add one to the pointer
  `(ptr + i) -> structureMember`

**Example**
```c showlinenumbers
#include <stdio.h>

// Structure Template
struct studentInfo { // Structure Tag
	// Structure Members
	char  sex;
	int   age;
	int   roleNumber;
	float totalMarks;
};

int main(void) {
	// Initialize Structure Member John_Doe
	struct studentInfo John_Doe = { 'M',    // sex
									24,     // age
									1,      // roleNumber
									95.25   // totalMarks
								  };
	
	// Create structure pointer
	struct studentInfo *ptrJohn;
	// Assign pointer to address location of John_Doe
	ptrJohn = &John_Doe;
	
// Printing John's age using the structure pointer
	// Method 1 (dereferncing pointer)
	printf("Age: %d\n", (*ptrJohn).age);
	
	// Method 2 (arrow notation)
	printf("Age: %d\n", ptrJohn -> age);
	
	// End program
	return 0;
}
```

# See Also
[[$ C - Programming Language]]