---
tags:
  - CloudComputing
aliases:
---
## Usage in Snapshots
Upon the creation of a snapshot, these are what happens to the AVHD:
- The VHD/VHDX becomes a parent to the AVHD/AVHDX file. The VM starts to use the AVHD for reads and write after the snapshot, and the VHD for reads and write older than the snapshot
- With each new snapshot taken, the active AVHD/AVHDX disk is detached from the VM, and becomes the new parent of the new AVHD/AVHDX. This causes a chaining of VHD and AVHD disks, the more snapshots you create


# See Also
[[$ CC - Cloud Computing]]
