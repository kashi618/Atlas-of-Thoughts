## Question 1
### A)
**What are the differences, if any, between a Heap array and a sorted array? What are the main advantages of a binary Heap compared to both an unsorted array and a sorted array from the point of view of insert() and remove() operations? (6 marks)**
A heap is a data structure, that represents a complete binary tree, consisting of a parent and at most 2 child nodes. A heap array is essentially a heap, where each value of its node is stored in an array.
A sorted array is a list of numbers, where the order of the numbers are either in ascending or descending order.

The main advantage of a binary heap, is how fast it takes to find or delete a specific value in its array. Due to its binary nature, it has a time complexity of O(log n) when needing to find or delete a node. Meanwhile, for a sorted heap, it requires a time complexity of O(n) to insert or delete a value.

### B)
**Selection sort and Heap sort are similar in that they are both examples of hard-split easy-join. Comment on this. (6 marks)**
Both of these algorithms divide the array into unsorted and sorted regions. They perform a hard-split by searching for the largest element in the unsorted region, and then easy-join it by swapping it to the end of the array at O(1) time.
However, a heap sort is an improvement over selection sort, as it uses a heap to store its values. This means that when needing to access or find values, it can be done so in O(log n) time, whereas selection sort will take O(n) time.

### C)
**Draw the following heap array as a two-dimensional binary tree data structure:**
![[Pasted image 20260518191125.png]]
**Also, assuming another array hPos[] is used to store the position of each key in the heap, show the contents of hPos[] for this heap.
 6 marks)**
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

hPos[] = [-1, 6, -1, -1, -1, 5, -1, 4, 2, 7, 3, 1, 0]
 ```

### D)
**By using tree and array diagrams, illustrate the effect of inserting a node whose key is 13 into the heap in the array of part (c). You can ignore effects on hPos[]. (8 marks)**
In notebook

### E)
**Write in pseudocode a recursive version, maxHeapify(int k), of the siftDown(int k) Heap operation (7 marks)**
```python
maxHeapify(k):
	left = 2*k + 1
	right = 2*k + 2
	largest = k
	
	if left < heapSize AND a[left] > a[largest]:
		largest = left
	if right < heapSize AND a[right] > a[largest]:
		largest = right
	
	if largest != k:
		swap(a[k], a[largest])
		maxHeapify(largest)
```

## Question 3
### A)
**Given the following Depth First Search algorithm and graph, show step by step how it
traverses the graph by computing u.d, u.f, u.color and u.π for each vertex u. (10 marks)**

## Question 4
### A)
**Explain in your own words the purpose of UnionFind data structure in Kruskal’s algorithm. (8 marks)**
Kruskal's algorithm works by sorting the edges of a graph by weight, and then connecting them one by one. The UnionFind data structure in Kruskal's algorithm, is used to detect loops when connecting edges. It works by checking if they are already in the set, before connecting them. If they aren't, then they would be added to the unionfind data structure.

### B)
**Mention two ways of representing UnionFind sets and give the complexity of the significant operations for one of these representations. (4 marks)**
One way is by using a linked list or array, where every element in a set points to a single representative element.
Another way is by using a tree. Each set is represented as a tree, where every node points to its parent.

For a tree, here are the time complexities of its functions
makeSet(x) is O(1)
findSet(x) is O(a(n))
union(x, y) is O(a(n))
Where a(n) is usually less or equal to 4. Due to this low number, is it essentially  the same as O(1)

### C)
**Given the following array for the tree representation of UnionFind sets:**
![[Pasted image 20260518221340.png]]
#### I)
```
  C       G       K
 / \             /
A   B           H
   /           / \
  D           I   J
 / \
E   G     
```

#### II)
findSet(G) = C
findSet(H) = K

It is found by going up the tree, until hitting the root node

#### III)
```
    C               
 /  |  \           
A   B  K       
   /    \      
  D      H 
 / \    / \
E   G  I   J
```

#### IV)
```
    C               
 / / | \ \           
A  B D  E K       
      \    \      
       G    H 
           / \
          I   J
          
index[]      = A B C D E F G H I J K
treeParent[] = C C C C C F D K H H K
```


