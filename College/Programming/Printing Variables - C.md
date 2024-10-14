---
tags:
  - Variables
  - C
---
## Delimeters
In order to print out variables, a demiliter is needed.

| Delimeter |           |
| --------- | --------- |
| %d        | Integer   |
| %f        | Float     |
| %c        | Character |

``` c
#include <stdio.h>

int main() {
	int var1 = 10;
	
	// Prints out the value of var1
	printf("Var 1 is %d",var1);
}
```

