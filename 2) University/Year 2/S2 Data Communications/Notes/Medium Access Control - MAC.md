---
tags:
  - DataCommunications
aliases:
---
## Medium Access Control
Gaining access to a LAN is a fundamental requirement for data transmission between stations. This is referred to as the Medium Access Control (MAC)

## MAC Strategies
There are two generalised strategies with controlling access

### Centrally
Stations must obtain permission before accessing the transmission medium

**Advantages:**
- Access logic required at each station is simple
- No co-ordination required between stations

**Disadvantages**
- Single point of failure. If the controlling device develops a fault, all stations are affected
- Potential bottleneck. All "requests for access" must be sanctioned by the central device

### Distributed
Access is controlled by stations acting togethor


## MAC Techniques
There are three generalised access control techniques

### Reservation
- Based on centralised strategy
- Medium divide into time slots, reserved by transmitting stations
- Suited for stream traffic, long and continuous transmissions on an irregular basis


### Round Robin
- Based on distributed strategy
- Transmitting stations take turns to transmit data
- Efficient only if stations have a lot of data to transmit, on a regular basis


### Contention
- Based on distributed strategy
- Transmitting stations ocntent for access when needed
- Technique distributed by nature
- Works on a "first come first served" basis, and is easy to implement
- Very suited to burst traffic (short sporadic transmissions)

**Example**
Ethernet is a predominant Bus/Star LAN technology, that employs the contention MAC technique called the **Carrier Sense Multiple Access** with **Collision Detection**. (CSMA/CD)


# See Also
[[$ Data Communications]]