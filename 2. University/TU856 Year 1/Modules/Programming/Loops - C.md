---
tags:
  - C
aliases:
  - While loop
  - Do while loop
  - For loop
---
## While \_\_\_
If the statement is true, then keep on running the code until the statement is false
```c showlinenumbers
while (x==0) {
	// Run code
}
```

### Do \_\_\_ While \_\_\_
The same rules for the while loop apply here. However, this loop runs **ATLEAST** once.
```c showlinenumbers
do {
	// Write code here
}
while (condition);
```
- The differences between a do while loop and a while loop is that, a do while loop is guaranteed to run once, whereas the while loop may not execute if the condition is false.

## For Loop
A for loop is essentially a while loop with a built in counter. It can be used to loop a certain amount of times. The counter (for keeping track of loops) can also be used, making it useful for jobs requiring an incrementing variable.
```c showlinenumbers
for (initialValue; condition; counter) {
	// Run code
}
```

**Example: Count from 1-10**
```c showlinenumbers
for (int i=0; i<10; i++) {
	printf("%d ", i);
}
```
```
OUTPUT:
0 1 2 3 4 5 6 7 8 9
```
- **NOTE:** The number 10 is not printing out. This is because `i` only gets incremented after the for loop finishes a pass. 
  1. `i` is 9
  2. `i` is smaller than 10
  3. `i` is printed out
  4. `i` is incremented
  5. NEW LOOP ITERATION
  6. `i` is 10
  7. `i` is NOT smaller than 10
  8. For loop ends

# See Also
[[$ C - Programming Language]]
[[Logical Operators - C]]
[[If Statements- C]] (**If statements**)