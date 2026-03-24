---
tags:
  - DataCommunications
aliases:
---
## Carrier Sense Multiple Access
It is a contention MAC technique.
- Most commonly used MAC technique on bus and star LANs
- Defined under the IEEE802.3 standard
![[CSMA.png]]

## How it works
- To transmit a frame, the transmission first system listens and waits for activity on the medium, before attempting to transmit.
	- This is listening is called **carrier sensing**.
- If the medium is clear of frames, the station begins transmission
- If the medium is in use, the station waits a random period of time before attempting to transmit the frame.
	- This waiting is called the **random back-off period/backoff timer**

- In normal operations, these transmission stations behave like HDLC stations. They send frames, and occasionally expect ACKs.
- However, there is a problem with this access technique. If two or more stations attempt to transmit at approximately the same time, it will lead to a collision. 
	- This collision is a form of error
	- It also wastes time, as the system now needs to correct it
![[CSMA Collision.png]] 

## CSMA/CD
CSMA on its own, results in poor network performance due to the collision error. To counter act the innefficiencies of CSMA, it was extended to include collision detection. (CSMA/CD)

Just like before, the Tx performs carrier sensing, before attempting to transmit data
During data transmission, the station **continues** to listen to the medium, to detect any collisions
- If collision detected, the station stops transmitting the frame
- Then, it transmits a brief jamming signal to inform other stations of the collition
- After, it waits a random time (delta) before attempting to retransmit the frame
- Additional collisions are dealt with using binary exponential backoff
- Requires Tx to listen for collisions whilst transmitting frames. This means that we need long frames to detect all collisions. If the frame is not long enough, the Tx may finish transmitting the frame, before it enters a collision.

# See Also
[[$ Data Communications]]