---
tags:
  - CloudComputing
aliases:
---
## Load Balancing
All inbound traffic in the web, passes through a stateless load balancer, distributing client requests among role instances
Web roles are stateless, meaning any client request can be routed to any role instance
Status-check raised every 15~ seconds, checking if the role is ready to receive traffic, or if its busy
![[Pasted image 20261009123849.png]]

# See Also
[[$ CC - Cloud Computing]]
