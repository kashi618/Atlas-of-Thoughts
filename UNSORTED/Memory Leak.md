---
tags:
  - ComputerScience
---
```c showlinenumbers {6}
char* fun()
{
	char my_char
	
	my_char = 's';
	return &my_char
}
```

This is a memory leak, because you cannot return the address of a function variable

**NOTE:** When a function ends, any variable declared in the function disappears, and is considered

# See Also
[[Functions - C]]