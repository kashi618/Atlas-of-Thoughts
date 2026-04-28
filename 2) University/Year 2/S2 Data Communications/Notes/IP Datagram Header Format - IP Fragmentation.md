---
tags:
  - DataCommunications
aliases:
---
## IP Datagrams
![[Pasted image 20260421163548.png]]
You dont need to know the specifics, only that all of them exists

For a package to go from router to router, the router makes a routing decision.
- Identification
- Flags
- Fragment Offset

## Maximum Tranmission Unit (MTU)
The MTU is the largest size a single data packet or frame that can be transmitted over a network link.
## IP Fragmentation
**ISSUE**: If the MTU value of a destination router is lower than a source router MTU, then an issue will occur. The datagram is too big to be transmitted.
![[Pasted image 20260421163810.png]]

To fix this, we use a technique called **Fragmentation**. This process basically splits a datagram into smaller prices.
![[Pasted image 20260421164051.png]]

### How Does it Work?
Each data fragment contains the same header, but splits the data area into appropriate sections.

When datagrams are fragmented, the host reconstructs the back togethor. NOT the router. This is because datagrams are not sent sequentially.

## IP Fragmentation Fields
- FLAGS
- FRAGMENT OFFEST
- IDENTIFICATION

![[Pasted image 20260421165148.png]]
The identification field `14,567` is the same
The fragment offset is different, depending on the fragment. `000, 175, 350`
The flag is `1` for all fragments apart form the last, which is `0`
### FLAGS
Used to indicate if a datagram is allowed to be fragmented
If allowed, it also indicates if the fragment is the last fragment. 
- `1` = More fragments are coming
- `0` = This is the last fragment
  
  
### FRAGMENT OFFSET
Used to determine where each fragment splits, in relation to the datafield of the original datagram

### IDENTIFICATION
Unique identifier for the original datagram, used to reassemble the fragments


# See Also
[[$ Data Communications]]