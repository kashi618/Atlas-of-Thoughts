## Time Complexity

| Ω(n²)- Best | Θ(n²) - Average | O(n²) - Worst |
| ----------- | --------------- | ------------- |

## Steps
1. Go through each element, and find the smallest number
2. Swap the smallest number with the first element in the array
3. 

### Pseudocode
```python
A = unsorted array
N = length of array

for (i=0, i< N-1; i++)
	for (j=0, j< N-1; j++)
		if (A[j] > A[i+1])
			temp = A[j]
			a[j] = a[i]
			a[i] = temp
		END IF
	END FOR
END FOR
```
