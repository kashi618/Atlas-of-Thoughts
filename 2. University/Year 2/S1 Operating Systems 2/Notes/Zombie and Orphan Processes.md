---
tags:
  - OS2
aliases:
---
## Orphan Processes
A child process whose parent process died first

It is still alive, and executing. However, it doesn't have a parent process to look after it

In linux/unix systems, it is automatically handed over to the `init` process (pid)


## Zombie Processes
When a child process is created by a parent process, but not cleaned up using the `wait()` command, it becomes a zombie process

A zombie process is a process which has finished its execution, but still exists in the process table
It has no code, data, and is not running, but still exists, wasting memory

However, if the parent process dies, then it becomes an orphan process, as it gets adopted by the `init` process (pid 1)

## 
# See Also
[[$ Operating Systems 2]]
[[Processes]]