---
tags:
  - CloudComputing
aliases:
---
## Link between Hypervisor and VMM
A hypervisor is also referred to as a VMM (Virtual Machine Monitor)
It is a thin layer of software placed between the physical hardware and the OS/applications running about it

Instead of letting software interact natively with the physical machine, the hypervisor creates a software abstraction layer, using an interface that matches the exact level of the underlying hardware. This allows multiple independent virtual machines to share the same hardware safely
![[Pasted image 20261021003010.png]]


## Types of Hypervisors
![[Pasted image 20261021003017.png]]
### Type 1 Hypervisor
This is a native/bare metal hypervisor.
This means that the hypervisor runs directly on the host's hardware, allowing full control and monitoring. A guest operating system then runs on another level of this hypervisor
- Provides higher performance, efficiency, availability, and security than type 2 hypervisors

### Type 2 Hypervisor
The hypervisor runs on the host operating system, which provides the virtualisation services.



# See Also
[[$ CC - Cloud Computing]]
