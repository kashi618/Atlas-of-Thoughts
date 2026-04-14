---
tags:
  - DataCommunications
aliases:
---
## Transparent bridges
For bridges, resilience is very important. We can solve this by using two bridges at separate locations, whilst connected to the same LAN. This way, if one breaks down, the other is still alive. These are called transparent bridges One major problem that comes with this configuration, is looping
- This issues comes when redundant bridges are used for reliability, but creates a loop of data transmission 

**Bridge Loops**
![[Bridge Loops.png|400]]

## Loop Prevention
### Loop-free bridge network
To create a loop-free bridge network, we can use graph theory

- We first create a spanning tree of the network
- Each graph node represents the bridges, and LANs in which they connect
- Connecting arcs represents the connections between LAN(s) to a bridge(s)
- Each arc is assigned a metric (1 in the direction of a bridge to LAN, 0 for the opposite)
![[Graph Bridge Network.png|400]]

### Finding Shortest Path
To find a spanning tree, there are three steps
1. Find the Root Bridge
2. Find shortest path from root bridge to every other bridge and LAN
3. Eliminate redundant routes. The shortest route becomes the spanning tree
Here is the solution to the above
![[Transparency Bridge Spanning Tree.png]]



# See Also
[[$ Data Communications]]