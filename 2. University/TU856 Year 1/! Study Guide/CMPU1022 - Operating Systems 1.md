Okay, I need to create a study guide for these four exam questions. Let me start by breaking down each question and figuring out what they're asking. 

Starting with Question 1. Part a is about Linux/Bash commands: grep, cat, rm, du, df. I should explain each command's purpose and common uses. For part b, it's DOS commands: mkdir, copy, cd, ren, del. Similar approach here. Then part c is about using chmod to change file permissions. I need to explain the syntax, maybe with examples of octal and symbolic modes.

Question 2a compares CLI and GUI. I should list pros and cons for each. Part b is the Process Control Block fields. I remember PCB contains process state, PC, registers, scheduling info, memory management, accounting, I/O status. Need to explain each. Part c asks for five reasons a process terminates: normal completion, error, killed by another process, resource unavailability, parent termination.

Question 3a is about CPU scheduling criteria like CPU utilization, throughput, turnaround time, waiting time, response time. Explain each. Part b: advantages of disk partitioning. Maybe isolation, performance, multi-booting, data management, security. Part c is the producer-consumer problem. Explain synchronization issue where producers and consumers share a buffer, needing mutual exclusion and condition variables.

Question 4a is about monolithic kernels. Advantages: performance, tight integration. Disadvantages: complexity, stability issues. Part b: sequential, random, indexed access methods. Sequential is linear, random is direct access, indexed uses an index. Part c: race conditions when processes access shared data without synchronization, leading to inconsistent states. Prevention via mutexes, semaphores, etc.

I need to make sure each part is covered thoroughly. For the study guide, organize each question with core concepts, explanations, and answer strategies. Include examples where necessary, like chmod commands and scheduling algorithms. Also, highlight key terms and ensure explanations are clear. Maybe add tips on how to structure answers, especially for longer questions like advantages/disadvantages or discussions.

### Study Guide for CMPU 1022 Operating Systems 1 Exam  
**Exam Structure**: 4 questions (25 marks each). Answer all.  

---

### Question 1: Linux/DOS Commands & File Permissions  
#### Core Concepts:  
1. **Linux/Bash Commands**:  
   - **`grep`**: Searches text patterns in files (e.g., `grep "error" log.txt`).  
   - **`cat`**: Concatenates/displays file content (e.g., `cat file1.txt`).  
   - **`rm`**: Deletes files/directories (e.g., `rm -r folder`).  
   - **`du`**: Shows disk usage of files/directories (e.g., `du -sh /home`).  
   - **`df`**: Displays free disk space on filesystems (e.g., `df -h`).  

2. **DOS Commands**:  
   - **`mkdir`**: Creates a directory (e.g., `mkdir new_folder`).  
   - **`copy`**: Copies files (e.g., `copy file1.txt file2.txt`).  
   - **`cd`**: Changes directory (e.g., `cd C:\Users`).  
   - **`ren`**: Renames files (e.g., `ren old.txt new.txt`).  
   - **`del`**: Deletes files (e.g., `del file.txt`).  

3. **File Permissions (`chmod`)**:
   - **Symbolic Mode**: `chmod u+x file` (adds execute permission to the user).  
   - **Octal Mode**: `chmod 755 file` (user: read/write/execute, group/others: read/execute).  
   - Permissions: `r=4`, `w=2`, `x=1`.  

#### **Answer Strategy**:  
- For **1a/1b**, define each command concisely with an example.  
- For **1c**, explain both symbolic and octal modes. Use examples to show how permissions change.  

---

### Question 2: CLI vs. GUI, PCB, Process Termination  
#### Core Concepts:  
1. **CLI vs. GUI**:  
   - **CLI Advantages**: Faster for experts, scriptable, low resource usage.  
   - **CLI Disadvantages**: Steep learning curve, less intuitive.  
   - **GUI Advantages**: User-friendly, visual feedback.  
   - **GUI Disadvantages**: Resource-heavy, limited automation.  

2. **Process Control Block (PCB)**:  
   - **Fields**: Process ID, State (running/waiting), Program Counter, CPU Registers, Scheduling Info (priority), Memory Limits, I/O Status.  

3. **Process Termination Reasons**:  
   - Completion, error/fault, killed by OS/user, resource unavailability, parent termination.  

#### Answer Strategy:  
- For **2a**, structure as a table comparing CLI/GUI pros/cons.  
- For **2b**, list PCB fields with brief explanations (e.g., "Program Counter: Tracks the next instruction").  
- For **2c**, list 5 reasons with 1-sentence explanations.  

---

### Question 3: CPU Scheduling, Disk Partitioning, Producer-Consumer  
#### Core Concepts:  
1. **CPU Scheduling Criteria**:  
   - **Optimization Goals**: Maximize CPU utilization, throughput; minimize turnaround time, waiting time, response time.  

2. **Disk Partitioning Advantages**:  
   - Isolate OS/user data, improve performance (smaller filesystems), multi-booting, easier backups, enhanced security.  

3. **Producer-Consumer Problem**:  
   - Synchronization issue where producers add data to a buffer and consumers remove it. Requires mutual exclusion and condition variables to avoid overflow/underflow.  

#### Answer Strategy:  
- For **3a**, explain each criterion (e.g., "Throughput: Number of processes completed per unit time").  
- For **3b**, list partitioning benefits with examples (e.g., "Multi-booting: Run Linux and Windows on separate partitions").  
- For **3c**, define the problem and mention synchronization tools (semaphores).  

---

### Question 4: Monolithic Kernels, File Access, Race Conditions  
#### Core Concepts:  
1. **Monolithic Kernel**:  
   - OS where kernel provides all services (e.g., Linux).  
   - **Advantages**: Fast communication, tight integration.  
   - **Disadvantages**: Complex code, crashes affect entire system.  

2. **File Access Methods**:  
   - **Sequential**: Read/write in order (e.g., tape drives).  
   - **Random**: Direct access via offsets (e.g., databases).  
   - **Indexed**: Uses index blocks for quick lookups (e.g., file headers).  

3. **Race Conditions**:  
   - Occur when multiple processes access shared data concurrently, leading to inconsistent results. Prevent using locks/mutexes.  

#### Answer Strategy:  
- For **4a**, contrast monolithic kernels with microkernels.  
- For **4b**, describe each access method with real-world examples.  
- For **4c**, explain race conditions using an example (e.g., bank account withdrawal) and prevention methods.  

---

### General Tips:  
1. **Structure Answers**: Use bullet points for multi-part questions (e.g., "Five reasons...").  
2. **Examples**: Always include brief examples (e.g., `chmod 755 script.sh`).  
3. **Keywords**: Highlight terms like "mutual exclusion", "throughput", "process state".  
4. **Diagrams**: Sketch figures for processes (PCB) or scheduling algorithms if time permits.  

**Study Focus**: Prioritize command syntax, PCB fields, scheduling criteria, and synchronization problems. Practice writing concise explanations with examples.  

Good luck! 🚀