---
tags:
  - C
aliases:
  - Variables
---
## What is a Variable?
- A piece of memory in a program used to store data.
- Variables from programs are stored in RAM.

## Declaring and Initializing Variables
### Declaring Variables
This is also known as "creating" variables
```c
dataType variableName;
```

**Example:**
```c
int   i;  // An integer variable called i
char  j;  // A character variable called j
float k;  // A float variable called k
```
### Initializing Variables
This is when you declare a variable, but assign it a value in the process
```c
variableType variableName = value;
```
**Example:**
```c showlinenumbers
int   i = 100;
char  j = 'A';
float k = 3.14; 
```

### Initialize Variables one Singular Line
```c showlinenumbers
float var1 = 1.1, var2 = 2.2, var3 = 3.3;
```
# See Also
[[$ C - Programming Language]]
[[Data Types - C]]
[[Signed & Unsigned Variables - C|Signed Variable]]