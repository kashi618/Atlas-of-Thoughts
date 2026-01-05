# Threads, Synchronization, and the Producer–Consumer Problem (POSIX/C)

Note: Your uploaded context includes slides and a partial condvar.c example. I’ve cleaned that up, added complete, compilable examples, and expanded with additional information from general POSIX/pthreads knowledge where your slides were brief or incomplete. Where I’ve reconstructed typical teaching examples (e.g., badcnt.c/goodcnt.c and thread_join.c), I note that these are based on standard patterns commonly used in OS courses.

Use the wikilinks to split these into multiple Obsidian notes if you like. Suggested structure is at the end.

---

## Concept Map (how topics fit together)

- [[Threads (POSIX Basics)]] → what threads are, TCB, states, joinability, passing args
- [[Synchronization Primitives]] → mutexes, condition variables, semaphores, P/V, test-and-set limitations
- [[Deadlocks and Performance]] → lock ordering, granularity, frequency, critical sections
- [[Producer–Consumer (Bounded Buffer)]] → semaphores solution, common bugs, proofs of no deadlock
- [[POSIX Thread APIs and Patterns]] → pthread_create/join/attr, passing args, join vs detach, examples
- [[Worked C Examples]] → goodcnt/badcnt, condvar watcher, bounded-buffer with semaphores, thread_join

---

## Threads (POSIX Basics)

### What is a Thread Control Block (TCB)
A TCB is the OS/runtime data structure holding per-thread state, typically:
- Thread identifier (pthread_t)
- Register context and stack pointer
- Scheduling info (priority, state)
- Join/detach status and return value storage
- Pthread-specific data (TLS keys)
- Signal mask and pending signals

In user-space pthreads, parts of this live in the pthread library; kernel also maintains kernel thread metadata.

### Single-threaded vs Multithreaded systems
- Single-threaded:
  - One thread of execution per process
  - Concurrency requires multiple processes
  - Simpler reasoning; no shared-memory races within a process
- Multithreaded:
  - Multiple threads share the same address space/resources
  - Enables parallelism and concurrency (I/O overlap)
  - Requires synchronization to avoid races

Examples of multithreading:
- Web server with thread-per-connection pool
- GUI app with UI thread + worker threads
- Pipeline (producer threads feeding consumer threads)

### Thread states (typical)
- New: created, not yet running
- Runnable/Ready: eligible to run
- Running: executing on a CPU
- Blocked/Waiting: sleeping on I/O, mutex/condvar/semaphore, join, etc.
- Terminated/Zombie: finished, waiting to be joined or reclaimed

### Joinable vs Detached threads
- Joinable (default): another thread can pthread_join to collect exit status and resources
- Detached: resources are released automatically on exit; cannot be joined
- POSIX default is joinable unless you set the detach state or call pthread_detach

Implications:
- Use joinable if you need the return value/orderly shutdown
- Use detached for fire-and-forget work (ensure no shared-resource lifetime issues)

### Passing arguments to threads
- Threads take a single void* argument and return a void*
- Pass either:
  - A pointer to a heap-allocated struct (recommended)
  - A value encoded into a pointer (e.g., cast of long) if safe
- Ensure argument lifetime extends until the thread reads it

Example:
```c
typedef struct {
  int id;
  const char *name;
  // other fields
} worker_arg_t;

void *worker(void *arg) {
  worker_arg_t *w = arg;
  printf("Worker %d: %s\n", w->id, w->name);
  // ...
  return NULL;
}

int main(void) {
  pthread_t th;
  worker_arg_t *arg = malloc(sizeof(*arg));
  arg->id = 1; arg->name = "alpha";
  pthread_create(&th, NULL, worker, arg);
  pthread_join(th, NULL);
  free(arg);
}
```

---

## Synchronization Primitives

### Why concurrency must be controlled (race problem)
- With shared data, interleavings can cause inconsistent state
- Example: two threads increment a shared counter without atomicity → lost updates
- Critical sections must be protected to enforce mutual exclusion and proper ordering

### Test-and-Set vs higher-level primitives
- Test-and-Set:
  - Hardware atomic instruction to implement spinlocks
  - Problems: busy-waiting wastes CPU, can cause priority inversion and unfairness
- Semaphores / Mutex + Condition variables:
  - Block rather than spin (in user-space, often transitions to kernel wait)
  - Allow expressing resource counts (semaphores) and condition waiting (condvars)

Key semaphore operations:
- P (wait): decrement; if negative, block until another thread signals
- V (signal): increment; if threads are waiting, wake one

Mutex vs Semaphore:
- Mutex: binary lock for mutual exclusion (ownership semantics)
- Counting semaphore: integer resource counter (no ownership)

Condition Variables:
- Wait for a predicate to become true while releasing the mutex atomically
- Always:
  - Lock mutex
  - while (!condition) pthread_cond_wait(&cv, &mutex);
  - Do work when condition true
  - Unlock mutex

### Two core functions used to prevent interference (as per slides)
- P (wait) and V (signal) for semaphores
- They gate access to shared resources and ensure ordering; see producer–consumer below

---

## Deadlocks and Performance

### Deadlock conditions (Coffman)
- Mutual exclusion
- Hold-and-wait
- No preemption
- Circular wait

Avoidance tips:
- Lock ordering: define and enforce a global order across locks
- Lock granularity: balance coarse vs fine locks (fine increases concurrency but risks complexity)
- Lock frequency: avoid locking more than needed
- Minimize critical sections: keep protected regions tight
- Consider trylock for out-of-order cases and back-off strategies

---

## Producer–Consumer (Bounded Buffer)

### Core idea
- Producers add items; consumers remove items
- Bounded buffer of size N smooths speed differences
- Requirements:
  - Mutual exclusion for buffer operations
  - Don’t produce when buffer is full
  - Don’t consume when buffer is empty

### Correct semaphore solution (canonical)
- Semaphores:
  - empty initialized to N (spaces)
  - full initialized to 0 (items)
  - mutex initialized to 1
- Producer:
  - P(empty); P(mutex); insert; V(mutex); V(full)
- Consumer:
  - P(full);  P(mutex); remove; V(mutex); V(empty)

Example (C, POSIX semaphores):
```c
#include <pthread.h>
#include <semaphore.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#define N 10
typedef int Item;
Item buf[N];
int in = 0, out = 0;

sem_t empty_sem, full_sem;
pthread_mutex_t buf_mutex = PTHREAD_MUTEX_INITIALIZER;

void doInsert(Item x) {
  buf[in] = x;
  in = (in + 1) % N;
}
Item doRemove(void) {
  Item x = buf[out];
  out = (out + 1) % N;
  return x;
}

void *producer(void *arg) {
  for (int i = 0; i < 20; i++) {
    sem_wait(&empty_sem);
    pthread_mutex_lock(&buf_mutex);
    doInsert(i);
    pthread_mutex_unlock(&buf_mutex);
    sem_post(&full_sem);
    usleep(10000);
  }
  return NULL;
}

void *consumer(void *arg) {
  for (int i = 0; i < 20; i++) {
    sem_wait(&full_sem);
    pthread_mutex_lock(&buf_mutex);
    Item x = doRemove();
    pthread_mutex_unlock(&buf_mutex);
    sem_post(&empty_sem);
    printf("Consumed %d\n", x);
    usleep(15000);
  }
  return NULL;
}

int main(void) {
  sem_init(&empty_sem, 0, N);
  sem_init(&full_sem, 0, 0);
  pthread_t p, c;
  pthread_create(&p, NULL, producer, NULL);
  pthread_create(&c, NULL, consumer, NULL);
  pthread_join(p, NULL);
  pthread_join(c, NULL);
  sem_destroy(&empty_sem);
  sem_destroy(&full_sem);
}
```

### Explaining the buggy version (causes deadlock)
Your slides’ buggy code:

```c
// Empty Buffer: itemsAvailable = 0, spaceAvailable = N
insert(Item i) {
  p(spaceAvailable);
  p(mutex);
  doInsert(i);
  v(mutex);
  v(itemsAvailable);
}

Item remove() {
  p(mutex);
  p(itemsAvailable);
  Item i = doRemove();
  v(mutex);
  v(spaceAvailable);
  return i;
}
```

Problem:
- Consumer calls p(mutex) before checking p(itemsAvailable)
- With an empty buffer (itemsAvailable == 0), consumer:
  - Acquires mutex, then blocks on p(itemsAvailable) while holding the mutex
- Producer:
  - p(spaceAvailable) succeeds (buffer not full)
  - Next needs p(mutex) but mutex is held by the blocked consumer
- Both are blocked → deadlock (circular wait)

Fix:
- Acquire counting semaphore before the mutex in both roles
- Correct consumer order: p(itemsAvailable) then p(mutex)

### Edge cases asked in slides
- If empty = 10, full = 0 (empty buffer):
  - Producer: proceeds (P(empty) succeeds), inserts
  - Consumer: blocks at P(full) until producer posts full
- If empty = 0, full = 10 (full buffer):
  - Producer: blocks at P(empty)
  - Consumer: proceeds (P(full) succeeds), removes, then signals empty

---

## POSIX Thread APIs and Patterns

### pthread_create parameters
Signature:
```c
int pthread_create(pthread_t *tidp,
                   const pthread_attr_t *attr,
                   void *(*start_rtn)(void *),
                   void *restrict arg);
```
- tidp: out-parameter where the new thread ID is stored
- attr: attributes for the new thread (NULL = defaults, e.g., joinable)
  - Useful fields: detachstate (JOINABLE/DETACHED), stack size/addr, scheduling policy
- start_rtn: function the thread runs; must have signature void* f(void*)
- arg: single pointer argument passed to start_rtn

Return: 0 on success; error number on failure

### Join vs detach
- Join:
  - Wait for a joinable thread to terminate
  - Collect return value and reclaim resources
- Detach:
  - pthread_detach(t) or set attr to DETACHED
  - Thread cleans up its own resources; cannot be joined

### Passing command-line style arguments to threads
- Use a struct to bundle parameters; allocate on heap or ensure lifetime if on stack
- Avoid passing pointers to stack variables that may go out of scope before thread starts

---

## Worked C Examples (cleaned and complete)

### 1) condvar watcher (based on your condvar.c snippet)
This is a cleaned, complete example of two incrementers and one watcher that waits for a threshold using a condition variable.

```c
// file: condvar_watcher.c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#define NUM_INC  2
#define TCOUNT   6
#define COUNT_LIMIT 10

static int count = 0;
static pthread_mutex_t count_mutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_cond_t  count_cv    = PTHREAD_COND_INITIALIZER;

void *incrementer(void *arg) {
  long id = (long)arg;
  for (int i = 0; i < TCOUNT; i++) {
    pthread_mutex_lock(&count_mutex);
    count++;
    if (count == COUNT_LIMIT) {
      printf("[inc %ld] count=%d reached threshold, signaling\n", id, count);
      pthread_cond_signal(&count_cv);
    } else {
      printf("[inc %ld] count=%d\n", id, count);
    }
    pthread_mutex_unlock(&count_mutex);
    sleep(1); // allow other threads to run
  }
  return NULL;
}

void *watcher(void *arg) {
  (void)arg;
  pthread_mutex_lock(&count_mutex);
  while (count < COUNT_LIMIT) {
    printf("[watch] waiting, count=%d\n", count);
    pthread_cond_wait(&count_cv, &count_mutex);
  }
  // predicate true while holding the mutex
  printf("[watch] awakened, count=%d; adjusting by -COUNT_LIMIT\n", count);
  count -= COUNT_LIMIT;
  pthread_mutex_unlock(&count_mutex);
  return NULL;
}

int main(void) {
  pthread_t inc[NUM_INC], watch;

  pthread_create(&watch, NULL, watcher, NULL);
  for (long i = 0; i < NUM_INC; i++) {
    pthread_create(&inc[i], NULL, incrementer, (void*)i);
  }

  for (int i = 0; i < NUM_INC; i++) pthread_join(inc[i], NULL);
  pthread_join(watch, NULL);

  pthread_mutex_destroy(&count_mutex);
  pthread_cond_destroy(&count_cv);

  printf("Final count=%d\n", count);
  return 0;
}
```

Key points:
- Wait is in a while-loop to guard against spurious wake-ups or multiple signalers
- Signal happens while holding the mutex; watcher wakes and re-locks the mutex before proceeding

### 2) badcnt.c vs goodcnt.c (race vs mutex)
Note: Your slides referenced these; this reconstruction is based on the classic example.

badcnt.c (no synchronization, shows race):
```c
// file: badcnt.c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

static long long counter = 0;
enum { THREADS = 4, ITERS = 1000000 };

void *inc(void *arg) {
  (void)arg;
  for (int i = 0; i < ITERS; i++) {
    counter++; // data race
  }
  return NULL;
}

int main(void) {
  pthread_t th[THREADS];
  for (int i = 0; i < THREADS; i++) pthread_create(&th[i], NULL, inc, NULL);
  for (int i = 0; i < THREADS; i++) pthread_join(th[i], NULL);
  printf("Expected %d, got %lld (race)\n", THREADS*ITERS, counter);
}
```

goodcnt.c (mutex protects critical section):
```c
// file: goodcnt.c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

static long long counter = 0;
static pthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;
enum { THREADS = 4, ITERS = 1000000 };

void *inc(void *arg) {
  (void)arg;
  for (int i = 0; i < ITERS; i++) {
    pthread_mutex_lock(&m);
    counter++;
    pthread_mutex_unlock(&m);
  }
  return NULL;
}

int main(void) {
  pthread_t th[THREADS];
  for (int i = 0; i < THREADS; i++) pthread_create(&th[i], NULL, inc, NULL);
  for (int i = 0; i < THREADS; i++) pthread_join(th[i], NULL);
  printf("Expected %d, got %lld (correct)\n", THREADS*ITERS, counter);
}
```

### 3) thread_join.c (join vs not join)
Note: Your slides mention this program; this is a typical illustrative version.

```c
// file: thread_join.c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void *worker(void *arg) {
  long id = (long)arg;
  printf("Worker %ld starting\n", id);
  sleep(1 + id);
  printf("Worker %ld done\n", id);
  return (void*)(id * 10);
}

int main(void) {
  pthread_t a, b;
  pthread_create(&a, NULL, worker, (void*)1L);
  pthread_create(&b, NULL, worker, (void*)2L);

  // Comment these lines to see effect without join:
  void *ra = NULL, *rb = NULL;
  pthread_join(a, &ra);
  pthread_join(b, &rb);
  printf("Joined: returns %ld and %ld\n", (long)ra, (long)rb);

  // Without joins:
  // - If main returns immediately, the process may exit before workers finish
  // - To allow them to finish without join, call pthread_exit(NULL):
  // pthread_exit(NULL);

  return 0;
}
```

- With joins: main waits; you get deterministic completion
- Without joins and without pthread_exit: main may exit early, terminating all threads
- Alternative: detach threads if you won’t join them, but ensure process lifetime accommodates completion

### 4) Correct bounded buffer (shown above) and Buggy version explanation
- See “Producer–Consumer” section for full code and reasoning

---

## Sample Exam-Style Questions and Short Answers

- What is a TCB? 
  - Data structure tracking thread ID, context, scheduling state, join/detach status, TLS, signal mask, etc.

- Distinguish single vs multithreading:
  - Single: one thread per process, simpler, no intra-process races
  - Multi: multiple threads share address space; requires synchronization; enables concurrency/parallelism

- Give two examples of multithreading:
  - Thread pool web server; GUI app with background workers

- Main thread states:
  - New, Ready, Running, Blocked/Waiting, Terminated

- If empty = 0; full = 10 (full buffer):
  - Producer blocks at P(empty)
  - Consumer proceeds

- Why the given bounded buffer code deadlocks?
  - Consumer locks mutex before P(itemsAvailable), so it can block holding mutex while producer needs that mutex → circular wait

- Why control concurrency for shared data?
  - To prevent races, lost updates, invariant violations, and inconsistent views of shared state

- Problem with test-and-set; how wait/signal helps?
  - Test-and-set spinlocks busy-wait and are unfair; semaphores allow blocking, reducing CPU waste and enabling fairer scheduling

- Threads use two functions to implement correct IPC:
  - P (wait) and V (signal) on semaphores; combined with a mutex for mutual exclusion

- pthread_create parameters (explain):
  - tidp (out-id), attr (attributes), start_rtn (entry fn), arg (single pointer passed to start_rtn)

- condvar program behavior when threshold is reached:
  - Incrementers signal watcher at COUNT_LIMIT; watcher wakes, adjusts count while holding mutex; program continues until workers finish

---

## Performance Considerations (from slides, with additions)

- Lock granularity:
  - Coarse locks: simpler but lower concurrency
  - Fine-grained: higher concurrency but more overhead and potential deadlocks
- Lock ordering:
  - Define global order and adhere to it; use trylock + backoff for uncommon inversions
- Lock frequency:
  - Reduce lock/unlock calls by batching operations
- Critical sections:
  - Keep short; do all precomputation outside; avoid blocking calls inside
- Additional tips:
  - Prefer per-shard locks (striping)
  - Use read-write locks where read-sharing dominates
  - Consider lock-free structures only with strong justification

---

## Suggested Obsidian structure (split into notes)

- [[Threads (POSIX Basics)]]
  - TCB, states, joinable vs detached, passing args
- [[Synchronization Primitives]]
  - Mutexes, semaphores (P/V), condition variables, test-and-set limits
- [[Producer–Consumer (Bounded Buffer)]]
  - Correct solution, pitfalls (buggy code analysis), edge cases
- [[Deadlocks and Performance]]
  - Coffman conditions, ordering, granularity, frequency, critical sections
- [[POSIX Thread APIs and Patterns]]
  - pthread_create/join/detach/attr; examples; argument passing patterns
- [[Worked C Examples]]
  - condvar_watcher.c
  - badcnt.c / goodcnt.c
  - thread_join.c
  - bounded buffer with semaphores

Cross-link:
- From [[Producer–Consumer (Bounded Buffer)]] to [[Synchronization Primitives]]
- From [[POSIX Thread APIs and Patterns]] to [[Worked C Examples]]
- From [[Deadlocks and Performance]] to both [[Synchronization Primitives]] and [[Producer–Consumer (Bounded Buffer)]]

---

## References (quick links)

- man pthreads (Linux): man 7 pthreads
- man pthread_create, pthread_join, pthread_mutex_lock, pthread_cond_wait, sem_init
- The Open Group Base Specifications (POSIX): pubs.opengroup.org/onlinepubs/9699919799/
- “Pthreads Programming” (Nichols et al.) for deeper patterns and examples

If you want, I can export each section as a separate markdown file with wikilinks ready for Obsidian.