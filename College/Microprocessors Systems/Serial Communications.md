---
tags:
  - ComputerScience
---
It is a process of sending one bit of data at a time, sequentially, between a transmitter and a receiver
## Types of Receiver/Transmitters
### UART
Universal Asynchronous Receiver

### Usart

## Sending Information Through Microcontroller
```c
void printDecimal(uint32_t Value)
{
	// Creates a 11 bit long string
	char DecimalString[11];

	DecimalString[10] = 0;  // terminate the string
	// 
	int index = 9;

	while (index >= 0)
	{
		DecimalString[index] = (Value % 10) + '0';
		Value = Value / 10;
		index--;
	}
	eputs(DecimalString);
}
```

	
# See Also