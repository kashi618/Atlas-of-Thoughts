## Question 1
### A)
A heap is a representation of a complete binary tree. It consists of a parent node with at max 2 child nodes. A heap array is a way to store the contents of the heap, using a list of numbers.
A sorted array is a list of values, where the values are either in ascending or descending order.

The main advantages of using a binary Heap for insert and remove(), is that its functions operate with an average time complexity of O(log n). Meanwhile, a sorted and unsorted array requires a time complexity of O(log n) for the same functions, as it needs to scan each element one by one.

### B)

## Question 3
```python
Prim(s)
	foreach v in V
		disk[v] = INFINITY
		parent[v] = 0
		hPos[v] = 0
	
	h = new Heap(V, hPos, dist)
	h.insert(s)
	
	while (h)
		v = h.remove()
		dist(v) = -dist[v]
		
		foreach u in adj(v)
			/* PRIMS
			if wgt(v, u) < dist[u]
				dist[u] = wgt(v, u)
				parent[u] = v
			*/
			
			/* DIJKSTRAS
			if current_dist + wgt(v, u) < dist[u]
				dist[u] = current_dist + wgt(v, u)
				parent[u] = v
			*/
			
			if hPos[u] == 0
				h.insert(u)
			else
				h.siftUp(hPos[u])
	
	For 
```


