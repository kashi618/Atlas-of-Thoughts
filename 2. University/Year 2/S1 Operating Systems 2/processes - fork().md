---
tags:
  - OS2
aliases:
---
## What is it?
A function in C that is called once, but returns two things at once. It is used to run two processes concurrently/in parallel.

**In the parent process**
The PID value of the child process is returned

**In the child process**
A value of 0 is returned, to signal that it is a child process

## Concurrency Between Parent and Child
The parent and child class are ran concurrently. This means that if the parent class finishes first, then the child process will be destroyed (regardless if it has finished or not)
[[Processes - wait()|How to ensure child finishes before parent]]


# See Also
[[$ Operating Systems 2]]
[[Processes - wait()]]