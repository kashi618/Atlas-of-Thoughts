---
tags:
  - ComputerScience
  - Algorithm
  - Recursion
  - Pseudocode
---
```c
int fib(int n) {
	if (n == 0) {
		return 0;	
	}
	if (n = 1) {
		return 0;
	}

	return (fib(n-1) + fib(n-2));
}
```

## Call Stack
fib(5)

|                 |              |
| --------------- | ------------ |
| fib(4) + fib(3) |              |
| fib(3) + fib(2) |              |
| fib(2) + fib(1) | fib(2) + (1) |
| fib(1) + fib(0) | (1) + (0)    |
![[Pasted image 20250207115824.png|500]]

# See Also