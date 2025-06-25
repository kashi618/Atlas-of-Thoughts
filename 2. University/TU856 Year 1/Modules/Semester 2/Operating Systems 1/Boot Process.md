---
tags:
  - Operating-Systems
aliases:
---
## What is a Boot Process?
How a computer system gets from no power, to being operational

## Types of Boots
### Cold Boot
Sequence of starting a computer from a completely powered off state.
- System performs full POST
- OS loaded from scratch
- Ram is cleared
- Time consuming

### Warm Boot
Sequence of starting a computer, without fully powering it off.
- System reboots/restarts while power is still supplied
- May skip or shorten POST
- OS reloaded, without full hardware initialisation
- Ram may retain cached data
- Some hardware components may not be fully reset
- Faster than a cold boot

## Boot Process
1. Computer is powered on, and electricity is supplied to all components
2. BIOS is ran, detecting hardware
3. POST is then ran by the BIOS, checking critical hardware
4. Bootloader is loaded by the BIOS upon successful POST
5. Bootloader hands control to the OS kernel
   
# See Also
[[$ Operating Systems 1]]
