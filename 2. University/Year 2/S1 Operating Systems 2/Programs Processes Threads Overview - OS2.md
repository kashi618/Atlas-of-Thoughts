---
tags:
  - OS2
  - Processes
aliases:
---
## Process vs Programs
**Processes (task)**
A process is a single instance of an executable program.
It is an active job/task that is in execution.

**Program (job)**
A program is a set of instructions and data stored as a file on disk.
It cannot be executed,

## Programs
A static passive set of instructions stored on a disk. It is an executable (.exe, appimage, etc), that contains the code and data needed to perform a task
- Static: Means it only contains code.  I doesn't "run"

## Processes
[[Processes]]

## Threads
[[Threads]]

## Hierarchy/Overview
- **Program**: Firefox.exe
	- -> **Process** (PID 01): Browser
		- ⤷ **Thread** (TID 01): Handles UI
		- ⤷ **Thread** (TID 02): Handles Network
		- ⤷ **Thread** (TID 03): Handles Firefox extensions
	- -> **Process** (PID 02): Tab 1 (youtube.com)
		- ⤷ **Thread** (TID 01): Handles UI 
		- ⤷ **Thread** (TID 02): Handles Network
		- ⤷ **Thread** (TID 03): Handles Rendering
	- -> **Process** (PID 03): Tab 2 (facebook.com)
		- ⤷ **Thread** (TID 01): Handles UI
		- ⤷ **Thread** (TID 02): Handles Network
		- ⤷ **Thread** (TID 03): Handles Notifications


# See Also
[[$ Operating Systems 2]]