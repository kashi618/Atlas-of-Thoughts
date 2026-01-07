---
tags:
  - Mathematics-2
aliases:
---
## CRT Formula
To find X from equations,
$X=r_{1}(mod\>n_{1})$
$X=r_{2}(mod\>n_{2})$
$X=r_{3}(mod\>n_{3})$

Use this formula,
$X=m_{1}r_{1}s_{1}+m_{2}r_{2}s_{2}+m_{3}r_{3}s_{3}$

Where
$M=n_{1}*n_{2}*n_{3}$

$m_{1}=\frac{M}{n_{1}}\>,\>m_{2}=\frac{M}{n_{2}}\>,\>m_{3}=\frac{M}{n_{3}}$

$s_{1}≡m_{1}*1mod\>n_{1}$ (Inverse of $m_{1},m_{2},m_{3}$)

## Example Find X
$X≡2mod3$
$X≡4mod5$
$X≡6mod7$

$X=m_{1}r_{1}s_{1}+m_{2}r_{2}s_{2}+m_{3}r_{3}s_{3}$

$r_{1}=2\>,\>r_{2}=4\>,\>r_{3}-6$
$n_{1}=3\>,\>n_{2}=5\>,\>n_{3}=7$

$M=3*5*7=105$

$m_{1}=\frac{105}{3}=35$
$m_{2}=\frac{105}{5}=21$
$m_{3}=\frac{105}{7}=15$

$35s_{1}≡1mod3\>\to\>2s_{1}=1mod3$ (write 35 in mod 3)
$s_{1}=2$

$21s_{2}≡1mod5\>\to\>1s2=1mod5$ (write 21 in mod 5)
$s_{2}=1$

$15s_{3}≡1mod7\>\to\>1s_{3}=1mod7$ (write 15 in mod 7)
$s_{3}=1$

$X=m_{1}r_{1}s_{1}+m_{2}r_{2}s_{2}+m_{3}r_{3}s_{3}$
$X=(35)(2)(2)+(21)(4)(1)+(15)(6)(1)$
$X=140+84+90=314$
$X≡104mod105$
# See Also
[[$ Mathematics 2]]
