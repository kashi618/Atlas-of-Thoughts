---
tags:
  - CloudComputing
aliases:
---
# Implementation Methods
### Software
Uses host-based software to provide RAID functionality
However, due to being software, it gives computing overhead
- Uses CPU cycles to perform RAID calculations
- Supports limited RAID levels

### Hardware
Uses a specialized hardware controller installed on either the host and the array

## RAID Techniques
### Striping
![[Pasted image 20261020205439.png]]
Technique that offers the best performance of any RAID configuration. In a striped array, data is interleaved across all the drives in the array.
Data can be written to multiple drives at the same time, increasing write speeds.

### Mirroring
![[Pasted image 20261020205444.png]]
Copies whatever is written to one drive, to another drive.
Data is written simultaneously to one another, giving an exact duplicate of the data on one or multiple drives

### Parity
![[Pasted image 20261020205456.png]]
![[Pasted image 20261020205508.png]]
Uses parity bits tacked onto the data written to an array. This parity can then be used to find if data corruption occurs, allowing you to automatically replace the corrupted drive with data from other drives

# See Also
[[$ CC - Cloud Computing]]
