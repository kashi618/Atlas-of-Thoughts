## Linear Search
- Searches an object starting from the first element, then the second, then the third, and so on.

```c
int numToFind = 4;
int listNums[] = {1,52,25,8,67,4,31,86,67};
int indexOfNum;

for (i=0; i<size; i++) {
	if (listNums[i] == i) {
		indexOfNum = i;
		break;
	}
}
```

**Time Complexity**
O(n)

## Binary Search
- Requires sorted list

**How it Works**
- i = 1<sup>st</sup> index
- j = last index
- n = index
- k = n/2 = middle index

1. Check if key is k
2. Check if key is greater or less than k
3. Find the middle index of that half
4. Repeat

**Time Complexity**
O( log(n) )

**Pseudocode**
```
position = -1    // Index of elementneed to be found (-1 since not found yet)

```

**Recursive Pseudocode**
```
func binary_search(left,right, key, A)
	if l > r
		return -1
	else
		mid = (left+right) / 2
	
		// Basecase
		if A[mid] == key
			return mid
			// Runs if 
		else if A[mid] > key 
			return binary_search(mid-1, r, key, A)
		else
			return binary_Search(l, mid-1, key, A)
		
END binary_search
```
