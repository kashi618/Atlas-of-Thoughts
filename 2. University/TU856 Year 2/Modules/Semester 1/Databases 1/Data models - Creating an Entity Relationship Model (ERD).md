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
Identify relevant vlaue constraints on the attributes, andensure that whoever uses the data can be confident the data will be consistent

#### Example
Each council must have a unique numeric ID
- Unique numeric ID

Each competition must have :
- Unique numeric ID

Each team must have:
- Unique numeric ID


# See Also
[[$ Databases 1]]
	