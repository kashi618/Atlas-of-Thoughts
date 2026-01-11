---
tags:
  - C
  - OS2
aliases:
---
## argc
Stands for `Argument Count`

It is an integer that counts the number of arguments given.

**Example**
A program is ran using `./run 2 3 4 5`
```
argc = 5
``` 

A program is ran using `./run`
```
argc = 1
``` 
 
## argv
Stands for `Argument Vector`

An array of strings that contain each of the arguments entered. `char* []`

The last argument is always `argv[argc - 1]` (0 indexing)

**Example**
A program is ran using `./run 2 3`
```
argv[0] = "./run"
argv[1] = "2"
argv[2] = "3"
```

# See Also
[[$ Operating Systems 2]]
[[$ C - Programming Language]]