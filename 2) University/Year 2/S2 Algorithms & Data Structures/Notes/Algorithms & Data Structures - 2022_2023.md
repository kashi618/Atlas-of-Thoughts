
## Question 1
### A)
A heap is a datastructure that represents a complete binary tree. A heap array is a way to store the contents of a heap, using a list with the values of each node. A sorted array is a list of numbers, where they are either in ascending or descending order, in terms of its values.

The biggest advantage of a binary heap, is that inserting, and removing values are very quick. Each function have a time complexity of O(log n).
In an unsorted and sorted array, both their insert and remove functions run at a time complexity of O(n), as it needs to scan each value in the list sequentially.

### B)
The selection sort and heap sort algorithms are very similar. They both first divide the array into sorted and unsorted regions. Then, they perform a hard-split, by finding the largest value in the unsorted region, before using easy-join to add it to the sorted region.

### C)
```
       12
     /    \
    11     8 
   / \    / \
  10  7  5   1
 /
9

hPos[1]  = 6
hPos[5]  = 5
hPos[7]  = 4
hPos[8]  = 2
hPos[9]  = 7
hPos[10] = 3
hPos[11] = 1
hPos[12] = 0

hPos[] = -1, 6, -1, -1, 5, -1, 4, 2, 7, 3, 1, 0
```

### D)
in notebook

### E)
```
maxHeapify(int k)
	left = (k*2) + 1
	right = (k*2) + 2
	largest = k
	
	if left < heapSize AND a[left] < a[largest]
		largest = left
	else if right < heapSize AND a[right] < a[largest]
		largest = right
	
	if largest != k
		swap(a[k], a[largest])
		maxHeapify(largest)			
```

## Question 3
### A)
One way is my using an adjacency matrix, and way is by using an adjacency list.

For small graphs like this, the adjacency list is preffered, as it uses up less memory. 

```
adjacency list
[1] -> [2|7] -> [5|15]
[2] -> [1|7] -> [5|12]
[3] -> null
[4] -> [5|5]
[5] -> [1|15] -> [2|12] -> [4|5]


adjacency matrix
[ 0,  7,  ∞,  ∞, 15]
[ 7,  0,  ∞,  ∞, 12]
[ ∞,  ∞,  0,  ∞,  ∞]
[ ∞,  ∞,  ∞,  0,  5]
[15, 12,  ∞,  5,  0]
```

### B)

## Question 4
### A)
In Kruskal's algorithm, the UnionFind data structure is used to store sets of connected edges. Kruskal's work by first sorting all edges by its weight, and then connecting the edges. The UnionFind datastructure is used to find if the edges that are to be connected, exist in the same set. This is because if they are both in the same set, then connecting them will result in a loop.

### B)
One way is by using a tree, which stores each node, where each node has a root containing the representative node. Another way is by using linked list, where each node connects to the representative node.

The time complexity for a tree are:
makeSet(x) is O(n)
findSet(x) is O(a(n))
union(x, y) is O(a(n))
Where a(n) is less than or greater than 4

### C)
#### I)
In Notebook

#### II)
findSet(g) returns C
findSet(h) returns K

The find set function essentially just goes up the tree where node G or H is, and finds its representative/root node.

#### III)
In Notebook

#### IV)
In Notebook



