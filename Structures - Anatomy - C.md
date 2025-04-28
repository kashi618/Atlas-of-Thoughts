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
	struct dob; 
};

void main(void) {
	// A structure initialized with two structure variables
	struct products John, Bobby;
	// A structure array initialized with 
}
```


# See Also
[[$ C - Programming Language]]