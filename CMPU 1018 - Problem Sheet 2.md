---
tags:
  - TU856
  - CMPU1018
---
#### [[TU856 - Computer Science]]
#### [[CMPU 1018 - Mathematics 1]]

---

### 6 + 7 mod 8
6 + 7 = 13 = 4 mod 8


### 11 + 14 mod 15
11 + 14 = 25 = 10 mod 15

### 20 + 22 mod 23
20 + 22 = 42 = 19 mod 23

### 6 x  7 mod 8
6 x 7 = 42 = 2 mod 8

### 11 x 14 mod 15
11 x 14 = 154 = 4 mod 15

### 20 x 22 mod 23

20 x 22 = 440 =  3 mod 23

### 5<sup>-1</sup> mod 7 (ie. The inverse of 5 in mod 7)
**Fermats Little Theorem**
a<sup>-1</sup> = a<sup>p-2</sup> (mod p)

5<sup>-1</sup> -> 5<sup>7-2</sup> ->  5<sup>5</sup> -> 3125 -> 3 mod (7

### 6 <sup>-1</sup> mod 7 (ie. The inverse of 6 in mod 7)
b = q(a) - r

7 = 1(6) - 1
6 = 6(1) - 0

6x + 7x = 1

1() + 1() = 1

### Find the Multiplicative Inverse of 23 mod 58 
#### ie. Find 23<sup>-1</sup> mod 58
b = q(a) - r

58 = 2(23) - 12
	58 - 2(23) -> 12

23 = 1(12) - 11
	23 - 1(12) -> 11

12 = 1(11) - 1
	12 - 1(11) -> 1


gcd(58,23) = 1

23x + 58y = 1

1(12) - 1(11) = 1
1(12) - 1(23 - 1(12)) = 1
1(12) - 1(23) + 1(12) = 1

2(12) - 1(23) = 1
2(58 - 2(23)) - 1(23) = 1
2(58) -4(23) - 1(23) = 1

2(58) -5(23) = 1
0 - 5(23) = -127 = 47 mod 58


### Find the Multiplicative Inverse of 41 mod 93
#### ie. Find 43<sup>-1</sup> mod 93
a = q(b) - r

93 = 2(41) - 11
	93 - 2(41) -> 11

43 = 3(11) - 10
	43 - 3(11) -> 10

11 = 1(10) - 1
	11 - 1(10) = 1

gcd(93, 41) = 1

93x + 41y = 1

1(11) - 1(10) = 1
1(11 - 1 (10)) - 1(10) = 1

1(11) - 1(10) - 1(10) = 1
1(11) - 2(10) = 1

1(11) - 2(43 - 3(11)) = 1
1(11) -2(43) + 6(11)

