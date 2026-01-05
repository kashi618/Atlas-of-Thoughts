---
tags:
  - Databases1
aliases:
---
## Values/Rows?
Inserting a value is the same as creating a new row in a table

## Types of Inserts
**Full Insert**
This inserts a value for every column in the table

**Partial Insert**
This inserts some values, accepting default values for the other columns

## How To Add a New Row
### With Column Specification
- For this method, we specify what columns to insert whatever values into

```sql showlinenumbers
INSERT INTO tableName (columnName, ...) VALUES (tableValue, ...);
``` 

#### Example
```sql showlinenumbers
/* Example */
INSERT INTO users (firstName, secondName) VALUES ("john", "doe");
```

| firstName | secondName |
| --------- | ---------- |
| "john"    | "doe"      |

### Without Column Specification
- For this method, we do not specify the columns to insert values into. Therefore, the DBMS assumes that you are adding values in the column order it expects
- This is useful when you know the order of the columns, and you are filling out all the attributes
- **NOTE:** if there is a [[SQL Datatypes|SERIAL]] data type, then you would need to list the columns. This method wouldn't work

```sql
INSERT INTO tableName VALUES (tableValue, ...);
```

#### Example
```sql showlinenumbers
/* Example */
INSERT users VALUES ("john", "smith");
```

| firstName | secondName |
| --------- | ---------- |
| "john"    | "doe"      |


# See Also
[[$ Databases 1]]
