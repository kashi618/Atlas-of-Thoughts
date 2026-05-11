## Question 1
**A transmission system comprising a coaxial cable operates with a maximum bandwidth of 50MHz. The following questions relate to the transmission of analogue or digital signals over this system**

### A)
**An analogue signal comprising frequency components at: 5MHz, 15MHz, 25MHz, 35MHz, and 45MHz. Calculate the bandwidth of this signal showing your calculations and, explain if all components will pass through the system without distortion. (5 marks)**
The bandwidth is 40Mhz, as this is the difference between the highest and lowest frequency component `45Mhz - 5Mhz = 40 Mhz`
Each component will pass through the system without distortion. This is because the highest component is 45Mhz, which is under the 50Mhz maximum bandwidth.

### B)
**Explain the characteristics of a digital signal in terms of harmonics and state its Absolute Bandwidth. In your answer, explain the impact on the signal’s harmonics, and the effect this has on the shape of the pulses as the signal is passed through the coaxial cable. (10 marks)**
- For a digital signal, it has an infinite number of harmonics.
- Absolute bandwidth refers to the total width of the spectrum of the signal, which in this case, is also infinite.
- For the signal's harmonics, it is a finite number. This means that you loose harmonics beyond 50Mhz, which decreases the clarity of the perceived pulse. This means that the pulse will lose their sharp edges, becoming more round and unreadable.

### C)
**The following table, Table 1, shows different data rates associated with a digital signal passing through the coaxial cable and the corresponding number of surviving harmonics. Analyze the table and explain the effects on the received signal at various data rates. In your answer, explain if it is realistic to attempt to transmit data at a rate of 10 Mbps. (10 marks)**

| Data Rate (Mbps) | Number of Surviving Harmonics |
| ---------------- | ----------------------------- |
| 10               | 3                             |
| 5                | 9                             |
| 2.5              | 19                            |
| 1                | 49                            |

Data rate is inversely proportional to the number of surviving harmonics, which means that the higher the data rate, the worse the digital signals looks. For example, transmitting a signal at 10Mbps results in only 3 surviving harmonics. Transmitting data at this rate is unrealistic, as 3 surviving harmonics heavily reduces the intelligibility of the signal.

## Question 2
**Consider two computers (Hosts A and B) communicating using the HDLC protocol and employing modulo 8 numbering. The network is experiencing occasional frame loss.**

### A)
**Describe the key differences between the Go-Back-N ARQ and Selective Reject ARQ techniques with respect to the retransmission of lost frames and, how out-of- sequence frames are handled. In your answer explain which technique is more efficient in terms of network traffic and explain which technique requires less processing load at the receiver station. (12 marks)**
- Go-Back-N does not retain frames after the lost frames. This means that it needs to retransmit starting from the frame it lost. Meanwhile, selective reject stores frames that are transmitted after the lost frames, allowing quicker recovery. The same thing applies to out-of-sequence frames
- Selective reject is more efficient, as you only need to retransmit frames that are either lost or out of sequence.
- Go-Back N requires less processing load, as it does not need to store or read any frames. It only needs to retransmit frames starting at the lost frame.

### B)
**Host B receives frames: I(6, 1), I(7, 1), I(1, 1), I(2, 1). Assume Go-Back-N is in use. Describe how Hosts A and B would respond to this scenario. In your answer, identify all data frames and control messages exchanged and include frame numbers. (6 marks)**
- I(0,1) is missing, as it should be `I(6,1), I(7,1), I(0,1), I(1,1), I(2,1)`. This means a reject frame is sent REJ(0) for frame 0
- When host A received the REJ(0), it will retransmit frames starting at `I(0,1), I(1,1), I(2,1)` onwards

### C)
**Assuming the scenario outlined in question (b) above is fully resolved, identify an appropriate positive ACK message that would allow for the continuation of frame transmission from Host A. In your answer explain how Hosts A and B would respond if this ACK did not arrive at Host A resulting in a timer expiring - identify all control messages exchanged and include frame numbers. (7 marks)**

## Question 3
**In relation to Ethernet Bus and Star LANs:**

### A)
**Explain the term CSMA/CD and separately explain the purpose of CSMA and CD. In your answer, list the basic steps undertaken by stations employing CSMA/CD before transmission of a frame, during transmission and after a collision occurs on an Ethernet Bus LAN. (7 marks)**
CSMA (Carrier Sense Multiple Access) is a MAC technique, used for transmitting data. It waits for a station to become idle, before atempting to transmit data.
CD (Colision Detection). This allows a station to monitor the medium when sending data. If a collision occurs, it stops all transmission of data.

Before:
The station listens to the bus. If it is idle, it attempts to transmit data. if it is busy, it waits until it is idle.

During:
During the transmission of data, CD continuously monitors for collisions

During Collision:
If a collision occurs, a "jamming signal" is sent to all stations, to immediately stop sending data. Then, after a period of time (backoff time) data transmission is attempted again.


### B)
**Explain how the use of store-and-forward within a Switching Hub eliminates the need for the use of CSMA/CD. (8 marks)**
Using store-and-forward techniques, collisions can effectively never occur. This is because, if station A and station B wants to both send data to station C, the switch first stores the frames from station A and station B. Then, it looks at the frame, and forwards them one after another to station C. There is no point during the data transmission, where collisions can occur.

### C)
**Explain how a Switching Hub can facilitate simultaneous communications between two separate pairs of communicating hosts: A & B and C & D and, explain how this impacts on throughput from the perspective of each host when compared to hosts connected to a Shared-medium Hub device. In your answer, explain the relationship between contention and throughput. (10 marks)**
A switching hub can facilitate simultaneous communications between multiple pairs of host, by using an internal switching fabric. This allows the bridge to connect allows the ability to create multiple dedicated connections between connected stations at the same time.

From the perspective of the hosts, a switching hub features a dedicated bandwidth for each station. Meanwhile, a shared medium hub shares its total bandwidth with each station.

This means that a switching bridge has high throughput and low contention, giving a high data transmission rate. Whilst a shared medium hub has low throughput and high contention, leading to slower performance due to collisions. This forces hosts to wait until a collision is cleared up.


## Question 4
**Refer to the Internetwork shown in Figure 1 and the partially completed Address Allocation Table shown in Table 2. The address block: 192.168.1.0/24 has been allocated to the internetwork. 
The table identifies: the address mask for each subnet in CIDR notation and, a single valid host address from within each subnet’s address block.**
![[Data Communications 2024_2025 Figure 1.png|500]]

### A)
**Copy the table into your answer book and using the address mask and host address shown, derive the missing elements for each subnet and complete the table. Show your calculations. In your answer, identify the following for each subnet: Network address, First and Last Host addresses and Broadcast address – all addresses should be in Dotted Decimal Notation. (Table: 10 marks, Calculations: 10 marks)**

| Network Identifier | Single Host Address | Mask | Network Address | 1st Host Address | Last Host Address | Broadcast Address |
| ------------------ | ------------------- | ---- | --------------- | ---------------- | ----------------- | ----------------- |
| A:                 | 192.168.1.50        | /26  | 192.168.1.0     | 192.168.1.1      | 192.168.1.62      | 192.168.1.63      |
| B:                 | 192.168.1.80        | /27  | 192.168.1.64    | 192.168.1.65     | 192.168.1.94      | 192.168.1.95      |
| C:                 | 192.168.1.99        | /28  | 192.168.1.96    | 192.168.1.97     | 192.168.1.110     | 192.168.1.111     |
| D:                 | 192.168.1.114       | /28  | 192.168.1.112   | 192.168.1.113    | 192.168.1.126     | 192.168.1.127     |
| R1-R2              | 192.168.1.130       | /30  | 192.168.1.128   | 192.168.1.129    | 192.168.1.130     | 192.168.1.131     |
| R1-R3              | 192.168.1.133       | /30  | 192.168.1.132   | 192.168.1.133    | 192.168.1.134     | 192.168.1.135     |
| R1-R4              | 192.168.1.138       | /30  | 192.168.1.136   | 192.168.1.137    | 192.168.1.138     | 192.168.1.139     |
| R2-R3              | 192.168.1.141       | /30  | 192.168.1.140   | 192.168.1.141    | 192.168.1.142     | 192.168.1.143     |
| R2-R4              | 192.168.1.146       | /30  | 192.168.1.144   | 192.168.1.145    | 192.168.1.146     | 192.168.1.147     |
| R3-R4              | 192.168.1.149       | /30  | 192.168.1.148   | 192.168.1.149    | 192.168.1.150     | 192.168.1.151     |


### B) 
**Identify the total number of addresses allocated to each subnet and state how many addresses from the original block remain unallocated, if any. Show your calculations. (5 marks)**
A: 64
B: 32
C: 16
D: 16
Routers: 24
Total Allocated: 152 address
Total Unallocated: 104
## Question 5
**Refer to Figure 2 which shows an internetwork with three interconnected sub-networks and a routing table available at each router. Consider the transmission of a frame with an encapsulated packet leaving Host X connected to Net A and destined for Host Y connected to Net B.**
![[Data Communications 2024_2025 Figure 2.png]]


### A)
**What would be the impact on communication if a host had an IP address but did not have a MAC address? In your answer, identify the type of network each address relates to and, identify which the layer of the ISO OSI 7-layer model each address relates to. (6 marks)**
If a host did not have a MAC address, data communication would fail. IP addresses operates at layer 3, and is used for logical networking. MAC addresses operates at layer 2, and is used for physical networking.

### B)
**Identify where any source/destination IP or MAC addresses contained in the packet/frame are changed, if at all.  (5 marks)**
In this internetwork, the IP address will remain unchanged during the entire journey. However, the source and destination MAC addresses will be changed at every single hop, (at router 1 and router 2)

### C)
**Explain Next Hop Routing and identify what addresses are used in the routing process and what addresses are returned in any queries. (6 marks)**
Next hop routing means that a router doesn't need to know the destination of a packet. It only needs to know the next router it needs to send the packet to. The router first checks the destination IP address of an incoming packet, then uses the routing table to calculate and find the IP address of the next router it should hop to.

### D)
**Explain the role of ARP in Next Hop Routing. In your answer identify what is contained in an ARP table and explain the high-level process by which entries are added. (8 marks)**
The ARP (Address Resolution Protocol) acts as a bridge between layers 2 and 3 in Next Hop Routing. Once the router knows the IP address of the next hop, it must then find the corresponding MAC address of that interface to transmit the data. The ARP table contains IP addresses to their corresponding MAC addresses. If an entry doesn't exist, the device sends a broadcast ARP request, in which the device that owns the IP address responds with its MAC address.

