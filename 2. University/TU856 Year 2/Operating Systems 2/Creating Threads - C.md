---
tags:
  - OS2
aliases:
---

## Threads in C
In C, the `main()` program contains one single default thread. All other threads must be explicitly created by the user
`pthread_create` creates a new executable thread.

## Creating Threads
```c showlinenumbers
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

void *PrintHello(void *threadid) {
	int i;
	long tid;
	printf("Hello World! It's me, thread %d\n", tid);
	pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
	pthread_t threads[NUM_THREADS];
	int rc;
	long t;
	for(t=0; t<NUM_THREADS; t++) {
	
	}
	
}
```
![[Pasted image 20251111132643.png]]

## Thread Joining
- pthread_join()
- void ptr (just cuz\)

Used to synchronize threads
Lets say we create 2 threads. If the head/main thread finished first, then thread 1 and thread 2 will never run.
- Similar to wait() in processes

![[Pasted image 20251111134815.png]]
First image has join
second image doesnt have join()
- You can see that in the first few cases, the parent thread finished, and is taken off the ready queue. Therefore, thread 1 and thread 2 is also removed from the ready queue.


## Requirements
**Required C header files**
```c
#include <pthread.h>
```
- `#include <thread.h>` also works, but this is only supported in linux/gnu OS's.
- `pthread` stands for posix thread.


![[Pasted image 20251111131737.png]]

# See Also
[[$ Operating Systems 2]]
[[$ C - Programming Language]]