---
tags:
  - OS2
aliases:
---
## What is a TCB?
A data structure used to maintain threads in an OS
It typically is made of of:
- Thread ID
- Thread state: running, waiting, ready, blocked, etc
- Program counter
- CPU register
- Stack pointer
- Priority (scheduling information)
- Pointer to the PCB of the owning process
- Thread specific data

It is used for managing and executing threads, especially for thread scheduling and context switching

# See Also
[[$ Operating Systems 2]]