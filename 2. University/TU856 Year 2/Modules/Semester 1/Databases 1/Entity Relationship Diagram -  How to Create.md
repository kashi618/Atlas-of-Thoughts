---
tags:
  - Databases1
aliases:
---

## Example
A local county council organises football competitions for school children.
- Each local county council has a unique identifier and a name

Competitions are held on different dates for different age groups with fees and prices
- Each competition has a unique ID and a name

There are lots of teams that compete
- Each team has an ID, a name, and an age group


## Creating an ERD
### 1. Identify and Find the Entities
- Conduct interviews and document analysis
- Ask what things need to be captured,stored, or produce information about
- Study forms, files, reports
- Identify event entities (e.g. orders, payments, etc)
- Look for relationships between things

#### Example
There are 3 tables: 
- Councils
- Teams
- Competitions



### 2. Allocate Attributes to Entities
- For each entity:
	- Identify its attributes
	- Decide on a name for each
	- Identify the correct data type and size required

#### Example
Each council has a
- Unique ID **INT**
- Name **VARCHAR (40)**

| Council ID | Council Name |
| ---------- | ------------ |
| .          | .            |


Each team has a:
- Unique numeric ID **INT**
- Name **VARCHAR (40)**
- Age group **INT**

| Competition ID | Team Name | Age Group |
| -------------- | --------- | --------- |
| .              | .         | .         |

Each Competition has a:
- Unique ID **INT**
- Name **VARCHAR (40)**
- Entrance free (can store up to 999.99) **NUMERIC (5,2)**
- Prize (can store up to 9999.99) **NUMERIC (6,2)**
- Date of competition **DATE**


| Competition ID | Competition Name | Entrance Fee | Prize | Competition Date |
| -------------- | ---------------- | ------------ | ----- | ---------------- |
| .              | .                | .            | .     | .                |


### 3. Entity Constraints
Identify relevant value constraints on the attributes, and ensure that whoever uses the data can be confident the data will be consistent

For each entity,
- Identify which attribute will uniquely identify it (primary key), with these 3 rules
	1. Value cannot change
	2. Value cannot be null
	3. Value must be unique

#### Example
Each council must have:
- **Unique numeric ID**

Each competition must have :
- **Unique numeric ID**

Each team must have:
- **Unique numeric ID**

### 4. Define the Relationships
A relationship is a link or an association between two entities which is meaningful for the organisation. 
To define a relationship, we must first:
- Define the type and optionality of each relationship. Does it have to exist for all instances?
- Define the cardinality/complexity/degree of these relationships
Check [[Entity Relationship Diagram - Types of Relationships]]

**Example**
![[Pasted image 20250923130132.png]]

# See Also
[[$ Databases 1]]
[[Entity Relationship Diagram (ERD)]]
[[Entity Relationship Diagram - Types of Relationships]]