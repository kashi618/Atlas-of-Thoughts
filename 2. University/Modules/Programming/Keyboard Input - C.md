---
tags:
  - C
aliases:
  - scanf()
---
## scanf()
To get a keyboard input, we use the scanf() function. Here are the steps:
1. Specify the type of data we will intake, using a [[Delimiters - C|delimeter]]
2. Replace our input with the data stored at the address of the variable, using the [[Ampersand - C|ampersand]]
```
scanf("delimeter",&variableName);
```

**Keyboard input for an integer variable**
```c showlinenumbers {6}
int main(void) {
	// Declare an integer variable
	int coolNum;
	
	// Use scanf() to gather keyboard input
	scanf("%d", &coolNum);
	
	// End program
	return 0;
}
```

**Keyboard input for a character variable**
```c showlinenumbers {6}
int main(void) {
	// Declare an integer variable
	int coolChar;
	
	// Use scanf() to gather keyboard input
	scanf("%c", &coolChar);
	
	// End program
	return 0;
}
```


# See Also
[[$ C - Programming Language]]
[[Delimiters - C]]
[[Ampersand - C]]
[[Faster Character Input Output - C]] **Faster way to input characters**