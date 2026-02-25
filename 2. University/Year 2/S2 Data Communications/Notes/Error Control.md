---
tags:
  - DataCommunications
aliases:
---
## Error Control
The detection and recovery from errors, is known as error control

There are two types of errors that can occur
1. Lost a frame/lost ACK. Either a data frame or ACK is lost in transit
2. Damaged frame. Frame arrives, but fails the error detection check

It does the following:
- **Handles error detection**: The actual check for erros
- **Positive ACK**: The receiver sends a positive ACK, to error-free frames received. Data transmission is a success
- **Retransmission**: In this case, the transmitter may retransmit a frame that has not been acknowledged after a time out period.
- **Negative acknowledgement**: The receiver can sen a negative ACK for damage/out of sequence frames that arrive. The transmitter then simple retransmits these frames

### Automatic Repeat Request (ARQ)
These are the techniques to recover data that has failed error detection

#### Stop and Wait ARQ
**PDF 11**

#### Go back and N ARQ


# See Also
[[$ Data Communications]]