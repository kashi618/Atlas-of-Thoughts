---
tags:
  - C
aliases: If Statement
---

Switch statements are used in replacement for multiple if statements. This is because many if statements are very inefficient, due to needing to repeatedly use CPU cycles.

## Switch Statement 
```c showlinenumbers
switch (expression) {
	case x:
		// Write code here
		break;
	
	case y:
		// write code here
		break;
	
	default:
		// write code here
}
```
- One of few functions that use the colon.
- The `default` is similarly used like the "else" statement. This means, if the expression doesn't match any of the cases, then the default is run.
- This also means `default` is not required if not needed.

**Example: number to day converter**
```c showlinenumbers
int day = 4;

switch (day) {
	case 1:
		printf("Monday");
		break;
	
	case 2:
		printf("Tuesday");
		break;
	
	case 3:
		printf("Wednesday");
		break;
	
	case 4:
		printf("Thursday");
		break;
	
	case 5:
		printf("Friday");
		break;
	
	case 6:
		printf("Saturday");
		break;
	
	case 7:
		printf("Sunday");
		break;
	
	default:
		printf("Value not recognised");
}
```

# See Also
[[$ C - Programming Language]]
[[Logical Operators - C]]
[[If , If else, While, Do While- C]]