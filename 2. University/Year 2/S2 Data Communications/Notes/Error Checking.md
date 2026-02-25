---
tags:
  - DataCommunications
aliases:
---
## Error Detection
Errors exist in all transmission systems

### Parity Checking
An extra "parity" bit is added to the end of every character. The value of the bit is selected to make the total number of bits in the character even (even parity) or odd (odd parity)

- Used to detect single-bit errors, or an odd number of bit errors
- It cannot detect double-bit errors, or when there are an even number of bits in error



### Checksums
Calculates a small fixed-size value from a larger block of data. The value is then transmitted along with the data, allowing a receiver to verify the data integrity
- It operates at the "frame level/packet level"
- The transmitter treats the entire frame as a sequence of binary integers, and computes their numeric sum

**Example**

| H   | e   | l   | l   | o   |     | w   | o   | r   | l   | d   | .   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 48  | 65  | 6C  | 6C  | 6F  | 20  | 77  | 6F  | 72  | 6C  | 64  | 2E  |
```
Frame:    H   e   l   l   o       w   o   r   l   d   .
Bit:      48  65  6C  6C  6F  20  77  6F  72  6C  64  2E
Checksum:  4865    6C6C    6F20    776F    726C    642E
```

### Cyclic Redundancy Check (CRC)
*Non Examinable*
Uses polynomial division, instead of addition for error checking. It converts binary data into coefficients of a polynomial, and divides it by a predetermined generator polynomial




# See Also
[[$ Data Communications]]