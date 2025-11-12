---
tags:
  - C
aliases:
---

## Reading Files
### fgets()
Reads a **string** of characters, until it hits one of these three
1. A newline character is read `'\n'`
2. The EOF is reached
3. `MAX_CHARS - 1` is read
	- It automatically stops before it reaches the end

To set the longest string to be read, just change the `MAX_CHARS` symbolic name.
```c showlinenumbers
fgets(charString, maximumCharsToRead, filePointer)
```

**Example**

```c showlinenumbers {17-18}
#include <stdio.h>

int main(void) {
	// Create file pointer
	FILE *fp;
	
	// Open file for reading, and check if successful
	if ((fp = fopen("file.txt", "r")) == NULL) {
		printf("Failed top open file");
		return 0;
	}
	
	// Array to store string
	char one_line[MAX_CHARS];
	
	// Display first line in file
	fgets(one_line, MAX_CHARS, fp_in)
	print("%s",one_line);

	// Close file
	fclose(fp_in);

	// End program
	return 0;
}
```

## Writing to Files
### fputs()
Writes a string to a file.
```c showlinenumbers
fputs(string, filePointer)
```

**Example**
```c showlinenumbers
#include <stdio.h>

int main(void) {
	FILE *fp;
	
	// Open file for reading, and check if successfull
	if ((fp = fopen("file.txt","w") == NULL) {
		printf("Error opening file");
	}
	
	// Write "THIS IS SO COOL" to file
	fputs("THIS IS SO COOL", fp);
	
	// Close file
	fclose(fp_out);
	
	// End program
	return 0;
}
```

## Move Current Position
### fseek()
```c showlinenumbers
fseek(filePointer, offset, SEEK_SET/SEEK_END/SEEK_CUR);
// SEEK_SET = Goes to start of file
// SEEK_END = Goes to end of file
// SEEK_CUR = Move offset from current location
```


**Example: Go to first element in file**
```c showlinenumbers
fseek(fp, 0, SEEK_SET);
```

**Example: Go to eight last element in file**
```c showlinenumbers
fseek(fp, 8, SEEK_END);
```

**Example: Move forward 10 elements**
```c showlinenumbesr
fseek(fp, 10, SEEK_CUR);
```



# See Also
[[$ C - Programming Language]]