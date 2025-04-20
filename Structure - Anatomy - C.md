---
tags:
  - C
aliases:
---
```c
struct products {
	int age;    // structure member
	int number; // structure member
}

void main(void) {
	struct products John, Bobby, students[2];
	
	John.age = 20;
	John.number = 1;
	
	Bobby.age = 25;
	Bobby.number = 2;
	
	students[0].age = 23;
	students[0].number = 3;
	
	students[1].age = 21;
	students[1].number = 4;	
}
```


# See Also
[[$ C - Programming Language]]