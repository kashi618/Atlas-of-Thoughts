---
tags:
  - C
aliases:
---
A nested structure is when a structure is used as a structure member inside another structure.

## Structure Template
```c showlinenumbers {10}
struct date {
	int year;
	int month;
	int day;
};

struct studentID {
	int ID;
	int examResult;
	struct date DOB;
}
```

##  Using Nested Structure
```c showlinenumbers {9-11}
int main(void) {
	struct studentID johnDoe;
	
	// Accessing host structure elements
	johnDoe.ID = 1234
	johnDoe.examResult = 86;
	
	// Accessing nested structure elements
	johnDoe.DOB.year = 1999;
	johnDoe.DOB.month = 4;
	johnDoe.DOB.day = 12;
	
	// End program
	return 0;
}
```

# See Also
[[$ C - Programming Language]]