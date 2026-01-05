---
tags:
  - Databases1
aliases:
---
## Syntax for Creating Functions
```sql showlinenumbers
CREATE OR REPLACE FUNCTION
functionName(parameterName dataType)
RETURNS returnType AS $$
BEGIN
RETURN something;
END;
$$ LANGUAGE plpgsql;
```

**Example**
```sql showlinenumbers
--PL/SQL
CREATE OR REPLACE FUNCTION get_project_status(begin_d DATE, end_d DATE)
RETURNS TEXT AS $$
BEGIN
IF current_date BETWEEN begin_d AND end_d THEN
RETURN 'Active';
ELSEIF current_date < begin_d THEN
RETURN 'Upcoming';
ELSE
RETURN 'Completed';
END IF;
END;
$$ LANGUAGE plpgsql;
```

```sql showlinenumbers
SELECT research_id, title,  
get_project_status(begin_date, end_date) AS project_status  
FROM research  
LIMIT 5;
```

## Built in postgreSQL functions
```sql
-- Make research title UPPERCASE for display --
SELECT title, UPPER(title) "Upper Title"
FROM research;

-- Make venues lowercase for standardised export --
SELECT venue, LOWER(venue) "Lower Title"
FROM publication;
```

**Can also be used for WHERE conditions, and a variety of others**
```sql
-- Make each lastname lowercase, for easy search --
SELECT lastname
FROM scientist
WHERE LOWER(lastname) = 'murphy';
```


### Table of Other Useful Functions
| Function                       | Result      |
| ------------------------------ | ----------- |
| CONCAT('Hello','World')        | Hello World |
| SUBSTR('Hello World',1,5)      | Hello       |
| LENGTH('Hello World')          | 10          |
| POSITION('W' in 'Hello World') | 6           |
| LPAD('tech',8,'x')             | xxxxtech    |
| RPAD('tech',8,'x')             | techxxxx    |
| REPLACE('Abbaa', 'a', '1')     | Abb11       |
| TRIM('H' FROM 'Hello')         | ello        |

# See Also
[[$ Databases 1]]
