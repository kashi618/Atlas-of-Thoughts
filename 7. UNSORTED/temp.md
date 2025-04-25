```
binarySearch(line[], size):
    // Ask user to enter a weight
    PRINT "Enter weight to find: "
    READ target
    
    // Set boundaries for binary search
    left = 0
    right = size - 1
    targetIndex = -1
    
    WHILE (left <= right)
        mid = left + (right-left)/2
        
	    // Regular binary search
        IF (line[mid].weight == target)
            targetIndex = mid
            break
        ELSE IF (line[mid].weight < target)
            left = mid + 1 // Search the right half
        ELSE
            right = mid - 1 // Search the left half
        END else
    END while
    
    // Tell user if weight has been found or not
    IF (targetIndex == -1)
        PRINT "Target weight {target} not found"
    ELSE
        PRINT "Target weight {target} FOUND"
    END if
END function
```
