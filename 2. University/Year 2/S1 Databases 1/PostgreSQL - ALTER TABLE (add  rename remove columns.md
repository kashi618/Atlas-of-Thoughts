---
tags:
  - Databases1
aliases:
---

## General Syntax
```sql showlinenumbers
ALTER TABLE tableName [ADD | DROP | ALTER | RENAME] ... ;
```

## Adding a Column
```sql showlinenumbers
ALTER TABLE tableName ADD COLUMN columnName dataType;
```

#### Example

```sql showlinenumbers
/* Simple table called users with a firstname column */
CREATE TABLE users (firstname VARCHAR(20));

/* Use ALTER TABLE to add column called surname */
ALTER TABLE users ADD COLUMN surname varchar(20);
```

| firstname | surname |
| --------- | ------- |
|           |         |

## Changing Column Data Type
```sql showlinenumbers
ALTER TABLE tableName ALTER COLUMN columnName newDataType;
```

#### Example
```sql showlinenumbers
/* Simple table called users with firstname, however it is the wrong datatype */
CREATE TABLE users (firstname INTEGER));

/* Using ALTER to change the datatype to the correct one */
ALTER TABLE users ALTER COLUMN users firstname VARCHAR(20);
```

## Renaming Columns
```sql showlinenumbers
ALTER TABLE tableName RENAME COLUMN columnName TO newColumnName 
```

#### Example
```sql showlinenumbers
/* Simple table called users, but firstname column spelt wrong */
CREATE TABLE users (firtnme VARCHAR(20));

/* Use RENAME to rename column */
ALTER TABLE users RENAME COLUMN firtname TO firstname;
```

## Dropping/Removing Columns
```sql showlinenumbers
ALTER TABLE tableName DROP COLUMN columneName;
```

#### Example
```sql showlinenumbers
/* Simple table called users */
CREATE TABLE users (firstname VARCHAR(20), age INTEGER);

/* Using DROP to remove age column */
ALTER TABLE users DROP COLUMN age;
```

# See Also
[[$ Databases 1]]
