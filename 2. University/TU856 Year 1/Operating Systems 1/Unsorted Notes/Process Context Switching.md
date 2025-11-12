---
tags:
  - Operating-Systems
aliases:
  - CPU switch
  - context switch
---
A context switch refers to the switching of the CPU from one process (or thread) to another. It is also known as a CPU switch.

## Switching Processes
When a CPU switch happens:
1) It first stops the execution of the process currently using the CPU
2) Then, it resumes the execution of another process that has been queued to use the CPU

All this information is stored in the [[Process Control Block|PCB]]. This means the OS does not need to store this information, it only needs to read and access the PCB.

![[Pasted image 20250407205120.png|400]]
## Pros and Cons of Context Switching
### Cons
When context switching occurs, the information about the current process has to be saved, whilst the information of the queued up process has to be read. 
Although registers can be read quickly, it can only read one thing at a time.
This causes overhead, as there are many registers that needs to be accessed and checked.

### Pros
However, the benefits of multi-tasking many processes, vastly overweigh the overheads caused by a context switch.


# See Also
[[$ Operating Systems 1]]