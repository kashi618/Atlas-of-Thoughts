```
mergeLines(L1, L2, L3, L4, masterLine)
    n1 = 0
    n2 = 0
    n3 = 0
    n4 = 0  
    
    // Loop through each the nth element of each line, and find the min
    FOR (i = 0: i<MASTERSIZE; i++)
        min = (biggest possible number, so that the next min can be found)
        
        // Compare current elements of all 4 lines
        IF (L1[n1].weight < min  AND  n1 < LINESIZE)
            min = L1[n1].weight
            minList = 1
        END if
        
        IF (L2[n2].weight < min  AND  n2 < LINESIZE)
            min = L2[n2].weight
            minList = 2
        END if
        
        IF (L3[n3].weight < min  AND  n3 < LINESIZE)
            min = L3[n3].weight
            minList = 3
        END if
        
        IF (L4[n4].weight < min  AND  n4 < LINESIZE)
            min = L4[n4].weight
            minList = 4
        END if
        
        // Append the min value to the master line, then move that line up by 1
        IF (minList == 1)
            masterLine[i] = L1[n1]
            n1++
        ELSE IF (minList == 2)
            masterLine[i] = L2[n2]
            n2++
        ELSE IF (minList == 3)
            masterLine[i] = L3[n3]
            n3++
        ELSE IF (minList == 4)
            masterLine[i] = L4[n4]
            n4++
        END IF
    END FOR
END FUNCTION
```
