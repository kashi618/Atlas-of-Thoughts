---
tags:
  - ComputerScience
  - Microprocessors
---
In processors, timers are used for
- Sound generation
- Time of day (clock)
- Event timing
- Multitasking

## Types of Timers
### Simple Shitty Oscillator
![[Pasted image 20250210120939.png|350]]
As the 0 gets pass through the not gate, it turns into a 1. The 1 then gets passed through the not gate again, and turns into a 0.
- Frequency of oscillation is random

### Quartz Timer
- Resonates at a certain frequency
- Hitting it with a hammer also produces piezo electricity
- Can be cut to size, to get a specific frequency
![[Pasted image 20250210121514.png|250]]
This type of clock is more stable, because the crystal creates a signal with a very precise frequency, at 32768 times per second. Then, we can use this crystal in conjunction with the oscillator from above, creating a timer.

## Calculating Timing
If the cpu is at 16MHz frequency, and it has a 16 million digit counter, it would take 1 second for it to count down.



# See Also