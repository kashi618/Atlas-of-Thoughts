---
tags:
  - C
aliases:
---
In C, there are different ways of using data within variables in functions

## Auto Variables
They are also known as **local** variables
- All variables are assumed to be auto be default
- They only exist within a function
- When a function ends, all data is lost/considered random data
```c showlinenumbers
int main() {
	auto int i;
	auto int pp;
}
```

## Static Variables
They are **also** local variables
- However, it retains the memory of the data even if the function ends. It doesnt get freed up until after the program ends.
- **NOTE:** on line 11, if staticVar has already been created, then the OS will ignore that line
```c showlinenumbers {11}

void main() {
	int i;
	// Calls the increment function 5 times
	for (i=0; i<5; i++) {
		increment();
	}
}

void increment(void) {
	// Initializes a static variable
	static int staticVar = 0;
	// Adds one to the variable
	staticVar += 1;
	// Prints value
	printf("%d",staticVar);
}
```

## Register Variables
They are also **local variables**
- However, it is stored inside the CPU cache, hence, the name register
- This can be accessed extremely fast
- It is usually used for loops, as it would help speed it up (int i, int j, etc)
```c showlinenumbers
void main() {
	// Creates a register integer called i
	register int i;
	// Prints out "Fast!" 5 times
	for (i=0; i<5; i++) {
		printf("Fast! ");
	}
}
```

## Extern Variables
They are known as **global variables**
- They are BAD, unless your program specifically needs one
	- If a bug happens, then you wouldn't know which function caused the code. Whearas, if you pass the variable, you can trace back to which function caused the bug
- They are declared outside of any function, and can be used in every function
```c showlinenumbers {3,6,14}
void fxn(void);

int pp = 69;

void main(void) {
	extern int pp;
	
	printf("%d", pp);
	
	fxn();
}

void fnx(void) {
	extern int pp;
	
	printf("d",pp);
}
```
The extern on lines 6 and 14 tells the compiler to NOT create a variable, and to instead find and use the int variable on line 3

# See Also
[[$ C - Programming Language]]
[[Variables - C]]
