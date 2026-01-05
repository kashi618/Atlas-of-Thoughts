---
tags:
  - C
aliases:
---
## String Functions
C is a very powerful language using strings. It contains a rich set of built-in functions which facilitate the uses of strings in a program.

**NOTE:** To use these functions, we must call the #include <string.h> header file.

## <string.h>
### strlen() - Finding String Length
Returns the number of characters in a string.
- It does not count the NULL character.
```c showlinenumbers
#include <string.h>
strlen(string);
```

**Example:**
```c showlinenumbers
#include <string.h>
printf("%d",strlen("Hello"));
```

```
Output:
5
```

### strcpy() - Copying a String
Copies contents of a source string, and stores it at a destination string
- **NOTE:** Destination string must contain enough space to store the source string.
- The source string must also be NULL terminated
```c showlinenumbers
#include <string.h>
strcpy(destinationString, sourceString);
```

### strcat() - Appending a String
Appends/joins the contents of a source string to the ends of a destination string
- **NOTE:** Destination string must contain enough space to store the newly appended string
- Both the source and destination string must be NULL terminated

```c showlinenumbers
#include <string.h>
strcat(destinatioNString, sourceString);
```

### strcmp() - Comparing Two Strings
Compares two strings, seeing if they are the same or not.
- It returns `0` if they are identical.
- It returns `1` if they are different.

```c showlinenumber
#include <string.h>
strcmp
```

### Other Useful Functions
- strchr (Finds first occurrence of character in strings)
- strncmp (compares first n characters between two strings)
- strncpy (Copies first n characters from source string to destination string)

## <stdlib.h>
### atoi() - Convert String to Number
If you have a string that contains only numbers, you can convert it to an integer or float.
- `atoi` stands for ASCII to Integer
- `atof` stands for ASCII to Float
```c showlinenumbers
#include <stdlib.h>
atoi(string);
atof(string);
```


# See Also
[[$ C - Programming Language]]