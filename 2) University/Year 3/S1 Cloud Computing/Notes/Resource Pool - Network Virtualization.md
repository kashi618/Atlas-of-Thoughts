---
tags:
  - CloudComputing
aliases:
---
![[Pasted image 20261021013225.png]]
This is the process of logically segmenting or grouping physical networks, making them operate as single or multiple independent networks called virtual networks
- It allows virtual networks to share the resources of its physical networks
- Communications can take place between nodes in a virtual network, without the need to route frames
- And also enables the grouping of network nodes in the virtual network

## Physical Networks and VM Networks
![[Pasted image 20261021013704.png]]
![[Pasted image 20261021013744.png]]
### Physical Networks
Consists of the following components:
- Network adapters
- Switches
- Routers
- Bridges
- Repeaters
- Hubs
- Etc

Which then provides the connectivity between:
- Physical servers running a hypervisor
- Between physical servers and clients
- Between physical servers and storage systems

### VM Networks
- Resides in the physical server
- Consists of logical switches
- Provides connectivity between VMs in inside of a physical server
- Allows connection to the physical network

## Benefits of Network Virtualization

| Benefit                                | Description                                                                                                                                                                                                          |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhances security                      | Restricts access to nodes in a virtual network, from another virtual network<br>Can isolate sensitive data from one virtual network to another                                                                       |
| Enhances performance                   | Restricts network broadcast, improving network performance                                                                                                                                                           |
| Improves mangeability                  | Allows configuring of virtual networks from a centralized management workstation. Compared to manually/physically plugging in cables                                                                                 |
| Improves utilization and reduces CAPEX | Enables multiple virtual networks to share the same physical network, improving the utilization of a network resource<br>Reduces the requirements to setup separate physical networks, for each different node group |


# See Also
[[$ CC - Cloud Computing]]
