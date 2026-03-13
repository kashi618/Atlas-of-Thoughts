---
tags:
  - AlgorithmsAndDataStructures
aliases:
---
## Kruskal's Algorithm
Edge to edge greedy algorithm. Focuses on connecting vertices through the lowest value edge, which often results in to multiple trees. After all vertices are connected, loops are destroyed by removing the highest value edge

- Connect two vertices that has the smallest value edge
- Then, find the next lowest value edge. (does not need to connect to the the existing tree)
- This is repeated, until all vertices are connected
- If a cycle appears, then the greatest value edge is removed




# See Also
[[$ Algorithms & Data Structures]]
