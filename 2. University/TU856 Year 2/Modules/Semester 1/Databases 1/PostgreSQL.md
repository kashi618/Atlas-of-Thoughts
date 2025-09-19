---
tags:
  - Databases1
aliases:
---
Commenting
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


## DDL and DML

**DDL**

| Command      | Definition                                                  |
| ------------ | ----------------------------------------------------------- |
| CREATE TABLE | Defines a new table and its columns                         |
| ALTER TABLE  | Modifies existing table structure (adding/removing columns) |
| DROP TABLE   | Deletes existing table and its data                         |
**DML**

| Command     | Definition                        |
| ----------- | --------------------------------- |
| INSERT INTO | Add new rows to existing table    |
| UPDATE      | Modifies rows in existing table   |
| DELETE FROM | Remove data from existing table   |
| SELECT      | Retrives data from existing table |

## What is a Table?
- Object used for storing data in a database

## Creating a Table
### Table Requirements
- Table name
- Name of each column
- Data type of each column
- Size of each column
- Any constraints on the data each column contains

### Process to Create a Table
1. Drop tables
```sql
--Drop the table movies and actors
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS actors;
```

2. Create table with "movieID" as primary key
```sql
--One way to set primary key
CREATE TABLE actors (
	movieID TEXT PRIMARY KEY,
	movieTitle TEXT,
	relearYear INT,
	director TEXT,
	budget numeric(8, 2),
	profit numeric(8, 2)
);

--Another way to set primary key
CREATE TABLE actors (
	movieID TEXT,
	movieTitle TEXT,
	relearYear INT,
	director TEXT,
	budget numeric(8, 2),
	profit numeric(8, 2),
	PRIMARY KEY(movieID)
);
```


# See Also
[[$ Databases 1]]
