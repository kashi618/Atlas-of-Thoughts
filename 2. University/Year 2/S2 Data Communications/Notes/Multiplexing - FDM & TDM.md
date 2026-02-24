---
tags:
  - DataCommunications
aliases:
---
## What is it?
It is unlikely that two communicating devices fully utilize the data capacity of a transmission link
- Fibre optic cables have very high bandwidth, allowing you to carry a lot of data. Usually more than enough for host to host interactions
- Why? Because communications equipment is expensive

Multiplexing essentially uses the spare capacity, for other communicating devices, sharing data communications on the same transmission link.

![[Basic Multiplexing Components.png]]

### Multiplexing Examples
- Cable networks
	- Communication services provided on cable such as TV, broadband, radio, etc, are often multiplexed
- Telecommunications networks
	- Fibre optics, coaxial cables, and microwave links are multiplexed and used between exchanges and towns/cities

## Types of Multiplexing
### Frequency-Division Multiplexing (FDM)
An **analogue transmission technique**, producing an analogue signal from multiplexed analogue/digital signals, **WITHOUT** regard to data
- Used when bandwidth of transmission link exceeds the bandwidth of individual signals
- Each signal modulated into a different "carrier frequency", called the sub carrier
- These carrier frequencies are combined to produce a "composite analogue signal", called the baseband signal
- The baseband signal is analogue

**Requirements**
- Input data can be digital OR analogue
- Bandwidth of composite signal, must be greater than sum of bandwidth of the individual input signals
- A guard band is required, to prevent carrier frequency overlap

**Transmitter (MUX)**
![[FDM Transmitter.png]]
- Depending on how much bandwidth is needed, each "camel hump" can be widened or thinned
- For example, broadband will require a big camel hump for downloading and uploading, whilst a phone can exist on a smaller hump

**Reciever (DEMUX)**
![[FDM Receiver.png]]
- Bandpass filter isolates each input frequency, separating each channel and removing noise and interference
- Demodulator is used to extract the original baseband signal


![[FDM ISP Example.png]]
- In an ISP, the f1 can be broadband, f2 can be phone, f3 can be radio, etc
- They are all running on a co-axial signal, but combined through multiplexing
- Usually, one co-axial cable powers an entire hood

### Synchronous Time-Division Multiplexing (TDM)
A **digital transmission technique**, producing a digital signal from multiplexed analogue/digital signals, **WITH** regard to data
- Unlike FDM where signals are combined, TDM separates the input signal in time
- The interleaving of input signals, can be at bit level, or blocks of bytes
- Use in telephone networks. A phone call is 4khz, with sample rate of 8k per s. This means that there is a 64kbps

**Requirements*
- Output transmission rate, needs to be the sum of the inputs.
	- For example, if we have 2 inputs, of 500bps, the output needs to be 1000bps to support them.


**Transmitter (MUX)**
![[TDM Transmitter.png]]
- Each frame carries one bit, from each input per frame


**Receiver (DEMUX)**
![[TDM Receiver.png]]
- Each time slot frame, corresponds to a different input



# See Also
[[$ Data Communications]]