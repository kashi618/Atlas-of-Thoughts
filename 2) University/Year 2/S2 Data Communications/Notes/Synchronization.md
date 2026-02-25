---
tags:
  - DataCommunications
aliases:
---
## Synchronization
To successfully transmit data between two devices, we need to have synchronization

### Types
There are three possibilities for achieving synchronization
1. Using a separate clock link. However it isn't viable, as it is very expensive
2. Synchronous transmission, using embedded clocking pulses within the data signal
3. Asynchronous transmission, ignoring synchronisation problems by sending very short bursts of data.


### Synchronous Transmission
- Data bits are transmitted in a large block of bits, called a frame.
- The receiver must be able to identify the start and end of the frame. 
	- This is achieved using a special bit pattern called the preamble (start of frame) and postamble (end of frame)
- Additional control information is also required, to provide extra functionality
- The exact format of the frame depends on the [[Data Link Control]] used


### Asynchronous Transmission
- The start and stop bits determine where a character starts and ends
- This function is called framing
- It is simple, cheap, and typically used between keyboards and PC
- However, the overhead is usually 20%. i.e. 2 framing bits plus 8 data bits



# See Also
[[$ Data Communications]]