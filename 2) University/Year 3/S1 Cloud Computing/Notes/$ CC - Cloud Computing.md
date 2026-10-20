## MOC
- [[SaaS & PaaS & IaaS]]
- [[Single Tier (Monolithic) vs Multi Tier Systems (Distributed)]]
- [[Distributed Systems - Functional and Non-Functional Requirements]]
	- [[NFR - Resource Sharing]]
	- [[NFR - Openness]]
	- [[NFR - Concurrency]]
	- [[NFR - Scalability]]
	- [[NFR - Fault Tolerance]]
	- [[NFR - Transparency]]
- [[Virtualization vs Emulation]]
- [[Load Balancing]]
	- [[Auto Scaling]]
		- [[Elasticity]]

# Resource Pool

## Share, Limit, Reservation

## CPU Resources

### Logical and Physical Cores


### Sockets

## Storage Virtualization

**Benefits**

### TCO - Total Cost Ownership
Cost of procuring the device, getting it shipped, installation, lifetime costs, decommission price

### VMFS NFS

## Network Virtualization

## Application Virtualization

---
# CAPEX & OPEX
Capital expense - Once off expense
Operational expense - Ongoing expense

---
# Cloud Repatriation

## Cloud Deployment Model
Public cloud
Private cloud
- On premise
- Externally hosted
Hybrid cloud

---
# Sharding

---
# Cloud Challenges
## For Consumer
### Security and Regulation
### Network latency
### Supportability
### Interoperability

## For Providers
### Service Warranty and Service cost
### Huge Numbers of Software to Manage
### No Standard Cloud Access Interface

---
# Storage Basics
## Primary Storage

## Secondary Storage

# Storage Types
### Partitions vs Volumes
If using one hdd, partitions and volumns are technically the same concept. Ways to split storage into separate bits
However, if you have more than one storage devices,, you can "merge" them into one volume. Which can then be partitioned. It is a superset of a partition

# NAS, SAN, DAS
## NAS
### Sharing Protocols

## SAN
Refers to both the storage devices, as well as the network that connects the storage devices

# SCSI, ISCSI

# RAID
Redundant array of independent disks

## Implementation Methods
**Software**
Uses host-based software to provide RAID functionality
However, due to being software, it gives computing overhead

**Hardware**
Uses a specialized hardware controller installed on either the host and the array

## RAID Techniques
**Striping**


**Mirroring**


**Parity**
- Cyclic Redundancy Check

## RAID Levels
### RAID 0
### RAID 1
### RAID 1+0 / RAID 2
### RAID 3
CONS if any of the data in the non parity disc is changed, the speed is limited by the parity being recomputed

### RAID 4
### RAID 5
### RAID 6
 


---
# DevOps
## What is DevOps?
*"DevOps is a development methodology aimed at bridging the gap between Development and Operations, emphasizing communication and collaboration, continuous integration, quality assurance and delivery with automated deployment utilizing a set of development practices"* - Jabbari et al

*"Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers."* - Wikipedia

---
# Docker





Catalytic Computing