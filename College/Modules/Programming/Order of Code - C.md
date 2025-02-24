---
tags:
  - C
aliases:
---
There is no conventional way to order code in C. However, there is a method that gives the best readability. It goes as follows:
1. Import header files
2. Symbolic names
3. Function Signatures
4. Main function
5. Subsequent functions

```c showlinenumbers {1,4,7,10,15}
// 1. Import header files
#include <stdio.h>

// 2. Symbolic names
#define NUN 10

// 3. Function Signatures
int coolFunction(int, float);

// 4. Main function
void main(void) {
	coolFunction(x,y);
}

// 5. Subsequent functions
int coolFunction(int1, float1) {
	return int1;
}
```

# Related
[[$ C - Programming Language]]