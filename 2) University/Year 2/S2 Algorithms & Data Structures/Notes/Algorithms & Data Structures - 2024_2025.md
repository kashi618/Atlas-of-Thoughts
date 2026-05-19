## Question 1
### A)
**What are the differences, if any, between a Heap array and a sorted array? What are the main advantages of a binary Heap compared to both an unsorted array and a sorted array from the view of insert() and remove() operations. (6 marks)**
A heap is a representation of a complete binary tree, a data structure consisting of a parent node and two children nodes. A heap array is a representation a heap, where each node value is stored in an array (list of values).
A sorted array is a list of values, where each value is either in ascending or descending order.

For a binary heap, its insert() and remove() functions have a time complexity of O(log n) time. Meanwhile, the insert() and remove() functions of a sorted and  unsorted array has a time complexity of O(n).



### B)
**Selection sort and Heap sort are similar in that they are both examples of hard-split easy-join. Comment on this. (6 marks)**
Both of these algorithms divide the array into unsorted and sorted regions. After, they "hard-split" by searching for the maximum element in the unsorted region, before "easy-join" them, by swapping it at the end of the sorted region.
Both algorithms easy-join with a time complexity of O(1). However, selection sort has a hard-split of O(n). Heap sort fixes on this, as it uses a heap structure, giving a complexity of O(log n) for hard-split.

### C)
**Draw the following heap array as a two-dimensional binary tree data structure:**
![[Pasted image 20260516225501.png|400]]
**Also, assuming another array hPos[] is used to store the position of each key in the heap, show the contents of hPos[] for this heap. (6 marks)**
```
       12
      /  \
    11    8
   / \   / \
  10  7 5   1
 /
9

hPos[] = [-1, 6, -1, -1, -1,  5, -1,  4,  2, 7, 3, 1, 0]
```

### D)
**By using tree and array diagrams, illustrate the effect of inserting a node whose key is 13 into the heap in the array of part (c). You can ignore effects on hPos[]. (8 marks)**
![[Pasted image 20260517142738.png|500]]

|      |     |     |     |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| k    | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| a[k] |     | 12  | 11  | 8   | 10  | 7   | 5   | 1   | 9   |     |

|      |     |     |     |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| k    | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| a[k] |     | 12  | 11  | 8   | 10  | 7   | 5   | 1   | 9   | 13  |

|      |     |     |     |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| k    | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| a[k] |     | 12  | 11  | 8   | 13  | 7   | 5   | 1   | 9   | 10  |

|      |     |     |     |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| k    | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| a[k] |     | 12  | 13  | 8   | 11  | 7   | 5   | 1   | 9   | 10  |

|      |     |     |     |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| k    | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| a[k] |     | 13  | 12  | 8   | 11  | 7   | 5   | 1   | 9   | 10  |

### E)
**Write in pseudocode a recursive version, maxHeapify(int k), of the siftDown(int k) Heap operation. (7 marks)**
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
![[Pasted image 20260517215242.png|500]]


### B)


### C)



## Question 4
### A)
**Show how binary search works when searching for 17 in the following array: (4 marks)**
![[Pasted image 20260517215349.png|500]]
low = 1
mid = 10
high = 21

low = 12
mid = 14
high = 17

low = 17
high = 21


### B)
**What is a binary search tree (BST)? Mention any specific advantage or possible disadvantage. What is the complexity of searching a BST? (6 marks)**
A binary tree is a tree data structure, where the value of the left child is always less than the right child, and where the right child is always greater than the parent.

The biggest advantage with binary search trees is the speed in which it can find an element. It has a time complexity of O(log n) when needing to find or delete a node in the tree.
However, a disadvantage comes when trying to insert lots of data into a sorted binary search tree. Adding lots of data can result in the tree forming into a series of linked lists. This changes the time complexity into O(n).

### C)
**Write in pseudocode the algorithm for searching a BST. (6 marks)**
```python
binarySearch(A[], min, max, key)
	while min <= max:
		mid = (max+min)/2
		if A[mid] > key:
			max = mid+1
		elif A[mid] < key:
			min = mid+1
		else
			return mid
```


### D)
**Given the following binary search tree, show how it would be modified by inserting 54. (5 marks)**
![[Pasted image 20260517220529.png]]

```
    44
  /     \
17      78
 \     /  \ 
  32  50   88
     /  \   
   48    62
        /
       54
```

### E)
**What is an AVL-tree? Include in your answer the idea of a rotation. Show how the tree that results from inserting 54 in part (d) would be rebalanced if it
were an AVL-tree. (12 marks)**
An AVL tree is a self balancing binary search tree where the maximum difference between any node's sub trees is at most 1. Similar to BST's, if data is added, a the tree can become unbalanced. To fix this, a rotation is performed. A rotation is a function that swaps/rotates a parent and child node, so that the tree becomes balanced again

To balance the above tree, we will need to perform 2 rotations.
```
    44
  /     \
17      78
 \     /  \ 
  32  50   88
     /  \   
   48    62
        /
       54
```

The first rotation happens at the node with value of 50. We will need to perform a left rotation
```
Initial
   50 
  /  \ 
48    62
     /
    54

Step 1
    62
   /  \
  50  54
 /
48

Step 2
    62
   /
  50
 /  \
48  54
```

Then, we do a right rotation on the node with value 78
```   
Initial
      78
     /  \
    62  88
   /
  50
 /  \
48  54

Step 1
    62
   /  \
  50  78
 /  \   \
48  54  88
```

