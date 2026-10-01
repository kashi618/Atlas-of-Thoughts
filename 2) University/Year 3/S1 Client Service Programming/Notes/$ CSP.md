

## MOC

--- Protocol Date Unit
Every protocol consists of a header and a payload
**Header**
Addresses, counters, flags, checksums


**Payload**
Actual data to be sent

--- Network and Transport Layer
Network Header, IP Header, TCP header, HTTP Request
{Insert 43}

--- Sender Router Receive
{Insert 23}

--- Port Number Range
0-1023
1024-49151
49151-65535


--- Socket Pair
local IP:local port | remote IP:remote port
123.123.123.123:12345 | 123.123.123.123:12345

--- Clients and Servers


--- Service vs protocol
## Service
What the layer promises the layer above. The contract. The application sees it through the socket

## Protocol
How the layer keeps the promise: segments, header fields, and rules for responding to them

--- TCP Promises
{Week 3 Lecture Slide 12}

--- HTTP HTTP2 HTTP3/QUIC



--- Berkeley Sockets API
- socket()
- bind()
- listen()
- accept()

- connect()
- send()
- recv()
- close()

{Week 3 Slide 30}

*Iterative Server Problem







