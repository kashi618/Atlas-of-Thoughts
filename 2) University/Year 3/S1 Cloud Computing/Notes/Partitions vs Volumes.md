---
tags:
  - CloudComputing
aliases:
---
## Partition
A partition is a static division of a single physical storage device.
It uses low-level partition tables, such as GPT or MBR to map out sectors on a disk.
Partitions can only exist within a singular physical disk. It cannot cross over multiple disk drives

## Volume
A storage abstraction often managed by the operating system
A volume can span across multiple physical drives, to create a single unified drive, using techniques such as RAID 0.It is a superset of a partition
It defines how the OS uses storage

# See Also
[[$ CC - Cloud Computing]]
