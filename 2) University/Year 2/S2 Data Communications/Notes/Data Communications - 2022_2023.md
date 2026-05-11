## Question 1
**In relation to Transmission Impairments on an electrical cable**

### iv)
**With reference to Shannon’s Noisy Channel Capacity formula, explain the effect on channel capacity as noise increases towards infinity i.e. an extremely noisy channel. In your answer, state the formula and explain the associated parameters. (10 marks)**
Shannon's equation states that $C=B\log_{2}(1+SNR)$. 
- `C` = Channel Capacity
- `B` = Bandwidth
- `SNR` = Signal to noise ratio

As the noise increases towards infinity, the SNR approaches zero. This means that the channel capacity will drop down to zero too, meaning no data transmission is possible.

## Question 2
**Consider the operation of the Go-Back-N and Stop-and-Wait Error Control techniques. In each of the following questions structure your answer to highlight each technique separately, explaining the operation of the transmitter and receiver stations and, identifying the purpose of any numeric values included in messages leaving each station.**

### i)
**For each technique, separately explain the operation of the transmitter and receiver stations in normal operation i.e. when no error conditions are present. (5 marks)**
In stop-and-wait, the transmitter sends a single frame and then stops (FRAME 0). The receiver processes the frame, and an acknowledgement containing the number of the next expected frame is sent (ACK 1). Once the transmitter receives the ACK, it then proceeds to send the next frame.

In go-back-n, the transmitter can send multiple frames at once. After the receiver receives all frames, it sends an ACK of the next frame that is required.

### ii)
**For each technique, separately explain the operation of the transmitter and receiver stations when a frame is lost. In your answer identify how the lost frame is detected. (10 marks)**
In stop-and-wait, lets say frame 1 is sent by the transmitter, but is lost on the way. The receiver does not get the frame, it simply does nothing. After an interval of time is passed, and the transmitter does not get an ACK, the transmitter automatically retransmits frame 1. This is repeated until the receiver gets the frame successfully, and responds with an ACK of the next frame to be received.

In go-back-n, lets say the transmitter sends frame 0, 1, and 2. However, frame 1 is lost. The receiver gets all frames sequentially, apart from frame 1. The receiver detects that it is missing a frame, and sends a selective reject "SREJ(1)". The transmitter gets this reject message, and then retransmits all frames from frame 1 onward. This includes frame 2, even though it was transmitted successfully.

### iii)
**For each technique, separately explain the operation of the transmitter and receiver stations when the receiver station is implementing flow control. In your answer identify any command messages that may be issued and how transmission is resumed. (10 marks)**
In stop-and-wait, if the receivers buffer is full, it implements flow control by simply waiting before replying with an ACK. The transmitter then waits, until the receiver finally sends the ACK

In go-back-n, flow control is implemented by the receiver sending a receive not ready "RNR" message, with the next expected frame. For example, RNR(3). This causes the transmitter to wait until the receiver is ready. One the receiver is ready, it sends a receive ready RR(3) with the same frame number of the frame that it needs. 

## Question 3
**In relation to contention on a Local Area Network (LAN):**

### i)
**Explain how the use of CSMA gives rise to contention. In your answer explain the operation of CSMA and explain the role of backoff timers. (5 marks)**
CSMA transmits data using one port at a time. This gives rise to contention, as each station in the LAN needs to compete to get time to transmit data. If two stations want to transmit data at the same time, a collision occurs. A timer called the backoff timer is then used, telling each station to wait a certain amount of time before transmitting data again.

### ii)
**Illustrate and explain the effects of contention on the performance/throughput of the LAN. Diagram: (3 marks) Explanation: (5 marks)**
In CSMA, the more stations you add to the shared lan, the higher the contention increases. This is because the more stations you have competing to transmit data, the more collisions will occur, due to stations potentially transmitting data at the same time. This causes the backoff timer to continuously make stations wait, until they can transmit. This affects performance and throughput, as the data rate goes down, due to spending the majority of the time waiting to resolve collisions.

### iii)
**Refer to Figure 1 – A bridged and non-bridged network. Explain how the use of a bridge device reduces the impact of contention on the perceived performance of the LAN (assumed to operate at 10Mbps). In your answer explain the concept of parallelism and give a rough estimate of the performance/throughput of the LAN from the perspective of any individual station. (12 marks)**
![[Pasted image 20260511214817.png]]
In the non-bridged network, only one station an transmit data at a time. If more stations transmit data at the same time, collisions will occur, and they will need to wait. This leads to high contention, as each station is fighting to transmit data.
In the bridges network, contention is essentially halved. This is because instead of one single connection, it is split into 2 smaller LAN's. Both LAN's are independent from each other, meaning one station from either LAN can transmit at the same time. This leads to lower contention.

## Question 4
**Given the internetwork in Figure 2 (An Internetwork). Router 1 has been allocated addresses 192.168.10.1 and 209.165.200.225 and Router 2 has been allocated addresses 10.1.1.1 and 209.165.200.226.**
![[Pasted image 20260511215206.png]]
### i)
**Explain the concept of next hop routing. In your answer describe, at a high level, the operation of routing from the point where a datagram packet arrives at a router and identify the outcome from the routing process. Restrict your discussions to IP addresses only. (5 marks)**

## Question 5
**Given the IP address block: 192.168.1.0/24. Using VLSM, identify appropriate sub-net addresses to meet the following network requirements: Net A = 28 Hosts, Net B = 52 Hosts, Net C = 15 Hosts, Net D = 5 Hosts. Copy the following table into your answer book and insert the IP addresses in Dotted Decimal Notation and Masks in CIDR notation. Also, show the main steps involved in your calculations.**
![[Pasted image 20260511215259.png]]


| N/W | Mask | N/W Address   | Staring Host  | End Host      | Broadcast Address |
| --- | ---- | ------------- | ------------- | ------------- | ----------------- |
| B:  | /26  | 192.168.1.0   | 192.168.1.1   | 192.168.1.62  | 192.168.1.63      |
| A:  | /27  | 192.168.1.64  | 192.168.1.65  | 192.168.1.94  | 192.168.1.95      |
| C:  | /27  | 192.168.1.96  | 192.168.1.97  | 192.168.1.126 | 192.168.1.127     |
| D:  | /29  | 192.168.1.128 | 192.168.1.129 | 192.168.1.134 | 192.168.1.135     |

A needs 28+2 = 30 addresses 
B needs 52+2 = 54 addresses
C needs 15+2 = 17 addresses
D needs 5+2 = 7 addresses
*+2 due to one network identifier, and one broadcast address*

Rounding each address to the nearest power of 2:
A needs 2^5=32 -> mask of /27
B needs 2^6=64 -> mask of /26
C needs 2^5=32 -> mask of /27
D needs 2^3=8 -> mask of /29

Now, we sort the networks by size
B, A, C, D

Starting host is second N/W address
Broadcast address is the last address in the net
End host is the second last address in the net