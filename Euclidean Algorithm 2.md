---
tags:
  - Mathematics
  - Algorithm
  - ComputerScience
---
# Extended Euclidean Algorithm
Allows you to write **GCD(a, b) = ax + by**, basically the inverse of a modular number.

## Example
**Find 23<sup>-1</sup> mod 58**

### Usage of Euclideans Algorithm
a = q(b) - r
	a = 58
	b = 23

58 = 2(23) - 12
	-> 58 - 2(23) = 12
23 = 1(12) - 11
	-> 23 - 1(12) = 11
12 = 1(11) - 1 
	-> a = 12
	-> b = 11

gcd(58,23) = 1

### Steps of Extended Euclidean Algorithm
ax + by = gcd(a,b)

Write it as the formula
1(12) - 1(11) = 1

Now we subsitute the 1(11) from the rough work used above
1(12) - 1(23 -1(12)) = 1
