---
tags:
  - ComputerScience
  - Variables
  - UNFINISHED
---
**SEE [[Storage Classes - C]] FOR MORE IN DEPTH INFORMATION**

## Global Variables
Variables which can be accessed anywhere within a program

```c showlinenumbers
#include <stdio.h>

// Initialize global variable
int coolGlobalVariable = 10;

void main(void) {
	printf("%d",coolGlobalVariable);
}
```

## Local Variables
Variables that can only be used and accessed in its respective function
- Once the function ends, the variable gets "released"

```c showlinenumbers
#include <stdio.h>

void main(void) {
	// Initialize local variable
	int coolLocalVariable = 10;
	
	printf("%d",coolLocalVariable);
}
```

# See Also
[[Variables - C]]
[[Storage Classes - C]]