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

## IMDb Example
### 1. Dropping Tables
- When making a SQL script, dropping tables at the start of the script helps clear out any old versions of our tables. (if we are testing, etc)
- However, the `DROP TABLE tableName` gives an error if no such table exists. Therefore, we use the `DROP TABLE IF EXISTS tableName` command.
- When dropping tables, you must drop them in the order they were created. If we drop a table that contains a column that is a foreign key in another table, we will get an error message. (drop movieCast > drop actors > drop movies)
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
```sql showlinenumbers {4}
CREATE TABLE actors (
    actorID SERIAL,
    actorName VARCHAR(30),
    CONSTRAINT actors_pk PRIMARY KEY (actorID)
);
```

### 3.2 Compound Primary key
For the movieCast table, if we use the primary key `movieID` and `actorID`, then there could be duplicates. To fix this, we can use a compound primary key, that uses `movieID` and `actorID`

**Example: Without a compound primary key, this would be valid, despite the duplications**

| movieID | actorID | rolePlayed      |
| :------ | :------ | :-------------- |
| 101     | 201     | Tony Stark      |
| 101     | 201     | Tony Stark      |
| 101     | 201     | Iron Man        |
| 101     | 202     | Pepper Potts    |
| 102     | 201     | Sherlock Holmes |

- This is how to create a compound key
```sql showlinenumbers {7}
CREATE TABLE movieCast(
    movieID INTEGER NOT NULL,
    actorID INTEGER NOT NULL,
    rolePlayed VARCHAR(50),
    
    -- The Compound Primary Key (Prevents duplicates)
    PRIMARY KEY (movieID, actorID),
);
```

### 3.3 Defining Foreign Key
We can use a foreign key to link the `movieCast` table to the `actors` table and `movies` table like this
```sql showlinenumbers {10,11}
CREATE TABLE movieCast(
    movieID INTEGER NOT NULL,
    actorID INTEGER NOT NULL,
    rolePlayed VARCHAR(50),
    
    -- The Compound Primary Key (Prevents duplicates)
    PRIMARY KEY (movieID, actorID),
    
    -- The Foreign Keys (Ensure valid references)
    FOREIGN KEY (movieID) REFERENCES Movies(movieID),
    FOREIGN KEY (actorID) REFERENCES Actors(actorID)
);
```

Same thing but with constraints
```sql
CREATE TABLE movieCast(
    movieID INTEGER NOT NULL,
    actorID INTEGER NOT NULL,
    rolePlayed VARCHAR(50),
    
    -- The Compound Primary Key (Prevents duplicates)
    CONSTRAINT moviecast_pk PRIMARY KEY (movieID, actorID),
    
    -- The Foreign Keys (Ensure valid references)
    CONSTRAINT moviecast_movie_fk FOREIGN KEY (movieID) REFERENCES Movies(movieID),
    CONSTRAINT moviecast_actor_fk FOREIGN KEY (actorID) REFERENCES Actors(actorID)
);
```


# See Also
[[$ Databases 1]]
[[PostgreSQL]]