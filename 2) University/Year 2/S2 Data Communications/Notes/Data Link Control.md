---
tags:
  - DataCommunications
aliases:
---
## Data Link Control
For effective communications between devices, we need a way to manage the exchange of data. To do this, we can use a layer of control logic, in each source/destination device.
- This logic is called the **Data Link Control**
- The logic is implemented as a set of well defined rules, known as the **Protocol**.

## Data Link Protocol
There are six requirements for effective data link control
1. **Frame synchronization**: Frames must be recognizable by the receiver
2. **[[Flow Control]]**: The sender must NOT overload the receiver
3. **[[Error Control]]**: Errors should be detectable by the receiver
4. **Addressing**: For multi point configurations, each station must be uniquely identifiable
5. **Control and data on same link**: The receiver must not have to wait for control information to arrive, before it can process a frame
6. **Link management**: Procedures for establishing and relinquishing the link must be adhered to






# See Also
[[$ Data Communications]]