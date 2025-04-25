```
vanReport(line[], van1[], van2[], van3[], van4[], van5[], vanCount[], totalWeight[])
    vanIndex[NUMVAN] = Set to All Zeros
    
    PRINT "Generating van report..."
	
    // Goes through each product in the masterline
    FOR (int i=0; i<MASTERSIZE;) // DO NOT INCREMENT!!
    
	    // Adds current product to van 1 if weight limit not exceeded
        IF (totalWeight[0]+line[i].weight <= WEIGHTLIMIT)
            van1[vanIndex[0]] = line[i]
            totalWeight[0] += line[i].weight
			
            vanIndex[0]++
            vanCount[0]++
            i++
			
        // Adds current product to van 2 if weight limit not exceeded
        ELSE IF (totalWeight[1] + line[i].weight ≤ WEIGHTLIMIT) THEN
            van2[vanIndex[1]] = line[i]        // Assign product to van2
            totalWeight[1] += line[i].weight  // Update van2's total weight
            vanIndex[1] += 1                // Move to next slot in van2
            vanCount[1] += 1          // Increment product count
            i += 1                 // Proceed to next product

        // Repeat for van3, van4, van5...
        ELSE IF (totalWeight[2] + line[i].weight ≤ WEIGHTLIMIT) THEN
            van3[vanIndex[2]] = line[i]
            totalWeight[2] += line[i].weight
            vanIndex[2] += 1
            vanCount[2] += 1
            i += 1

        ELSE IF (totalWeight[3] + line[i].weight ≤ WEIGHTLIMIT) THEN
            van4[vanIndex[3]] = line[i]
            totalWeight[3] += line[i].weight
            vanIndex[3] += 1
            vanCount[3] += 1
            i += 1

        ELSE IF (totalWeight[4] + line[i].weight ≤ WEIGHTLIMIT) THEN
            van5[vanIndex[4]] = line[i]
            totalWeight[4] += line[i].weight
            vanIndex[4] += 1
            vanCount[4] += 1
            i += 1

        // If product cannot fit in any van, exit with error
        ELSE
            PRINT "Weight limit [WEIGHTLIMIT] is too small. Increase limit or add more vans."
            RETURN  // Terminate function early
        END IF
    END FOR

    PRINT "Van report generated!"
END FUNCTION
```
