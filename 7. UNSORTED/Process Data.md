---
tags:
  - Operating-Systems
aliases:
  - Process Control Block
  - PCB
---
To allow an OS to support many processes at once, each process needs to have a specific piece of data. This data allows the OS to find out about each process, without needing to remember every process that is running.

## Process Control Block (PCB)
The PCB is an area in memory that stores information about processes.
![[Pasted image 20250407161354.png|200]]

This information contains:
- **Process State** ([[Process States and Transitions||ready, running, waiting, etc)]]
- **Program Counter**
	- Contains the next instruction to be executed for that process
- **CPU register contents**
- **CPU scheduling information**
- **Memory-management information**
	- Contains the memory limits
- **Accounting information**
	- How much CPU used, when it was last run, etc
- **I/O status information**
	- List of I/O devices allocated to processes, list of open files, etc



# See Also
[[$ Operating Systems]]