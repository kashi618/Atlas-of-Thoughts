---
tags:
  - AlgorithmDesign
aliases:
---
## Iterative Factorial Algorithm
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

## Recursive Factorial Algorithm
```
factorial(n)
    if (n=0) or (n=1)
        return 1
    else
        return n * factorial(n - 1)
```

# See Also
[[$ Algorithm Design]]