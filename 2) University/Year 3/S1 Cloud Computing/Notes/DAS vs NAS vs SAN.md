---
tags:
  - CloudComputing
aliases:
---
## DAS - Direct Attached Storage
A system where storage is connected directly to a computer

### DAS with Internal Controller and Internal Storage
![[Pasted image 20261021114547.png]]
- Disk drives directly connected to the computer, allowing access

### DAS with Internal Controller and External Storage
![[Pasted image 20261021114733.png]]
- Disk drives connected togethor outside of the computer system
- The RAID controller then connects these disks to the computer

### DAS with External Controller and External Storage
![[Pasted image 20261021114852.png]]
- The compuer uses a HBA to access the external RAID controller
- The RAID controller then connects and gives access to the disks

### HBA
A Host Bus Adapter is only used to transfer data to the RAID controller. It does NOT do any RAID or striping calculations. It is required for a DAS with an external RAID controller

### RAID Controller
Determines how data is written.
Striping, mirroring, parity, etc

## NAS - Network Attached Storage
- Instead of attaching storage directly to a machine such as a DAS, storage is attached togethor and access through a network.
- Due to this nature, multiple machines can now have access the storage, using a file protocol to communicate across the network
- Data shared across using the TCP/IP network
- The NAS storage device handles the file system, and presents files/folders to clients over the network
- Appears to the OS as a shared network folder `\\server\share` etc

### NFS - Unix Network File System
Developed between UNIX systems, to access NAS systems across a LAN
Has expanded to also allow support for non-UNIX systems

### CIFS - Windows Common Internet File System
Created by windows, to allow access to a NAS for windows systems.
Currenlty is predeeded by SMB

### SMB - Server Message Block
The underlying network protocol used for sharing files between computers on a local network
Developed by IBM

### NAS with HTTPS
Many NAS systems also support HTTPS, allowing clients to download files in their web browser form the NAS
Many NAS systems also use HTTPS as an access protocol, for web based GUI control over NAS settings


## SAN - Storage Area Network
![[Pasted image 20261021115621.png]]
Whereas a NAS handles the file system, a SAN presents the raw disk blocks. These blocks can then be formatted and managed by a connected device
- Uses dedicated high-speed network, such as fibre or ethernet
- Uses ISCSI
- Appears to the OS as a raw physical local hard drive `Z:`
- Composed of hosts, switches, storage elements, interconnected using various technologies, topologies, and protocols

### Benefits
**Protection**
- LAN free backups occur over the SAN, rather than through the LAN
- Server free backups can let the disk storage write itself directly to tape, without processor overhead

**Data Sharing**
Sharing data can offer many benefits, such asL
- Reducing the number of copies of files
- Increasing accessibility to current data
- Reducing the need to transfer copies of data between servers, over a network

### SAN Technologies
- Multiple technologies can be used when building a SAN
- Traditionally, Fibre is used. However, IP based solutions can be good for specific applications
- The concept of a SAN is also independent from the devices that are attached for it. For example:
	- Storage devices can be disks, magnetic tapes, RAIDs, file servers, etc
## NAS vs SAN
![[Pasted image 20261021120043.png]]
![[Pasted image 20261021120050.png]]

**NAS**
- Optimised for ease of management and file sharing, using lower cost ethernet based networks
- Fast installation, and storage capacity can be assigned to users on demand

**SAN**
- Optimised for performance and scalability
- Has support for high-speed fibre
- Can manage multiple disk and tape devices as a shared pool, with a single point of control
- Cost savings obtained over TCP/IP, due to using iSCSI


| Type        | NAS                                                                                                               | SAN                                                                                                                                                                                |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application | File sharing in NFS and SMB<br>Small-block data transfer over long distances<br>Limited read-only database access | Mission critical transaction based database application processing<br>Centralized data backup<br>Disaster recovery operations<br>Storage Consolidation                             |
| Advantages  | Few distance limitations<br>Simplified addition of more storage<br>Easy deployment and maintenance                | High availablity<br>Data transfer reliability<br>Reduces traffic on primary network<br>Configuration flexibility<br>High performance<br>High scalability<br>Centralized management |
| Protocol    | TCP/IP                                                                                                            | iSCSI                                                                                                                                                                              |

# See Also
[[$ CC - Cloud Computing]]
