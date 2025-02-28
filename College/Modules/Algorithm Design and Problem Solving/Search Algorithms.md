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

### Recursive Linear Search
**Base Case**

