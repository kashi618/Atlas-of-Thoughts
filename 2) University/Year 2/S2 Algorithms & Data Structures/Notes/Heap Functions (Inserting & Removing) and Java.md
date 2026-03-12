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
- 
### Java Heap Implementation
```java
class Heap {
    private int[] heapArray;           // Array of heap elements
    private int   currentSize  = 0;    // Current index of heap
    static  int   MAX_CAPACITY = 100;  // Max size of heap
    
    // Heap constructor
    Heap() {
	    // +1 because 1 based indexing. (starts at index 1 NOT 0)
        heapArray = new int[MAX_CAPACITY+1];
    }
```

## Inserting Nodes (Sift up)
Lets say we have this, and we want to add the value 60
```
    50
   /  \
  30  20
 / \  / \ 
15 10 8 16

index:  1   2   3   4   5   6  7
array: [50, 30, 20, 15, 10, 8, 16]
```

To add a value of 60, we simply:
1. Add value to end of array
2. Check if heap obeys [[Heap Condition|heap condition]] (parent > child)
3. If it doesn't, swap 60 with its parent node, until it does

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

### Java Insert Code
Separated into two functions:
- insert()
- siftUp()

```java
void insert(int newValue) {
	// Add new value at end of heap array
	heapArray[++currentSize] = newValue;
	// Sift up newly added value
	siftUp(currentSize);
}

void siftUp(int currentIndex) {
	int currentValue = heapArray[currentIndex]; // Store value to be sifted up
	heapArray[0] = Integer.MAX_VALUE;           // Sentinel value at index 0
	
	// While the parent value smaller than current value
	while (heapArray[currentIndex/2] < currentValue) {
		// Move parent down
		heapArray[currentIndex] = heapArray[currentIndex/2];
		// Change working index to parent
		currentIndex = currentIndex/2;
	}
	// Place current value in correct position
	heapArray[currentIndex] = currentValue;
}
```

## Deleting Nodes (Sift Down)
From the above, lets say we have this, and we want to remove a value
```
    50
   /  \
  30  20
 / \  / \ 
15 10 8 16

index:  1   2   3   4   5   6  7
array: [50, 30, 20, 15, 10, 8, 16]
```
Remember that in [[Priority Queue|priority queues]], we can only remove from the highest priority first. Usually, its the root node of the heap.

To remove a value, we simply:
1. Replace root node (50) with last node in array
2. Check if it obeys [[Heap Condition|heap condition]] (parent > child)
3. If it does not, find which children is biggest, and swap. 
4. Repeat this until it obeys heap condition

```
   initial     	    move 1               move 2       
     50  <──         16   <───┐     ┌───>  30      
    /  \            /  \      │     │     /  \       
   30  20          30  20     │     └─>  16  20  
  / \  / \        / \  / \    │         / \  /      
 15 10 8 16      15 10 8  X <─┘        15 10 8    


index :    1    2   3    4   5   6    7
inital: [  50,  30, 20,  15, 10, 8,  16  ]  
move 1: [ *16,  30, 20,  15, 10, 8, *nil ]  SWAP A[1] with A[7]
move 2: [ *30, *16, 20,  15, 10, 8,  nil ]  SWAP A[1] with A[2] 
									        Because A[2] > A[3]
```

### Java Remove Code
Separated into two functions:
- delete()
- siftDown()

```java
int remove() {
	// Empty heap
	if (currentSize == 0) {
		throw new NoSuchElementException("Heap empty, cannot delete.");
	}
	
	int removedValue = heapArray[1];       // Store value to be removed
	heapArray[1] = heapArray[currentSize]; // Replace root with last value
	currentSize--;                         // Decrease size due to removed value
	siftDown(1);                           // Sift down the value at index 1
	return removedValue;                   // Return removed value
}

void siftDown(int currentIndex) {
	int currentValue = heapArray[currentIndex];

	// While node at siftIndex has a left child
	while (2 * currentIndex <= currentSize) {
		int childIndex = 2 * currentIndex; // Currently the left child index
		
		// Check if right child exists, and is larger than left child
		if (childIndex < currentSize &&  
			heapArray[childIndex+1] > heapArray[childIndex]) {
			childIndex++; // Change to the right child index
		}
		
		// If valueToSift >= larger child, we finish
		if (currentValue >= heapArray[childIndex]) {
			break;
		}
		
		// Otherwise, sift down value (swap with larger child)
		heapArray[currentIndex] = heapArray[childIndex];
		currentIndex = childIndex; // Move down to position of child
	}
	heapArray[currentIndex] = currentValue;
}
```


# See Also
[[$ Algorithms & Data Structures]]
[[Heaps]]