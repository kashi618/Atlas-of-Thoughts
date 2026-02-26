---
tags:
  - DataCommunications
aliases:
---
## Flow Control
In data transmission, we need a mechanism to regulate data sent from the transmitter to the receiver, to prevent it from being overwhelmed.
Its primary goal is to make sure a transmitter does not transmit data faster than a receiver can control it.

There are two main types of flow control techniques

### Stop-and-Wait
- When the sending station transmits a frame, it must get an acknowledgement from the receiving station, before transmitting the next frame. This is called an **ACK**
- The receiving station can then control the flow of data, by withholding ACKs
- However, this technique only allows for the transmission of a single frame, in one direction. i.e. half duplex communications. Due to this, it leads to poor link utilization
![[Stop and Wait Flow Control Link Utilization.png]]

### Sliding Windows
- In this technique, both stations use an extended buffer size to hold multiple frames at once
- Both the sending and receiving stations maintain a list of frames send/received
- This allows for more efficient link utilization, as the transmission link is treated as a pipeline, allowing it to me filled with as many frames in transit simultaneously. i.e. full duplex communications

# See Also
[[$ Data Communications]]