---
tags:
  - ComputerScience
---
The boot process is how a computer system turns on
- It is the procedure that includes the transfer of the OS from mass storage into main memory

## Cold Boot
When the PC is powered on from an OFF condition
- Ram is fully scrambled and randomized
- This can be done by shutting down a PC, waiting a few minutes, and then turning it back on
- The POST sequence runs
- Also known as a hard reboot

## Warm Boot
When the PC is restarted
- This means memory may or may not be scrambled
- The POST sequence is skipped
- Also known as a soft reboot

### Additional Boot States
### Standby
- Non-essential devices turned off
- Data in RAM maintained
- For laptops, this means a small amount of battery power is used at all time
- The computer boots up quickly, as all the data is readily accessible in RAM
### Hibernate 
- Lowest power usage state
- All user data present in RAM is written to the hard disk by the OS
- The computer is then fully "turned off", which saves battery/main power
- When it is powered back on, all the data is moved back from hard disk back to RAM
- Programs resume execution without knowing that the computer was powered off, (as program data is restored from the harddisk back into RAM)


## Boot Steps
![[Pasted image 20250212093913.png|600]]
1. **Power Button Pressed**
	- Turns on the computer, and electricity is supplied to different components
	- If a warm boot is performed, then computer does not need to wait for this, as electricity has already been supplied
2. **Rom and BIOS Chips Read**
	- The processor reads the base address of the [[ROM]] and [[2. University/TU856 Year 1/Modules/Semester 2/Operating Systems 1/Unsorted Notes/BIOS]] chips, which contain the start-up instructions
3. **BIOS Tests**
	- The BIOS then performs a series of tests, checking if the computer hardware is connected and operating correctly
		- [[2. University/TU856 Year 1/Modules/Semester 2/Operating Systems 1/Unsorted Notes/POST]] is used
		- Buses, clocks, adaptor cards, RAM, mouse, keyboards, drives, external media, networks, are also checked
4. **POST Results Compared to Data in CMOS**
	- Any differences between them show that either:
		- A system configuration has changed (more ram, etc)
		- A problem exists that will prevent the computer from booting (missing CPU, etc)
	- These problems will then be reported by beeps, on-screen error messages, and a failure to boot
5. **Operating System is Loaded**
	- [[2. University/TU856 Year 1/Modules/Semester 2/Operating Systems 1/Unsorted Notes/POST]] ends, determining that all components are functioning properly. If [[2. University/TU856 Year 1/Modules/Semester 2/Operating Systems 1/Unsorted Notes/POST]] completes without error, the computer is functioning properly
	- The BIOS looks for an operating system to load
		- Usually on C:/
		- Or other media such as USB, CD, DVD, Network
6. **System Files Loaded into Main Memory, Kernel is Loaded**
	- The kernel is loaded
	- The kernel will always remain in memory whilst the computer is powered on
	- In older DOS pcs, the [[2. University/TU856 Year 1/Modules/Semester 2/Operating Systems 1/Unsorted Notes/BIOS]] is also copied into memory, however, modern operating systems no longer uses the [[2. University/TU856 Year 1/Modules/Semester 2/Operating Systems 1/Unsorted Notes/BIOS]] for I/O access
7. **Operating System Configuration Information Loaded**
	- On windows, this data is stored in the registry
	- It consists of both computer settings an user settings
8. **Start-up Programs Executed**
	- Apps made to start-up with the OS are executed


# See Also