---
tags:
  - CloudComputing
aliases:
---
![[Pasted image 20261021012342.png]]
Storage virtualization is the process of masking the complexity of physical storage resources, and presenting the logical view of these resources to compute systems

Virtual volumes are created from the storage pools, and can be assigned to the compute system

**Benefits of Virtual Storage**
- The ability to add or remove storages without downtime
- Increases storage utilization, and multiple VMs can access the storage
- Simplifies storage management

## Creating Virtual Storage
- VMs can be stored as a set of files in the storage space available to the hypervisor
- A virtual disk file can be created, and then used by the VM to store its data
- The size of the virtual disk file represents the storage space alloated to the virtual disk
- VM Isolation - Each VM is unaware of the total space given to the hypervisor, or the underlying storage technologies. It is only concerned with size of its virtual disk file

## Virtual Provisioning
The hypervisor performs virtual provisioning to create virtual disks for VMs. Each virtual machine sees the full logical disk size allocated to it

However, the hypervisor only allocates storage space then the VM requires it. This eliminates the need to overprovision disks
![[Pasted image 20261021012510.png]]
In short, the VM believes it is allocated 20 GB, and is able to use its 20GB. However, the hypervisor only gives it the amount that it current needs. If the VM currently uses 10 GB, then only that is allocated to the VM. This size then exapnds as the VM decides to use more storage

## Virtual Provisioning
Virtual provisioning allows the hypervisor to create virtual disks for virtual machines, without needing to reserve the full capacity amount up front

For example:
- Each VM is allocated a 20 GB disk, and can use the full capacity as it needs
- However, the hypervisor only allocates the storage space the VM actually needs. If the VM is currently only using 10 GB of its disk capacity, then the hypervisor only consumes 10GB of its physical storage
- If the VM writes more data and uses more storage, the hypervisor then exapands dynamically, to give more storage to the VM
![[Pasted image 20261021012510.png]]

## Benefits
- Reduces administrative overhead
- Improves capacity utilization
- Reduces cost
- Reduces downtime

# See Also
[[$ CC - Cloud Computing]]
