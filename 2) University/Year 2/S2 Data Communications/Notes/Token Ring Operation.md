---
tags:
  - DataCommunications
aliases:
---
## Token Ring
![[Another Ring LAN.png]]
- Token rings use a same frame called a token
- The token circulates around the ring indefinitely
- A station wishing to transmit, must seize the token and remove it from the LAN
- To read and remove a token, it first
  - Changes a single bit from 0 (free) to 1 (busy)
  - This effectively changes it into the start of a data frame
  - This can now be read, and removed

**Data moving around token ring**
![[Pasted image 20260313101415.png|300]]

**Token ring format**
![[Pasted image 20260313101707.png|500]]

### Advantages
- Access is efficient and fair under heavy traffic loads

### Disadvantages
- Access can be inefficient under light traffic loads
	- A station must wit for a token, before transmitting
- There is a requirement for token maintenance
	- Tokens can be lost or duplicated
	- Only one station is assigned responsibility for token maintenance

# See Also
[[$ Data Communications]]