---
tags:
  - DataCommunications
aliases:
---
## Data Encoding Devices
**Digital**
Uses a CODEC 

Transmiter: Encoder
Receiver: Decoder

**Analogue**
Uses a MODEM
Transmitter: Modulator
Receiver: Demodulator

## Key Terms
**Data Element**
The bits

**Signal Element**
A part of a signal that does not change or phase shift. The more change/phase-shifting, the more signal elements.


**Data rate (bits per second)**
The rate at which data is transmitted

**Modulation Rate**
The rate at which the signal level is changed per second
- Bit rate and baud are equal, if and only if a signal element represents one data bit

**Bit duration**
The time to transmit one bit

## Digital Encoding Schemes
### Nonreturn to Zero (NRZ-L)
![[NRZ-L Signal.png]]
Voltage is either:
- High voltage: 0 (space)
- Low voltage: 1 (mark)

Characteristics
- Constant amplitude
- Needs a voltage measurement every bit interval

Cons
- Synchronization
	- Requires a clock for syncing bit interval measurement. However, two computers may have different timings
- High DC component
	- Has a constant non-zero averaged voltage level. This means it is affected badly by thermal noise

### Bipolar-AMI
![[Bipolar-AMI.png]]
AMI = Alternate Mark Inversion

Voltage is either:
- No signal: 0 (space)
- Alternating high or low voltage: 1 (mark)

Characteristics:
- Low DC component. Average is zero volts

### Manchester
![[Manchester.png]]
Designed to fix DC component and synchronization problems from NRZ-L

Voltage is either:
- Transition from High->Low: Mark
- Transition from Low->High: Space

Characteristics:
- All transitions occur as center of bit interval
- Built in clock
	- When there is a voltage transition, it acts as a clock to tell the computer to read the current signal
	- It is more stable and percise
- 
Cons:
- Generates on average, twice the signal elements

## Analogue Signals
Modulation is the technique to encode digital data onto an analogue signal
- Analogue signals can have a bandlimited (fixed range) spectrum centered on a specific frequency
- You can have multiple data transferred both ways on a cable, if they have different frequencies

### ASK Waveform
![[ASK.png]]
No voltage: 0
Has frequency: 1

### FSK Waveform
![[FSK.png]]
Low frequency: 0
High frequency: 1

### PSK Waveform
![[PSK.png]]
Sine wave: 0
Phase-shifted sine wave: 1

- Wave is shifted by $\pi$ radians/180 degrees
- Basically, after every signal element, it checks if there is a change/phase-shift. If there is, then it signals a value of 1. Else, it is 0
- It does NOT have a specific frequency for 1 or 0. It only detects a phase-change

### Quadrature PSK Waveform
![[Quadrature PSK.png]]
Basically a PSK waveform, however the sine wave can be phase-shifted by $\frac{\pi}{2}$ / 90 degrees
Due to this, we have 4 distinct types of signals for every signal element. This means we can display 2 bit of binary code per phase shift.
This encodes more data

# See Also
[[$ Data Communications]]