---
tags:
  - ComputerScience
---
## Checking File Permissions
```bash
ls -l
```
Permissions consist of a 10 symbol string, consisting of "d", "r", "w", "x", "-"
- "d" - If this is present, it means that it is a directory
- "r" - This gives permission to read
- "w" - This gives permission to write
- "x" - This gives permission to execute
- "-" - This means there is no permission

This string is then broken into 3 groups
- First group - User permissions
- Second group - Group permissions
- Third Group - Other People permissions

### Example
-rws------
This means only the user has permission to read, write, execute this file

-r--r--r--
This means every only has the permission to read this file

drwxrwxrwx
This means everyone has the permision to read, write, execute this directory

## Changing Permissions
### chmod
In linux, this is the command used to change file permissions



# See Also