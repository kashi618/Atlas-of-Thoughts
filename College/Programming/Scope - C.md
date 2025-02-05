---
tags:
  - ComputerScience
---
 How accessible something is

The scope of a global variable is whole program, wheareas the scope of a variable in the main function, is the main function.

## Example
```c showlinenumbers {2,4}
void main(void) {
	printf("%d",num);
	
	int num = 0;
}
```
This program would not work, because the scope of the num variable is line 4 of the main function onwards, meaning the printf has no access of the num variable

# See Also