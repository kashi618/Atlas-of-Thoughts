---
tags:
  - Databases2
aliases:
---

It is used to designate a SQL function as a window function, allowing you to perform calculations on table rows, without collapsing the result into a single row (not an aggregate).

## Ways to Use Over()
### Empty OVER()
```postgresql
SELECT
	employee_name,
	salary,
	AVG(salary) OVER() as company_avg_salary
FROM employees;
```
This returns a table with the salaries of each employee, as well as a row called `company_avg_salary` that contains the avg salary of all employees

### PARTITION BY
![[SQL OVER( PARTITION BY )]]


# See Also
[[$ DB2]]
