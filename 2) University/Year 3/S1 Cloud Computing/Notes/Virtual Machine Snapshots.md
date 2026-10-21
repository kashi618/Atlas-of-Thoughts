---
tags:
  - CloudComputing
aliases:
---
## Snapshot
It is a capture of a virtual machine's current state, at a specific point in time. Using this capture, you are able to roll back to any point in time that you made the capture. For example:
1. You create a snapshot right after creating a new arch linux installation
2. Then you create another snapshot after you install all GUI elements
3. Then another after you install applications, games, etc
You can then roll back to any point in time during this VM

Snapshots are also known as checkpoints

## Types of Snapshots
### Production Checkpoints
Uses backup technology in the guest OS, to create a data-consistent checkpoint, that does NOT include information about running applications
It uses VSS or a file system freenze, to create a backup of the virtual machine. No snapshot of the VMs RAM is taken

### Standard Checkpoints
Creates appication-consistent checkpoints, that capture the current state of running applications
The snapshot is taken of the VM and VM memory, at the time the checkpoint is initiated
A snapshot is NOT a full backup, and can cause data consistency issues. This happens when system try to replicate data between different nodes such as the active directory

## How are Snapshots Stored?
When a snapshot is taken of a running VM, the hypervisor briefly pauses the VM to create a new AVHD (automatic virtual hard disk)
This is essentially a differencing disk, which is first attached to the VM to store changes to the VMs data, saves the processor state into a `.bin` file, then resumes the VM

The hypervisor also makes a copy of the VMs configuration file, and saves the contents of the VM memory and processor state date

Snapshots can also be created when a VM is turned-off, in which case it does not need to capture VM memory or processer state data

## Snapshot Considerations
Taking snapshots can reduce the performance, during the duration the snapshot is created. This is because when you take a snapshot, the original disk is set to read only. New data is written to the differencing disk.

Adding more and more snapshots can build a multi-tiered tree, where the hypervisor must look through every single layer to find where a specific block lives

Using snapshots on a VM wth Fixed virtual hard disks are also not reccomended. This is because the performance benefits games by using fixed hard virtual hard disks are gone.

Taking lots of snapshots can consume a large amount of storage. When the hypervisor manager is used to delete a snapshot, the snapshot is removed from the snapshot tree. However, the differencing disk is not deleted, until the VM is turned off

## Process of Rolling Back snapshots
During the revert/rollback process:
- First the VM is stopped
- Then, the current AVHD is deleted, and a new AVHD is created
- Everything the VM did between the snapshot and the rollback, is effectively discarded

# See Also
[[$ CC - Cloud Computing]]
