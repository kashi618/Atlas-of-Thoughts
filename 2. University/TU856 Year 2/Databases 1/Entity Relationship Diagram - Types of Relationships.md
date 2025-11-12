---
tags:
  - Databases1
aliases:
---
## One to One (1:1)
This means a single record in table A is associated with a single record in table B

**Example**
A person has one passport, and each passport belongs to one person

## One to Many (1:N)
This means a single record in table A, can be associated with multiple records in table B. However, a record in table B can only relate to one record in table A

**Example**
A library can have many books, but each book only belongs to one library

## Many to One (M:1)
A reverse of the one to many relationship. Many records in table A can be associated to a single record in table B.

**Example**
Many students can belong to one classroom


## Many to many (M:N)
Multiple records in table A can relate to multiple records in B, and vice versa. 
- Usually requres a junction table to facilitate the connection

**Example**
Students can enrol in multiple courses, and each course can have multiple students enrolled.

![[Pasted image 20250923130207.png]]

# See Also
[[$ Databases 1]]
[[Entity Relationship Diagram -  How to Create]]
[[Entity Relationship Diagram (ERD)]]
