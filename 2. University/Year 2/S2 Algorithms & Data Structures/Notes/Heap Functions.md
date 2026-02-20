---
tags:
  - AlgorithmsAndDataStructures
aliases:
---
## Properties
- The array holding the heap, needs to begin at index 1, NOT 0

If a node is at index n where n>0:
- Left child: `n*2`
- Right child: `(n*2)+1`
- Parent node: `n%2`

## Inserting Nodes (Sift up)
Lets say we have this, and we want to add the value 60
```
    50
   /  \
  30  20
 / \  / \ 
15 10 8 16

[50, 30, 20, 15, 10, 8, 16]
```

To add a value of 60, we simply:
1. Add value to end of array
2. Check if heap obeys heap condition
3. If does not, replace 60 with its parent node, until it does

```
	   initial     	       move 1             move 2            move 3
         50                 50                 50        ┌────>  60
        /  \               /  \               /  \       │      /  \
       30  20             30  20      ┌───>  60  20      └─>   50  20
      / \  / \           / \  / \     │     / \  / \          / \  / \
     15 10 8 16    ┌─>  60 10 8 16    └─>  30 10 8 16        30 10 8 16
    /              │   /                 /                 /
─> 60              └─>  15               15                15

index :    1   2   3    4   5   6   7   8
inital: [ 50,  30, 20,  15, 10, 8, 16, *60]  
move 1: [ 50,  30, 20, *60, 10, 8, 16,  15]  SWAP (A[8] , A[8/2]->A[4])
move 2: [ 50, *60, 20,  30, 10, 8, 16,  15]  SWAP (A[4] , A[4/2]->A[2])
move 3: [*60,  50, 20,  30, 10, 8, 16,  15]  SWAP (A[2] , A[2/2]->A[1])
```

### Java Code
```java
// Add value to end of heap
heap[size] = value;

while (i>0)
```
## Deleting Nodes (Sift Down)

# See Also
[[$ Algorithms & Data Structures]]
[[Heaps]]