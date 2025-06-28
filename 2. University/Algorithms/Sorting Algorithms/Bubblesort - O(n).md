## Steps
1. Checks first and second element, swapping if needed.
2. Checks second and third element, swapping if needed.
3. This is repeated until the array is sorted. (every element is checked)

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
