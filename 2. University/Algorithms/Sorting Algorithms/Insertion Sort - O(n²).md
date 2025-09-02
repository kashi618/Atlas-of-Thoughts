## Time Complexity

| Ω(n)- Best | Θ(n²) - Average | O(n²) - Worst |
| ---------- | --------------- | ------------- |
| O(n)       | O(n²)           | O(n²)         |
- Best case scenario, array is already sorted
- Worst case scenario, array is in reverse order

## Steps
1. Assume first element is sorted, starting with the second element (the key)
2. Compare the key to each element to its left, swapping them if they are bigger.
3. Now, let the key be the third element, etc.

### Pseudocode
```pyton showlinenumbers
A[] = unsorted array
N = length of array

for (i=1 to N-1)
	key =  A[i]
	j = i-1
	
	# Swap elements bigger than the key
	while (j>=0 AND A[j]>key)
		A[j+1] = A[j]
		j = j-1
	END WHILE
	
	N[j] = key
END FOR
```
