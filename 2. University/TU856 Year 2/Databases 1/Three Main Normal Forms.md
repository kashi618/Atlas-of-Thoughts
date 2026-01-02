---
tags:
  - Databases1
aliases:
---
## 1NF - Atomicity
Ensuring atomicity in a database makes sure that every cell contains a single value
- Each column contains only one value

## 2NF - No Partial Dependencies
Tables/entities shouldn't depend on "part" of a composite/primary key.
- If a table contains two primary keys, but only depends on one of them, the other primary key is a partial dependency.

## 3NF - No Transitive Dependencies
Attributes shouldn't depend on non-key attributes
- In a table with `authorID (PK), authorName, bookID, bookName`, authorName should depend on authorID, and bookName should depend on bookID. However, bookID has a transitive dependency to authorID.


# See Also
[[$ Databases 1]]
