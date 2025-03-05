---
tags:
  - C
aliases: []
---
How visible something is. 
For example:
- The scope of a global variable is whole program
- The scope of a variable in the main function, is the main function.

## Example
```c showlinenumbers {2,4}
void main(void) {
	printf("%d",num);
	
	int num = 0;
}
```
This program would not work, because the scope of the `num` variable is line 4 of the main function onwards, meaning the `printf` has no access of the `num` variable.

## Example 2
```c showlinenumbers
void main() {
	int ans = 10;
	
	epicFunction();
}

void epicFunction() {
	printf("%d", ans);
}
```
This program would not work, because the scope of the `ans` variable is only in the main function. This is because `ans` is a local variable.

# See Also
[[$ C - Programming Language]]
[[Variables - C]]
[[Functions - C]]