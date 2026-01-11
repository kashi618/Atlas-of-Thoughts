---
tags:
  - OS2
aliases:
---
## What is a Scheduler?
A scheduler is a component in an operating system that manages and allocates system resources to processes and threads.
It determines which, when, and how long a process or thread runs.
For a good scheduler, it needs to keep as much system components busy, for the most amount of time. ie, maximum cpu execution time

## Program Execution Patterns
1. CPU cycle (computation cycle)
   - Program is executing instructions on the CPU
   - CPU is busy, and I/O devices typically idle
1. I/O cycle (input/output cycle)
   - Program is waiting for I/O operations to complete
   - Reading to/from a disk, network, user input, etc
   - CPU is idle, as its waiting for data

**Simple example**
```
[CPU Cycle] → [I/O Wait] → [CPU Cycle] → [I/O Wait] → ...
    |             |            |             |
  Compute      Wait for     Compute       Wait for
               disk read                  user input
```


# See Also
[[$ Operating Systems 2]]