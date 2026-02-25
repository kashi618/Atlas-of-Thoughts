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

**Example:**
```c showlinenumbers
float var1 = 3.141592654;
printf("%.2f",var1);
```
```
OUTPUT:
3.14
```

## Padding
How to add spaces to the left of an integer
```c
// Add padding to the left n amount
%nd
```

**Example:**
```c
int var1 = 9;
printf("%10f", var1);
```
```
OUTPUT:
        9
```

### Padding with Zeros
Replace the spacing with a 0
```c
// Add zeros to the left b amount 
%0nd
```

- This is helpful for formatting times and dates

**Example:**
```c showlinenumbers
int var1 = 69;
printf("%05d",minutes);
```
```
OUTPUT:
00007
```

# See Also
[[$ C - Programming Language]]