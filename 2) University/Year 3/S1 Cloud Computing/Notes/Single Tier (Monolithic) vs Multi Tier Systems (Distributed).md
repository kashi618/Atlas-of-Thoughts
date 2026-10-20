---
tags:
  - CloudComputing
aliases:
---
## Single Tier - Monolithic Systems
In a single tier system, all system components are bundled into a single software package.

**Examples**
- Mainframes

**Pros**
- Zero network overhead
- Shared resource pool

**Cons**
- Single point of failure
- Hard vertical scaling

## Multi Tier - Distributed Systems
A collection of autonomous computing nodes connected over a network, whilst appearing to the end user as a single coherent system.

### Characteristics
Each tier has only one job, such as:
- Presentation layer
- Business rules layer
- Data access layer
- Database

**Examples**
- The internet
	It is a heterogeneous network of computers and applcations, implemented using the internet protocol stack
- Intranets
	Locally administered networks such as the TUD campus network
- Mobile phones
	Connects to various devices, using wifi, bluetooth, gps, etc

**Pros**
- Independent scalability
- Separation of concerns

**Cons**
- Latency between tiers caused by network overhead

# See Also
[[$ CC - Cloud Computing]]
