---
tags:
  - Mathematics
  - Algorithm
---
# Extended Euclidean Algorithm
Allows you to write **GCD(a, b) = ax + by**, basically the inverse of a modular number.

## Example
**Find X and Y such that 58x + 23b = d = gcd(58,23)**
and
**Find 23<sup>-1</sup> mod 58**

### Step 1
Use the [[Euclidean Algorithm 1]] to find the GCD

**a = q(b) + r**
	a = <font color="#0affe4">58</font>
	b = <font color="#ffb0f3">23</font>

<font color="#0affe4">58</font> = 2(<font color="#ffb0f3">23</font>) + <font color="#f79646">12</font>
	-> <font color="#0affe4">58</font> - 2(<font color="#ffb0f3">23</font>) = <font color="#f79646">12</font>
<font color="#ffb0f3">23</font> = 1(<font color="#f79646">12</font>) + <font color="#f6964=96">11</font>
	-> <font color="#ffb0f3">23</font> - 1(<font color="#f79646">12</font>) = <font color="#f6964=96">11</font>
<font color="#f79646">12</font> = 1(<font color="#ff0000">11</font>) + 1 
	-> <font color="#f79646">12</font> - 1(<font color="#ff0000">11</font>) = 1

gcd(58,23) = 1

### Steps 2
Use the GCD to write in the formula ax + by = gcd(a,b)

**Take the last line, that isn't equal to 0 from the work above**
<font color="#f79646">12</font> - 1(<font color="#ff0000">11</font>) = 1

Substituted the 1(<font color="#f6964=96">11</font>) from rough work above
1(<font color="#f79646">12</font>) - 1(<font color="#ffb0f3">23</font> -1(<font color="#f79646">12</font>)) = 1
1(<font color="#f79646">12</font>) - 1(<font color="#ffb0f3">23</font>) + 1(<font color="#f79646">12</font>) = 1
2(<font color="#f79646">12</font>) - 1(<font color="#ffb0f3">23</font>) = 1

Substitute the 2(12) from rough work above
2(<font color="#0affe4">58</font> - 2(<font color="#ffb0f3">23</font>)) - 1(<font color="#ffb0f3">23</font>) = 1
2(<font color="#0affe4">58</font>) - 4(<font color="#ffb0f3">23</font>) - 1(<font color="#ffb0f3">23</font>) = 1
2(<font color="#0affe4">58</font>) - 5(<font color="#ffb0f3">23</font>) = 1

#### Find X and Y such that 58x + 23b = d = gcd(58,23)
 2(<font color="#0affe4">58</font>) - 5(<font color="#ffb0f3">23</font>) = 1
 x = 2
 y = -5
 d = 1

#### Find 23<sup>-1</sup> mod 58

Because 2(58) is in the mod 58, it has a remainder of 0
0 - 5(<font color="#ffb0f3">23</font>) = 1
0 - 5(<font color="#ffb0f3">23</font>) = **-127**

The answer can then be found by converting -127 to mod 58
However, because this is a [[Negative Modulus Numbers|negative number]], it has to be converted
**-127** = **47 mod 58**
