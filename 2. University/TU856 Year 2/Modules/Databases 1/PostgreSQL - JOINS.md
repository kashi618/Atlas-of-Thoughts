---
tags:
  - Databases1
aliases:
---

This query combines data from two tables, into one table.
## Types of Joins
![[Pasted image 20251007111330.png]]
- Inner join: only allows columns where both table 1 AND table 2, have
- Left join: only allows columns where table 1 has, AND common tables between table 1 and table 2


## Inner Join
```sql showlinenumbers
SELECT colYouWant FROM table1 JOIN table2
ON table1.joinCol = table2.joinCol;
```


### Inner Join Example
```sql showlinenumbers
SELECT player_id,player_name,height FROM players JOIN player_attributes
ON players.playerID = player_attributes.playerID:
```

players table:

| playerID | player_name |
| -------- | ----------- |
| 2        | john        |
| 4        | jane        |

player_attributes table:

| playerID | height |
| -------- | ------ |
| 2        | 1.63   |
| 4        | 1.79   |

new inner join table:

| playerID | player_name | height |
| -------- | ----------- | ------ |
| 2        | john        | 1.63   |
| 4        | jane        | 1.79   |

### Inner Join Multiple Tables
![[Pasted image 20251007113640.png]]

## Right Join/Left Join
![[Pasted image 20251007114405.png]]


# See Also
[[$ Databases 1]]

