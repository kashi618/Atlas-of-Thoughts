---
tags:
  - ComputerScience
  - Functions
---
## Pass by Value
This is when a **COPY** of a parameter is passed into a function

```c
#include <stdio.h>

void meow(int);

void main(void) {
	int num1 = 10;
	
	meow(num1);
	
	return 0;
}

void meow(num) {
	for (int i=0; i<num; i++) {
		printf("meow");
	}
}
```

## Pass by Reference / Functions with Pointers
This is when you pass the **ADDRESS** of the parameter to the function

```c
#include <stdio.h>

void fxn1(int *);

int main()
{
    int num = 0;
    
    printf("Enter any number\n");
    scanf("%d", & num);
    
    //Pass the ADDRESS of variable num to the function
    fxn1(&num);
    
    printf("\nnum contains %d", num);
    
    return 0;
} // end main()


// fxn1() uses the address location of num, which is passed to
// this function and accesses its contents using the dereference
// operator
void fxn1(int *n1)
{
    printf("\nn1 contains %d\n", *n1);
    
    //increment n1
    (*n1)++; // *n1 = *n1 + 1;
    
    printf("\nn1 contains %d\n", *n1);
    
}
```

### Pitfalls
```c showlinenumbers {3,6}
int* findMin(int n1, int n2) {
	if (n1 > n2) {
		return &n2;
	}
	else {
		return &n1;
	}
}
```
You cannot return the address of a [[Global and Local Variables - C |local variable]], because n1 and n2 only exists in the function

# See Also
[[Functions - C]]
[[Pointers - C]]
[[Global and Local Variables - C]]