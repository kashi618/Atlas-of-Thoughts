---
tags:
  - C
  - ComputerScience
---

## Subscript Notation
`array_name[i]`

"Square bracket notation" - Michael Collins
When \[ and \] are used to access the elements of an array
```
a      =    &a[0];
a+1    =    &a[1];
a+2    =    &a[2];
a+3    =    &a[3];
```

## Pointer Notation
`*(array_name + i)`
When you use the [[Dereference Operators - C|dereference]] operator to access the array

```
*a       =    a[0];
*(a+1)   =    a[1];
*(a+2)   =    a[2];
*(a+3)   =    a[3];
```

# See Also
[[Pointers and Arrays - C]]
[[Dereference Operators - C]]