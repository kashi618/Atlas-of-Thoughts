---
tags:
  - Databases1
aliases:
  - Primary Key
  - Foreign Key
---
## Primary and Foreign Keys
### Primary Key (PK)
A column in a table that uniquely identifies each row in that table.
**Rules**
- Every row is unique (no duplicates)
- The value never changes
- The value is not NULL (each row needs to have a value)

**Example**
This is a database that stored customers and their clubcard points. The primary key (PK) would be the `CustomerID`.

| CustomerID (PK) | ClubcardPoints |
| --------------- | -------------- |
| A123            | 200            |
| B456            | 150            |
| C789            | 175            |


### Foreign Key
A column or set of columns in a table that references the primary key of another table. It allows and establishes a link between two tables.
**Rules**
- Can be NULL
- Does not need to be unique

**Example**
This is a database that stores each customers orders. The foreign key (FK) would be the `CustomerID`, as that is what links this database to the previous one. As you can see, customer `A123` has many orders, but that is okay, because it is a foreign key.

| OrderID (PK) | CustomerID (FK) | Price |
| ------------ | --------------- | ----- |
| 4123321431   | A123            | 10.99 |
| 975323443    | A123            | 6.78  |
| 7134345279   | A1123           | 20.99 |
| 1235131324   | B456            | 6.99  |
| 576434634    | C789            | 3.89  |



# See Also
[[$ Databases 1]]
