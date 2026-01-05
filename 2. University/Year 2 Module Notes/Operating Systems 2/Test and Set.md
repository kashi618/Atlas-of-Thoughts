---
tags:
  - OS2
aliases:
---
## What and How
Synchronisation method for when processes/threadss access shared data.
Implements a mutex lock (0, 1) used to set/signal when a memory is being used. A "test" is then run whenever a processe/thread needs to access a memory location
- Mutex = 1, Busy
- Mutex = 0, Free

## Problems
Implemented using a while loop `WHEN mutex is 0, run code`

# See Also
[[$ Operating Systems 2]]