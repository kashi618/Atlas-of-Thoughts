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
- Requiresn sorted list

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

```
int array[SIZE];
int i = 0;
int j = SIZE;
n = 0;
k = n/2;


```