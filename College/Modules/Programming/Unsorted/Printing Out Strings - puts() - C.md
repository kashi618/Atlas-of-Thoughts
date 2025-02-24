---
tags:
  - ComputerScience
  - Strings
  - Arrays
  - String
---
## printf()
```c showlinenumbers
char name[6] = "hello";
printf("%s", name);
```

```c showlinenumbers
printf("hello");
```

## puts()
Built in function in C, to display a string
```c showlinenumbers
char name[6] = "hello";
puts(name);
```

```c showlinenumbers
puts("helooo");
```

- puts() automatically goes to a new line after it gets used
	(essentially has a built in `\n` after is is called)

**NOTE:** You can also use printf(), it is up to the program and the developer

# See Also
[[Reading Strings - gets() - C]]
[[Strings and Arrays - C]]
[[Strings - C]]