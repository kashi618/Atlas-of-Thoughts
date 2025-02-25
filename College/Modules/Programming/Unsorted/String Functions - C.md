---
tags:
  - C
aliases:
---
Make sure to include the `#include <string.h>`

## Find Length of String
- Does not include the NULL character
```c showlinenumbers
#include <string.h>

// Method 1
strlen("cat");
// Method 2
char name[4] = "cat";
strlen(name);

```
```
OUTPUT:
5
```


# See Also
[[$ C - Programming Language]]Ma