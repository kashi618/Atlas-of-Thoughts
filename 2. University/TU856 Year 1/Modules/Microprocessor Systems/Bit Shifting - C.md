---
tags:
  - ComputerScience
  - Bit-Shifting
---
Bitshifting is when you move bits of a binary number to the left or the right

## Left Shifting
```
(numberToBeShifted << howManyToShiftby)
```
```
(3 << 2) = 12 v
```

- This is when you shift a bit to the left, by a specific amount
- When it is shifted, the values to the right become zeros
- **NOTE:** Shifting a bit to the left is the same as multiplying the number by 2<sup>n</sup>
- 
### Example
```c showlinenumbers
// Decimal 3 is equivalent to 0000 0011 in binary
unsigned int x = 3 

// x is shifted left by 2 bits
x = (x << 2)
// Therefore, x becomes 0000 1100
// In decimal form, x is now 12
```

## Bitwise AND - &
The bitwise AND 

# See Also
[[Bitwise AND - & - C]]