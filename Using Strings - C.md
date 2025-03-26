---
tags:
  - C
aliases:
---
## Initializing Strings
There are many ways to initialize strings in C.

**Method 1: String Literal**
A sequence of characters enclosed in double quotes.

```c showlinenumbers
char myString[] = "This is a string literal!";
```

**Method 2: String with a set size**
The size of the string is set whilst the program is ran.
```c showlinenumbers
char myStrin[6] = "Hello";
```
- **NOTE:** you must set the size to one  bigger than the string, to account for the NULL character.
- 
## Displaying Strings

### Long Character Strings
Sometimes very long string are required in a program. Here are various ways used to display long strings.

**Method 1**
Keep it as is

```c showlinenumbers
printf("This is a suuuper duuuper loonggg stringgg that spansss sooo manyyy linessss ohh myyy goddd");
```

**Method 2**
Press enter key to break the string up

```c showlinenumbers
printf("This is a suuuper duuuper loonggg stringgg
that spansss sooo manyyy linessss ohh myyy goddd
likeeeee itssssss sooooooooo longggggggg");
```

**Method 3**
Use a backslash to mark and break the string up
This is preferred, as it increases readability by showing where the string breaks up

```c showline numbers
printf("This is a suuuper duuuper loonggg stringgg\
that spansss sooo manyyy linessss ohh myyy goddd\
likeeeee itssssss sooooooooo longggggggg")
```

**Method 4**
Break the string up, and keep each block in quotes
```c showlinenumbers
printf("This is a suuuper duuuper loonggg stringgg"
"that spansss sooo manyyy linessss ohh myyy goddd"
"likeeeee itssssss sooooooooo longggggggg");
```


# See Also
[[$ C - Programming Language]]