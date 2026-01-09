---
tags:
  - OS2
aliases:
---
## What is It?
A data structure used by an OS in ram, used to store all the information needed to manage a specific process

## Key Components
### Process State
Tracks what the process is currently doing
- New
- Ready
- Running
- Waiting
- Terminated

### Process ID
A unique identifier used to label a process.
It is used to distinguish one process from another

### Program Counter
Contains the address location of the next instruction to be executed by this process

### CPU Registers
When as process is interrupted, the values in the CPU registers are saved into the PCB (ram)

### Memory Management Information
Contains information about the process's memory space and memory limits

### Accounting Information
Contains information about the CPU time used, time limits, and execution time.
Used for performance monitoring

### I/O Information
A list of I/O devices allocated to the process, and open files.


# See Also
[[$ Operating Systems 2]]