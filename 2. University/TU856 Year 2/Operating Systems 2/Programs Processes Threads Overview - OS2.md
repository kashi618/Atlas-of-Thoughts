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
- An instance of a program that is being executed. It is what "runs" when a program is started
- Each process is independent, meaning they do **NOT** share resources with other processes of the same program
- A program can contain many processes

Each process contains:
- Code/instructions from the program
- Data allocated in the heap and stack; containing variables and data
- Program counter; which stores the next instruction to be executed
- **Unique PID** (process identification) used to uniquely identify the process

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