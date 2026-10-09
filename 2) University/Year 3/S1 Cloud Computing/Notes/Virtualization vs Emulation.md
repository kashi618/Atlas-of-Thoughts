---
tags:
  - CloudComputing
aliases:
---
The main difference between virtualization and emulation, is the access to hardware.

## Virtualization
The guest OS is ran directly using the host's CPU instruction set. Due to the host and guest's CPU instruction set being the same, the guest OS can be ran natively. This is because there is no translation required.

## Emulation
Hardware is fully implemented using software, meaning instructions from the host are translated to mimic the hardware used in the guest OS. The host OS uses a different CPU instruction set as the guest OS.


# See Also
[[$ CC - Cloud Computing]]
