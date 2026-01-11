---
tags:
  - Software-Engineering-1
aliases:
---

## (weak) Coincidental Cohesion 
Components grouped together with no meaningful relationship
- A library class that contains random unrelated methods such as startCar and attributes such as speed

## (weak) Logical Association
Components grouped together due to similar logical operations
- A class that handles all input and output operations
- Issue comes from the class having no single well defined purpose

## (weak)Temporal Cohesion 
Components which are activated at runtime/same time are grouped.
- However components are not related
```
clear screen
open file
initialise total
```

## (medium) Communicational Cohesion 
Grouping elements which operate on the same data
- A class that logs, displays, and finds the current temperature

## (medium) Sequential Cohesion 
When the output for one part of a component is the input to another part

## (strong) Functional Cohesion 
All elements contributes to a single well defined task.
- A module that calculates tax
- A class that handles user authentication

## (strong) Object Cohesion 


# See Also
[[$ Software Engineering 1]]