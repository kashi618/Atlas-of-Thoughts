---
tags:
  - C
  - ComputerScience
  - UNFINISHED
---

## Subscript Notation
Most common and intuitive way to access elements in an array. It uses square brackets to specify the index of the element you want to access.

`array_name[i]`

"Square bracket notation" - Michael Collins
When \[ and \] are used to access the elements of an array

## Pointer Notation
This accesses elements in the array by [[Dereference Operators - C|dereferencing]] the address location of an array. Each index of the array is access by offsetting the address location by n amount.
- Easy to distinguish from pointer notation, and it uses the [[Dereference Operators - C|dereference operator]], which is used for "pointers". ;)

`*(array_name + i)`


## Multi-Dimensional Arrays
![[Pasted image 20250929101751.png]]


**Subscript**
`multiArray[2][2]`
- Points to row 2 col 2

**Pointer**
`*( *(multiArray+1) + 1);`
- Points to row 2 col 2
- Inner brackets specify which array (row) it dereferences
- Outer brackets specify which element (col) it dereferences
- **NOTE:** It is 1, because 0 would be row 0 col 0

# See Also
[[$ C - Programming Language]]
[[Dereference Operators - C]]