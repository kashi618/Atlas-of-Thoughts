---
tags:
  - OS2
aliases:
---
## What is it?
Function in C used for a parent process to hold, and clean up after its child process.
It buts the parent process in idle, until the child process terminates. The function also cleans up the child process.

## sleep() vs wait()
**Sleep**
You need to manually adjust the timings so that the parent will execute directly after all the child processes are finished.

**wait()**
Can be used with an `if-then-else` condition to synchronize parent processes execution with the child processe.

![[fork() with wait().png]]


# See Also
[[$ Operating Systems 2]]