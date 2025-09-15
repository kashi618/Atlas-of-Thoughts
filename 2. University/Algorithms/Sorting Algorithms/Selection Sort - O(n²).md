## Time Complexity

| Ω(n)- Best | Θ(n²) - Average | O(n²) - Worst |
| ---------- | --------------- | ------------- |
| O(n²)      | O(n²)           | O(n²)         |
- Selection sort performs the same № of comparisons every time

## Steps
1. Checks first and second element, swapping if needed.
2. Checks second and third element, swapping if needed.
3. This is repeated until the array is sorted. (every element is checked).

### Pseudocode
```python showlinenumbers
A[] = unsorted array
N = length of array

for (i=0 to N-1)
	# N-2, prevents out of bound error when j is last element
	# Due to checking j and j+1
	for (j=0 to N-2)
		
		# Checks A[j] and next element
		if (A[j] > A[j+1])
			# Swap A[j] and A[j+1]
			temp = A[j]
			a[j] = a[j+1]
			a[j+1] = temp
		END IF
	END FOR
END FOR
```
