---
tags:
  - C
aliases:
---

## What Are Multi-Dimensional Arrays?
- Similar to regular/1D arrays, multi-dimensional arrays also store a contiguous piece of data in memory
- However, instead of only one index number, it can have multiple. This can be used to created nested arrays.


## 2D Arrays
![[Pasted image 20250929101751.png]]


A 2D array can be initialized as follows:
`dataType arrayName[rows][columns]`
- In 2D arrays, we have initialize both a size for its rows and its columns

**Order of Values**

| Element Number         | Index Number |
| ---------------------- | ------------ |
|                        | **ROW 1**    |
| 1<sup>st</sup> element | `[0][0]`     |
| 2<sup>nd</sup> element | `[0][1]`     |
| 3<sup>rd</sup> element | `[0][2]`     |
|                        | **ROW 2**    |
| 4<sup>th</sup> element | `[1][0]`     |
| 5<sup>th</sup> element | `[1][1]`     |
| 6<sup>th</sup> element | `[1][2]`     |
|                        | **ROW 3**    |
| 7<sup>th</sup> element | `[2][0]`     |
| 8<sup>th</sup> element | `[2][1]`     |
| 9<sup>th</sup> element | `[2][2]`     |

### Setting Values
**Method 1**
```c showlinenumbers
int coolArray[2][3] = {1,2,3,1,2,3};
```

**Method 2**
```c showlinenumbers
int coolArray[2][3] = {1, 2, 3,
			1, 2, 3};
```

**Method 3**
```c showlinenumbers
int coolArray[3][2] = { 
		{1, 2, 3},
		{1, 2, 3} 
		};
```

### Input/Output 2D Array
**Printing out values**
```c showlinenumbers
#define ROW 2
#define COL 3

int main(void) {
    int arr[ROW][COL] = {1,2,3,
                         1,2,3};

    for (int i=0; i<ROW; i++) {
        for (int j=0; j<COL; j++) {
			// Prints out each element in a row
            printf("%d ",arr[i][j]);
        }
        // Skips line after row finished printing
        printf("\n");
    }
}
```

## n Dimension Arrays
### 3D array
A 3D array would work in the same way as a 2D array, just with an extra index number.

# See Also
[[$ C - Programming Language]]
[[Arrays - C]]
[[Subscript and Pointer Notation - C]]