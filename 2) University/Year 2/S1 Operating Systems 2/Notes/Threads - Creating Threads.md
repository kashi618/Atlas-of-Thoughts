---
tags:
  - OS2
aliases:
---

## Threads in C
In C, the `main()` program contains one single default thread. All other threads must be explicitly created by the user
`pthread_create` creates a new executable thread.

**Required C header files**
```c
#include <pthread.h>
```
- `#include <thread.h>` also works, but this is only supported in linux/gnu OS's.
- `pthread` stands for posix thread.


## pthread_create()
**Function signature**
```c
int pthread_create(
	pthread_t *thread, 
	const pthread_attr_t *attr,
	*start_rtn, // void* (start_rtn) (void *)
	void* arg
	)
```

**Arguments Meaning**
`pthread_t* pthread_t`
- Stores a pointer to a variable of type `pthread_t`
- When the function is called, the TID of the new thread is stored here

`pthread_attr_t* attr`
- A pointer to an attribute structure
- Used to set special rules for the thread
- 99% is just set to NULL (uses default settings)

`*start_rtn`
- A pointer to a function
- Stands for "start routine"
- This is the function the thread will run
- **NOTE:** function must return `void *`, and take one `void *` as an argument

`void *arg`
- Pointer to any data you want sent to the thread
- Due to being `void *`, any datatype can be passed
- If no data is required, then `NULL`

**Return Type**
The function returns 0 if successful. If failure, returns a non-zero number.

# See Also
[[$ Operating Systems 2]]
[[$ C - Programming Language]]
[[Threads]]