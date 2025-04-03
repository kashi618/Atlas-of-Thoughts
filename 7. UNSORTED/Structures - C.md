---
tags:
  - C
aliases:
---
A structure is a data structure that can be used to store different types of data under the same name. It is a very powerful feature in C. It is often used to create and model real world data.

## How to Use a Structure
**1) Structure Template**
```c showlinenumbers
// Structure Template
struct structureTag {
	// Structure members
	datatype variableName;
	datatype variableName;
	// ... more members
};
```
- The structure template tells the compiler that a structure exists.
- The structure member are blueprints for the types of variables you are gonna store. THEY ARE NOT VARIABLES.
-  Thus, because the structure template contains no variables, no memory has been assigned yet.
- **NOTE:** Don't forget the semicolon!
- **NOTE:** Assigning strings don't work. Use strcpy()

**2) Create Structure Variables**
```c showlinenumbers
int main(void) {
	// Creating 2 members 
	struct structureTag member1, member3; 
}
```


**3) Add/Remove Values to Members**
```c showlinenumbers 
member1.variableName = value;
```
- The name of the member comes first!
  
**Example**
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
	struct studentInfo John, Jane;
	
	// Values for John
	John.sex = 'M';
	John.age = 24;
	John.roleNumber = 1;
	John.totalMarks = 69.33;
	
	// Values for Jane
	Jane.sex = 'F';
	Jane.age = 23;
	Jane.roleNumber = 2;
	Jane.totalMarks = 96.66;
	
	// End program
	return 0;
}
```


# See Also
[[$ C - Programming Language]]