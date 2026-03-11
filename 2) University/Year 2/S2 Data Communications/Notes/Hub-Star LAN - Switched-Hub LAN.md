---
tags:
  - DataCommunications
aliases:
---
## Hub-Star LAN
- Transmission from any station is repeated to all stations
- Only one station can transmit at any one time
- Uses the same behaviour as Bus Lan
	- Therefore it is known as the star-shaped bus
- It has an advantage that it can use existing building wiring
![[Shared Bus and Shared Medium Bus.png]]

## Switched-Hub LAN
- Each host connects to a switch, at a switch port
- Each host uses **separate transmit and receive links** (Tx and Rx)
- The switch knows which host is connected to which port, and employs **store and forward technology**
- Due to using separate Tx and Rx links, it can use **full duplex communications** mode
	- Host can send and receive data at the same time
	- Compared to bus/hub-star LANs, which use half duplex
- Each host connected to a dedicated port, can allow multiple **simultaneous communications** to pass through the switch. Hosts A & B can exchange frames at the same time as hosts C & D without collisions. It is **contention free**.
![[Switched-Hub LAN.png]]

### Store and Forward Technology
- Switch can transfer frames to the correct port. Frames are stored on an incoming port, and the switch decided which outgoing port the frame is to be moved to
- Frames originating from different hosts can be sent to the same destination host without collision. Frames are simply stored sequentially in the destination host's outgoing port, and sent when the link is clear


# See Also
[[$ Data Communications]]