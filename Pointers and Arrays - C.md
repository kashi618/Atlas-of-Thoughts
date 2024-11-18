---
tags:
  - C
  - ComputerScience
---

## 

The name of an array, is the same as the memory address location of the first element
``` c
#include <stdio.h>

int main () {
	int a[5];
	
	printf("a is %p, and &a[0] is %p",a,&a[0]);
	
	return 0;
}
```



## See Also