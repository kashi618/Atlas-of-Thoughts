---
tags:
  - Mathematics-2
aliases:
---
## Instructions

Encrypt the plain text `SHOE` using the matrix $\begin{bmatrix}4&3\\2&1\end{bmatrix}$

### Step 1 Break plain text into groups of 2

A B C D E F G H I J K. L. M. N. O. P. Q. R. S. T. U. V. W. X. Y. Z
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

`SHOE` -> 18 7 14 4

$\begin{bmatrix}S\\H\end{bmatrix}$ $\begin{bmatrix}O\\E\end{bmatrix}$ -> $\begin{bmatrix}S&O\\H&E\end{bmatrix}$ -> $\begin{bmatrix}18&14\\7&4\end{bmatrix}$

### Step 2 Multiply plain Text by cipher
$\begin{bmatrix}4&3\\2&1\end{bmatrix}*\begin{bmatrix}18&14\\7&4\end{bmatrix}$
Cipher . Plain

**Note:** Cipher matrix must come first

$\begin{bmatrix}4&3\\2&1\end{bmatrix}*\begin{bmatrix}18&14\\7&4\end{bmatrix}=\begin{bmatrix}111&82\\43&32\end{bmatrix}$

### Step 3 Convert into modulo 26
**Note:** modulo 26 because there are 26 letters in the alphabet
$\begin{bmatrix}111&82\\43&32\end{bmatrix}\to\begin{bmatrix}7&4\\17&6\end{bmatrix}$

### Step 4 Convert back into leters

$\begin{bmatrix}7&4\\17&6\end{bmatrix}\to \begin{bmatrix}H&E\\R&G\end{bmatrix}\to HREG$


## Notes
- You can encode using 2x1 matrices OR 4x4 matrices. They do not matter. You only need to make sure the rows are the same.
- If the amount of characters to encode is odd, then you will need to include an `x` as the last letter.


# See Also
[[$ Mathematics 2]]
