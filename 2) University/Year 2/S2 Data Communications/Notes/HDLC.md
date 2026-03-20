---
tags:
  - DataCommunications
aliases:
---
## High-Level Data Link Control
It is a high level protocol used to define:
- The role of each station attached to a link
	- Master-slave or peer-to-peer?
- The mode of data transfer
- The frame structure
- The exchange of data during each phase of communication

## HDLC Stations
HDLC defines three types of stations
- Primary station
- Secondary station
- Combined station

### Primary Station
Controls the operation of the data link, using commands

### Secondary Station
Operates under the control of a primary station. It responds to the commands given by the primary station

### Combined Station
Combines the features of both primary and secondary stations. It can be used to send and receive commands and responses.


## Characteristics
- Uses synchronous transmission. Transmissions are in the form of frames
- A frame is a block of data, delineated by a flag/sequence such as `01111110` six 1's, padded by a 0
- Data and control frames have the same frame format, with minor differences in relation to the control fields

## Frame Format
![[HLDC Frame Format.png]]
There are three types of frames in HLDC.
- **Information (I) frames**
	- Carries data, but can also carry piggybacked sequence numbers for flow and error control
- **Supervisory (S) frames**
	- Carries flow and error control when data is NOT piggybacked
- **Unnumbered (U) frames**
	- Provides link control functions, such as set-up and disconnect

## HDLC Responses
![[Pasted image 20260319215330.png]]

### 
| REJ Type | ARQ Technique    | Action                                                                  |
| -------- | ---------------- | ----------------------------------------------------------------------- |
| REJ      | Go Back N        | Requests retransmission of damaged frame, and all subsequent frames     |
| SREJ     | Selective Reject | Requests retransmission of only only the damanged frame/frame specified |


# See Also
[[$ Data Communications]]