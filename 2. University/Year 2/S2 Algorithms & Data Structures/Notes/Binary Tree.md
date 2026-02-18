---
tags:
  - AlgorithmsAndDataStructures
aliases:
---
## Structure
It is a hierarchical data structure based on nodes, where each node has a maximum of 2 child nodes.

```
    A
   / \
  B   C
 / \   \
D   E   F
```
A is a parent node, with child nodes B and C
B is also a parent node, with child nodes D and E

### Properties
Each level in the binary tree, can have at most $2^{n}$ nodes, where `n` is the level, starting at 0
```
1st level n=0  2^0 = 1 node
2nd level n=1  2^1 = 2 nodes
3rd level n=2  2^2 = 4 nodes
4th level n=3  2^3 = 8 nodes
```



# See Also
[[$ Algorithms & Data Structures]]
