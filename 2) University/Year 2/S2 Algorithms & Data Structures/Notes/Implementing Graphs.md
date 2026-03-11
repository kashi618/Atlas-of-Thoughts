---
tags:
  - AlgorithmsAndDataStructures
aliases:
---
## Storing Graphs in Memory
To begin with graphs, we first need a way to store them in memory. 
Below is an implementation on how a graph can be stored in a txt file.
![[Example Weighted Graph.png]]
```c
7 11      //Row 1     7 vertices & 11 edges
1 2 7     //Row 2     Point A -> Point B  (weight=7)
1 4 5     //Row 3     Point A -> Point D  (weight=5)
2 3 8     //Row 4     Point A -> Point C  (weight=8)
2 4 9     //Row 5     Point B -> Point D  (weight=9)
2 5 7     //Row 6     Point B -> Point E  (weight=7)
3 5 5     //Row 7     Point C -> Point E  (weight=5)
4 5 15    //Row 8     Point D -> Point E  (weight=15)
4 6 6     //Row 9     Point D -> Point F  (weight=6)
5 6 8     //Row 10    Point E -> Point F  (weight=8)
5 7 9     //Row 11    Point E -> Point G  (weight=9)
6 7 11    //Row 12    Point F -> Point G  (weight=11)
```

- Row 1: X vertices, Y edges
- Row 2: Point X to point Y, with weight Z (and so on)

## Accessing Graphs
### Adjacency Matrix
One way to access the graph, is by implementing it as a matrix
- This works by storing the points (vertices) as the array indices
	- (Point A -> Point B) is effectively `adj[1][2]`
- We now set the value of the coordinates to its weight
	- `adj[1][2] = 7`
- For spaces in the matrix without a point, we set it to 0. This is because no graph can have a weight of 0

Here is the graph from above, with weight values between each point
![[Graph Matrix.png]]

Here is what the complete matrix would look like
![[Complete Graph Matrix.png]]

For small graphs, that works well. However, as it grows in size, it becomes very inefficient due to the amount of 0's needed.

### Adjacency Lists
Another way to access a graph, is to store it as a 2D linked list.
```
index 0:
index 1: [] -> [4|5]  -> [2|7]
index 2: [] -> [5|7]  -> [4|9]  -> [3|8] -> [1|7]
index 3: [] -> [5|5]  -> [2|8]
index 4: [] -> [6|6]  -> [5|15] -> [2|9] -> [1|5]
index 5: [] -> [7|9]  -> [6|8]  -> [4|15] -> [3|5] -> [2|7]
index 6: [] -> [7|11] -> [5|8]  -> [4|6]
index 7: [] -> [6|11] -> [5|9]
```
- (Point A -> Point B weight=7) is `[PointA] -> [pointB|weight]`, where `PointA` is the index of the linked list

**Note:**
- Due to the workings of the linked list, adding a point will "shift" the node over, due to referencing the most recent node and connecting it to the latest
```
(Point 1 -> Point 2 weight=5)

index 1: [] -> [2|5]
```

```
Point 1 -> Point 5 weight=7

index 1: [] -> [5|7] -> [2|5]
```


# See Also
[[$ Algorithms & Data Structures]]
