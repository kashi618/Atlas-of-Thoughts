---
tags:
  - C
  - ComputerScience
  - UNFINISHED
---
When an program closes, the data in the variables stored in RAM stays. This means, in C, if you create another variable but DO NOT assign it a value, and subsequently print the value of that variable out, it will show a previous programs data. This is called random data 

## Printing Random Data
```c showlinenumbers
#include <stdio.h>

int main () {
	int i;
	int arrayOfRandomData[10];
	
	for (i=0; i<10; i++) {
		printf("%d",arrayOfRandomData[i]);
	}
	
}
```