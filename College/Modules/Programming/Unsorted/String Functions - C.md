---
tags:
  - C
aliases:
---
Make sure to include the `#include <string.h>`

## Find Length of String
- Does not include the NULL character
- It count **ONLY** the characters, **NOT** the size of the array.
```c showlinenumbers
#include <string.h>

// Method 1
strlen("stringHere");
// Method 2
strlen(variableName);

```

**Example:**
```c showlinenumbers
#include <string.h>

printf("%d", strlen("cat"));
```
```
OUTPUT:
3
```

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
Concatenating means joining togethor. It can also be known as appending a string.

```c showlinenumbers
#include <string.h>

strcat(destinationString, sourceString);
```

**Example:**
```c showlinenumnbers
#include <string.h>

printf("%s", strcat("cat","chonky") );
```
```
OUTPUT:
chonkycat
```



# See Also
[[$ C - Programming Language]]Ma