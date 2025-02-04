---
tags:
  - C
  - ComputerScience
  - Variables
  - Symbolic-Names
---
- It is used to avoid hard coding values in a program 
- Usually all uppercase letters are used, to differentiate them from regular variables
- The value of a symbolic name cannot be changed

``` c
#define VariableName Value
```

``` c
#define AGE 18
#define PI 3.141592
#define LETTER 'A'

int main() {
	printf("%d%d%char",AGE,PI,LETTER)
}

```

# See Also
[[Variables - C]]
