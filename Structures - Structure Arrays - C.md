---
tags:
  - C
aliases:
---
Structure arrays are used when you want lots of structure variables. It is essentially just an array of structures.

## Initializing Structure Array
Initializing a structure array is identical to initializing regular structures
```c showlinenumbers {18-19}
// Structure Template
struct date {
	int day;
	int month;
	int year;
};

struct students {
	int student_ID;
	char firstname[50];
	char surname]50];
	int results[3]
	struct date DOB;
};

// Main function
int main(void) {
	// Initializes a structure array with 10 elements
	struct students[10];
	
	return 0;
}
```

## Accessing Structure Array
A structure array is stored like this.
![[Pasted image 20250428211308.png]]

```c showlinenumbers
// Main function
int main(void) {
	// Initializes a structure array with 10 elements
	struct students[10];
	
	// Add information for student at index 0
	students[0].student_ID = 1234;
	students[0].firstname = "John";
	students[0].surname = "Doe";
	students[0].results[0] = 54
	students[0].results[1] = 73
	students[0].results[2] = 97
	students[0].DOB.day = 23;
	students[0].DOB.month = 9;
	students[0].DOB.year = 1999;
	
	// End program
	return 0;
}
```

# See Also
[[$ C - Programming Language]]