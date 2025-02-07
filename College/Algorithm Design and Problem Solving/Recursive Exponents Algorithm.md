---
tags:
  - ComputerScience
  - Pseudocode
  - Recursion
---
```
// finds the answer to x^n
power(x,n)
	if (n=0)
		return 1
	else if (n=1)
		return x
	else if
		return x * power(x,n-1)
```

## Call stack

| Stack           | Return Value | Steps    |
| --------------- | ------------ | -------- |
| 2 * power(2, 4) | 16           | 2 * (16) |
| 2 * power(2, 3) | 8            | 2 * (8)  |
| 2 * power(2, 2) | 4            | 2 * (4)  |
| 2 * power(2, 1) | 2            | 2 * (2)  |
| 2 * power(2, 0) | 1            | 2 * (1)  |
Answer = 32


# See Also
[[Recursion]]