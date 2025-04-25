```
mergesort(line[], left, right)
	// Find the middle
    IF (left < right)
        middle = left + (right - left) / 2
		
        // Sort first and second half
        mergesort(line, left, middle)
        mergesort(line, middle + 1, right)
        
        // Merge the two halves
        merge(line, left, middle, right)
    END if
END function

merge(line[], left, middle, right):
    n1 = middle - left + 1
    n2 = right - middle
    
    // Create temporary structures for storing values
    struct product tempLeft[LINESIZE], tempRight[LINESIZE]
    
    // Copy data from lines to temp structs
    FOR (i=0; i<n1; i++)
        tempLeft[i] = line[left + i]
    END for
    
    FOR (i=0; i<n2; i++)
        tempRight[i] = line[middle + i + 1]
    END for
    
    // Merge temp structs
    i = 0
    j = 0
    k = left
    
    WHILE (i < n1 AND j < n2)
        IF (tempLeft[i].weight <= tempRight[j].weight)
            line[k] = tempLeft[i]
            i++
        ELSE
            line[k] = tempRight[j]
            j++
		END else
		
        k++
        
    END while
    
    WHILE (i < n1)
        line[k] = tempLeft[i]
        i++
        k++
    END while
    
    WHILE (j < n2)
        line[k] = tempRight[j]
        j++
        k++
    END while
END FUNCTION
```
