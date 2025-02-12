---
tags:
  - ComputerScience
  - Variables
---
In C, there are different ways of using data within variables in functions

## Auto Variables
They are also known as **local** variables
- All variables are assumed to be auto be default
- They only exist within a [[Functions - C|function]]
- When a function ends, all data is lost/considered [[Random Data - C|random data]]
```c showlinenumbers
int main() {
	auto int i;
	auto int pp;
}
```

## Static Variables
They are **also** local variables
- However, it retains the memory of the data (stay in ram)
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
	- They are BAD, unless your program specifically needs


# See Also
[[Variables - C]]
[[Functions - C]]