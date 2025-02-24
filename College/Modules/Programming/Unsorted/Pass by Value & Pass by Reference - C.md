---
tags:
  - C
aliases:
  - Pass by Value
  - Pass by Reference
  - UNFINISHED
---
## Pass by Value
This is when a **COPY** of a parameter is passed into a function

```c showlinenumbers
void main(void)
{
	int num1 = 10;
	
	// Pass by value used to pass num1 into
	// the meow() function
	meow(num1);
	
	return 0;
}
// Prints the word "meow" n amount times
void meow(n)
{
	for (int i=0; i<n; i++) {
		printf("meow");
	}
}
```

## Pass by Reference / Functions with Pointers
This is when you pass the **ADDRESS** of the parameter to the function.
- It allows you to change the value of the original value of the parameter, outside of the main function

```c showlinenumbers
int main()
{
    int num = 10;
    
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
void meow(int *n1)
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