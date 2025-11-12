---
tags:
  - Databases1
aliases:
  - Primary Key
  - Foreign Key
---
### Primary Key (PK)
A column in a table that uniquely identifies each row in that table.
**Rules**
- Every row is unique (no duplicates)
- The value never changes
- The value is not NULL (each row needs to have a value)

### Foreign Key
A column or set of columns in a table that references the primary key of another table. It allows and establishes a link between two tables.
**Rules**
- Can be NULL
- Does not need to be unique

### Example Usage

![[Pasted image 20250919124610.png]]

- In the `Students` table, the **primary key** is the `student_id`
- In the `Courses` table, the **primary key** is the `course_code`
- In the `Enrollment` table, the **foreign key** is the `student_id` and the `course_code`
# See Also
[[$ Databases 1]]
