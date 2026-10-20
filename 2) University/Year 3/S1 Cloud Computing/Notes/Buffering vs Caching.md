---
tags:
  - CloudComputing
aliases:
---
## Buffering
Used when data receiving and processing speeds differ.
A buffer is a memory space, used to temporarily store incoming data until a system can process it

**Example**
- Video/audio playback
  When you are playing a video or audio, it may first idle and load the first 10% into buffer, and then begin to play. This allows the video/audio to play, meanwhile the computer continually downloads the rest of the video/audio. This buffer helps lessen the chance of stalling or skipping due to network congestion
- Screen, printers, keyboards.

## Caching
High speed storage used to store a subset of frequently accessed data. Due to it being stored in high speed storage, the data can be accessed very quickly, allowing for more responsive and faster applications
Essentially, it allows you to efficiently reuse previously retrieved/computed data, without needing to retrieve it again/recompute the data.

## Overall View

| Type     | Buffering                                                                                  | Caching                                                              |
| -------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| Basic    | A buffer stores data till it is processed                                                  | Caching fastens data access of repeatedly used data                  |
| Storage  | Stores original data                                                                       | Stores a copy of the data                                            |
| Location | Memory space in RAM                                                                        | Stored in CPU registers, but can also be implemented in RAM and disk |
| Type     | Can be either a hardware or software bufer                                                 | Is high speed storage, therefore it is hardware                      |
| Policy   | FIFO (First in first out)                                                                  | LRU (Least Recently Used)                                            |
| Behavior | Stored in block sizes. I.E, reading a single character is the same as reading a whole book | Read and write is the same as normal storage                         |
| Use      | Used for I/O processes                                                                     | Used for reading and writing processes from disk                     |

# See Also
[[$ CC - Cloud Computing]]
