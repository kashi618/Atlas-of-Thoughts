https://tudublin-my.sharepoint.com/personal/damian_bourke_tudublin_ie/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fdamian%5Fbourke%5Ftudublin%5Fie%2FDocuments%2FMyWorkWebSite%2FTU856%5FTU858%5FData%5FCommunications&ga=1

[[Data Communications - Course Information]]
[[Topics]]

## Data Transmission
- [[Data Transmission]]
- [[Signal Concepts]]
	- [[Sine Waves]]
	- [[Fourier Analysis]]
- [[Digital Analogue Signals]]

## Bandwidth and Frequency
- [[Bandwidth]]
- [[Data Rate and Harmonics]]

## Signal Quality Loss
- [[Transmission Impairments]] 
	- [[Attenuation]]
	- [[Noise]]

## Channel Capacity
[[Chanel Capacity]]
	- [[Noise Free and Noisy Channels - Nyquist and Shannon]]

## Data Encoding
- [[Data Encoding]]
- [[Modulation Rate vs (Bit Rate and Signal Element)]] 
- [[Analogue Data to Digital Signal]]
- [[Delta modulation and PCM]]

## Multiplexing
- [[Multiplexing - FDM & TDM]]

## Data Link Control
- [[Data Link Control]]
- [[Synchronization]]
- [[Flow Control]]
- [[Error Control]]
	- [[Error Checking]]
- [[HDLC]]
	- [[Bit Stuffing]]
- [[Propagation Delay]]

## Local Area Networks
- [[LAN Networks]]
- [[LAN Topologies]]
- [[Bus LAN]]
	- [[CSMA and CSMA CD]]
- [[Star LAN]]
- [[Ring LAN]]
	- [[Token Ring Operation]]
- [[Medium Access Control - MAC]]
- [[Hub-Star LAN - Switched-Hub LAN]]
- [[IEEE 802 Standards]]
- [[Network Interface Card (NIC)]]

## LAN Technologies
Routers/Bridges/Repeaters
- [[Extending LANs]]
	- [[Bridges]]
		- [[Transparent Bridges]]
	- [[Repeaters]]
	- [[Routers]]
	- [[Routing Tables]]
- [[Universal Service]]


## Mac Addresses
- [[Hardware Addressing - MAC Address]]
- [[Types of LAN Communications]]

## Internet Protocols
- [[IP Address (WEB DEV 2)]] 
- [[IP Addresses]] <--
- [[Masks]] <--
	- [[DDN and CIDR Notation]] <--
- [[Subnetting]] <--
	- [[Calculating Subnets]]
	- [[Calculating Subnets - Magic Number]] <--
	- [[Calculating Subnets - VLSN]] Variable Length Subnet Mask


![[Pasted image 20260325104236.png|400]]
```
17.12.14.2/27
255.255.255.224   (255-31)
  00000010
& 11100000
  00000000

17.12.14.45/28
255.255.255.
  00101101
& 11110000
  00100000

if you have IP, and you know the MASK, if you && the addresses, you get the home network
```

```
From this this IP, divide into four subnets of the following

192.168.1.0/24

Subnet A: 50 
Subnet B: 100
Subnet C: 10
Subnet D: 25

---

Calculate IPs needed (including +2)
A: 52
B: 102
C: 12
D: 27

Sort by biggest, and find nearest power, CIDR, mask
B: 102  NearestPower: 128  CIDR: /25  Mask: 255.255.255.128
A: 52   NearestPower: 64   CIDR: /26  Mask: 255.255.255.192
D: 27   NearestPower: 32   CIDR: /27  Mask: 255.255.255.224
C: 12   NearestPower: 16   CIDR: /28  Mask: 255.255.255.240

Subnets/Result
B: 192.168.1.0    FirstHost: 192.168.1.1    LastHost: 192.168.1.126  Broadcast: 192.168.1.127
A: 192.168.1.128  FirstHost: 192.168.1.129  LastHost: 192.168.1.190  Broadcast: 192.168.1.191
D: 192.168.1.192  FirstHost: 192.168.1.193  LastHost: 192.168.1.222  Broadcast: 192.168.1.223
C: 192.168.1.224  FirstHost: 192.168.1.225  LastHost: 192.168.1.238  Broadcast: 192.168.1.239
```

```
When subnets TOO BIG TO FIT IN THE ADDRESS

IP required is 128, starting at the address 192.168.0.0
ie. magic number is 128
Broadcast:
192.168.0.0
192.168.0.128
192.168.1.0
192.168.1.128
192.168.2.0
192.168.2.128
192.168.3.0
192.168.3.128

```

## Protocol Hierarchies

[[Protocol Hierarchies]]

## IP Datagram Header Format
[[IP Datagram Header Format - IP Fragmentation]]

##  

## Bits Table

| CIDR | DDN             | Num IPs | Network Bits | Host Bits |
| ---- | --------------- | ------- | ------------ | --------- |
| /32  | 255.255.255.255 | 1       | 32           | 0         |
| /31  | 255.255.255.254 | 2       | 31           | 1         |
| /30  | 255.255.255.252 | 4       | 30           | 2         |
| /29  | 255.255.255.248 | 8       | 29           | 3         |
| /28  | 255.255.255.240 | 16      | 28           | 4         |
| /27  | 255.255.255.224 | 32      | 27           | 5         |
| /26  | 255.255.255.192 | 64      | 26           | 6         |
| /25  | 255.255.255.128 | 128     | 25           | 7         |
| /24  | 255.255.255.0   | 256     | 24           | 8         |
| /23  | 255.255.254.0   | 512     | 23           | 9         |
| /22  | 255.255.252.0   | 1024    | 22           | 10        |
 
## Acronyms
- [[TLA and FLA]]

## Exam Paper Prep
[[Topics NOT in Summer Exam]]
[[Data Communications - 2024_2025]]