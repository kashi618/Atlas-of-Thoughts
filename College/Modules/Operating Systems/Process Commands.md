---
tags: 
aliases:
---
## How to make a process run in backgrounf
**Example**
```
sleep 1000 &
```
This runs the sleep command in the backgroundf

### Check processes
```
ps
```

### Check specific process
```
ps -ef | grep sleep
```
This would sort all processes running that contains the word "sleep"

### Terminate a Process
```
kill jobNumber
```
You can find the jobNumber using ps
- This asks the process to close itself. It gives it time to free variables, memory, processe linked it it, etc.

### Force Terminate a Process
```
kill -9 jobNumber
```
- This force kills a process. This is often a bad idea, since it doesn't give the process time to free variables, memory, and other processes linked to it

## Bring Processes back to Foreground
```
fg jobNumber
```

## See Current Running Jobs (containing PID)
```
jobs
```
### See All Processes
```
ps
```

### See Background Processes
```c
bg
```


### Set Current Running Process to Background
```
<ctrl + z>
```
# See Also

