---
tags:
  - C
aliases:
  - Unsigned Variable
  - Signed Variable
---

In C, some [[Data Types - C|data types]] can be "signed" or "unsigned". Here is a list of common data types that can be used
- Characters
- Integers
- Long
- Short

**NOTE:** Floats cannot be signed or unsigned

## Signed Variable
A signed variable is the most common type of variable you will encounter. It essentially means a variable can have positive and negative values.

```c
// This is how to create a signed integer
int num1;

// This is another way to create a signed integer
signed int num1;
```
- In this case, the range of the integer ranges from (-2 million <-> 2 million)
- **NOTE:** This range only applies to a 32bit integer.

## Unsigned Variable
An unsigned variable removes the negative range of a variable, and adds it to the positive side. Thus, it doubles the positive range.

```c showlinenumbers
// This is how to create an unsigned integer
unsigned int num1;
```
- In this case, the range of the integer ranges from (0 <-> 4 million)
- **NOTE:** This range only applies to a 32bit integer.

# See Also
[[$ C - Programming Language]]
[[Variables - C]]
