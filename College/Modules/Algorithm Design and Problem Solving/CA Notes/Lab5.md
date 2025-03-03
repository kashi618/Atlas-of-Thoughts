## 1)
### A.
**Bubble Sort**
```
MAX = N-1
for (i=0; i<N; i++)
	for (j=0; j<MAX; j++)
		if A[j+1] < A[j]
			temp = A[j]
			A[j] = A[j+1]
			A[j] = temp#
			
	// Optimises bubble sort by removing checking the last 
	// element each time it passes, as it has been sorted
	MAX--
```

**Insertion Sort**
```
min = A[0]
for (i=0; i<N; i++)
	// Setts current working number
	minIndex = i
	
	// Find smallest number, noting the index and value
	for (j=0; j<N; j++) 
		if A[j] < A[minIndex]
			minIndex = j
			min = A[j]
	
	// Swaps min
	temp = A(i)
	A(i) = A(minIndex)
	A(minIndex) = temp
	End-For
```

## 2)
### A.
```
gcd(a, b)
	if b=0 then
		return a
	else
		while b!=0
			rem = a mod b
			If rem=0
				return b
			else
				a=b
				b=rem
```
**Time Complexity:** O(n)
This is because there is one loop, and everything can be done linearily

### B.


### C.
