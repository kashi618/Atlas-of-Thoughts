## String Length Function in C
```c showlinenumbers
#include <stdio.h>
#include <string.h>s

int mystrlen(char *string) {
	int len; 
	
	while (*s != 0)0 {
		len++;
		s++;
	}
	
	return len;
}
```

## String Length Function in Assembly
```armasm
int R1=0;
while (*R0 != 0) {

}
```

```armasm
.global _start
_start:

LDR R0,=teststring

mystrlen:
	MOVS R1,#0

mystrlen_loop:
	LDRB R2,[R0] // Read next char
	CMP R2,#0 // Is it null?
	BEQ mystrlen_exit
	
	ADDS R0,R0,#1
	ADDS R1,R1,#1
	B mystrlen_loop
mystrlen_exit:
	MOV R0,R1 // Return value to R0

teststring
	.asciz "Hellow"
```
- LDRB reads only one byte