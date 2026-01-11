---
tags:
  - OS2
aliases:
---
## What does it do?
It stops and replaces the current process with a new process, whilst keeping the same PID
It does NOT create a new process, only replace the current process with a new one

## Why use it?
It is usually paired with the [[Processes - fork()|fork()]] command
Essentially, we have the parent process create a child process using fork(). The child process is currently a copy of the parent process. We then use the exec() function to turn that child process (change identity) into something we want to run, whilst keeping the parent process.

**Example - Linux Command Line (bash)**
In the linux terminal, the bash shell runs as a parent process. When we type a command such as ls, two things happen.

It first calls fork(), creating a child process identical to the bash process. The child process then uses exec() to overwrite its memory (currently a copy of the bash process) and replace it with the code for `ls`, letting the child process execute the command.

It basically changes its identify from a copy of the bash process, into a copy of an ls process.

This is important because if the bash process runs ls on its own, it will terminate after the command finishes executing. The fork() and exec() combo essentially allows you to execute as many commands within a single bash process.

## Using exec()
exec() is not actually a command in C. It instead refers to the family of functions that replaces a process with a new process

### execvp()
This variant is used to run a command by name (like calling a command in the bash shell)
It stands for:
- "execute vector path"
- "execute (CLI arguments to be passed) (name of command in path)"

**Function Signature**
`int execvp(char *prog, char **argv)`

`char *prog`
- Takes in pointer to string containing name of executable
- It tells the OS what program you are going to run]
- Short for "program"

`char **argv`
- Takes in a pointer to an array of strings
- The array of strings MUST have an element of `NULL` to signal the end of the string
- This represents the CLI arguments you want to pass into the program
- Short for "vector"

**NOTE:** For args, you will need to create a variable to store the string of arrays. You cannot put it in the function.

```c
char *prog = "cp";
char *args[] = {"cp", "file1.c", "file2.c", NULL};

execvp(prog, args);
```

```c
char *args[] = {"cp", "file1.c", "file2.c", NULL};

execvp("cp", args)
```
**Return Values**

# See Also
[[$ Operating Systems 2]]
[[Processes]]
[[$ C - Programming Language]]