---
tags:
  - C
aliases:
---
When dealing with files in C, you must first open the file. Opening a file allows you to read, write, and access a file.

## Opening and Closing a File
Opening a file is done using the `fopen()` command. However, before opening a file, a file pointer must be created. The file structure contains information about the file, such as its:
- Error indicators
- The file descriptor
- Current read/write position

Once a file is finished being used, it then must be closed. This is because it then allows other programs to use it. This is done using the `fclose()` function.

```c showlinenumbers
#include <stdio.h>

int main(void) {
	// Create file pointer
	FILE *fp;
	
	// Open file called "text.txt" for reading
	fp = fopen("test.txt", "r");
	
	// Check if file was opened successfully
	if (fp == NULL) {
		printf("Error opening file");
	}
	
	// Close file
	fclose(fp);
	
	// End program
	return 0;
}
```
- This file was opened for "reading". Here are more types of [[File Modes - C|file modes]].

## Alternative Simplified Way
```c showlinenumbers
#include <stdio.h>

int main(void) {
	// Create file pointer
	FILE fp;
	
	// Open file called "test.txt" for reading, and also
	// checking if it has opened succesfully
	if (fp = fopen("test.txt", "r") == NULL) {
		printf("Error opening file");
	}
	
	// Close file
	fclose(fp);
	
	// End program
	return 0;
}
```

# See Also
[[$ C - Programming Language]]