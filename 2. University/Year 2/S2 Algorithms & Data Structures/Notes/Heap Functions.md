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

## Functions
### Inserting Nodes (Sift up)
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
### Deleting Nodes (Sift Down)

### Java Code
```java
class Heap {
    private int[] a;
    private int N;
    static int maxH = 100;
    
    // Constructor to initialize heap
    Heap() {
        N = 0;
        a = new int[maxH+1];
    }
    
    void siftUp(int k) {
        int v = a[k];
        a[0] = Integer.MAX_VALUE;
        
        // complete yourself from pseudocode in notes
        while (a[k/2] < v) {  // while parent is less than current value
            a[k] = a[k/2];    // move parent down
            k = k/2;          // move up to parent position
        }
        a[k] = v;             // place value in correct position
    }
    
    void siftDown(int k) {
        int v, j;
        v = a[k];
        // complete yourself
        while (2*k <= N) {  // while node has at least one child
            j = 2*k;        // left child index
            
            // if right child exists and is greater than left child
            if (j < N && a[j] < a[j+1]) {
                j++;        // use right child instead
            }
            
            // if current value is greater than or equal to largest child
            if (v >= a[j]) {
                break;      // heap property satisfied
            }
            
            // move child up
            a[k] = a[j];
            k = j;          // move down to child position
        }
        a[k] = v;           // place value in correct position
    }
    
    void insert(int x) {
        a[++N] = x;
        siftUp(N);
    }
    
    int remove() {
        a[0] = a[1];     // store highest priority value in a[0]
        a[1] = a[N--];  // and replace it with value from end of the heap
        siftDown(1);    // and then sift this value down
        return a[0];
    }
    
    void display() {
        System.out.println("\nThe tree structure of the heaps is:");
        System.out.println(a[1]);
        for(int i = 1; i <= N/2; i = i * 2) {
            for(int j = 2*i; j < 4*i && j <= N; ++j) {
                System.out.print(a[j] + "  ");
            }
            System.out.println();
        }
        System.out.println();
    }
    
    public static void main(String args[]) {
        Heap h = new Heap();
        int r; 
        double x;
        
        // insert random numbers between 0 and 99 into heap
        for(int i = 1; i <= 10; ++i) {
            x = (Math.random() * 100.0);
            r = (int) x; 
            System.out.println("Inserting " + r);
            h.insert(r);
            h.display();
        }
    }
} // end of Heap class
```
# See Also
[[$ Algorithms & Data Structures]]
[[Heaps]]