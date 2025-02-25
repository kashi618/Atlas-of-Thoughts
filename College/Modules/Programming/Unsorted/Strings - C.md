---
tags:
  - ComputerScience
  - Strings
  - Escape-Characters
  - UNFINISHED
---
## scanf()
```c showlinenumbers
scanf("%s", stringArr);
```
- This is because `stringArr` is the same as writing the first element of the array `&stringArr[0]`
- This is one of the only cases where an ampersand is not needed
- Use fgets() instead. This is because scanf does not read whitespace characters such as space, tab, enter key

## Initializing Strings
**Method 1**
```c showlinenumbers
char name[] = "cAt";
```
- The compiler automatically sets the size of the array to 4, which includes the NULL character

**Method 2**
```c showlinenumbers
char name[10] = "kitty";
```

**Method 3**
```c showlinenumbers
char *name3 = "Patrick";
```
This is a string literally, not a pointer. This means that it is stored in memory as READ ONLY, and cannot be changed

**Method 4**
```c showlinenumber
char name[] = {'c','a','t'};
```
Long way to initialize a string

## Displaying Strings
You do not need a loop to display strings, instead, you can use the `%s` delimiter

### Example
```c showlinenumbers
char greeting[6] = "Hello";
printf("%s", greeting);
```
- **NOTE:** Be sure to use the `%s` delimiter.

## String Delimeter Information
### Left Justify
This prints out the string, with 20 spaces on its left
```c showlinenumbers
char greeting[6] = "Hello";
printf("%20s", greeting);
```

### Right Justify
This prints out the string, with 20 spaces on the right
```c showlinenumbers
char greeting[6] = "Hello";
printf("%-20s", greeting);
```

### Displaying Partial Strings
This would display the first three characters of the string
```c showlinenumbers
char greeting[6] = "Hello";
printf("%.3s", greeting);
```

## String Anatomy
Any sequence of characters, enclosed in **double quotes**.
A string literal ends with a "NULL character/NULL terminator"
The NULL character tells the compiler where that string ends "\0"

### Example
`printf("Hello");`
"Hello" is an example of a string literal

### String Deconstructed

| "H" | "E" | "L" | "L" | "O" | "\0" |
| --- | --- | --- | --- | --- | ---- |
This is how the string is stored in memory
The NULL character is "\0"
When the compiler is reading the string, the "\0" tells the compiler that it is the end of the string

## String Literal
```c
char *name = "meow";
```
String literals are stored as read only, and cannot be changed


## Long Character Strings
### Method 1
Keep it as is

```c showlinenumbers
printf("This is a suuuper duuuper loonggg stringgg that spansss sooo manyyy linessss ohh myyy goddd");
```

### Method 2
Press enter key to break the string up

```c showlinenumbers
printf("This is a suuuper duuuper loonggg stringgg
that spansss sooo manyyy linessss ohh myyy goddd
likeeeee itssssss sooooooooo longggggggg");
```

### Method 3
Use a backslash to mark and break the string up
This is preferred, as it increases readibility by showing where the string breaks up

```c showline numbers
printf("This is a suuuper duuuper loonggg stringgg\
that spansss sooo manyyy linessss ohh myyy goddd\
likeeeee itssssss sooooooooo longggggggg")
```

### Method 4
Break the string up, and keep each block in quotes
```c showlinenumbers
printf("This is a suuuper duuuper loonggg stringgg"
"that spansss sooo manyyy linessss ohh myyy goddd"
"likeeeee itssssss sooooooooo longggggggg");
```


# See Also
[[Strings and Arrays - C]]