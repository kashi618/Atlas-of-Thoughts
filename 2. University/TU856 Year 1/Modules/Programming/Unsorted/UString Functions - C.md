---
tags:
  - C
aliases:
---
`Make sure to include the `#include <



string.h>`

## Find Length of String
```c showlinenumbers
#include <string.h>

// Method 1
strlen("stringHere");
// Method 2
strlen(variableName);

```
- Does not include the NULL character
- It count **ONLY** the characters, **NOT** the size of the array.

**Example:**
```c showlinenumbers
#include <string.h>

printf("%d", strlen("cat"));
```
```
OUTPUT:
3
```

## Comparing two strings
```c showlinenumbers
#include <string.h>

strcmp(string1, string2);
```
- Order does not matter for this function.
- This function returns an integer.

| Return Number | Meaning            |
| ------------- | ------------------ |
| 0             | They are the same  |
| 1             | They are different |

## Copying a String
```c showlinenumbers
#include <string.h>

strcpy(destinationString, sourceString);
```
- **NOTE:** be wary of the destination and source parameters. Right goes to left.
- Only works with NULL terminated strings
- Strcpy also assumes that the destination string is large enough, so make sure it is big enough
- When a string is copied, the NULL character of the source string is also copied. This means, if there is any remaining elements in the destination string, it gets overwritten with NULL characters.

## Concatenating a String
Concatenating means joining together. It can also be known as appending a string.

```c showlinenumbers
#include <string.h>

strcat(destinationString, sourceString);
```

**Example:**
```c showlinenumnbers
#include <string.h>

char var1[50] = "chonky ";
char var2[] = "cat";


printf("%s", strcat(var1,var2) );
```
```
OUTPUT:
chonky cat
```
- **NOTE:** Make sure the destination string is big enough to concatenate the source string
  Example, `strcat("there","hi");` wouldn't work, because `"there"` is not big enough to hold the `"hi"`.


# See Also
[[$ C - Programming Language]]