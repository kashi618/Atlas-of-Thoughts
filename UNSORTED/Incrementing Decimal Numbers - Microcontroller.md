---
tags:
  - ComputerScience
---
## Incrementing Decimals
```c
void printDecimal(uint32_t Value)
{
	// Creates a 11 bit long string
	char DecimalString[11];
	
	// Sets the last index, as the ending point
	// (0 in ascii is the NULL character)
	DecimalString[10] = 0;
	
	// Start at the 9th index
	int index = 9;
	
	// Count down from the index, going right to left
	while (index >= 0)
	{
		DecimalString[index] = (Value % 10) + '0';
		Value = Value / 10;
		index--;
	}
	eputs(DecimalString);
}
```

We start at the 9th index, because we work backwards
```c
   0   1   2   3   4   5   6   7   8  9     // This is the index number
[ 48  48  48  48  48  48  52  55  50  0 ]   // This is the string we send

// Converting this string to its actual values, we get
   "000000472"

// This is because the values are in ascii
Ascii  
value    output
48    =    0
52    =    4
55    =    7
50    =    2
```

### How to Remove Leading Zero's
```c
void printDecimal(uint32_t Value)
{
	// Creates a 11 bit long string
	char DecimalString[11];
	
	// Sets the last index, as the ending point
	// (0 in ascii is the NULL character)
	DecimalString[10] = 0;
	
	// Start at the 9th index
	int index = 9;
	
	// Count down from the index, going right to left
	while (index >= 0)
	{
		DecimalString[index] = (Value % 10) + '0';
		Value = Value / 10;
		index--;
	}
	
	// Find out where the first non-zero character  is
	int leadingZeroIndex = 0;
	int leaveFlag=0;
	while (leaveFlag == 0) {
		if (DecimalString[leadingZeroIndex] == 40 ) {
			// Do nothing
		}
		else {
			// Leave while loop by updating flag
			leaveFlag =1;
		}
		leadingZeroIndex++
	}
	eputs(DecimalString[leadingZeroIndex - 1]);
}
```



# See Also