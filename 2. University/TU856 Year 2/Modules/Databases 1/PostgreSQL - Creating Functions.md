---
tags:
  - Databases1
aliases:
---
## Syntax
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

# See Also
[[$ Databases 1]]
