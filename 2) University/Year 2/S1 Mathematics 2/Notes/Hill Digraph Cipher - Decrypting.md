---
tags:
  - Mathematics-2
aliases:
---
## Instructions

Decrypt the cipher text `WKFT` using the matrix $A=\begin{bmatrix}4&1\\3&2\end{bmatrix}$


### Step 1 find det(A) and adj(A)
$det(A) = \frac{1}{(4)(2)-(1)(3)} = \frac{1}{5 }$

- Multiply (top left)(bottom right) - (top right)(bottom left)

$adj(A)=\begin{bmatrix}2&-1\\-3&4\end{bmatrix}$

- Swap top left and top right, swap signs on top right and bottom left

### Step 2 Find the inverse
$A^{-1}=det(A)*adj(A)$

$A^{-1}=\frac{1}{5}\begin{bmatrix}2&-1\\-3&4\end{bmatrix}$

However, fractions do not work in modulo number systems. Therefore, we need to find the inverse of $5^{-1}$ first.

**We can use extended euclidean algorithm:**
$26=5(5)+1$
$1(26)-5(5)=1$
$-5(5)=1$

Inverse is -5, which is congruent to 21mod26. (-5+26 = 21).
Therefore,m

$A^{-1}=21\begin{bmatrix}2&-1\\-3&4\end{bmatrix}=\begin{bmatrix}42&-21\\-63&84\end{bmatrix}$

$\begin{bmatrix}42&-21\\-63&84\end{bmatrix}≡\begin{bmatrix}16&5\\15&6\end{bmatrix}(mod\>26)$

### Step 3 Multiply cipher text by matrix
a b c d e f g h i j k. l. m. n. o. p. q. r. s. t. u. v. w. x. y. z.
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

`WKFT` = 22 10 5 19 -> $\begin{bmatrix}22\\10\end{bmatrix}AND\begin{bmatrix}5\\19\end{bmatrix}$


$\begin{bmatrix}16&5\\15&6\end{bmatrix}\begin{bmatrix}22\\10\end{bmatrix}=\begin{bmatrix}12\\0\end{bmatrix}\to \begin{bmatrix}M\\A\end{bmatrix}$

$\begin{bmatrix}16&5\\15&6\end{bmatrix}\begin{bmatrix}5\\19\end{bmatrix}=\begin{bmatrix}19\\7\end{bmatrix}\to \begin{bmatrix}T\\H\end{bmatrix}$

Decrypted text = MATH

## Notes
- You can use 2x2 OR 2x1 matrices to decode. Its only that the rows has to be the same.
# See Also
[[$ Mathematics 2]]
