---
tags:
  - C
aliases:
---
A structure is a data structure that can be used to store different types of data under the same name. It is a very powerful feature in C. It is often used to create and model real world data.

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

**2.1) Declare Structure Variables**
```c showlinenumbers
int main(void) {
	// Create 2 structure variables 
	struct structureTag member1, member3; 
}
```

**2.2) Declare Member Value During Initialization**
```c
struct student {
	int age;
	int studentID;
	int year;
}

void main(void) {
	struct student s1 = {
		.age = 18,
		.studentID = 123456,
		.year = 2
	};
}
```

**3.1) Changing Value of Structure Variables**
```c showlinenumbers 
member1.variableName = value;
```
- The name of the member comes first!


**FULL Example**
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
	// Declare structure variables
	struct studentInfo John, Jane;
	
	// Values for John
	printf("Enter values for John (sex, age, role number, total marks");
	scanf("%c", &John.sex);
	scanf("%d", &John.age);
	scanf("%d", &John.roleNumber);
	scanf("%f", &John.totalMarks);
	
	// Values for Jane
	printf("Enter values for Jane (sex, age, role number, total marks");
	scanf("%c", &Jane.sex);
	scanf("%d", &Jane.age);
	scanf("%d", &Jane.roleNumber);
	scanf("%f", &Jane.totalMarks);
	
	// End program
	return 0;
}
```

# See Also
[[$ C - Programming Language]]