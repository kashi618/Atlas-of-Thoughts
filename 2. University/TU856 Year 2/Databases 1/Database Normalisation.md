---
tags:
  - Databases1
aliases:
---

## Primary Objectives
Database normalisation is a process to make a database efficient, reliable, and easy to maintain.
Here are the core goals:
- Reduce and eliminate redundant data.
  - Storing duplicates of the same data in many tables wastes storage and is inefficient
- Prevent data anomalies
	- Changing a value in one place, but forgetting to change it in another can lead to inconsistency between tables
	- User inputted values may be in the wrong format or length, etc
- Improve data integrity
	- Ensuring each piece of data is stored in only one place, guarantees that it is the only "source" of truth.
	- Also ensuring that relationships between data are consistent

# See Also
[[$ Databases 1]]
