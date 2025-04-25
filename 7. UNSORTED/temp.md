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
		// END if
		
        // Adds current product to van 2 if weight limit not exceeded
        ELSE IF (totalWeight[1] + line[i].weight ≤ WEIGHTLIMIT) THEN
            van1[vanIndex[1]] = line[i]
            totalWeight[1] += line[i].weight
			
            vanIndex[1]++
            vanCount[1]++
            i++
        // END else if
		
        // Adds current product to van 3 if weight limit not exceeded
        ELSE IF (totalWeight[2] + line[i].weight ≤ WEIGHTLIMIT) THEN
            van1[vanIndex[2]] = line[i]
            totalWeight[2] += line[i].weight
			
            vanIndex[2]++
            vanCount[2]++
            i++
        // END else if
		
		// Adds current product to van 4 if weight limit not exceeded
        ELSE IF (totalWeight[3] + line[i].weight ≤ WEIGHTLIMIT) THEN
            van1[vanIndex[3]] = line[i]
            totalWeight[3] += line[i].weight
			
            vanIndex[3]++
            vanCount[3]++
            i++
		// END else if
		
		// Adds current product to van 5 if weight limit not exceeded
        ELSE IF (totalWeight[4] + line[i].weight ≤ WEIGHTLIMIT) THEN
            van1[vanIndex[4]] = line[i]
            totalWeight[4] += line[i].weight
			
            vanIndex[4]++
            vanCount[4]++
            i++
        // END else if
		
        // Alternative case for when no van can store product without exceeding weight limit
        ELSE 
            PRINT "Weight limit [WEIGHTLIMIT] is too small. Increase limit or add more vans."
            RETURN  // Terminate function early
        END if
    END for
    PRINT "Van report generated!"
END FUNCTION
```
