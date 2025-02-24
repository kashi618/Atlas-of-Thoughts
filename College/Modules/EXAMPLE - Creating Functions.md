```c showlinenumbers {4,8,12}
#include <stdio.h>

// Function Signature
int coolPP(int);

// Main Function
void main(void) {
	int x;
	// Call function and store return balue inside of x
	x = coolPP(5);
	// Print out x
	printf("%d",x);
}

// User Created Function
int coolPP(int number) {
	int i;
	
	for (i=0; i<number; i++) {
		printf("pp");
	}
	
	return 5;
}
```