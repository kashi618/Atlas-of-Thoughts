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

Rough work taken from above:
$243 - 1(198) = 45$
$198 - 4(45) = 18$
$45 - 2(18) = 9$

Extended Euclidean Algorithm
$1(45) - 2(18) = 9$
$1(45) - 2(198 - 4(45)) = 9$
$9(45) - 2(198) = 9$

$9(45) - 2(198) = 9$
$9((243) - 1(198)) - 2(198) = 9$
$9(243) - 11(198) = 9$

$x=9, y=-11$


# See Also
[[$ Mathematics 2]]
