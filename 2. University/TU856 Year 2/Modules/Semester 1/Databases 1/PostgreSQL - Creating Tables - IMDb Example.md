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
### 1. Dropping Tables
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

### 3. Defining a Primary Key (PK) and Foreign Key (FK)
There are two main ways to define a primary key:

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

### 3.1 Primary Key Constraint
A rule that enforces uniqueness and prevents null values on a column. To enforce this rule, PostgreSQL automatically creates a unique index on that column

- The code below creates a constraint primary key called `actors_pk` using the `actorID` attribute
```sql showlinenumbers
CREATE TABLE actors (
    actorID SERIAL,
    actorName VARCHAR(30),
    CONSTRAINT actors_pk PRIMARY KEY (actorID)
);
```

### 3.2 Compound/composite primary key
Currently we have a table for movies, and a table for actors. Now we want to make another table that shows the cast of actors for each movie. If we only use foreign keys, then each movie will have duplicates, due to the `movieID` being counted and the `actorID` being counted aswell.

| movieID | actorID | rolePlayed          |
| :---    | :---    | :---                |
| 101     | 201     | Tony Stark          |
| 101     | 201     | Tony Stark          |
| 101     | 201     | Iron Man            |
| 101     | 202     | Pepper Potts        |
| 102     | 201     | Sherlock Holmes     |


- In PostgreSQL, we fix this using a compound primary key that combines the `movieID` and `actorID`
```sql showlinenumbers {5}
CREATE TABLE movieCast(
	movieID SERIAL,
	actorID SERIAL,
	rolePlayed VARCHAR(50),
	PRIMARY KEY (movieID, actorID)
);
```



# See Also
[[$ Databases 1]]
[[PostgreSQL]]