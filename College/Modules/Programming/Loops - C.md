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
A for loop is essentially a while loop with a built in counter. It can be used to loop a certain amount of times. The counter
```c showlinenumbers
for (initialValue; condition; counter) {
	// Run code
}
```



# See Also
[[$ C - Programming Language]]
[[Logical Operators - C]]
