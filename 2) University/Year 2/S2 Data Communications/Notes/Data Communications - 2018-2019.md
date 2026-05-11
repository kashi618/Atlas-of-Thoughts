## Question 1



## Question 3
**In relation to LANs:**
### i)
**Discuess the role of a Repeater device in extending the reach of a Bus LAN. In your answer separately explain how the device works in normal operation and when a collision occurs (5 marks)**
A repeater can be used to extend the reach of a Bus LAN, as its primary function is to copy what signal is sent into it, and then retransmitting what it receives. In the case of a collision, the repeater does not fix it. Instead, it transmits whatever is passed into it, even if a collision occurs.

### ii)
**Discuss the role of a Bridge device in extending the reach of a Bus LAN. In your answer separately explain how the device works when there are no entries in the routing table and when the routing table is complete (5 marks)**
A bridge works by taking in the frames sent into it, and then looking at its source and destination address. Using these addresses, it can then calculate where to send each frame.
If there are nothing in the routing table, the bridge goes through a process called address learning. If a frame from station A is sent to the bridge, the bridge looks at the source address, and then notes the address of station A into the routing table. Then, because it has no information on where the source address is, it "floods" the frame to every port that is connected to the bridge, apart from the port that sent the frame.
In the case of a routing table that is complete, the bridge simple looks at the destination address of a frame that is sent, it then queries its routing table, and then send the frame to its destination station.

### iii)
**Explain how the routing table on a Bridge device is automatically populated (5 marks)**
A routing table is automatically populated through a process called address learning. As frames are passed into the bridge, the bridge looks at its source and destination address. If the frame comes from a station whose address is not in the routing table, it simple looks at the source address, and then makes a note of it in the routing table. This process is repeated for every new station that sends frames to the bridge, populating the routing table slowly.

## Question 4
**In relation to collisions on a Wired and Wireless LANs:**
### i)
**Frame size haas a critical role to play in minimizing the effects of collisions on a Wired LAN. Explain why this is the case. (5 marks)**
Frame size is critical in a wired LAN, due to propagation delay. Frames that are send in a wired LAN are not instantaneous. Instead, it takes time. The bigger the size of the frame, the most time it takes for the frame to transmit. If the frame is too small, the station will finish transmitting the data, BEFORE receiving a collision jam, which means that the collision is assumed to be received successfully.

### ii)

### iii)
**Referring to the "Hidden Station Problem", explain why the technique used to detect collisions on a Wired LAN cannot be used on a Wireless LAN. In your answer identify the technique used on a Wireless LAN. (5 marks)**
In a wired LAN, CSMA/CD (collision detection) is used. In a wireless LAN, CSMA/CA (collision avoidance) is used.

In CSMA/CD, a transmitter sends a frame to a receiver. It then waits until the receiver responds with an ACK, signalling that the frame was successfully sent. However, this approach requires the transmitter to be actively listening to the receiver, which would cause an issue in wireless LANs. This is because, in wireless LANs, if station A wants to send a frame to station B, where the link between them is station B, CSMA/CD would not be able to listen to it. This is because station C is out of range of station A, meaning CSMA/CD would not work.
To fix this, CSMA/CA is used. Before a transmitter sends data, it sends a RTS "request to send" frame". This makes the access point to reply with a CTS "clear to send" frame, which all other stations hear, and then stays quiet until the first station finishes transmitting.

## Question 5
**Refer to Figure 1 (A Sub-netted Network) and Table 2 (Empty Address Table). Given the network address, 192.168.100.0/24:**
![[Pasted image 20260511222157.png]]
![[Pasted image 20260511222201.png]]

### i)
**You are required to sub-net this address space to provide for at least 25 usable addresses for each of the LANs shown. Transcribe the following table (Table 2 - Empty Address Table) into your answer book and complete the entries for each of the sub-networks, A-E inclusive, using dotted-decimal notation. (10 marks)**

| Subnet | Network Address | First Host Address | Last Host Address | Broadcast Address | Mask |
| ------ | --------------- | ------------------ | ----------------- | ----------------- | ---- |
| A      | 192.168.100.0   | 192.168.100.1      | 192.168.100.30    | 192.168.100.31    | /27  |
| B      | 192.168.100.32  | 192.168.100.33     | 192.168.100.62    | 192.168.100.63    | /27  |
| C      | 192.168.100.64  | 192.168.100.65     | 192.168.100.94    | 192.168.100.95    | /27  |
| D      | 192.168.100.96  | 192.168.100.97     | 192.168.100.126   | 192.168.100.127   | /27  |
| E      | 192.168.100.128 | 192.168.100.129    | 192.168.100.148   | 192.168.100.149   | /27  |
Each net requires 25+2 addresses, due to one for network identifier and one for broadcast.
Rounding these addresses to the nearest power of 2, each network requires 2^5=32 addresses. This gives a mask of /27.
The first host address is found by taking the second address in the subnet
The last host address is found by taking the second last address in the sub net
the broadcast address is found by taking the last address in the sub net

### ii)
**If Net-C is simply a connection between Routers 1 and 2 and will never have any other hosts connected to it, identify a more suitable address mask (in dotted-decimal notation) for this network such that there would be minimal wastage of addresses. (5 marks)**
Net C is only connected to R1 and R2. This means that it only requires 2 addresses. In total, it needs 4 addresses, due to one for network identifier and one for broadcast address. Rounding this to the nearest power of 2, is 2^2. This gives us a mask of /32, which in dotted decimal notation is 255.255.255.252.
## Question 6


