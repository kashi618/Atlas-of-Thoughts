---
tags:
  - Matrices
  - Mathematics
---
## Finding the Inverse of a 2x2 Matrix
$A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$

$A^{-1}=\det A*Adj A\frac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$

### Example
$A=\begin{bmatrix}4&9\\1&2\end{bmatrix}$


$A^{-1}=\frac{1}{(4*2)-(9*1)}\begin{bmatrix}2&-9\\-1&4\end{bmatrix}=-\frac{1}{1}\begin{bmatrix}2&-9\\-1&4\end{bmatrix}=-1\begin{bmatrix}2&-9\\-1&4\end{bmatrix}=\begin{bmatrix}-2&9\\1&-4\end{bmatrix}$

# See Also
[[Matrices]]