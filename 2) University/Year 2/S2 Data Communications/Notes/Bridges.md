---
tags:
  - DataCommunications
aliases:
---

## Bridges
Bridges function by interconnecting multiple small LANs, to create one large LAN. By doing this, you can also expand the distance between each LAN.
- This is preferable than creating one single large lan

**Bridge Implementation**
![[LAN Bridge.png]]

### Bridge Advantages
- Reliability: Faults can be contained and restricted to only a few stations
- Performance: Smaller LAN provide better performance to locally attached devices.
- Security: Some LAN topologies can potentially see all frames transmitted. Bridges uses physical isolation of high security traffic, and specific users with special security access
- Geography: Can be used to extend a LAN to isolated clusters of stations, using long distance communications. (microwave links, satellite links, etc)

## Bridge Functions
Basis bridges, provide the following functionality

### Store and Forward
Unlike [[Repeaters|repeaters]], bridges read the entire frame, and then retransmit it bit-by-bit if the destination is on a different segment.

### Address Learning and Fixed Routing
Techniques used by transparent bridges to create a routing table. A routing table is used to track the locations of different stations, so that the bridge knows where to forward data.
- Address Learning automatically creates and updates a routing table as LANs are discovered. Is dynamic, and can change.
- Fixed routing uses pre-configured static paths that never change.

[[Transparent Bridges|View more details here]]

### Loop Prevention
If redundant bridges are used to increase reliability, it can create infinite routing loops. For example, SW1 gets a signal, and sends it to SW2 and SW3. SW2 receives it, and sends it to SW3. SW3 now gets both a signal from SW1 and SW2, in which it sends it out to SW2 first, then to SW1. This repeats.
![[Bridge Loops.png]]




# See Also
[[Transparent Bridges]] Building redundant bridges
[[$ Data Communications]]