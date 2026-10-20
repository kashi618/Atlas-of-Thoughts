---
tags:
  - CloudComputing
aliases:
---
## Transparency in Distributed Systems
The distributed system should appear to users and developers are a single, coherent system.

## Transparency Dimensions
There are 8 dimensions of transparency:
1) Access - How it is accessed
2) Location - Where the system is located
3) Migration - That a system has moved to a difference place
4) Replication - That copies of data exist
5) Concurrency - Simultaneous access to resources
6) Scalability - That the scale of the system changes
7) Performance - That reconfiguration occurred
8) Failure - That a component has failed

## Transparency Level 1
### Access
Hide differences in how local and remote resources are accessed. This alows local and remote ocmponents to be accessed, using identical operations

**Example**
- SQL Queries
- Navigation of the web
- Same file operations for local and remove files
- NFS - network file system

### Location
Hide where a component or information objects is physically located. This enables information objects to be local or remote, without the user needing to know their location

**Example**
- Clients using a service name or endpoint
- Navigation of the web
- Tables in a distributed database

### Migration
Hide the fact that a component or information object has been relocated to a different location. Such as changing servers


## Transparency Level 2
### Replication
Hide the fact that data and information objects are copied to multiple places, and synchronised to each other

### Concurrency
User's are unaware that components request services concurrently. Several processes can use shared information, without interfering with one another.


## Transparency Level 3
### Scalability
System can be expanded in scale, without requiring changes to the system architecture or application algorithms

### Performance
The system can be reconfigured as load varies, to improve or preserve/save performance, hiding the reconfiguration

### Failure
Hiding component failures, so that users can continue to work on applications and services


# See Also
[[$ CC - Cloud Computing]]
