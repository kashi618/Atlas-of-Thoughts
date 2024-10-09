---
tags:
  - Mathematics
  - Algorithm
  - ComputerScience
---
Used to find the **GCD** between **any two integers**, provided the integer is set up as followed
- **a = q(b) + r**, where (a>b)
	- a = **Integer**, where a is bigger than b
	- b = **Integer**, where a is bigger than b
	- q = **Quotient**, how many times a divides into b
	- r = **Remainder**, whats left over when a divides into b
The last **non zero** remainder is the answer
  
### Example

a = **42823** 
b = **6409**

a = q(b) + r

<font color="#ff0000">42823</font> = q(<font color="#ffc000">6409</font>) + r
<font color="#ff0000">42823</font> = 6(<font color="#ffc000">6409</font>) + <font color="#92d050">4369</font>

<font color="#ffc000">6409</font> = q(<font color="#92d050">4369</font>) + r
<font color="#ffc000">6409</font> = 1(<font color="#92d050">4369</font>) + <font color="#00b0f0">2040</font>

<font color="#92d050">4369</font> = q (<font color="#00b0f0">2040</font>) + r  
<font color="#92d050">4369</font> = 2(<font color="#00b0f0">2040</font>) + <font color="#ffb0f3">289</font>

<font color="#00b0f0">2040</font> = q(<font color="#ffb0f3">289</font>) + r  
<font color="#00b0f0">2040</font> = 7(<font color="#ffb0f3">289</font>) + **17**

<font color="#ffb0f3">289</font> = q(**17**) + r  
<font color="#ffb0f3">289</font> = 17(**17**) + 0

GCD(42823, 6409) = **17**

