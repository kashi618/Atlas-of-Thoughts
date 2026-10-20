---
tags:
  - Databases2
aliases:
---

`ROW_NUMBER()` assigns a different sequential number to every row. If used in conjunction with `PARTITION BY`, numbering restarts for each partition

## Examples
**Before**

| name | department | salary |
| ---- | ---------- | ------ |
| Bob  | Tech       | €120k  |
|      |            | €100k  |
|      |            | €      |
|      |            |        |

# See Also
[[$ DB2]]
