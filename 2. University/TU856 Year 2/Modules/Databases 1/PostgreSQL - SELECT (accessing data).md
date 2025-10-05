---
tags:
  - Databases1
aliases:
---

This is used to select and display data from a database, according to your specifications.

## Select Entire Column From Table
```sql showlinenumbers
SELECT columnName FROM tableName;
```
This will output all values from a specific table

## Select Specific Columns From Table
```sql showlinenumbers
SELECT * FROM columneName WHERE a <,=,>,<=,>=,<>(not equal) b;
```
- `*` select all columns
- `a < b` criteria to filter out columns where a is smaller than b

**Example**
The table below is called `movies`

| movieTitle  | movieID | director          |
| ----------- | ------- | ----------------- |
| Triangle    | 1       | Christopher Smith |
| 1408        | 2       | Mikael Håfström   |
| Oppenheimer | 3       | Louis Leterrier   |

Lets show all movies where `movieID` is greater than 1
```sql showlinenumbers
SELECT movieTitle FROM movies WHERE movieID > 5;
```

| movieTitle  |
| ----------- |
| 1408        |
| Oppenheimer |

Lets show all movies where `movieID` is greater than 1, and the director is Christopher Nolan
```sql showlinenumbers
Select movieTitle,director FROM movies WHERE movieID > 2 AND director='Christopher Nolan';
```


| movieTitle  | director          |
| ----------- | ----------------- |
| Oppenheimer | Christopher Nolan |



# See Also
[[$ Databases 1]]
