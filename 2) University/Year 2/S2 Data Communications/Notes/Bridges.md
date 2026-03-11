---
tags:
  - DataCommunications
aliases:
---

## Bridges
Functions by interconnecting multiple small LANs, to create one large LAN
- This is preferable than creating one single large lan

**Advantages**
- Reliability: Faults can be contained and restricted to only a few stations
- Performance: Smaller LAN provide better performance to locally attached devices.
- Security: Some LAN topologies can potentially see all frames transmitted. Bridges uses physical isolation of high security traffic, and specific users with special security access
- Geography: Can be used to extend a LAN to isolated clusters of stations, using long distance communications. (microwave links, satellite links, etc)
![[LAN Bridge.png]]


### Bridge Routing
![[LAN Bridge Routing.png]]

#### Address Learning
An alternative approach to routing.
In this aproach, the bridge can learn of the location of each station **automatically**, because:
- Each incomming MAC frame contains a source address field
- Each LAN attaches to **one port** only
- By using these identifiers, the bridge constructs a routing table automatically, without manual intervention

## Transparent bridges
For bridges, resilience is very important. We can solve this by using two bridges at separate locations, whilst connected to the same LAN. This way, if one breaks down, the other is still alive. These are called transparent bridges
One major problem that comes with this configuration, is looping/
- This issues comes when redundant bridges are used for reliability, but creates a loop of data transmission
![[Bridge Loops.png]]

### Loop-free bridge network
To create a loop-free bridge network, we can use graph theory
- We first create a spanning tree of the network
- Each graph node represents the bridges, and LANs in which they connect
- Connecting arcs represents the connections between a LAN(s) to a bridge(s)


![[Pasted image 20260310170942.png]]


# See Also
[[$ Data Communications]]