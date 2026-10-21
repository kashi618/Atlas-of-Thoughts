---
tags:
  - CloudComputing
aliases:
---
## Optimizing CPU Resources
Modern CPUs are equipped with multiple cores and hyper-threading
Therefore, allocating a CPU resource efficiently and fairly is critical
A hypervisor schedules these virtual CPUs on the physical CPUs
![[Pasted image 20261021010410.png]]

### Logical and Physical Cores
**Physical Core**
The actual silicon CPU unit
Each core are independent

**Logical Core**
Usually 2x the physical core
Created through hyper-threading, allowing a single physical core to appear as two logical cores

### CPU Socket
This is the physical connector on a computers motherboard, which holds the CPU

# See Also
[[$ CC - Cloud Computing]]
