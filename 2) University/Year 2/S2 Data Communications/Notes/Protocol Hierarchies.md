---
tags:
  - DataCommunications
aliases:
---
## Protocol Hierarchies
Source -> Transmitter -> Transmission System -> Receiver -> Destination
This simple diagram helps, when discussing data link control, lan technologies, etc.
However, it falls apart when multiple NICs (because one NIC per LAN Technology) comes

To fix this, we can instead use a layered protocol view
- Each layer provides one component
- These layers of software can exist on separate hardware components
- Or, multiple layers can also exist on a single hardware platform
  
![[ISO OSI Reference Model.png]]
ISO OSI Reference Model
(International Standardization Organization)(Open Systems Interconnection)
1. Physical Layer
2. Data link
3. Network
4. Transport
5. Session
6. Presentation
7. Application
   
### Physical Layer
This layer concerns with the actual transmitting of the raw bits.
- Voltage levels used
- Frequencies used
- Bit duration
- Timing
- Mechanical and electrical design of plugs and sockets

### Data link
This layer is concerned with successful transmission of data across a data link. If anything happens during the physical transmission of bits, this layer aims to fix it.
- Transmission/reception of data frames
- Creation of localised unique addressing
- Creation of unique framing structure (frame structure)
- Flow control
- Error control and error detection
- ACKs and REJs
- USB standards
- IEEE 802
  
### Network
This layer is concerned with the successful delivery of data, between hosts in network infrastructure
- Controls operation of subnets
- Routing packets from SRC to DEST
  

# See Also
[[$ Data Communications]]