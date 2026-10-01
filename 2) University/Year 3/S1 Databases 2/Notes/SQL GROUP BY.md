---
tags:
  - Databases2
aliases:
---

`GROUP BY` is used to collapse/merge rows that share identical values
It is usually used with aggregate functions such as `SUM()`, `AVG()`, `COUNT()`, `MIN()`, `MAX()`.

## Before / After
**Before**

| category    | product | amount |
| ----------- | ------- | ------ |
| Electronics | Laptop  | 1000   |
| Electronics | Mouse   | 50     |
| Electronics | Laptop  | 1200   |
| Fruit       | Apple   | 2      |
| Fruit       | Banana  | 1      |
| Electronics | Mouse   | 60     |

**After**
```postgresql
SELECT category, SUM(amount) AS total_sales
FROM sales
GROUP BY category;
```

| category    | total_sales |
| ----------- | ----------- |
| Electronics | 2110        |
| Fruit       | 3           |

# See Also
[[$ DB2]]
