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
Allowing only one process to access a dedicated resource

### Hold and Wait
A process is holding a resource, waiting to acquire another resource, that is help by another process.

### No Preemption
Resources cannot be forcibly taken away from a process. It must be released by the process voluntarily

### Circular Wait
Process 1 holds resource 1, waits for resource 2
Process 2 holds resource 2, waits for resource 1
![[Pasted image 20251218170821.png]]

# See Also
[[$ Operating Systems 2]]