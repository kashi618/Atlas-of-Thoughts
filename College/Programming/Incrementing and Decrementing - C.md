---
tags:
  - C
  - ComputerScience
---
## Incrementing
This adds 1 to the value of a variable
```c showlinenumbers
variableName++
```

### Example
```c showlinenumbers
int currentYear = 2024
int nextYear = currentYear++

printf("This year is %d \n",currentYear);
printf("Next year will be %d \n",nextYear);
```

## Decrementing
This takes away 1 from the value of the variable
```c showlinenumbers
variableName--
```

### Example
```c showlinenumbers
int currentYear = 2024
int lastYear = currentYear--

printf("This year is %d \n",currentYear);
printf("Last year was %d \n",lastYear);

```

## Pre-Incrementing
Increments var2, THEN assigns var1 to var2
```c showlinenumbers
var1 = ++var2;
```

## Post-Incrementing
Assigns var2 to var1, THEN increments var2

```c showlinenumbers
var1 = var2++;
```
