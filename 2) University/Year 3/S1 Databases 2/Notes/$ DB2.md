## MOC
- [[SQL Aggregate Functions]]
	- [[SQL GROUP BY]] 
- [[SQL Window Functions]]
	- [[SQL OVER()]]
		- [[SQL OVER( PARTITION BY )]]`
	- [[SQL ROW_NUMBER()]]

	- [[SQL LAG() & LEAD()]]
	- [[SQL RANK() & DENSE_RANK()]]

- [[SQL JOINS]]

---

PSQL postgress command line !!!

---
# CTE - Common Table Expressions
A CTE is a named query, that can be used by another query.
```sql
WITH cte_name AS(
	SELECT ...
)
SELECT ...
FROM cte_name;	
```

## Why Use a CTE?

---
# CTE vs Subquery

| CTE                                           | Subquery                                        |
| --------------------------------------------- | ----------------------------------------------- |
| Intermediate query given a name using `WITH`  | Intermediate query written inside another query |
| Name is available within that satement        | Exists only as part of that statement           |
| Can make multi-stage queries easier to follow | Can become difficult to read when nested        |

## CTE
```sql
WITH patient_summary AS (  
	SELECT patient_id,  
		COUNT(*) AS  
completed_count  
	FROM appointment  
	WHERE status = 'Completed'  
	GROUP BY patient_id  
)  
SELECT  p.first_name,  
		p.last_name,  
		ps.completed_count  
FROM patient p  
JOIN patient_summary ps  
	ON p.patient_id = ps.patient_id  
WHERE ps.completed_count >= 2;
```
## Subquery
```sql
SELECT p.first_name,  
		p.last_name,  
		s.completed_count  
FROM patient p  
JOIN (  
	SELECT patient_id,  
		COUNT(*) AS  
completed_count  
	FROM appointment  
	WHERE status = 'Completed'  
	GROUP BY patient_id  
) s  
	ON p.patient_id = s.patient_id  
WHERE s.completed_count >= 2;
```

---
# SQL Procedural Programming
SQL is declaritive. You describe the results you want, instead of the individual steps required to produce it

Sometimes database logic requires a sequence of steps, for example:
- Count scheduled appointments. If more than 10, display warning. Else, display normal message.
	1) Run query
	2) Store the results
	3) Test the results
	4) Return difference output depending on result
This requires procedural logic.

Specifically, PL/SQL.

---
# PL/pgSQL Creating Functions
```plsql
DO $$
DECLARE
	appointment_count INTEGER;
BEGIN
	-- statements go here
END;
$$
```

- `DO $$` Starts an anonymous code block
- `DECLARE` Declares [[pgSQL - Creating Variables|variables]].
- `BEGIN` starts the executable statements
- `END; $$` Ends the executable statements

*NOTE:* Anonymous means the block is executed, but the result is NOT stores for later use

---
[[PL/pgSQL - Creating Variables]]
# PL/pgSQL Variables
```plsql
DECLARE
	appointment_count INTEGER:
	doctor_count INTEGER := 10;
```
- Creates a variable of name `appointment_count`
- Data type of variable is integer
- Values can be assigned using `:=`

## Using Variable in SQL
To use a stored result in a variable,
```sql
DO $$
DECLARE appointment_count INTEGER;
BEGIN
	SELECT COUNT(*)
	INTO appointment_count
	FROM appointment
	WHERE status = "Scheduled";
	
	RAISE NOTICE 'Scheduled appointments: %', appointment_count;
END;
$$;
```
- `RAISE NOTICE` is used to display a message from PL/pgSQL
- `%` is a delimiter to be replaced by the variable `appointment_count`

---
# PL/pgSQL - Conditional Statements
## IF ELSEIF ELSE
```sql
IF condition THEN
	-- execute if true
ELSE
	-- execute if false
END IF;
```
```sql
IF condition THEN
	-- execute code
ELSEIF condition THEN
	-- execute code
ELSE
	-- execute code
ENDIF;
```

**Example**
```sql
IF appointment_count > then THEN
	RAISE NOTICE 'HIGH number of scheduled appointments';
ELSE 
	RAISE NOTICE 'Normal number of scheduled appointments';
END IF;
```

```sql
DO $$
DECLARE
	noshow_count INTEGER;
BEGIN
	SELECT COUNT(*)
		INTO noshow_count
		FROM appointment
		WHERE status = 'No Show';
	
	IF noshow_count > 10 THEN
		RAISE NOTICE 'HIGH number of no shows';
	ELSEIF noshow_count > 6 THEN
		RAISE NOTICE 'Medium number of noshows';
	ELSE
		RAISE NOTICE 'Low number of noshows';
	ENDIF;
	
END;
%%;
```

## CASE
```sql
DO $$  
DECLARE  
	appointment_count INTEGER;  
BEGIN  
	SELECT COUNT(*)  
		INTO appointment_count  
		FROM appointment  
		WHERE status = 'Completed';  
	
	CASE  
	WHEN appointment_count > 10 THEN  
		RAISE NOTICE 'High number of completed appointments';  
	WHEN appointment_count > 6 THEN  
		RAISE NOTICE 'Medium number of completed appointments';  
	ELSE  
		RAISE NOTICE 'Normal number of completed appointments';  
	END CASE;  

END;  
$$;
```

---
# PL/pgSQL - Loops
## LOOP

## WHILE

## FOR



{LECTURE SLIDE LAST week 3}

