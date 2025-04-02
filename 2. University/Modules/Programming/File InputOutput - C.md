---
tags:
  - C
aliases:
---
## Opening and Closing a File
```c showlinenumbers {4-5, 7-8, 15-16}
#include <stdio.h>

int main(void) {
	// Create a file pointer to the file
	FILE *fp; // fp = filepointer. Just a name
	
	// Open file for reading
	fp = fopen("file.txt","r");
	
	// Check if file has opened successfully
	if (fp == NULL) {
		printf("Error opening file")
	}
	
	// Close file, as we have finished using it
	fclose(fp); 
}
```
- `fopen()` returns `NULL` if file has failed to open
- We must close the file with `fclose()`, so that someone else can open and use the file.

**Example: One line for opening and checking**
Often we combine opening and checking the file in one line of code.
```c showlinenumbers
int main() {
	FILE *fp;
	
	// Open and check if file is opened successfully
	if ((fp=fopen("file.txt", "a+")) == NULL ) {
		printf("Error opening file");
	}
	
	// Close file, as we have finished using it
	fclose(fp);
}
```


## Reading from File

### fgets()
Reads a STRING of characters, until it hits one of these three
1. A newline character is read `'\n'`
2. The EOF is reached
3. `MAX_CHARS - 1` is read
	- It automatically stops before it reaches the end

To set the longest string to be read, just change the `MAX_CHARS` symbolic name.
```c showlinenumbers
fgets(charString, maximumCharsToRead, filePointer)
```

**Example**
```c showlinenumbers
#include <stdio.h>

#define MAX_CHARS 81

int main() {
	// Create file pointer
	FILE *fp_in;
	
	// Array to store string
	char one_line[MAX_CHARS];
	
	// Open file for reading, and check if successful
	if ((fp_in = fopen("file.txt", "r")) == NULL) {
		printf("Failed top open file");
		return 0;
	}
	
	// Get one line from file
	while( fgets(one_line, MAX_CHARS, fp_in) != NULL) {
		// Display that one line
		print("%s",one_line);
	}
	
	// Close file
	fclose(fp_in);
	
	// End program
	return 0;
}
```

## Writing to File
### fputs()

```c showlinenumbers
fputs(charString, filePointer)
```


**Example**
```c showlinenumbers
#include <stdio.h>

int main(void) {
	FILE *fp_out;
		
	// String to write to file
	char coolString[] = "Hiiiiiiiii";
	
	// Open file for reading, and check if successfull
	if ((fp_out = fopen("file.txt","w") == NULL) {
		printf("Error opening file");
	}
	
	// Write string to file
	fputs(coolString, fp_out);
	
	// Close file
	fclose(fp_out);
	
	// End program
	return 0;
}
```

## Move to Specific Location in File
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
[[$ C - Programming Language]]`