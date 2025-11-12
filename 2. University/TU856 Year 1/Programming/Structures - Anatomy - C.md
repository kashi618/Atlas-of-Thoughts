---
tags:
  - C
aliases:
---
```c showlinenumbers
// Structure template
struct dob {
	int month;
	int day;
};

struct products { // Structure tag (product)
//--structure members--//
	int age;
	int number;
	struct dob; // Nested structure
};

void main(void) {
	// A structure initialized with two structure variables
	struct products John, Bobby;
	
	// A structure array initialized with 10 variables
	struct products students[10];
}
```


# See Also
[[$ C - Programming Language]]