---
tags:
  - C
aliases:
  - Leading Zeros
  - Leading Numbers
  - Padding
---
## $n$ Amount Decimal Places
```c
// n amount decimal places for a float
%.nf
```

**Example: Round Pi to 2 Decimals**
```c showlinenumbers
float var1 = 3.141592654;
printf("%.2f",var1);
```

## Padding
This is how to give an integer a specific amount of width. This is often helpful if we are formatting dates and time

```c showlinenumbers
int minutes = 7;
printf("%02d",minutes);
```

# See Also
[[$ C - Programming Language]]
[[String Concatenation - C]]