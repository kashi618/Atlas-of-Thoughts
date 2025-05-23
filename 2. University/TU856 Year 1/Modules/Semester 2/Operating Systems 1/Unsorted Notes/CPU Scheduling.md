## How to find CPU burst cycle
- Predict the future
- It uses heuristics, by keeping audits, logs, and information about many processes, to predict the burst cycle.

## CPU I/O Burst cycle
**CPU burst**
Time interval for when a processes only uses the cpu
**I/Burst**
Time interval for when a process only uses the I/O

## Types of Scheduling
**Non pre-emptive**
This is when a processes runs to completion, with no interruption. It runs with no disturbances. 
(very rare in modern operating systems)

**Pre-emptive Scheduling**
A process may be temporarily halted in order for another process to run. How and when it gets temporarily halted depends on the cpu algorithm [link]
The halted process goes to a ready state
- A processes is only assigned to the cpu for a certain time period. After, it is sent back to the queue

## CPU Dispatcher
Takes whatever process the cpu scheduler chooses to runs on the cpu, and actually runs it on the cpu
It gives control of the cpu to a processes chosen by the cpu scheduler

### Dispatch Latency
The time it takes to stop a process and run another process

## Scheduling criteria
Factors that affect the choice of scheduling

**CPU Utilization**
Keep the CPU as busy asa possible

We want to maximise this

**Throughput**
The number of processe that can be completed per unit time
(how many processes can be completed for a time period)
- Used in networking. How many packets of data can i send between point A and point B?

We want to maximise this

**Turnaround time**
The total time elapsed from the moment a process is created and terminated
- Sum of time spent waiting, executing, and doing I/O

We want to minimise this

**Waiting Time**
The sum of the time spent in the ready queue

We want to minimise this

**Response Time**
Total time elapsed from the moment the process is created, and when it is first run

We want to minimise this

## CPU Scheduling Algorithms
**First Come, First Served**
- Simplest CPU scheduling policy
- The first process to arrive is given the CPU
- Example of a Non-pre-emptive scheduler

Has a major flow, as the efficiency is affected by its order

- Convoy effect
Short processes behind long processes. Causes a long delay for the short processes, as they have to wait for the long processes to finish

**Shortest Job First (SJF) Scheduling**
- Mathematically proven to schedule the most proccesses at a time
- Gives the minimum average waiting time for a given set of processes
- Time is set based on the expected runningg time
- It is an optimal/idealistic approach
- Non preemptive

Cons
- Assumes all processes have the same priority
- We don't know the length of the next cpu guess, so guesswork is involved

**Shortest remaining job first (SRJF)**
- Same as SJF, we run the lowest cpu burst process first
- However, at any moment at a time, if a new process arrives, and has a burst length LESS than the remaining time of a current executing process, then we pre-empt the current process to run the faster one

**Round Robin**
Evenly splits the available time to each process
- Each process gets the same time of cpu time, called a time quantum
- Usually around 1-100 miliseconds

- After this time elapses, the process is preempted, and added to the end of the queue
![[Pasted image 20250312092722.png]]
- May have a higher or worse turnaround as compared to SJF, however, it has better response time

- Round robin ensures faireness in relation to all processes
- However, in an operating system, some processes may have a needd to run more effivciently than others
	- For example, processes that perform critical OS functions
- It also gives rise to process priorities
	- A scale from 1-5, 1 being the highest priority
- 
## Process Starvation
When a low priority process does not get any time to run on the CPU, because processes with higher priority are always run, spending up available time given to lower priority processes

## Process Aging
This is used to make sure all propcesses get a change to run on the [[CPU]]
It increases process priority, if it has not been run for a certain amount of time
## Heuristic

Algorithm that work on incomplete information. When its running, it may need to guess