---
tags:
  - C
aliases:
---
A structure is a data structure that can be used to store different types of data,

## Defining a Structure

**1) Structure Template
```c showlinenumbers {1-4}
struct structureTag {
	// Structure members
	datatype variableName;
};
```
- You can have as many structure members as you want.
- Order not relevant.
- The structure members are NOT variables, only a template, therefore, no memory has been assigned YET.
- THEY ARE NOT VARIABLES
- They are a blueprint

**2) Creating a Structure**
```c showlinenumbers {2}
int main(void) {
	struct structureTag member1, member2; 
}
```


**3) Add/Remove Values to Members**
```c showlinenumbers {4}
int main(void) {
	struct structureTag member1, member2;

	structureVariable.member1 = value;
}
```


**Example 1**
```c showlinenumbrs
#include <stdio.h>

struct studentRecords {
	char firstName[20];
	char lastName[20];
	int age;
	int idNumber;
}

int main(void) {
	struct studentRecords student1, student2, student3;
	
	 strcpy(student1.firstName, "Tony");
	
	return 0;
}
```

**Example 2**
```
struct studentRecords {
	char firstName[20];
	char lastName[20];
	int age;
}

int main(void) {
	struct studentRecords student = {
		"John",
		"Doe",
		69
	};
}
```

## Using a Structure
```
struct studentRecords {
	char firstName[20];
	char lastName[20];
	int age;
}

int main(void) {
	struct studentRecords student = {
		"John",
		"Doe",
		69
	};
	
	printf("%d",student.age);
}
```


## Structures and pointers
```c
printf("%d",(*ptr).student_ID)
```
- Doesnot work without braclkets
## arrow notation
`->`
instead of `(*ptr).student_ID`, you can write `ptr -> student_ID`
It only works with pointers


# See Also
[[$ C - Programming Language]]


