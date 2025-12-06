---
tags:
  - OS2
  - Processes
aliases:
---

## What is fork()?
 Creates a new process (child) that is an identical copy of the calling processes (parent)

## fork() Inner Workings
Say we have a parent process with `PID 100`. If we call a fork() inside of that processes, it first creates an identical copy of all variables, arrays, open files, etc. Then, it starts executing from the very next instruction after the fork().

**NOTE:**
Both the child AND the parent run at the same time after creating the copy. However, if the parent finished first, then the child is destroyed (even if it doesn't finish)
You will need [[lo]]

### Parent Process
- The main function that calls the fork()
- `fork()` returns the PID (process ID) of the child process.

### Child Process
Called by the parent processes using a fork()
- Has identical **separate/not connected** variables, structures, arrays, etc to the parent process
- `fork()` returns `0`

![[Before and After fork().png]]

## Usage of fork() in C
```c showlinenumbers
#include <stdio.h>
```




# See Also
[[$ Operating Systems 2]]
[[Programs Processes Threads Overview - OS2]]