
## Question 3
**In relation to the use of Bridge devices to extend the reach of Local Area Networks (LANs):**

### A)
**Explain how Address Learning works in relation to the population of a Bridge’s routing table. In your answer, explain how the Bridge deals with incoming frames when the routing table is empty and, when it is complete. Also, identify which address(es), source and/or destination are used to populate the table and which address(es) are used for routing. (10 marks)**
In a bridge's routing table, address learning is a way for the bridge to find the location of ports connected to it. When a frame arrives onto the bridge, it first reads the source MAC address. This source MAC address allows the bridge to learn where that host is, which is noted into the routing table.

If the routing table of a bridge is empty, and a frame arrives, the bridge simple "floods" the packet. This means that it sends the frame to all active ports apart from the port that sent the packet.

In the case of a complete routing table, if a frame arrives, the bridge simply looks at the destination address of the packet. Then, using its routing table, it can deliver the packet to the specific port/destination address.

The source address is used for populating the table. The destination address is used for routing.

### B)
**Refer to Figure 1 – A bridged network. Ignoring the introduction of Bridge 2, copy the routing table for Bridge 1 into your answer book and populate the table identifying the port number for each of the hosts: A-D inclusive. (4 marks)**
![[Pasted image 20260509153008.png]]
Host A and B are connected to port 1 of the bridge.
Host C and D are connected to port 2 of the bridge.

### C)
**Consider the implementation of a second bridge, Bridge 2 as shown in Figure 1. Assuming the routing table on each bridge is initially empty, demonstrate how a routing loop can occur during the Address Learning phase by considering the transmission of a single frame from Host A to Host D. In your answer, show the effects of the routing loop by highlighting how entries in each of the routing tables change. (11 marks)**
When host A sends a frame, both bridges receive it. However, both bridges do not know where host D is, as it has an empty routing table. This means that both bridges flood the frame out of port 2. This action causes a crossover between bridges 1 and 2. They both send the frame to host C and D, but also to eachother. Both bridges now read the incoming frames from eachother, and sees that its source address is from host A. Because of this, they incorrectly assume that host A lives at LAN 2, and they frames are flooded back onto LAN 1 via port 1. This cycle repeats endlessly.

## Question 4
**Refer to Figure 2 - An Internetwork.**
**Given the network address 192.168.0.0/23, you are required to sub-net this address block using VLSM, for the network shown in Figure 2. The following are the host address requirements for the networks shown: Net A = 60 host addresses, Net B = 200 host addresses, Net C = 120 host addresses and, each of the three inter-router connections: R1-R2, R2-R3 and R3-R1 = 2 host addresses.**

**Copy the following table into your answer book and insert the required IP addresses in Dotted Decimal Notation with Masks in CIDR notation. In your answer, show how the address masks were calculated for each sub-net and, show how the Magic Number technique is used to determine the starting address for each sub-net in adherence to the VLSM approach for address allocation.**
![[Pasted image 20260509153058.png|300]]
![[Pasted image 20260509153107.png]]

| N/W.  | Mask | N/W Address   | Starting Address | End Host      | Broadcast Address |
| ----- | ---- | ------------- | ---------------- | ------------- | ----------------- |
| B:    | /24  | 192.168.0.0   | 192.168.0.1      | 192.168.0.254 | 192.168.0.255     |
| C:    | /25  | 192.168.1.0   | 192.168.1.1      | 192.168.1.126 | 192.168.1.127     |
| A:    | /26  | 192.168.1.128 | 192.168.1.129    | 192.168.1.190 | 192.168.1.191     |
| R1-R2 | /30  | 192.168.1.192 | 192.168.1.193    | 192.168.1.194 | 192.168.1.195     |
| R2-R3 | /30  | 192.168.1.196 | 192.168.1.197    | 192.168.1.198 | 192.168.1.199     |
| R3-R1 | /30  | 192.168.1.200 | 192.168.1.201    | 192.168.1.202 | 192.168.1.203     |
The mask was found by taking the amount of addresses needed, and rounding up by a power of 2. For example, Net A requires 60 addresses. Rounding it up by a power of 2 gives 64 addresses. This is the magic number.