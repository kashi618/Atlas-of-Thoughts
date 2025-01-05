---
tags:
  - Matrices
  - Mathematics
---

## How to Multiply Matrices
### Example 1
$A=\begin{bmatrix}2 & 5 & 7\end{bmatrix}$ (1x3 matrix)

$B= \begin{bmatrix}3\\4\\-3\end{bmatrix}$ (3x1 matrix)

> AB = A x B -> (**1** x 3) x (3 x **1**)
> The size of the matrix of the product of AB = (**1**x**1**) = $\begin{bmatrix}x\end{bmatrix}$

$$AB = \begin{bmatrix}(2*3) + (5*4) + (7*(-3))\end{bmatrix} = \begin{bmatrix}(6) + (20) + (-21)\end{bmatrix} = \begin{bmatrix}5\end{bmatrix}$$
<br>

>BA = B x A -> (**3**x1) x (1x**3**)
>The size of the matrix of the product of BA = (3x3) = $\begin{bmatrix}x & x &x\\x&x&x\\x&x&x\end{bmatrix}$

$$BA = \begin{bmatrix}
(3*2) & (3*5) & (3*7)\\
(4*2) & (4*5) & (4*7)\\
((-3)*2) & ((-3)*5) & ((-3)*7)
\end{bmatrix} =
\begin{bmatrix}
6 & 15 & 21 \\
8 & 20 & 28 \\
-6 & -15 & -21
\end{bmatrix}$$
You can see that the 3, 4, -3, are present for each column in a row

### Example 2
$A=\begin{bmatrix}1 & 4 & -2 \\3 & 5 & -6\end{bmatrix}$

$B=\begin{bmatrix}5&2&8&-1\\3&6&4&5\\-2&9&7&-3\end{bmatrix}$

> AB = A x B = (**2** x 3) x (3 x **4**)
> The size of the matrix of the product of AB = (**2** x **4**) = $\begin{bmatrix}x&x&x&x\\x&x&x&x\end{bmatrix}$

**Visual Explanation**
For AB<sub>11</sub> in the matrix, it is calculated like this (Row 1 Column 2)
AB<sub>11</sub> = (1x5) + (4x3) + ((-2) x (-2))
![[Pasted image 20250105134414.png]]

For AB<sub>12</sub> in the matrix, it is calculated like this. (Row 1 Column 2)
AB<sub>12</sub> = (1x2) + (4x6) + ((-2) x 9)
![[Pasted image 20250105134746.png]]

# See Also
