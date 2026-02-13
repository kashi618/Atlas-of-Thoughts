---
tags:
  - DataCommunications
aliases:
---
## Analogue Signal
- At every point of time, an analogue signal has a defined value. It has "unlimited" amount of data, as (t, t+0.1, t+0000001, etc) would always have a measurable piece of data.
- This means that there are an infinite number of possible values, between any two points in an analogue signal

## Bit Quantization
To measure each point of an analogue signal, we can use a "ruler" with bits. The higher the bit quantization, the higher the granularity/detail we can note down.
- An 8-bit quantization has $2^{8}=256$ possible values per sample
- A 16-bit quantization has $2^{166}=5536$ possible values per sample
- A 24-bit quantization has $2^{24} = 16,777,216$ possible values per sample
It is called audio bit depth. (16-bit/24-bit audio)


**Example**
This is a 3 bit quantization ruler
Note: technically ruler should start at -3, and go up to 4.
![[Pasted image 20260213113716.png]]

## Sample Rate
The number of samples taken per second

**Nyquist-Shannon Theorem**
To accurately reconstruct an analogue signal, you need to sample at least twice as fast as the highest frequency component in the signal
- The human hearing range is between 20-22,000hz. This means that our sample rate needs to be atleast 44,100Hz , as it is bigger than (2x 22,000)
- This prevents aliasing, which is false frequencies that appear in the digital signal




# See Also
[[$ Data Communications]]