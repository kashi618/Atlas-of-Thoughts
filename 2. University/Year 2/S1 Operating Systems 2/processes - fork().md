---
tags:
  - OS2
aliases:
---
## What is i?
A function in C that is called once, but returns two things at once. It is used to run two processes concurrently/in parallel.


**In the parent process**
The PID value of the child process is returned

**In the child process**
A value of 0 is returned, to signal that it is a child process

## Information About Fork
- Both the parent and child process are ran concurrently.
# See Also
[[$ Operating Systems 2]]