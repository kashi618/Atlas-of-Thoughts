---
tags:
  - ComputerScience
  - Strings
  - Arrays
  - UNFINISHED
---


## Example
When making the array, you must include the NULL character
Technically, you don't need to include the size of the array. However, then the compiler will guess and count, which is unpredictable
```
char greeting[6] = {'h', 'e', 'l', 'l', 'o', '\0'};
```

### Alternative Way
```
char greeting[6] = "Hello";
```

## Size of Array is Bigger than String
If you declare more elements in the array then you need to use, then the compiler will fill the extra spaces with the NULL character
```
char greeting[10] = "Hello"
```
This is what it looks like in memory

| 'h' | 'e' | 'l' | 'l' | '0' | '\0' | '\0' | '\0' | '\0' | '\0' |
| --- | --- | --- | --- | --- | ---- | ---- | ---- | ---- | ---- |

## BUGS
What happens when the size of the array isn't big enough to store the NULL character
[[Non-Null Terminated String - C]]

# See Also
[[U Strings - C]]