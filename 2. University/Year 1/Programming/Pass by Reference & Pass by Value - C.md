---
tags:
  - C
aliases:
---
Pass by reference and pass by value was methods for passing parameters and values to functions.

### Pass by Value
This is when a copy of the parameter is passed to the function.
This means that, any changes made to that value in the function, DOES NOT affect the original variable.
- `int coolFunc(int x);`

### Pass by Reference
This is when the memory address (pointer) of a variable is passed to the function
This means that any changes made to the variable, ALSO affects the original variable.
- `int coolFunc(int *x);`

**Example: Pass by Reference**
```c showlinenumbers
// Main function
int main(void) {
	int number = 1;
	
	// Use pass by reference to 
	incrementNumber()
	
	return 0;
}
```
# See Also
[[$ C - Programming Language]]