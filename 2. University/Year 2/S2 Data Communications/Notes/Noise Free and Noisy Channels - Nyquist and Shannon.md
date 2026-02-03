---
tags:
  - DataCommunications
aliases:
---
## Nyquist's Theorem
According to Nyquist, the limitation on data rate is simply the bandwidth of the channel, and can be calculated as such.
- It appears that, data rate can be increased by:
	- Increasing system bandwidth
	- Encoding more bits per signal cycle
However, as data rate increases the bit error rate increases, and becomes increasingly difficult for the receiver to distinguish signal states. This formula is an idealized situation, where noise is not accounted for.

$C=2BLog_{2}M$
`C` = Maximum data rate (bits per second)
`B` = Bandwidth of the transmission system (Hz)
`M` = Number of discrete states in digital signal

# See Also
[[$ Data Communications]]