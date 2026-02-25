Add strace between a command, and it will show the system calls it is using

**example**:
```
strace python coolFile.py
```


## Less

```
strace python coolFile.py |& less   
```
&, pipe the standard error to less

### Add line numbers
```
strace python coolFile.py |& less -n
```

### Add Time Stamp

```
strace -t python coolFile.py |& less   
```


### Show table of called items

```
strace -c python coolFile.py |& less   
```
