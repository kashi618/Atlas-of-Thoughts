---
tags:
  - C
aliases:
  - Lists
---
## What is an Array?
## Array Structure
- An array is stored as a linear piece of data in memory
- The first piece of data in an array is at index 0, the next at index 1, and so on

## Creating Arrays
```c showlinenumbers
dataType arrayName[arraySize];
```
- Once an arraySize is set, it cannot be changed whilst the program is running
### Initializing Array with Set Values
```c showlinenumbers
int arr[] = {1, 2, 3, 4, 5}
```
- **NOTE:** A size is not needed for pre-set arrays, as the compiler will automatically set its size

### Set Array to One Value
```c showlinenumbers
int allZero[10] = {0}
```

The name of an array is equivalent to the address location of the 1st element in the array

## Using an Array
### Inserting Values

# See Also
[[$ C - Programming Language]]