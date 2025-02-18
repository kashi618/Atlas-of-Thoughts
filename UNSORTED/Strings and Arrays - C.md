---
tags:
  - ComputerScience
  - Strings
  - Arrays
---
In C, there is no datatype called a string
Instead, we use an array of characters

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

# See Also
[[Strings - C]]