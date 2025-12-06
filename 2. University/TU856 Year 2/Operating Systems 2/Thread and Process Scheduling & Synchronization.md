---
tags:
  - OS2
aliases:
---
## What and Why?
Computers often many more processes and threads than available CPU cores. Scheduling determines which process/thread runs on which CPU core, and when

Without proper scheduling, programs would have many problems:

### On Threads
In multi-threaded programs, threads share memory space, files, and other resources. This can cause many problems:
- **Race condition**: This can cause **race conditions**, when threads compete to access shared resources without proper coordination. 

### On Processes
Processes are independent from each other. Without proper scheduling can cause many problems:
- **Starvation**: when processes never get CPU time
- **Deadlock**: when processes are locked, due to waiting resources from another thread
- **Priority Inversion**: high priority processes stuck waiting for a low priority process to execute
- **Poor CPU utilization**: CPU sits idle, whilst a process is on wait

#### Scheduling Algorithms
- **FCFS**: First-Come First-Served
- **SJF**: Shortest Job First
- **RR**: Round Robin


# See Also
[[$ Operating Systems 2]]