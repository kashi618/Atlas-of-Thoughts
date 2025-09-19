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

## Creating a Table (IMBD)


#Ada-Lovelace 





#### 4. Insert data
```
INSERT INTO actors values
```

### Compound Primary Key
What if we decide that we have more than 1 primary keys, then we can use a compound primary key
```sql
CREATE TABLE movieCast(
	movieID SERIAL,
	actorID SERIAL,
	roleplayed VARCHAR950),
	PRIMARY KEY (movieID, actorID)
)
```

### Foreign Keys


### Partial and Full Insertion
**Partial Insertion**
when you insert data into specific attributes (if you don't have data for all attributes)

**Full Insertion**
When you insert data into each attribute


# See Also
[[$ Databases 1]]
