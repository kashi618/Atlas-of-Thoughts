---
tags:
  - Databases1
aliases:
---
## How to Comment
- Single Line
```SQL
--Cool Comment
```
- Multi Line
```SQL
/*
nice
nice
nice
*
```


| Data Type                      | Description                                           |
| ------------------------------ | ----------------------------------------------------- |
| INTEGER                        | 32-bit signed integer                                 |
| BIGINT                         | 64-bit signed integer                                 |
| CHAR(n)                        | Fixed length string of EXACT n length characters      |
| VARCHAR(n)                     | Variable length string of MAX n length characters     |
| TEXT                           | Variable length string without max length             |
| TIMESTAMP                      | Date and time, including fractional seconds           |
| DATE                           | Date without time component                           |
| BOOLEAN                        | Represents true or false values                       |
| DECIMAL(p, s) or NUMERIC(p, s) | Fixed point number with p digits and s decimal places |

## DDL and DML

### Data Definition Language (DDL)
Used to define, modify, and delete tables

| Command      | Definition                                                  |
| ------------ | ----------------------------------------------------------- |
| CREATE TABLE | Defines a new table and its columns                         |
| ALTER TABLE  | Modifies existing table structure (adding/removing columns) |
| DROP TABLE   | Deletes existing table and its data                         |
i
### Data Manipulation Language (DML)
Used to manipulate the table

| Command     | Definition                        |
| ----------- | --------------------------------- |
| INSERT INTO | Add new rows to existing table    |
| UPDATE      | Modifies rows in existing table   |
| DELETE FROM | Remove data from existing table   |
| SELECT      | Retrives data from existing table |


# See Also
[[$ Databases 1]]
[[PostgreSQL - Creating Tables - IMDb Example]]
[[PostgreSQL - Inserting Data - IMDb Example]]