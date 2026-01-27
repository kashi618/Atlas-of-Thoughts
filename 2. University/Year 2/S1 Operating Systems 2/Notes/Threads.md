---
tags:
  - OS2
aliases:
---
## What is a Thread?
- A subset of a process
- The smallest unit of execution in a program

## Key Characteristics
- Multiple threads within a process can run concurrently with each other, or in parallel
- Threads within a program, shares their memory and resources
- A thread is atomic, therefore it is "all or nothing". It either runs and finishes a piece of code, or it waits

## Thread Scheduling
Due to threads sharing resources and being atomic, they require precise [[Thread and Process Scheduling & Synchronization|scheduling]] to avoid conflict when accessing these resources

# See Also
[[$ Operating Systems 2]]