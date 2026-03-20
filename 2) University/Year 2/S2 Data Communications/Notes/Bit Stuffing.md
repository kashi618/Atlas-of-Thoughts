---
tags:
  - DataCommunications
aliases:
---
## HLDC Bit Stuffing
In HLDC, a flag pattern such as this `01111110` should NEVER occur inside of a frame. This is because it is used to designate the start and end of a frame. However, what if a data containing this sequence appears? We can use bit stuffing.

For example, we have a pattern like this 
**Before bit stuffing**
`111111111111011111101111110`
- As we can see, the flag pattern `01111110` appears multiple times. Therefore, we add a 0 after every five 1's
**After bit stuffing**
`1111101111101101111101011111010`
- After every five 1's, we add a zero

# See Also
[[$ Data Communications]]