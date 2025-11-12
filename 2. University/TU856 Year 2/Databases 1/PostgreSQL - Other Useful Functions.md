---
tags:
  - Databases1
aliases:
---

## General Functions
### nullif()
Accepts two arguments, and returns NULL if they are equal. Else, they return first argument

```sql showlinenumbers
SELECT sponsor, 
nullif(sponsor, 'SFI')
FROM grant_funding;
```

### coalesce()
Used for finding first non-NULL value from a list of expressions or column values.

```sql showlinenumbers
SELECT coalesce(birthdate::text, firstname)
FROM scientest;
```

### greatest()
Returns greatest value among list of values
- Can be used to find most recent value.

```sql showlinenumbers
SELECT research_id, title,
GREATEST(end_date, CURRENT_DATE) "Most recent date"
FROM research;
```

### least()
Opposide of greatest(). Returns smallest value along list of values
- Can be used to find oldest value
```sql showlinenumbers
SELECT research_id, title,
LEAST(end_date, CURRENT_DATE) "Most recent date" 
FROM research;
```

## Number Functions

| Functions        | Result |
| ---------------- | ------ |
| ROUND(45.926, 2) | 45.93  |
| TRUNC(45.926, 2) | 45.92  |
| MOD(15, 4)       | 3      |

### round()
**Round decimals to one place**
```sql showlinenumbers
SELECT grant_id, amount, ROUND(amount,1)
"Rounded amount" FROM grand_funding;
```

**Round to the nearest whole number (10's, 100's, 1000's)**
```sql showlinenumbers
SELECT ROUND(450.9234), /* OUTPUT: 451 */
ROUND(450.9234, -1),    /* OUTPUT: 450 */
ROUND(450.9234, -2),    /* OUTPUT: 500 */
ROUND(450,9234, -3)     /* OUTPUT: 0   */
```
### truncate()
Similar to round. However, it cuts to the decimal places without rounding.

### mod()
Returns remainder of a division.
- Usefull for finding odd/even patterns, or categorising based on numerical patterns.

### abs()
Returns the absolute value of a number.

## Date Functions
### now()
Used to retrieve current date and time.
```sql showlinenumbers
--current time
SELECT now();
SELECT current_date;

--current time data type
SELECT pg_typeof(now());
```

### age()
This function can be used to find the age, from a date
```sql showlinenumbers
--calculate scientist's age
SELECT age(birth_date) FROM scientist;

--calculate project's age
SELECT age(begin_date) FROM research;
```

## Conversion Functions
### to_char()
Used to display data in a certain format.
```sql showlinenumbers
SELECT birth_date, to_char(birth_date,'DD/MM/YYYY')
FROM scientist;
```

#### More to_char() formatting
![[Pasted image 20251021114121.png]]

## cast()
used to convert values into other data types for processing
```sql showlinenumbers
SELECT pg_typeof(cast(age AS TEXT))
FROM research;
```

**Can also be used with double colons**
```sql showlinenumbers
SELECT pg_typeof(age::TEXT)
FROM research;
```

