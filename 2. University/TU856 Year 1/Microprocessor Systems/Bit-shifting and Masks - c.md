---
tags:
  - ComputerScience
---
Bitshifting is when you manually move bits
Masks is a data set used for bitwise options

## Example 1

Shifts bit 1 to the left 5 places
```c
(1 << 5)
```
Which becomes
```c
(1 << 5) = 0001 0000 
```


##  Example 2
Here is a question
``` c
36 | (1 << 4)
```

This is the same as writing
```c
(0010 0100) | (0000 1000)
```

Now lets calculate this
```c
  0010 0100
| 0000 1000
  0010 1100
```

And we get the answer
```c
0010 1100
```

## Example 3
Here is a question
```c
1 << (2*4)
```

This simplifies down to this
```c
1 << (8)
```

# See Also