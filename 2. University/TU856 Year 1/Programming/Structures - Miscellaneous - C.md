---
tags:
  - C
aliases:
---
## Initializing a Structure (Structure with Set Variables)
```c showlinenumbers
#include <stdio.h>

// Structure Template
struct studentInfo {
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
	
	// End program
	return 0;
}
```

## Initializing Structure with Global Variables
You can also create a structure variable directly from the structure template, such as this. However, the downside of this approach is that the structure will be global.

```c showlinenumbers
struct {
	int age;
	char course[50];
	int results[5];
} johnDoe, JaneDoe;
```


# See Also
[[$ C - Programming Language]]