---
tags:
  - C
aliases:
  - Unsigned Variable
  - Signed Variable
---
## Signed Variable
A signed variable is the most common type of variable you will encounter. It essentially means a variable can have positive and negative values.

```c
// This is how you create a signed variable
signed int num1;
// This is an alternative way of writing it
int num1;
```
- In this case, the range of the integer ranges from (-4million <-> 4 million)
## Unsigned Variable
An unsigned variable removes the negative range of a variable, and adds it to the positive side. Thus, it doubles the positive range.

```c showlinenumbers
unsigned int num1;
unsigned char char1;
unsigned bool bool1;
```

- For unsigned variables, add "u" before the delimeter
int = %uf, char = %uc, bool = %ub, etc

# See Also
[[$ C - Programming Language]]
[[Variables - C]]
