---
tags:
  - C
aliases:
  - Lists
---
## What is an Array?
- An array is a contiguous linear piece of data in memory. 
- Each element in an array is the same data type
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
### Settings Values
**Example 1**
```c showlinenumbers
int numberArray[10] = {1,2,3,4,5,6,7,8,9,10};
```

**Example 2: Set all numbers to zero**
```c showlinenumbers
int allZeros[100] = {0}; 
```


### Inputting Values

To set the first element in the array `example[10]`, we need top first
1. Specify what array you are interacting with
    - `example[]`
2. Specify where/which index you want to change
    - `i = 0`
3. Set the value
	- `numsArr[0] = 10;`

**Another Example**
```c showlinenumebrs
#define SIZE 10

for (int i=0; i<SIZE; i++) {
	scanf("%d", numsArr[i]);
}
```
- This code gathers 10 values from the user
	
# See Also
[[$ C - Programming Language]]