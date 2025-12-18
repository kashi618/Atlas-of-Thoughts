---
tags:
  - OS2
aliases:
---
## Deadlock Conditions
- Mutual Exclusion
- Hold and Wait
- No Preemption
- Circular Wait

### Mutual Exclusion


### Hold and Wait
A process is holding a resource, waiting to acquire another resource. However, that resource is help by other processes.

### No Preemption
Resources cannot be forcibly taken away from a process. It must be released by the process voluntarily.

### Circular Wait
Process A holds resource A, waits for resource B
Process B holds resource B, waits for resource C
Process C holds resource C, waits for resource A

# See Also
[[$ Operating Systems 2]]