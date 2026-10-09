---
tags:
  - Databases2
aliases:
---
`PARTITION BY` divides rows into separate windows, creating an instance for each relevant entity

## Example
**Before**

| name    | department | salary    |
| ------- | ---------- | --------- |
| Alice   | Tech       | €100k     |
| Bob     | Tech       | €120k<br> |
| Charlie | Sales      | €80k      |
| Diana   | Sales      | €90k      |

**After**
```sql {5}
SELECT
	name,
	department,
	salary
	AVG(salary) OVER (PARTITION BY department) AS dept_avg_salary
FROM employees;
```

| name    | department | salary | dept_avg_salary |
| ------- | ---------- | ------ | --------------- |
| Alice   | Tech       | €100k  | €110k           |
| Bob     | Tech       | €120k  | €110k           |
| Charlie | Sales      | €80k   | €85k            |
| Diana   | Sales      | €90k   | €85k            |

# See Also
[[$ DB2]]
