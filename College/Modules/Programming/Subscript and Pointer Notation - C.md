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

# See Also
[[Pointers and Arrays - C]]
[[Dereference Operators - C]]