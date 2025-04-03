---
tags:
  - C
aliases:
---
A structure is a data structure that can be used to store different types of data under the same name. It is a very powerful feature in C. It is often used to create and model real world data.

## Initializing a Structure
**1) Structure Template**
```c showlinenumbers
// Structure Template
struct structureTag {
	// Structure members
	datatype variableName;<
	datatype variableName;
	// ... more members
};
```
- The structure template tells the compiler that a structure exists.
- The structure member are blueprints for the types of variables you are gonna store. THEY ARE NOT VARIABLES.
-  Thus, because the structure template contains no variables, no memory has been assigned yet.
- **NOTE:** Don't forget the semicolon!

**2) Create Structure Variables**
```c showlinenumbers
int main(void) {
	// Creating 2 members 
	struct structureTag member1, member3; 
}
```


**3) Add/Remove Values to Members**
```c showlinenumbers {4}
structureTag.member1 = value;

```

**Example**
```c showlinenumbers
#include <stdio.h>

// Structure Template
struct studentInfo {
	int   age;
	int   roleNumber;
	char  sex;
	float totalMarks;
};

int main(void) {
	struct studentInfo John_Doe, Jane_Doe;
	
	studentInfo.John_Doe
}
```


# See Also
[[$ C - Programming Language]]