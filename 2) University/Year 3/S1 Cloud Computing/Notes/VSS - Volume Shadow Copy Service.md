---
tags:
  - CloudComputing
aliases:
---
## VSS - Volume Shadow Copy Service
Backing up and restoring critical business data can be complex.
- Data needs to be backed up whilst applications that produce that data, is still running. This means that if some files are open, they might be in a inconsistent state
- If the dataset is large, it can be difficult and time consuming to backup all of it at one time
- Correctly performing a backup also requires close coordination between the:
	- Backup applications
	- Line of business applications that are being backed up
	- Storage management hardware and software

VSS facilitates the conversation between all these ccomponents, and allows them to work togethor
- When all the components support VSS, it can be used to backup application data without taking the applications offline

VSS can either be used as is, or in scenarios such as:
- Want to back up application data an system state information, including archiving the data to another disk drive
- Your data mining
- Your performing disk-to-disk backups
- Need a fast recovery from data loss

# See Also
[[$ CC - Cloud Computing]]
