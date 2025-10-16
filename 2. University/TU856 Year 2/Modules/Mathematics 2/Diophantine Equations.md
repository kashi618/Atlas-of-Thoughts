---
tags:
  - Mathematics-2
aliases:
---
## Example Diophantine Equation
**Solve the diophantine equation:** $243x + 198y = 9$
1. Find GCD using [[Euclidean Algorithm 1]]

$gcd(243, 198)$

$a = q(b) + r$
$243 = 1(198)+45$
$198 = 4(45)+18$
$45 = 2(18)+9$ -> $gcd(243, 198) = 9$
$18 = 2(9)+0$

**Note:**
Solutions only exist if $243x+192y=gcd(243,198)$, which in this case is true

2. Find X and Y using [[Euclidean Algorithm 2]]

**Rough work taken from above:**
$243 - 1(198) = 45$
$198 - 4(45) = 18$
$45 - 2(18) = 9$

**Extended Euclidean Algorithm**
$1(45) - 2(18) = 9$
$1(45) - 2(198 - 4(45)) = 9$
$9(45) - 2(198) = 9$

$9(45) - 2(198) = 9$
$9((243) - 1(198)) - 2(198) = 9$
$9(243) - 11(198) = 9$

$x=9,\>\>y=-11$

## Finding the Inverse of Modulo Number
**Find inverse of 41(mod 78)**

**Step 1** Write as diophantine equation
$41(mod\>78)$ would be $41x-78y=1$

**Step 2** Solve using euclidean algorithm 1 and 2

Euclids Algorithm 1
$78=1(42)+37$
$41=1(37)+4$
$37=9(4)+1)$

Euclids Algorithm 2
$78-1(42)=37$ (rough work)
$41-1(37)=4$ (rough work)
$37-9(4)=1$ (rough work)

$1(37)-9(4)=1$
$1(37)-9(41-1(37)=1$
$10(37)-9(41)=1$

$10(78-1(31))-9(41)=1$
$10(78)-19(41)=1$

**Step 3**
Take this $10(78)-19(41)=1$, and cancel out
$10(78)-19(41)=1$ -> $-19(41)=1$ because 78mod78 is 0

The inverse is -19. However, this does not fit in mod78.
Therefore, $(-19)+78=41$, so 41 is the inverse

# See Also
[[$ Mathematics 2]]
