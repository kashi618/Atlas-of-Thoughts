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

## Creating a Table (IMBD)
### Table Requirements
- Table name
- Name of each column
- Data type of each column
- Size of each column
- Any constraints on the data each column contains

### Process to Create a Table
#### 1. Drop tables
```sql
--Drop the table movies and actors
DROP TABLE IF EXISTS movies; --Information about the movie
DROP TABLE IF EXISTS actors; --Information about actors
DROP TABLE IF EXISTS movieCast; --List movie with actors and roles
```

#### 2. Create table with attributes
```sql
CREATE TABLE movies (
	movieID TEXT,
	movieTitle TEXT,
	relearYear INT,
	director TEXT,
	budget numeric(8, 2), --8 digits with 
	profit numeric(8, 2)  --2 decimal places
);

CREATE TABLE actors (
	actorID SERIAL,
	actorName TEXT
);
```

#### 3. Define a primary key
**Column Level**
```sql
CREATE TABLE actor(
	actorID SERIAL PRIMARY KEY,
	actorName VARCHAR(30)
);;
```

**Table Level**
```sql {4}
CREATE TABLE actor(
	actorID SERIAL,
	actorName VARCHAR(30),
	PRIMARY KEY (actorID)
);
```


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
