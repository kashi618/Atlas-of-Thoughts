---
tags:
  - CloudComputing
aliases:
---
Stands for Single Point of Failure

## SPOF in Compute Infrastructure
**Physical Server**
Failure of a physical server can result in the failure of many/complete virtualized infrastructure running on it

**Hypervisor**
Failure of a hypervisor can similarly cause all running VMs hosted on it, to halt

**VM**
Failure of a VM can result in the failure of critical applications running on it. It can also affect distributed applications which span across multiple VMs, where the failure of a single VM can cause major disruption

## SPOF in Storage Infrastructure
**Physical Storage Array**
Failure in a storage array and its components, can cause disruptions to the hypervisor, Vms, and applications accessing data from the array.

**Virtual Storage Disk**
Failure in virtual disks can cause an incorrect operation in a hypervisor, or a security attack within the file system itself.

## SPOF in Network Infrastructure
Very rare

**Underlying Network**
Failure in the underlying network such as SAN, NAS as well as NIC's, can disrupt communication between devices

## SPOF in Site
Failure of a VDC site due to a natural disaster or such, can cause significant impact on business operations, and requires special considerations in relation to detailed disaster recovery, planning, and testing

# See Also
[[$ CC - Cloud Computing]]
