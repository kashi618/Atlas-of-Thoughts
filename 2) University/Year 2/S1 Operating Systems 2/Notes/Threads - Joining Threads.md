---
tags:
  - OS2
aliases:
---
## What is it?
Similar to the [[Processes - wait()|wait()]] function for processes, it allows a parent thread to wait for a specific thread to finish. It also cleans up the thread when it finishes

## pthread_join()
**Function Signature**
```c
int pthread_join(pthread_t thread, void** retval);
```

`pthread_t thread`
- The ID of the thread you want to wait for. The value given from pthread_create()

`void** retval`
- A double pointer, used to catch the return value of the thread function
- If not important, pass `NULL`
- Stands for "return value"
- Search up how to access retval. Its complicated...



# See Also
[[$ Operating Systems 2]]