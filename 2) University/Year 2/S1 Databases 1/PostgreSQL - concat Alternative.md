---
tags:
  - Databases1
aliases:
---

## Another Way to Concatenate
For concatenating string, we either use [[PostgreSQL - Functions|concat()]] or `||`

However, there is one difference
`CONCAT('A',NULL)` = `'A'`
`'A' || NULL` = `NULL`




# See Also
[[$ Databases 1]]
