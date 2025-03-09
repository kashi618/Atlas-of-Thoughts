## How does it work
- Finds the smallest number, and swapes it into the lowest unsorted position

1. Find smallest number
2. Replace lowest unsorted number with smallest number
3. Repeat

**Time Complexity**
O(n<sup>2</sup>)

```
int min = A[0]
for i in range(len(A))
	if A[i] < min
		min = A[i]


```