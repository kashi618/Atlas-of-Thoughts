---
tags:
  - Databases1
aliases:
---

## Table Requirements
- Table name
- Name of each column
- Data type of each column
- Size of each column
- Any constraints on the data each column contains

## Process
### 1. Drop tables
- Dropping tables before defining them helps avoid the "Table Already Exists" error, and also helps completely reset an existing one.
```sql showlinenumbers
--Drop the table movies and actors
DROP TABLE IF EXISTS movies; --Information about the movie
DROP TABLE IF EXISTS actors; --Information about actors
DROP TABLE IF EXISTS movieCast; --List movie with actors and roles
```

### 2. Create table with attributes
For this example, we will create 2 tables. One to store information about each movie, and one to store information about each actor. 
```sql showlinenumbers
--Movie Table
CREATE TABLE movies (
	movieID TEXT,
	movieTitle TEXT,
	relearYear INT,
	director TEXT,
	budget numeric(8, 2), --8 digits with 
	profit numeric(8, 2)  --2 decimal places
);

--Actor Table
CREATE TABLE actors (
	actorID SERIAL,
	actorName TEXT
);
```

### 3. Define a primary key (PK)
There are two main ways to define a primary key

1. **Column Level**
```sql showlinenumbers {2}
CREATE TABLE actor(
	actorID SERIAL PRIMARY KEY,
	actorName VARCHAR(30)
);;
```

2. **Table Level**
```sql showlinenumbers {4}
CREATE TABLE actor(
	actorID SERIAL,
	actorName VARCHAR(30),
	PRIMARY KEY (actorID)
);
```

### 3.1 Compound/composite primary key
```sql showlinenumbers
CREATE TABLE 
```



# See Also
[[$ Databases 1]]
[[PostgreSQL]]