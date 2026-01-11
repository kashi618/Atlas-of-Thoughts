---
tags:
  - OS2
aliases:
---
## What does it do?
It stops and replaces the current process with a new process, whilst keeping the same PID
It does NOT create a new process, only replace the current process with a new one

## Why use it?
It is usually paired with the [[processes - fork()|fork()]] command
Essentially, we have the parent process create a child process using fork(). The child process is currently a copy of the parent process. We then use the exec() function to turn that child process (change identity) into something we want to run, whilst keeping the parent process.

**Example - Linux Command Line (bash)**
In the linux terminal, the bash shell runs as a parent process. When we type a command such as ls, two things happen.

It first calls fork(), creating a child process . In the newly created child process it uses exec() to overwrite its memory (currently a copy of the bash process) and replace it with the code for `ls`. 

It basically changes its identify from a copy of the bash process, into a copy of an ls process.

This is important because if the bash process runs ls on its own, it will terminate after the command finishes executing. The fork() and exec() combo essentially allows you to execute as many commands within a single bash process.

# See Also
[[$ Operating Systems 2]]