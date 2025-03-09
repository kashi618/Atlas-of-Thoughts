---
tags:
  - Algorithms
aliases:
---
A type of a algorithm/function that uses loops such as `for` and `while` to repeat operations

## Factorial Algorithm
How to find the n<sup>th</sup> factorial

```
factorial(n)
	// Initialize Variables
	fact = 1
	i = 0
	
	// Accounts for when n=0 or n=1
	if (n==0) OR (n==1)
		return 0
	
	// Loops for n times
	while i < n
		fact = fact * i
		i++
	
	return fact 
```

## Exponents Algorithm
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

# See Also
[[$ Algorithms]]