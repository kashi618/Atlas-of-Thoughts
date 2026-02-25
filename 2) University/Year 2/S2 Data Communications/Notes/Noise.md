---
tags:
  - DataCommunications
aliases:
---
## What is it?
The insertion of unwanted signals onto the transmission signal.

## Types of Noise
### Thermal Noise
Caused by thermal agitation of electrons within a conductor. When temperature is increased, it leads to thermal noise.
- It is uniformly distributed across the frequency spectrum
- It is present in all electronic devices
- If attenuation causes signal to become close to/lower than the thermal noise, it will become unreadable

**Thermal Noise Graph**
![[Thermal Noise Graph.png|300]]
**Extreme Case of Thermal Noise**
![[Thermal Noise Extreme.png|300]]
**Attenuation and Thermal Noise**
![[Pasted image 20260203164153.png|300]]

### Cross Talk
Unwanted coupling between signals due to electromagnetic coupling. When different signals are close to each other, they can interfere with one another.

### Impulse Noise
Irregular pulses or noise spikes, which are short and in high amplitude.
- Caused by lighting, static discharges, switching of heavy electrical loads, and faults within the transmission system
- Analogue signals are less affected by this type of noise
- Digital signals are very susceptible, as it can lead to the corruption of data. 1->0, or 0->1

![[Impulse Noise Graph.png|300]]

### Example of Thermal and Impulse Noise
![[Thermal and Impulse Noise.png|500]]
- The faster the data transmission rate, the more data will be corrupted during a lightning strike.
- If transmission rate is very slow, then a lighting strike will only affect a few bits.

# See Also
[[$ Data Communications]]