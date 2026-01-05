---
tags:
  - ComputerScience
---
```c
void printHex(uint32_t Value)
{
	// Create 11 bit long string
	char HexString[11];
	
	// Sets the last bit to the end point
	// (0 in ascii is the NULL Character)
	HexString[10] = 0;
	
	// Count down from the 9th index, right to left
	int index = 9;
	while (index >= 0)
	{
		//
		if (Value % 16 < 10)
		{
			HexString[index] = (Value % 16) + '0';
		}
		else
		{
			HexString[index] = (Value % 16) + 'A' - 10;
		}
		Value = Value / 16;
		index--;
	}
	eputs(HexString);
}
```

# See Also