---
tags:
  - ComputerScience
  - Variables
---
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