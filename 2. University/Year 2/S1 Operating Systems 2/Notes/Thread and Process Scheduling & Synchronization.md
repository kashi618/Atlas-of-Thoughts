---
tags:
  - OS2
aliases:
---
## What and Why?
Computers often have many more processes and threads than available CPU cores. Scheduling determines which process/thread runs on which CPU core, and when

Without proper scheduling, programs would have many problems:

### On Threads
In [[Threads|multi-threaded]] programs, threads share memory space, files, and other resources. This can cause many problems:
- **Race condition**: Threads competing to access shared resources without proper coordination, causing inconsistent results
- **Starvation**: Threads not getting CPU time due to priority inversion or unfair scheduling
- **Deadlock**: Threads waiting indefinitely for resources held by each other. Caused by improper locking order of threads
  - Thread1 locks resource A, needing resource B
  - Thread2 locks resource B, needing resource A
- **Priority inversion**: High priority threads stuck waiting for a low priority thread to execute

### On Processes
[[Processes - Introduction]] are independent from each other. Without proper scheduling can cause many problems:
- **Starvation**: Processes not getting CPU time due to priority inversion or unfair scheduling
- **Deadlock**: Processes waiting indefinitely for resources held by each other. Caused by resource conflicts and allocation problems
- **Priority inversion**: High priority processes stuck waiting for a low priority process to execute
- **Poor CPU utilization**: CPU sits idle whilst a process is waiting

#### Scheduling Algorithms
- **FCFS**: First-Come First-Served
- **SJF**: Shortest Job First
- **RR**: Round Robin

## Types of Synchronization Mechanisms
[[Test and Set]]
[[Wait and Signal]]
[[Semaphores]]

# See Also
[[$ Operating Systems 2]]