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

## Shannon's Theorem
Shannon extended Nyquist's theorem, to account for the effects of noise
- It appears that:
	- Increased bandwidth -> increased maximum data rate
	- Increased noise -> reduced maximum data rate
- Data rate is thus limited by bandwidth AND noise

$C=BLog_{2}(1+(S/N))$
`C` = Maximum data rate (bits per second)
`B` = Bandwidth of the transmission system (Hz)
`S` = Average signal power
`N` = Average noise power

## Using them Both
Use Shannon's formula to find the realistic maximum data rate, and then use Nyquist's formula to work out the optimal M value. (what transmitter we use)

# See Also
[[$ Data Communications]]