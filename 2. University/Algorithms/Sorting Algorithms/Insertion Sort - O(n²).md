## Time Complexity

| Ω(n)- Best | Θ(n²) - Average | O(n²) - Worst |
| ---------- | --------------- | ------------- |
| O(n)       | O(n²)           | O(n²)         |
- Best case scenario, array is already sorted
- Worst case scenario, array is in reverse order

## Steps
1. Compare every element, to find the smallest digit.
2. Swap first element with the smallest digit.
3. Repeat, but swap with the second element etc.

### Pseudocode
```python
A[] = unsorted array
N = length of array

for (i=0 to N-1)
	min = i
	
	# Find smallest digit
	for (j=i+1 to N-1)
		if A[j] < A[min]
			min = j
	END FOR
	
	# Swap A[i] and A[min]
	temp = A[i]
	A[i] = A[min]
	A[min] = temp
END FOR
```
