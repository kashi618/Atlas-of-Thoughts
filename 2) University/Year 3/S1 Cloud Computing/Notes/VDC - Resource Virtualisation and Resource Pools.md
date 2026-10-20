---
tags:
  - CloudComputing
aliases:
---
## Resource Management
The process of allocating resources from a physical machine to a virtual machine, to optimize the utilization of resources
- Controls the utilization of resources
- Prevents VMs from monopolizing resources
- Allocates/deallocates resources based on priority of the VMs
- However, resources must be pooled to manage them centrally

## Resource Pool
![[Pasted image 20261021005831.png]]
A logical abstraction of aggregated physical resources, that are managed centrally
- Created from a physical machine
- Admins can create a child/subset of this resource pool, to be used on a virtual machine
- Reservation, limits, and shares are used to control the resources consumed by resources pools



# See Also
[[$ CC - Cloud Computing]]
