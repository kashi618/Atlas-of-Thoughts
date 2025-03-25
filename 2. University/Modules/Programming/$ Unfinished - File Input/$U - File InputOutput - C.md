---
tags:
  - C
aliases:
---
## Opening and Closing Files
To read or write to a file, you must first open it

### Opening a File
```c showlinenumbers
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
	if ( (fp = fopen("file.txt", "a+")) == NULL ) {
		printf("Error opening file");
	}
	
	// Close file, as we have finished using it
	fclose(fp);
}
```

# See Also
[[$ C - Programming Language]]