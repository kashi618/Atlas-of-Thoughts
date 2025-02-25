---
tags:
  - ComputerScience
  - Strings
  - UNFINISHED
---

## scanf()
When you use scanf() for reading a string, it stops after the first whitespace character, INCLUDING THE SPACEBAR.
This means that for strings such as "John Doe", it would stop reading at John.
```c showlinenumbers
char name[10];
scanf("%s",name);
```

## gets()
Built in function in C, that can read a string from standard input (keyboard, etc)
It will read all characters typed, including whitespace characters and newline character (enter key)
**NOTE:** THIS FUNCTION IS GONNA BECOME DEPRICATED, MEANING don't use it :)
It is being replaced by fgets()
This is dangerous because you can write as much as you can, and cause a buffer overflow
```c showlinenumbers
// Gets user input
gets(name);
// Prints user input
puts(name);
```

## fgets()
This is the alternative and better replacement for gets()
```c showlinenumbers
fgets(variableName, size, where?)
```
```c showlinenumbers
// Stores string in the name array, size 10, and from stdin (keyboard)
fgets(name, sizeof(name), stdin)
```
- Automatically leaves one element at the end, for the NULL character
- fgets() also reads whitespace characters

# See Also
[[Printing Out Strings - puts() - C]]
[[Strings and Arrays - C]]
[[Strings - C]]
