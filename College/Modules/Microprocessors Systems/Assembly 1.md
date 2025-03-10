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

### String Length Function in Assembly
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

## Memset in C
```c showlinenumbers
void mymemset(char *mem, char b, int count)
{
	while (count !== 0)
	{
		*mem=b;
		men++;
		count--;
	}
}
```

### Memset in Assembly
```c
void mymemset(char *R0, char R1, int R2)
{
	while (R2 != 0)  // CMP R2,#0
	{                // BEQ mymemset_exit
		*R0 = R1;  // STRB R1,[R0]
		R0++;      // ADDS R0,R0,#1
		R2--;	   // SUBS R2,R2,#1
	}
}
```

```asm
.global _start
start:

mymemset:
mymemset_loop:
	CMP R2,#0
	BEQ mymemset_exit
	STRB R1,[R0]
	ADDS R0,R0,#1
	SUBS R2,R2,#1
	B mymemset_loop
mymemset_exit:
```

## Stringcopy in C
```c showlinenumbers
void mystrcpy(char *dest, char *src)
{
	char c;
	
	do {
		c=*src; // LDRB R1,[R1]
		*des = c; //STRB R0,[R2]
		des++; // ADDS R1
		src++;
	}
	while (*src != 0)
}
```

### String Copy in Assembly
```c showlinenumbers
void mystrcpy(char *R0, char *R1)
{
	char R2;
	
	do {
		R2=*R1; // LDRB R1,[R1]
		*R0 = c; //STRB R0,[R2]
		R0++; // ADDS R1
		R1++;
	}
	while (*src != 0)
}
```

```asm
	
	LDRB R1,[R1]
	STRB R0,[R2]
	ADDS

```