---
tags:
  - C
aliases:
  - printf()
  - Printing Variables
---
## printf()
To print something out to a terminal, we can use the printf() function.
```
printf("textToPrintOut");
```
**Example**
```c
printf("This is so cool :)")'
```

### Printing Variables
To print out the value of a variable, we can also use the printf() function. Here are the steps:
1. Specify the type of data to print out, using a [[Delimiters - C|delimeter]].
2. Specify from what variable to print out.
```
printf("delimeter", variableName);
```
**Example**
```c showlinenumbers
// Create variable with value
float pi = 3.1415926;
// Print out the value of the variable
printf("%f", pi);
```
- **NOTE:** In this case, we are printing the value of a float. Thus, we use the `%f` [[Delimiters - C|delimeter]].


# See Also
[[$ C - Programming Language]]
[[Delimiters - C]]