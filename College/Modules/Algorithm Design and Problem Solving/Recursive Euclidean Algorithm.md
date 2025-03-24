---
tags:
  - AlgorithmDesign
aliases:
---
```
gcd(a,b)
	if (b=0)
		return a
	else
		return gcd(b, a mod b)
```

## Call Stack
gcd(72, 30)

| Stack       | Return Value |
| ----------- | ------------ |
| gcd(72, 12) | 6            |
| gcd(30, 6)  | 6            |
| gcd(12, 0)  | 6            |


# See Also
[[$ Algorithm Design]]