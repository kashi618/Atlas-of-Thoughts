---
tags:
  - C
aliases:
  - Typedef
---
The typedef statement is used to create an alternative name for an existing datatype. 
It simplifies complex type declarations, and makes code more intuitive.

## Using typedef
**Example 1**
```c showlinenumber {1,4,5} 
typedef int numbers;

// These two methods for declaring the age variable is the same`
int age;
numbers age;
```
Now, instead of writing `int` for declaring integers, we can write `numbers`.

**Example 2**
```c showlinenumbers {1-5,8-9}
// Create typedef struct of name coordinates
typedef struct{
	int x;
	int y;
} coordinates

int main(void) {
	// Replaces (struct coordinates point1, point2;)
	coordinates point1, point2;
	
	// Set values for structure variables
	point1.x = 10;
	point1.y = 20;
	
	point2.x = 32;
	point2.y = 12;
	
	// End program
	return 0;
}
```
- With the `typedef struct`, we can now initialize a structure using only the typedef name `coordinates`.

# See Also
[[$ C - Programming Language]]