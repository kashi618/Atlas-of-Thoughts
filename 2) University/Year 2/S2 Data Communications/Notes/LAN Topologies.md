---
tags:
  - DataCommunications
aliases:
---
## LAN Topologies
There are three LAN topologies to consider:
- Bus
- Ring
- Star

### Bus LAN
**Characteristics**
- Linear transmission medium used
- Each station attaches to the bus using a "tap"
- No closed loops
- Transmissions travel in both directions. bi-directional
- Each device can see data travelling in the transmission medium
- An example of bus LAN is ethernet
- Another example of bus LAN is [[CSMA]]
![[Bus LAN.png]]


### Ring LAN
- Links are uni-direcitonal. This means it only travels in one direction
- Each station attaches at a repeater
- The transmission signal must be physically removed from the network. Meaning, you will need to physically remove the frame after its finished, or else it will repeat.
- Example of a ring LAN is the IBM [[Token Ring Operation]]
![[Ring LAN.png]]
![[Another Ring LAN.png]]


### Star LAN
- Consists of a central hub, of which there are two types:
	1. Shared-medium hub
	2. Switched-LAN hub
- Each station attached by two links (transmit and receive)
- All transmissions travel via the hub device
- Example is an ATM
![[Star LAN.png]]



# See Also
[[$ Data Communications]]