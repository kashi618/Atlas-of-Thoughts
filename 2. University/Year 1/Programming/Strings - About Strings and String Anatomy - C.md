---
tags:
  - C
aliases:
---
## String Literal

`"hello" == ['h', 'e', 'l', 'l', 'o', '\0']`

**Non-Null Terminated String**
These are string literals which do not contain a null character `\0`.



## String Anatomy
In C, a string is an array of characters that end with the NULL [[Escape Sequence - C|escape character]].

| "H" | "E" | "L" | "L" | "O" | "\0" |
| --- | --- | --- | --- | --- | ---- |
This is how the string is stored in memory
- The NULL character is `"\0"`
- When the compiler is reading the string, the `"\0"` tells the compiler that it is the end of the string.

**Non-Null Terminated String**
It is a string which does not contain a NULL character.

# See Also
[[$ C - Programming Language]]