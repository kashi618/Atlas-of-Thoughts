---
tags:
  - AlgorithmDesign
aliases:
---
## Iterative Exponents Algorithm
How to find x<sup>y</sup>

```
exponents(x, y)
	i = 0
	ans = 1
	
	if (y==0)
		return 1	
	else
		while (i<y)
			ans = ans*x
			i++
		END WHILE
		
		return ans
	END ELSE
```

## Recursive Exponents Algorithm
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

### Call stack
2 * power(2,5)

| Stack           | Return Value | Steps    |
| --------------- | ------------ | -------- |
| 2 * power(2, 4) | 16           | 2 * (16) |
| 2 * power(2, 3) | 8            | 2 * (8)  |
| 2 * power(2, 2) | 4            | 2 * (4)  |
| 2 * power(2, 1) | 2            | 2 * (2)  |
| 2 * power(2, 0) | 1            | 2 * (1)  |
Answer = 32


# See Also
[[$ Algorithm Design]]