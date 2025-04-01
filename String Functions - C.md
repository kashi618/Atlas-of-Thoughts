---
tags:
  - C
aliases:
---
## String Functions
C is a very powerful language using strings. It contains a rich set of built-in functions which facilitate the uses of strings in a program.

**NOTE:** To use these functions, we must call the #include <string.h> header file.

## Find Length of String
Returns the number of characters in a string, EXCLUDING the NULL character.
```c showlinenumbers
strlen(string);
```

**Example**
```c showlinenumbers
printf("%d",strlen("Hello"));
```
```markdown
OUTPUT:
5
```

# See Also
[[$ C - Programming Language]]