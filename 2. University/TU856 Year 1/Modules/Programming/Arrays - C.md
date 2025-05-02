---
tags:
  - C
aliases:
  - Lists
---
## What is an Array?
- An array is a contiguous linear piece of data in memory. 
- Each element in an array is the same data type
- The first piece of data in an array is at index 0, the next at index 1, and so on.

### Related to Pointers?
The name of the array is the same as the memory location of the first element in the array

### Array Address
The name of an array is the same as the memory address location of the first element.

This means that `arr` and `&arr[0]` are interchangeable

This also applies if you add one to the array name

| Name    | Subscript Notation |
| ------- | ------------------ |
| `arr`   | `&arr[0]`          |
| `arr+1` | `&arr[1]`          |
| `arr+2` | `&arr[2]`          |

If you increment the array by 1, such as `arr+1`, then this is equal to `arr[1]`

## Creating Arrays
```c showlinenumbers
dataType arrayName[arraySize];
```
- Once an arraySize is set, it cannot be changed whilst the program is running
### Initialising Array with Set Values
```c showlinenumbers
int arr[] = {1, 2, 3, 4, 5}
```
- **NOTE:** A size is not needed for pre-set arrays, as the compiler will automatically set its size


## Inputting Values Into an Array
### Hard Code Values
**Example 1: Specify value of each element**
```c showlinenumbers
int numberArray[10] = {1,2,3,4,5,6,7,8,9,10};
```

**Example 2: Set all numbers to zero**
```c showlinenumbers
int allZeros[100] = {0}; 
```

### Inputting Values
**NOTE:** When inputting values in arrays, we can use two types of array notation, [[Subscript and Pointer Notation - C|subscript and pointer notation]]. 

**Example 1: Using subscript notation**
```c showlinenumbers {8}
#define SIZE 10

int numsArr[SIZE];

// Loops through each element in an array
for (int i=0; i<SIZE; i++) {
	// Gathers a user input
	scanf("%d", numsArr[i]);
}
```
- Asks the user to set a value for each element in the array

**Example 2: Using pointer notation**
```c showlinenumbers {8} 
#define SIZE 10

int numsArr[SIZE];

// Loops through each element in the array
for (int i=0; i<SIZE; i++) {
	// Gathers user input
	scanf("%d", *(numsArr + i))
}
```

# See Also
[[$ C - Programming Language]]
[[Functions - C]] (Passing)