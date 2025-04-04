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
There are two ways of dereferencing a structure pointer.

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

### 1) Dereferencing the Structure Pointer
```c showlinenumbers

```
```c showlinenumbers
printf("%d", 
```

### 2) Arrow Operator

# See Also
[[$ C - Programming Language]]