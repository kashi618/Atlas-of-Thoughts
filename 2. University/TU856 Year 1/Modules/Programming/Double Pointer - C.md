---
tags:
  - C
aliases:
---
A pointer that points to another pointer

## Creating a Double Pointer
`datatype **pointername;`


```c showlinenumbers
// Intger storing the value 3
int i   = 3;

// Pointer pointing to address value of integer i
int *j  = &i;

// Pointer pointing to address value of pointer pointing to integer 1
int **k = &j;
```

## Dereferencing a Double Pointer
**Single Dereference**
```c showlinenumbers
int i   = 3;    // E.G. Address of variable = 0x01
int *j  = &i;   // E.G  Address of variable = 0x02
int **k = &j;   // E.G  Address of variable = 0x03

printf("%p", *k);
```
```
OUTPUT:
0x02
```

**Double Dereference**
```c showlinenumbers
int i   = 3;    // E.G. Address of variable = 0x01
int *j  = &i;   // E.G  Address of variable = 0x02
int **k = &j;   // E.G  Address of variable = 0x03

printf("%d", **k);
```
```
OUTPUT:
3
```



# See Also
[[$ C - Programming Language]]